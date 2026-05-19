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
```

## PNPM workspaces

For PNPM projects, install `firebase-tools` in the workspace that runs this action, usually the workspace root:

```sh
pnpm add -D -w firebase-tools
```

The action uses `pnpm exec firebase` instead of `pnpm dlx firebase-tools` so Firebase CLI execution stays inside your workspace and honors your `pnpm-workspace.yaml` build approvals, such as `allowBuilds` or older `onlyBuiltDependencies` settings.
