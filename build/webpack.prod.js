const { merge } = require("webpack-merge");
const common = require("../build/webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const webpackConfig = merge(common, {
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].[contenthash].css",
			chunkFilename: "[id].[contenthash].css",
			ignoreOrder: true,
		}),
	],
	mode: "production",
});

module.exports = webpackConfig;
