module.exports = {
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:vue/vue3-recommended',
    'prettier',
  ],
  plugins: ['prettier', 'tailwindcss', 'vue'],
  rules: {
    'indent': ['error', 2],
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    // TODO: Enable this class and debug error
    // https://github.com/francoismassart/eslint-plugin-tailwindcss/issues/234
    'tailwindcss/no-custom-classname': 'off',
    'vue/multi-word-component-names': 'off',
  },
};
