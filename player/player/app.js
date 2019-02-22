var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')
var musicRouter = require('./routes/music')
var handleRouter = require('./routes/user')
var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({
  extended: false
}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter) // 它的作用是规定路径为“/”的 GET 请求由 routes.index 函数处理。
app.use('/time', indexRouter)
app.use('/users', usersRouter)
app.use('/music', musicRouter) // 这样我们就可以在前端通过 / music / collect来请求我们的添加收藏接口
app.use('/music', handleRouter)
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
/**
 服务器在开始监听之前，设置好了所有的路由规则，当请求到达时直接分配到响应函数。
app.get 是路由规则创建函数，它接受两个参数，第一个参数是请求的路径，第二个参数
是一个回调函数，该路由规则被触发时调用回调函数，其参数表传递两个参数，分别是 req
和 res，表示请求信息和响应信息。
 **/
