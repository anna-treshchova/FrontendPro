const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: './',
    },
    devtool: isProduction ? false : 'source-map',
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [[
                            '@babel/preset-env',
                            {
                                "targets": "> 0.25%, not dead"
                            }
                        ]]
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: !isProduction },
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: !isProduction },
                    },
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'img/[name][ext]'
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css',
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: 'Development',
        }),
        ...(isProduction ? [
            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.imageminMinify,
                    options: {
                        plugins: [
                            ['gifsicle', { interlaced: true }],
                            ['jpegtran', { progressive: true }],
                            ['optipng', { optimizationLevel: 5 }],
                            ['webp', { quality: 75 }],
                            [
                                'svgo',
                                {
                                    plugins: [
                                        {
                                            name: 'preset-default',
                                            params: {
                                                overrides: {
                                                    removeViewBox: false,
                                                    addAttributesToSVGElement: {
                                                        params: {
                                                            attributes: [
                                                                { xmlns: 'http://www.w3.org/2000/svg' },
                                                            ],
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    ],
                                },
                            ],
                        ],
                    },
                },
            }),
        ] : [])
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
        open: true,
        historyApiFallback: true,
    },
    optimization: {
        minimize: isProduction,
    },
};