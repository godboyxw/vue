const express = require('express')
const path = require('path')
const indexRouter = require('./routes/index')

const app = express()

// view engine setup
app.set('views', path.join(__dirname,'views'))
app.set('view engine','ejs')

//静态资源
app.use(express.static(__dirname + '/public'))
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/',indexRouter)

module.exports = app

// app.listen(5000,function () {
//     console.log('server is listening at localhost:5000')
// })
