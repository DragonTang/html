const path = require('path')

module.exports = {
  entry: {
    pageOne: './src/app.js',
    pageTwo: './src/test.js',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name][hash].js'
  }
}
