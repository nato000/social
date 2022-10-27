module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ["google", "prettier"],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	rules: {
		"no-unused-vars": 1,
		"require-jsdoc": 0,
		"no-invalid-this": 0,
	},
};
