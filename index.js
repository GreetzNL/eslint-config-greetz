module.exports = {

  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ["@typescript-eslint"],

  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      modules: true
    }
  },

  rules: {
      semi: [2, "always"]
  }

};
