const svgLoader = {
	test: /\.svg/,
	use: ['svg-loader'],
};

const tsLoader = {
	test: /\.ts(x?)$/,
	exclude: /node_modules/,
	use: [
		{
			loader: 'ts-loader',
		},
	],
};

const babelLoader = {
	test: /\.m?js$/,
	exclude: /(node_modules)/,
	use: {
		loader: 'babel-loader',
		options: {
			presets: ['@babel/preset-env'],
		},
	},
};
const CSSLoader = {
	test: /\.css$/,
	use: ['style-loader', 'css-loader'],
};

const ESLintLoader = {
	test: /\.js$/,
	enforce: 'pre',
	exclude: /node_modules/,
	use: {
		loader: 'eslint-loader',
		options: {
			configFile: `${__dirname}/../.eslintrc`,
		},
	},
};

const htmlLoader = {
	test: /\.html$/,
	use: ['html-loader'],
};

const urlLoader = {
	test: /\.(png|jpg|gif)$/i,
	use: [
		{
			loader: 'url-loader',
			options: {
				limit: 8192,
			},
		},
	],
};
module.exports = {
	babelLoader,
	svgLoader,
	CSSLoader,
	ESLintLoader,
	htmlLoader,
	tsLoader,
	urlLoader,
};
