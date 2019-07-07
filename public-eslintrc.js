module.exports = {
  extends: 'eslint:recommended',
  env: {
    node: true,
  },
  "globals": {
	    "var1": 12,
	    "var2": false
	},
  'rules': {
		"indent": ["error", "tab"],
		"no-tabs": 0,
		'no-console': 'off',
		"space-before-function-paren": ["error", "never"],
		"spaced-comment": ["off", "never"],
		// allow paren-less arrow functions
		'arrow-parens': 0,
		// allow async-await
		'generator-star-spacing': 0,
		// allow debugger during development
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
	}
};