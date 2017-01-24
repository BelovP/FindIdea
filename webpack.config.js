module.exports = {
	entry: './frontend/app.jsx',
	output: {
		filename: './public/build/app.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	devtool: 'source-map',
	module: {
		loaders: [ {
			test: /\.(js|jsx)|$/,
			loader: 'babel',
			query: {
				presets: ['es2015', 'stage-0', 'react']
			}
		}, {
			test: /\.css$/,
			loaders: ['style', 'css?sourceMap']
		} ]
	}
};
