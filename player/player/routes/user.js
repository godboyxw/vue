var mongoose = require('mongoose')
var express = require('express')
var Router = express.Router()
var Schema = mongoose.Schema
var User = new Schema({
  text: String,
  password: String
})
var users = mongoose.model('users', User)
Router.post('/register', function (req, res, next) {
  let regData = new users({
    text: req.body.text,
    password: req.body.password
  })
  regData.save(function (err, doc) {
    console.log(doc)
    if (err) {
      res.json({
        states: 0,
        msg: err.message
      })
    } else {
      res.json({
        states: 1,
        msg: '注册成功'
      })
    }
  })
})

Router.post('/login', function (req, res, next) {
  let loginData = {
    text: req.body.text,
    password: req.body.password
  }
  console.log(loginData)
  users.find(loginData, function (err, doc) {
    console.log(doc)
    if (err) {
      res.json({
        states: 0,
        msg: err.message
      })
    } else if (doc.length === 0) {
      res.json({
        states: 0,
        msg: '登录失败'
      })
    } else if (doc.length !== 0) {
      res.json({
        states: 1,
        msg: '登录成功'
      })
    }
  })
})
module.exports = Router // 暴露出路由
