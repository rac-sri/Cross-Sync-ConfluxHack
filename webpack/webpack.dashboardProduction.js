const path = require('path');

module.exports = {
	devtool: 'source-map',
	mode: 'production',
	entry: './dashboard/index.js',
	output: {
		filename: 'client.js',
		path: path.join(__dirname, '..', 'server', 'public'),
	},
	node: {
		global: true,
		__dirname: false,
		__filename: false,
	},
};
