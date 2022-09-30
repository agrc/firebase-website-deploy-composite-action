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

    steps:
      - name: 🚀 Deploy
        uses: agrc/firebase-website-deploy-composite-action@v1
        with:
          identity-provider: ${{ secrets.IDENTITY_PROVIDER }}
          service-account-email: ${{ secrets.SERVICE_ACCOUNT_EMAIL }}
          project-id: ${{ secrets.PROJECT_ID }}
          build-command: npm run build -- --mode dev
          preview: yes
          repo-token: ${{ secrets.GITHUB_TOKEN }}
```
