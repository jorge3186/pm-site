import * as webpack from 'webpack';
import * as CleanWebpackPlugin from 'clean-webpack-plugin';
import * as HTMLWebpackPlugin from 'html-webpack-plugin';

let config: webpack.Configuration = {

    entry: './src/app/client/index.tsx',

    output: {
        filename: '[name].[hash].bundle.js',
        path: __dirname + '/../dist'
    },

    mode: 'development',

    devtool: 'inline-source-map',

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },

    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loaders: ['awesome-typescript-loader']
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },

    devServer: {
        host: 'localhost',
        port: 30300
    },

    plugins: [
        new CleanWebpackPlugin('dist', { root: __dirname + '/../' }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new HTMLWebpackPlugin({
            template: 'src/app/client/template.html'
        })
    ]

};

export default config;
