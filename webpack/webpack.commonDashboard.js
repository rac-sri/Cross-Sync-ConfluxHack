const loaders = require('./loadersDashboard');
const plugins = require('./pluginsDashboard');
const webpack = require('webpack');

module.exports = {
	module: {
		rules: [
			loaders.svgLoader,
			loaders.ESLintLoader,
			loaders.babelLoader,
			loaders.htmlLoader,
			loaders.CSSLoader,
			loaders.tsLoader,
			loaders.urlLoader,
			{
				enforce: 'pre',
				test: /\.js$/,
				loader: 'source-map-loader',
			},
		],
	},
	plugins: [
		plugins.StyleLintPlugin,
		plugins.MiniCssExtractPlugin,
		plugins.HtmlWebPackPlugin,
		plugins.CleanWebpackPlugin,
		new webpack.BannerPlugin({
			banner: (yourVariable) => {
				return `yourVariable: ${yourVariable}`;
			},
		}),
	],
};
