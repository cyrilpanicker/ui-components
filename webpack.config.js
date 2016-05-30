var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:{
        'main':'./build/main',
        'libs':[
            'jquery',
            'react',
            'react-dom'
        ]
    },
    output:{
        path:'./bundled-build',
        filename:'app.js'
    },
    devtool:[
        // 'source-map'
    ],
    resolve:{
        extensions:['','.js','.css']
    },
    module:{
        loaders:[
            {test:/\.css$/,loader:'style-loader!css-loader'},
            {test: /\.png$/,loader:'url-loader?limit=100000'},
            {test: /\.jpg$/,loader:'file-loader'}
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./build/index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:'libs',
            filename:'libs.js'
        })
    ]
};