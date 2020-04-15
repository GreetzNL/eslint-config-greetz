# eslint-config-greetz
[![Build Status](https://github.com/GreetzNL/eslint-config-greetz/workflows/Build%20&%20Publish/badge.svg)](https://github.com/GreetzNL/eslint-config-greetz/workflows/Build%20&%20Publish)
[![npm version](https://badge.fury.io/js/%40greetz%2Feslint-config-greetz.svg)](https://badge.fury.io/js/%40greetz%2Feslint-config-greetz)

Repo containing democratic JavaScript/TypeScript ESLint rules that are used across all Greetz projects. 🙌

## Usage

1. The package depends on `eslint>=3` as a peer dependency. To install the package with all peer dependencies run:

```sh
npx install-peerdeps --dev @greetz/eslint-config-greetz
```

2. Add `"extends": "@greetz/eslint-config-greetz"` to your .eslintrc

3. Add an npm script to run eslint:

```json
{
  "lint": "eslint --ext .js,.ts ./"
}
