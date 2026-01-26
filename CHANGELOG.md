# Changelog

## [v2.0.0-rc.1](https://github.com/agrc/firebase-website-deploy-composite-action/compare/v1.7.4...v2.0.0-rc.1) (2026-01-26)


### ⚠ BREAKING CHANGES

* the actions/checkout step has been removed from this action to allow for more flexibility between checkout and this action running. Migration instructions: Add checkout to the parent workflow before executing this step.

### Features

* remove checkout from action ([76f1a57](https://github.com/agrc/firebase-website-deploy-composite-action/commit/76f1a57a90358549fc931c2a33e251f7c6e474cc))


### Documentation

* update example to include checkout ([e21986f](https://github.com/agrc/firebase-website-deploy-composite-action/commit/e21986f3e3bc7e603154e1a2f57f3f935de26d0a))

## [1.7.4](https://github.com/agrc/firebase-website-deploy-composite-action/compare/v1.7.3...v1.7.4) (2025-12-01)


### Dependencies

* bump actions/checkout from 5 to 6 in the ci-dependencies group ([749d207](https://github.com/agrc/firebase-website-deploy-composite-action/commit/749d207d4543a00fcb625538cdc390211dbfc4b6))

## [1.7.3](https://github.com/agrc/firebase-website-deploy-composite-action/compare/v1.7.2...v1.7.3) (2025-11-05)


### Features

* allow node-version to be overwritten with a variable ([cbd5922](https://github.com/agrc/firebase-website-deploy-composite-action/commit/cbd592264397209ec206d02a45a1c7884f46b7a9))


### Dependencies

* bump the ci-dependencies group across 1 directory with 5 updates ([#94](https://github.com/agrc/firebase-website-deploy-composite-action/issues/94)) ([101cc72](https://github.com/agrc/firebase-website-deploy-composite-action/commit/101cc72dae229070bcb77012f01759cab6d286c8))

## [1.7.2](https://github.com/agrc/firebase-website-deploy-composite-action/compare/v1.7.1...v1.7.2) (2025-06-18)


### Bug Fixes

* use pnpm dlx or npx depending on package manager ([76bca5a](https://github.com/agrc/firebase-website-deploy-composite-action/commit/76bca5ad9617775317a020ced390ba7265119243))

## [1.7.1](https://github.com/agrc/firebase-website-deploy-composite-action/compare/v1.7.0...v1.7.1) (2025-04-02)


### Bug Fixes

* switch to latest version of PNPM ([bf3c783](https://github.com/agrc/firebase-website-deploy-composite-action/commit/bf3c783561b8e5a38206e208ed65e426ea0751bd))

## [1.7.0](https://github.com/agrc/firebase-website-deploy-composite-action/compare/v1.6.1...v1.7.0) (2025-02-03)


### Features

* add `working-directory` optional input ([697b88b](https://github.com/agrc/firebase-website-deploy-composite-action/commit/697b88b1510b7b6ea5d662aab1417b17d2e7197e))


### Dependencies

* bump pnpm ([eedffd6](https://github.com/agrc/firebase-website-deploy-composite-action/commit/eedffd6e2bcbea930abbb26d960c460faf525d1f))

## [1.6.1](https://github.com/agrc/firebase-website-deploy-composite-action/compare/v1.6.0...v1.6.1) (2024-12-17)


### Bug Fixes

* make --if-present flag work for both packages managers ([c976aab](https://github.com/agrc/firebase-website-deploy-composite-action/commit/c976aab2969e9c4fddaca13940904e71e81ee521))

## [1.6.0](https://github.com/agrc/firebase-website-deploy-composite-action/compare/v1.5.4...v1.6.0) (2024-12-16)


### Features

* add support for pnpm ([06fefaf](https://github.com/agrc/firebase-website-deploy-composite-action/commit/06fefafe8bc4e337e25699ae57f1bfb804ef359f))

## [1.5.4](https://github.com/agrc/firebase-website-deploy-composite-action/compare/v1.5.3...v1.5.4) (2024-10-31)


### Documentation

* make it clear that you can pass a project id or alias ([203a2b0](https://github.com/agrc/firebase-website-deploy-composite-action/commit/203a2b022062c2c16750aa8c93818a36655e983b))

## [1.5.3](https://github.com/agrc/firebase-website-deploy-composite-action/compare/v1.5.2...v1.5.3) (2024-09-30)


### Bug Fixes

* remove dev check preview ([edbbf70](https://github.com/agrc/firebase-website-deploy-composite-action/commit/edbbf702c8e36bf36632efd7565db470989c8970))


### Documentation

* add required permissions to example ([#65](https://github.com/agrc/firebase-website-deploy-composite-action/issues/65)) ([c473b7f](https://github.com/agrc/firebase-website-deploy-composite-action/commit/c473b7f5d826677a774b43d98bcd5361c3b33dfd))

## [1.5.2](https://github.com/agrc/firebase-website-deploy-composite-action/compare/v1.5.1...v1.5.2) (2024-07-15)


### Bug Fixes

* use correct commit message prefix for dbot action updates ([ef06394](https://github.com/agrc/firebase-website-deploy-composite-action/commit/ef06394385c70288884c2a82581309d8bce12f57))

## [1.5.1](https://github.com/agrc/firebase-website-deploy-composite-action/compare/v1.5.0...v1.5.1) (2023-05-10)


### 🐛 Bug Fixes

* auth before build commands ([4e7b9b0](https://github.com/agrc/firebase-website-deploy-composite-action/commit/4e7b9b0852ba9ce1dcbacdc4e5eb7252badf7c4d))

## [1.5.0](https://github.com/agrc/firebase-website-deploy-composite-action/compare/v1.4.0...v1.5.0) (2022-12-13)


### 🚀 Features

* handle multiple firebase hosting targets ([0d732b8](https://github.com/agrc/firebase-website-deploy-composite-action/commit/0d732b8a1a1321a8df8028f7817f766b1f2f47ba)), closes [#48](https://github.com/agrc/firebase-website-deploy-composite-action/issues/48)

## [1.4.0](https://github.com/agrc/firebase-website-deploy-composite-action/compare/v1.3.3...v1.4.0) (2022-12-01)


### 🐛 Bug Fixes

* switch to new output definition method ([8c8a9c9](https://github.com/agrc/firebase-website-deploy-composite-action/commit/8c8a9c90e758f597b137bd5e07c37233fc0ce7c3))


### 🚀 Features

* deploy all available firebase services ([e4c48c2](https://github.com/agrc/firebase-website-deploy-composite-action/commit/e4c48c2364880fe47a3e8d436accfaae269d3b6f))

## [1.3.3](https://github.com/agrc/firebase-website-deploy-composite-action/compare/v1.3.2...v1.3.3) (2022-11-03)


### 📖 Documentation Improvements

* repo-token is required for service now stuff as well ([49ce0bd](https://github.com/agrc/firebase-website-deploy-composite-action/commit/49ce0bd58866241a2c74816f876196e7db1fc32c))

## [1.3.2](https://github.com/agrc/firebase-website-deploy-composite-action/compare/v1.3.1...v1.3.2) (2022-10-24)


### 🐛 Bug Fixes

* increase preview expiration to 14 days ([8960273](https://github.com/agrc/firebase-website-deploy-composite-action/commit/89602735113df47e62e37e9465d6807e5ba9f18a)), closes [#37](https://github.com/agrc/firebase-website-deploy-composite-action/issues/37)

## [1.3.1](https://github.com/agrc/firebase-website-deploy-composite-action/compare/v1.3.0...v1.3.1) (2022-10-07)


### 🐛 Bug Fixes

* indentation ([81e1ebf](https://github.com/agrc/firebase-website-deploy-composite-action/commit/81e1ebf5abd72fba63e8d5b5d5bf546451462cd9))

## [1.3.0](https://github.com/agrc/firebase-website-deploy-composite-action/compare/v1.2.2...v1.3.0) (2022-10-06)


### 🚀 Features

* cache bower dependencies ([fb79a7e](https://github.com/agrc/firebase-website-deploy-composite-action/commit/fb79a7ea17984ea3d208c9877c9c3e6c1e6c4567))

## [1.2.2](https://github.com/agrc/firebase-website-deploy-composite-action/compare/v1.2.1...v1.2.2) (2022-10-06)


### 🐛 Bug Fixes

* remove if statement and let jq fail if there is an error ([a097281](https://github.com/agrc/firebase-website-deploy-composite-action/commit/a097281852c1074daf26fb02b61576b221a5a28f))

## [1.2.1](https://github.com/agrc/firebase-website-deploy-composite-action/compare/v1.2.0...v1.2.1) (2022-10-06)


### 🐛 Bug Fixes

* enable tty ([9c36c74](https://github.com/agrc/firebase-website-deploy-composite-action/commit/9c36c745bd29e204bbbbf4db70fbb8ea69c8cfce))

## [1.2.0](https://github.com/agrc/firebase-website-deploy-composite-action/compare/v1.1.1...v1.2.0) (2022-10-06)


### 🚀 Features

* show output for deploy preview command ([cd92fb3](https://github.com/agrc/firebase-website-deploy-composite-action/commit/cd92fb3e262f3efedb0dd9ff603f4e14786f3e05))

## [1.1.1](https://github.com/agrc/firebase-website-deploy-composite-action/compare/v1.1.0...v1.1.1) (2022-10-05)


### 🐛 Bug Fixes

* remove extra "=" character ([bc2547d](https://github.com/agrc/firebase-website-deploy-composite-action/commit/bc2547d767553bb5bd4b5cb44a6c3921def97dba))

## [1.1.0](https://github.com/agrc/firebase-website-deploy-composite-action/compare/v1.0.5...v1.1.0) (2022-10-05)


### 🚀 Features

* skip preview deploy if the PR originates from dev ([792a993](https://github.com/agrc/firebase-website-deploy-composite-action/commit/792a993b638b0f5d190ea82375c9ae995cafd658))


### 🐛 Bug Fixes

* deploy-preview -> create-preview ([ffda5cf](https://github.com/agrc/firebase-website-deploy-composite-action/commit/ffda5cf246c27f55d4e4af66d22f945d376a6f41))

## [1.0.5](https://github.com/agrc/firebase-website-deploy-composite-action/compare/v1.0.4...v1.0.5) (2022-10-03)


### 📖 Documentation Improvements

* add service now parameters ([44a764d](https://github.com/agrc/firebase-website-deploy-composite-action/commit/44a764db78d19469b56b1da0121dd09bce1c2ead))
* add status badge ([90e149a](https://github.com/agrc/firebase-website-deploy-composite-action/commit/90e149ad6a7490b65c8b6e9a004ff4eed4a9acd5))

## [1.0.5-0](https://github.com/agrc/firebase-website-deploy-composite-action/compare/v1.0.4...v1.0.5-0) (2022-10-03)


### 📖 Documentation Improvements

* add service now parameters ([c68500d](https://github.com/agrc/firebase-website-deploy-composite-action/commit/c68500d70983d9fa94224fe74fc43d0a5beef326))
* add status badge ([90e149a](https://github.com/agrc/firebase-website-deploy-composite-action/commit/90e149ad6a7490b65c8b6e9a004ff4eed4a9acd5))

## [1.0.4](https://github.com/agrc/firebase-website-deploy-composite-action/compare/v1.0.3...v1.0.4) (2022-09-30)


### 🐛 Bug Fixes

* strip quotes from preview url ([d990496](https://github.com/agrc/firebase-website-deploy-composite-action/commit/d9904960288d35bac8a663dcd4ebd4fd177681f1))

## [1.0.3](https://github.com/agrc/firebase-website-deploy-composite-action/compare/v1.0.2...v1.0.3) (2022-09-30)


### 🐛 Bug Fixes

* add repo-token input ([e871f0a](https://github.com/agrc/firebase-website-deploy-composite-action/commit/e871f0a026e048541e2207d85ee813a2accf0753))

## [1.0.2](https://github.com/agrc/firebase-website-deploy-composite-action/compare/v1.0.1...v1.0.2) (2022-09-30)


### 🐛 Bug Fixes

* inline comment markdown template ([9ede5ce](https://github.com/agrc/firebase-website-deploy-composite-action/commit/9ede5ce4c2af2f5749a50a4681f98f33fe7b1f3c))

## [1.0.1](https://github.com/agrc/firebase-website-deploy-composite-action/compare/v1.0.0...v1.0.1) (2022-09-30)


### 🐛 Bug Fixes

* path to template file ([7228101](https://github.com/agrc/firebase-website-deploy-composite-action/commit/7228101156a687c925392bc04eac138cc6b5f19c))

## 1.0.0 (2022-09-30)


### 🐛 Bug Fixes

* point at external release action ([a3b6f7d](https://github.com/agrc/firebase-website-deploy-composite-action/commit/a3b6f7d364e613044bab79da9019e2651f46e9e2))
* remove mode and expand build input ([15033db](https://github.com/agrc/firebase-website-deploy-composite-action/commit/15033dba835d89df8dc259b236cd949e23112689))


### 🚀 Features

* add build-command input ([995fe23](https://github.com/agrc/firebase-website-deploy-composite-action/commit/995fe2361e552bb086ee8944294f2c216aa50d1d))
* add checkout step ([1e9bbbb](https://github.com/agrc/firebase-website-deploy-composite-action/commit/1e9bbbbb306394294c94c3ad2431b5d68da105cd))
* add prebuild-command input ([420dde2](https://github.com/agrc/firebase-website-deploy-composite-action/commit/420dde23597877ead0a502a30e764f17aca97189))
* add release action ([72606bf](https://github.com/agrc/firebase-website-deploy-composite-action/commit/72606bf57289ac1699b55cba70ea00184e1106e4))


### 📖 Documentation Improvements

* add usage example ([1fe5d26](https://github.com/agrc/firebase-website-deploy-composite-action/commit/1fe5d26eccade6d024706e8998f137e5708eec44))
* simplify and trigger the action ([60c4447](https://github.com/agrc/firebase-website-deploy-composite-action/commit/60c44472cf7695b428e50b838761cce0817ec23a))
* update usage example ([8625bb6](https://github.com/agrc/firebase-website-deploy-composite-action/commit/8625bb615133accb02794f8f3ce17a66c2c91b47))
