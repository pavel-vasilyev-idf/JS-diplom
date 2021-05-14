const path = require('path');

module.exports = {
    entry: [
        "webpack-dev-server/client?http://127.0.0.0:9090/",
        "webpack/hot/only-dev-server",
        './src/index.js',
    ],
    output: {
        filename: 'dev-bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    mode: 'development',
    devServer: {
        open: true,
        port: 9090,
        hot: true,
        writeToDisk: true,
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                },
            },
            exclude: /node_modules/,
        }]
    }
};