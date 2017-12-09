var CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    },

    devtool: 'source-map',

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },

    module: {
        rules: [
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },

            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.(ts|tsx)?$/, enforce: 'pre', loader: 'tslint-loader' },

            { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
        ]
    },

    plugins: [
        new CopyWebpackPlugin([
            { from: 'index.html', to: 'index.html' }
        ])
    ],

    devServer: {
        contentBase: __dirname + '/dist',
        index: 'index.html',
        compress: true,
        port: 3000
    }
}