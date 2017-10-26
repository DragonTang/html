const webpack = require('webpack')
const devConfig = require('../config/webpack.dev.conf')

const compiler = webpack(devConfig)

const watching = compiler.watch({
  aggregateTimeout: 300,
  ignored: /node_modules/,
  poll: 1000 // 每秒检查一次
}, (err, stats) => {
  console.log(stats.toString({
    colors: true
  }))
})
