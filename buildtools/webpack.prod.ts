import * as webpack from 'webpack';
import * as CleanWebpackPlugin from 'clean-webpack-plugin';
import * as HTMLWebpackPlugin from 'html-webpack-plugin';

let config: webpack.Configuration = {

    entry: './src/app/client/index.tsx',

    output: {
        filename: '[name].[chunkhash].bundle.js',
        path: __dirname + '/../dist'
    },

    mode: 'production',

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'] 
    },

    optimization: {
        minimize: true,
        concatenateModules: true,
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    name: 'vendor',
                    chunks: 'initial',
                    enforce: true
                }
            }
        }
    },

    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loaders: ['awesome-typescript-loader']
            },
            {
                test: /\.(s*)css$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin('dist', { root: __dirname + '/../' }),
        new HTMLWebpackPlugin({
            template: 'src/app/client/template.html'
        })
    ]

};

export default config;
