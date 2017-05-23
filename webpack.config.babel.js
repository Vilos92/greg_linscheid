import ExtractTextPlugin from 'extract-text-webpack-plugin'; 

module.exports = {
    entry: './static/jsx/entry.jsx',
    output: {
        path: __dirname,
        filename: './static/js/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css-loader!sass-loader')
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: './static/css/style.css',
            allChunks: true
        })
    ]
}
