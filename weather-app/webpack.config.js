const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv');
const { GenerateSW } = require('workbox-webpack-plugin');



// load the dotenv file
dotenv.config();


module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true, // Clean the output directory before emit
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(process.env),
        }),
        
        // A manifest.json file is needed for PWA configuration. Progressive Web Apps. 
        // It tells the browser about your app's appearance, icons, and behavior. 
        // Create a manifest.json file inside the public folder

        // The GenerateSW plugin generates a service worker file automatically.
        // This service worker file is responsible for caching the assets of your app.
        new GenerateSW({
            clientsClaim: true,
            skipWaiting: true,
            maximumFileSizeToCacheInBytes: 10 * 1024 * 1024, // Increase to allow caching of large files
          }),
    ],
    devServer: {
        static: './dist',
        hot: true,
    },
    mode: 'development',
};
