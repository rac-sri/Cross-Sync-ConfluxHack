const path = require('path');

module.exports = {
	devtool: 'source-map',
	mode: 'production',
	entry: './dashboard/index.js',
	output: {
		filename: 'client.js',
		path: path.join(__dirname, '..', 'buildDashboard'),
	},
	node: {
		global: false,
		__dirname: false,
		__filename: false,
	},
};
