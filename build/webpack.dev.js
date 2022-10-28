const { merge } = require("webpack-merge");
const common = require("../build/webpack.common.js");

const webpackConfig = merge(common, {
	mode: "development",
	devtool: "inline-source-map",

	devServer: {
		port: 9000,
	},
});

module.exports = webpackConfig;
