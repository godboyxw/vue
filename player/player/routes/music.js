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
module.exports = Router // 暴露出路由
