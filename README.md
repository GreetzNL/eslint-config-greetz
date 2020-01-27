# eslint-config-greetz

[![npm version](https://badge.fury.io/js/%40greetz%2Feslint-config-greetz.svg)](https://badge.fury.io/js/%40greetz%2Feslint-config-greetz)

Repo containing democratic JavaScript/TypeScript ESLint rules that are used across all Greetz projects. 🙌

## Usage

1. The package depends on `eslint>=3` as a peer dependency. To install the package with all peer dependencies run:

```sh
npx install-peerdeps --dev @greetz/eslint-config-greetz
```

After that TypeScript parser and plugin should be installed:

```sh
npm i --dev @typescript-eslint/eslint-plugin
```

2. Add `"extends": "@greetz/eslint-config-greetz"` to your .eslintrc
