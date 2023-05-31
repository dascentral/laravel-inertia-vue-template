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
  },
};
