const path = require('path');
const JavaScriptObfuscator = require('webpack-obfuscator');

module.exports = {
    mode: "production",
    entry: {
        widget: './src/a.js',
    },
    output: {
        filename: '[name].bundle.js',
        library: 'widget',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, './dist')
        },
        port: 8081,
    },
    plugins: [

        //     new JavaScriptObfuscator({
        //         rotateUnicodeArray: true
        //     }, [])
    ]

};