var mongoose = require('mongoose')
var Schema = mongoose.Schema
// 定义表结构
var musicObj = new Schema({
  song_id: String,
  author: String,
  title: String,
  hot: String
})
module.exports = mongoose.model('musics', musicObj) // 暴露出去
