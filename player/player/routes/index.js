var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/userList')
mongoose.connection.on('connected', function () {
  console.log('连接成功')
})
mongoose.connection.on('error', function () {
  console.log('连接失败')
})
mongoose.connection.on('disconnected', function () {
  console.log('连接断开')
})

/* GET home page. */
router.get('/', function (req, res, next) { // 功能是调用模板解析引擎，翻译名为 index 的模板，即index.ejs 模板文件,并传入一个对象作为参数，这个对象只有一个属性，即 title: 'Express'。
  res.render('index', {
    title: 'Express'
  })
})
router.get('/time', function (req, res, next) {
  res.send('the time is' + new Date().toLocaleString())
})
module.exports = router
console.log(router)
