var express = require('express')
var Router = express.Router()
// 引入刚刚暴露出来的表模型
var musicModel = require('../models/music')
// 定义添加到收藏的接口
Router.post('/collect', function (req, res, next) {
  // 这里是post请求，使用req.body来获取前端传过来的数据
  let musiCollect = new musicModel({
    song_id: req.body.song_id,
    author: req.body.author,
    title: req.body.title,
    hot: req.body.hot
  })
  console.log(musiCollect)
  // musiCollect.filter((item, index, arr) => {
  //   return arr.indexOf(item, index + 1) === -1
  // })
  // 保存
  musiCollect.save(function (err, doc) {
    if (err) {
      res.json({
        states: 0,
        msg: err.message
      })
    } else {
      res.json({
        states: 1,
        msg: '保存成功'
      })
    }
  })
})
Router.post('/list', function (req, res, next) {
  musicModel.find({}, {
    _id: 0
  }, function (err, doc) {
    if (err) {
      res.json({
        states: 0,
        msg: err.mesage
      })
    } else {
      // doc = doc.filter((item, index, arr) => {
      //   return arr.indexOf(item, index + 1) === -1
      // })
      // let test = [{
      //   age: 10
      // },
      // {
      //   age: 10
      // }, {
      //   age: 10
      // }
      // ]
      // test = test.filter((item, index, arr) => {
      //   return arr.indexOf(item, index + 1) === -1
      // })
      var result = []
      doc.forEach((item) => {
        var flag = true
        result.forEach((ele) => {
          if (item.song_id === ele.song_id) {
            flag = false
          }
        })
        if (flag) {
          result.push(item)
        }
      })
      console.log(result)
      console.log('-----------------------')
      console.log(doc)
      res.json({
        states: 1,
        msg: result
      })
    }
  })
})
module.exports = Router // 暴露出路由
console.log(Router)
