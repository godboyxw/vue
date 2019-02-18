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
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  })
})

module.exports = router
