import unocss from '@unocss/eslint-config/flat'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(unocss, {
  files: ['**/*.vue'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 5,
      },
      multiline: {
        max: 1,
      },
    }],
  },
})
