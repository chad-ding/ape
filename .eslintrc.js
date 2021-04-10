module.exports = {
	env: {
		browser: true,
		node: true,
		es2021: true
	},
	parserOptions: {
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	overrides: [
		{
			files: ['*.js', '*.jsx'],
			extends: ['standard', 'plugin:prettier/recommended', 'prettier/standard']
		},
		{
			files: ['*.ts', '*.tsx'],
			parser: '@typescript-eslint/parser',
			parserOptions: {
				project: './tsconfig.json'
			},
			extends: [
				'standard-with-typescript',
				'plugin:prettier/recommended',
				'prettier/standard',
				'prettier/@typescript-eslint'
			]
		},
		{
			files: ['*.vue'],
			// parser: 'vue-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
				extraFileExtensions: ['.vue'],
				// @typescript-eslint/parser使用
				project: './tsconfig.json'
			},
			extends: [
				'standard',
				'plugin:@typescript-eslint/recommended',
				'plugin:vue/recommended',
				'plugin:prettier/recommended',
				'prettier/standard',
				'prettier/@typescript-eslint',
				'prettier/vue'
			]
		},
		{
			files: ['*.html'],
			extends: ['standard', 'plugin:prettier/recommended', 'prettier/standard'],
			plugins: ['html'],
			env: {
				node: false,
				es2021: false
			},
			parserOptions: {
				sourceType: 'script',
				ecmaVersion: 5,
				ecmaFeatures: {
					jsx: false
				}
			}
		}
	]
}
