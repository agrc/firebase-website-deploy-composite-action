const assert = require('node:assert/strict');
const { spawnSync } = require('node:child_process');
const { mkdtempSync, readFileSync, rmSync, writeFileSync } = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { test } = require('node:test');

const repositoryRoot = path.resolve(__dirname, '..');
const prepareScript = path.join(repositoryRoot, 'scripts/prepare-google-secret-manager.sh');
const createEnvironmentScript = path.join(repositoryRoot, 'scripts/create-google-secret-manager-env.sh');

function runScript(scriptPath, scriptEnvironment) {
  const temporaryDirectory = mkdtempSync(path.join(os.tmpdir(), 'google-secrets-env-vars-'));
  const outputPath = path.join(temporaryDirectory, 'github-output');
  writeFileSync(outputPath, '');

  const result = spawnSync('bash', [scriptPath], {
    env: {
      ...process.env,
      GITHUB_OUTPUT: outputPath,
      ...scriptEnvironment,
    },
    encoding: 'utf8',
  });

  const githubOutput = readFileSync(outputPath, 'utf8');
  rmSync(temporaryDirectory, { recursive: true, force: true });

  return { ...result, githubOutput };
}

function parseGithubOutputs(content) {
  const lines = content.split(/\r?\n/);
  const outputs = {};

  for (let index = 0; index < lines.length; ) {
    if (index === lines.length - 1 && lines[index] === '') {
      break;
    }

    const match = lines[index].match(/^([A-Za-z][A-Za-z0-9_-]*)<<(.+)$/);
    assert.ok(match, `Invalid GitHub output declaration: ${lines[index]}`);
    const [, name, delimiter] = match;
    index += 1;

    const value = [];
    while (index < lines.length && lines[index] !== delimiter) {
      value.push(lines[index]);
      index += 1;
    }

    assert.ok(index < lines.length, `Missing delimiter for GitHub output: ${name}`);
    outputs[name] = value.join('\n');
    index += 1;
  }

  return outputs;
}

test('converts mappings to Secret Manager references and output names', () => {
  const result = runScript(prepareScript, {
    PROJECT_ID: 'my-project',
    SECRET_MAPPINGS: '  VITE_DISCOVER=DISCOVER  \nVITE_WEB_API=VITE_WEB_API\n',
  });

  assert.equal(result.status, 0, result.stderr);
  const outputs = parseGithubOutputs(result.githubOutput);
  assert.equal(
    outputs.secrets,
    'VITE_DISCOVER:my-project/DISCOVER\nVITE_WEB_API:my-project/VITE_WEB_API',
  );
  assert.deepEqual(JSON.parse(outputs['environment-names']), ['VITE_DISCOVER', 'VITE_WEB_API']);
});

test('rejects invalid, duplicate, reserved, empty, and invalid-project mappings', async (t) => {
  const invalidCases = [
    ['invalid mapping syntax', 'not-a-mapping', 'Use ENV_VAR=SECRET_NAME'],
    ['duplicate environment names', 'TOKEN=FIRST\nTOKEN=SECOND', 'must be unique'],
    ['reserved environment names', 'GITHUB_TOKEN=TOKEN', 'cannot be set'],
    ['empty mappings', '  \n  ', 'must contain at least one'],
  ];

  for (const [name, mappings, errorMessage] of invalidCases) {
    await t.test(name, () => {
      const result = runScript(prepareScript, {
        PROJECT_ID: 'my-project',
        SECRET_MAPPINGS: mappings,
      });

      assert.notEqual(result.status, 0);
      assert.match(result.stdout, new RegExp(errorMessage));
    });
  }

  const invalidProject = runScript(prepareScript, {
    PROJECT_ID: 'invalid/project',
    SECRET_MAPPINGS: 'TOKEN=TOKEN',
  });
  assert.notEqual(invalidProject.status, 0);
  assert.match(invalidProject.stdout, /valid Google Cloud project ID/);
});

test('preserves multiline secret values in the generated environment', () => {
  const secretOutputs = {
    VITE_DISCOVER: 'plain secret',
    VITE_WEB_API: 'line one\nline two\n',
  };
  const result = runScript(createEnvironmentScript, {
    SECRET_OUTPUTS: JSON.stringify(secretOutputs),
    ENVIRONMENT_NAMES: JSON.stringify(Object.keys(secretOutputs)),
  });

  assert.equal(result.status, 0, result.stderr);
  assert.deepEqual(JSON.parse(parseGithubOutputs(result.githubOutput).environment), secretOutputs);
});

test('fails if the fetched action outputs are missing a requested secret', () => {
  const result = runScript(createEnvironmentScript, {
    SECRET_OUTPUTS: JSON.stringify({ TOKEN: 'available' }),
    ENVIRONMENT_NAMES: JSON.stringify(['MISSING']),
  });

  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /Missing output for environment variable MISSING/);
});
