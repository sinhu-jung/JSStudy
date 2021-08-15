const path = require('path');

module.exports = (env) => ({
    mode: "none",
    entry: path.resolve('ucare_frontend/src/index.js'),
    output: {
        path: path.resolve('ucare_frontend/public'),
        filename: 'bundle.js',
        assetModuleFilename: 'assets/images/[hash][ext]'
    },
    module: {
        rules: [{
            test: /\.(png|gif|jpe?g|svg|ico|tiff?|bmp)$/i,
            type: 'asset/resource'
        }, {
            test: /\.(sa|sc|c)ss$/i,
            use: [
                'style-loader',
                { loader: 'css-loader', options: { modules: true } },
                'sass-loader'
            ]
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                configFile: path.resolve('ucare_frontend/config/babel.config.json')
            }
        }]
    },
    devtool: "eval-source-map",
    devServer: {
        contentBase: path.resolve('ucare_frontend/public'),
        watchContentBase: true,
        host: "0.0.0.0",
        port: 9999,
        proxy: {
            '/api': 'http://localhost:8080/'
        },
        inline: true,
        liveReload: true,
        hot: false,
        compress: true,
        historyApiFallback: true
    }
});

