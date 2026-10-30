#!/usr/bin/env bash
set -euo pipefail

secret_environment="$(jq -cn \
  --argjson outputs "$SECRET_OUTPUTS" \
  --argjson names "$ENVIRONMENT_NAMES" \
  'reduce $names[] as $name ({}; if ($outputs | has($name)) then . + {($name): $outputs[$name]} else error("Missing output for environment variable " + $name) end)')"
delimiter="$(openssl rand -hex 16)"
{
  printf 'environment<<%s\n' "$delimiter"
  printf '%s\n' "$secret_environment"
  printf '%s\n' "$delimiter"
} >> "$GITHUB_OUTPUT"
