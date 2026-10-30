#!/usr/bin/env bash
set -euo pipefail

if [[ ! "$PROJECT_ID" =~ ^[a-z][a-z0-9-]{4,28}[a-z0-9]$ ]]; then
  echo "::error::project-id must be a valid Google Cloud project ID to load Secret Manager secrets."
  exit 1
fi

secrets=""
environment_names=""
environment_count=0
while IFS= read -r mapping || [[ -n "$mapping" ]]; do
  mapping="${mapping#"${mapping%%[![:space:]]*}"}"
  mapping="${mapping%"${mapping##*[![:space:]]}"}"
  [[ -z "$mapping" ]] && continue

  if [[ ! "$mapping" =~ ^([A-Za-z_][A-Za-z0-9_]*)=([A-Za-z0-9_-]+)$ ]]; then
    echo "::error::Invalid Google Secret Manager mapping. Use ENV_VAR=SECRET_NAME on each line."
    exit 1
  fi

  environment_name="${BASH_REMATCH[1]}"
  secret_name="${BASH_REMATCH[2]}"

  case "$environment_name" in
    GITHUB_*|RUNNER_*)
      echo "::error::The environment variable '$environment_name' cannot be set by this action."
      exit 1
      ;;
  esac

  case $'\n'"$environment_names" in
    *$'\n'"$environment_name"$'\n'*)
      echo "::error::Google Secret Manager environment variable mappings must be unique."
      exit 1
      ;;
  esac

  environment_names+="${environment_name}"$'\n'
  environment_count=$((environment_count + 1))
  secrets+="${environment_name}:${PROJECT_ID}/${secret_name}"$'\n'
done <<< "$SECRET_MAPPINGS"

if [[ "$environment_count" -eq 0 ]]; then
  echo "::error::google-secrets-env-vars must contain at least one ENV_VAR=SECRET_NAME mapping."
  exit 1
fi

environment_names_json="$(printf '%s' "$environment_names" | jq -R -s 'split("\n") | map(select(length > 0))')"
delimiter="$(openssl rand -hex 16)"
{
  printf 'secrets<<%s\n' "$delimiter"
  printf '%s' "$secrets"
  printf '%s\n' "$delimiter"
  printf 'environment-names<<%s\n' "$delimiter"
  printf '%s\n' "$environment_names_json"
  printf '%s\n' "$delimiter"
} >> "$GITHUB_OUTPUT"
