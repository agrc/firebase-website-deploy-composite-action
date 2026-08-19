# firebase-website-deploy-composite-action

[![Push Events](https://github.com/agrc/firebase-website-deploy-composite-action/actions/workflows/push.yml/badge.svg)](https://github.com/agrc/firebase-website-deploy-composite-action/actions/workflows/push.yml)

A GitHub Action that builds and deploys a website to Firebase hosting

## Usage

```yml
name: Push Events

on:
  push:
    branches:
      - dev
      - main

  deploy-prod:
    name: Deploy to production
    needs: release-please
    if: github.ref_name == 'main' && needs.release-please.outputs.release_created
    runs-on: ubuntu-latest
    permissions:
      id-token: write

    steps:
      - name: ⬇️ Set up code
        uses: actions/checkout@v6
        with:
          show-progress: false

      - name: 🚀 Deploy
        uses: agrc/firebase-website-deploy-composite-action@v2
        with:
          identity-provider: ${{ secrets.IDENTITY_PROVIDER }}
          service-account-email: ${{ secrets.SERVICE_ACCOUNT_EMAIL }}
          project-id: ${{ secrets.PROJECT_ID }}
          build-command: npm run build -- --mode dev
          preview: yes
          repo-token: ${{ secrets.GITHUB_TOKEN }}
          service-now-instance: ${{ secrets.SN_INSTANCE }}
          service-now-table: ${{ secrets.SN_TABLE }}
          service-now-system-id: ${{ secrets.SN_SYS_ID }}
          service-now-username: ${{ secrets.SN_USERNAME }}
          service-now-password: ${{ secrets.SN_PASSWORD }}
          # Optional: Configure Firebase Functions Artifact Registry policy cleanup (defaults to on/true if functions are detected in firebase.json)
          # function-policy-setup: false
          # function-locations: us-central1
          # function-policy-days: 90
```

## Firebase Functions Artifact Registry Policy Cleanup

When deploying Firebase Functions, Google Cloud Artifact Registry can accumulate build artifacts, resulting in high storage costs or deployment issues. This action automatically detects if Firebase Functions are configured in `firebase.json` and configures a lifecycle cleanup policy on the repository (enabled by default / opt-out).

To customize or opt out, configure the following inputs:

- `function-policy-setup`: Set to `false` to opt out of auto-setting the policy (default: `true`). When enabled, this action automatically inspects `firebase.json` for a `functions` configuration block and applies the policy.
- `function-locations`: One or more locations/regions of the Artifact Registry, comma- or space-separated (e.g., `'us-central1'` or `'us-central1, us-west3'`). Defaults to `us-central1`.
- `function-policy-days`: The number of retention days for keeping artifacts in the registry. Defaults to `90`.

## PNPM workspaces

For PNPM projects, install `firebase-tools` in the workspace that runs this action, usually the workspace root:

```sh
pnpm add -D -w firebase-tools
```

The action uses `pnpm exec firebase` instead of `pnpm dlx firebase-tools` so Firebase CLI execution stays inside your workspace and honors your `pnpm-workspace.yaml` build approvals, such as `allowBuilds` or older `onlyBuiltDependencies` settings.
