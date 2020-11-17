const { merge: webpackMerge } = require('webpack-merge');
const loadPresets = require('./webpack/presets/loadPresets');

module.exports = ({ mode, presets }) => {
	let commonConfig = require(`./webpack/webpack.commonDashboard.js`);

	const envModeConfig = require(`./webpack/webpack.${mode}.js`);
	return webpackMerge(commonConfig, envModeConfig, loadPresets({ presets }));
};
