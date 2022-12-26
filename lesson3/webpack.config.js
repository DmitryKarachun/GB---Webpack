const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
    entry: resolve(__dirname, 'src',  'index.js'),
		output: {
					path: resolve(__dirname, 'build'),
					filename: 'main.[contenthash].js',
    },
		module: {
			rules: [
				{
					test: /\.s[ac]ss$/i,
					use: [
						'style-loader',
						'css-loader',
						'sass-loader',
					]
				},
				{
					test: /\.(png|jpe?g|jpg|gif)$/i,
		
					use: [
							{
								loader: 'img-optimize-loader',
								options: {
									compress: {
										// This will take more time and get smaller images.
										mode: 'high', // 'lossless', 'low'
										webp: true,
										gifsicle: true,
										disableOnDevelopment: false,
									},
								},
							}
					]
				},
				{
					test: /\.(mp[3|4])$/i,
					use: [
						'file-loader',
					]
					// loader: 'file-loader'
				},
				
			]
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: resolve(__dirname, 'index.html')
			}),
		],
		devServer: {
			port: 3000
		}
};