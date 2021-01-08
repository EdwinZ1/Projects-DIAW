const path = require('path')
console.log('Ruta de Index.js: ${path.join(__dirname)}');
module.exports = {
    // 1.- Especificando el archivo 'index' de entrda
    entry: path.join(__dirname,'src/index.js'),
    //2.- Especificar el archivo de salida
    output: {
        path: path.join(__dirname,'dist'),
        filename: 'budle.js'
    },
    // 3.- folder donde servira
    devServer: {
        contentBase: path.join(__dirname,'dist'),
        port: 8082,
        compress: true,
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
        ]
    }
}