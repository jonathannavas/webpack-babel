/*
    Aqui se configura lo que se necesita para que el proyecto quede OK
*/

const path = require('path');

module.exports = {
    /* path de entrada y salida de archivos */
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    /* con que extensiones va a trabajar este proyecto */
    resolve: {
        extensions: ['.js']
    },
    /* anadir el webpack */
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}