module.exports = {
	devtool: 'eval-source-map',
	devServer: {
		historyApiFallback: true,
	},
	mode: 'development',
	entry: './dashboard/index.js',
	target: 'web',
};
