// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    '@stylistic/comma-dangle': 'off',
    '@stylistic/semi': 'off',
    '@stylistic/member-delimiter-style': 'off',
    '@stylistic/operator-linebreak': 'off',
    'vue/max-attributes-per-line': 'off'
  }
})
