# firebase-website-deploy-composite-action

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
    environment:
      name: prod
      url: https://atlas.utah.gov
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
        env:
          VITE_DISCOVER: ${{ secrets.VITE_DISCOVER }}
          VITE_WEB_API: ${{ secrets.VITE_WEB_API }}
          VITE_PRINT_PROXY: ${{ secrets.VITE_PRINT_PROXY }}
```
