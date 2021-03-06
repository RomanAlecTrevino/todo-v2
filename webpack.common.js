const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './src/index.js',
    output: {
        filename: 'main.[contentHash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/template.html',
    })],
    module: {
        rules: [
            {
                 test: /\.css$/,
                 use: ['style-loader', 'css-loader']
            }, 
            {
                test: /\.html$/,
                use: ['html-loader']
            }, 
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: 'file-loader', 
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: "imgs"
                    }
                }
            }
        ]
    }
}