<template>
  <div class="wrapper">
    <ul class="box">
      <li>
        <img src="./images/1.png"
             alt="">
        <div class="cover"></div>
      </li>
      <li>
        <img src="./images/2.png"
             alt="">
        <div class="cover"></div>
      </li>
      <li>
        <img src="./images/3.png"
             alt="">
        <div class="cover"></div>
      </li>
      <li>
        <img src="./images/4.png"
             alt="">
        <div class="cover"></div>
      </li>
      <li class="start">
        <img src="./images/start.png"
             alt="">
      </li>
      <li>
        <img src="./images/5.png"
             alt="">
        <div class="cover"></div>
      </li>
      <li>
        <img src="./images/6.png"
             alt="">
        <div class="cover"></div>
      </li>
      <li>
        <img src="./images/7.png"
             alt="">
        <div class="cover"></div>
      </li>
      <li>
        <img src="./images/8.png"
             alt="">
        <div class="cover"></div>
      </li>
    </ul>
    <div class="result"></div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  mounted () {
    var oLi = $('li')
    var arr = [0, 1, 2, 5, 8, 7, 6, 3]
    var len = arr.length
    var flag = false // 抽奖的状态

    $('.start').click(function () {
      if (flag) return
      $('.result').hide()
      start(random(0, 8))
      flag = true
    })

    // 点击立即抽奖 顺时针旋转
    function start (num) {
      var speed = 100
      var round = 4 // 默认圈数
      var roundNum = round * len
      var n = 0 // 转动了多少次
      var timer
      timer = setTimeout(turn, speed)
      function turn () {
        var index = arr[n % 8]
        oLi.removeClass('active').eq(index).addClass('active')
        n++
        if (n > roundNum + num) {
          clearTimeout(timer)
          result(index)
          return
        } else if (n > roundNum && n < roundNum + num) {
          speed += 150
        }
        timer = setTimeout(turn, speed)
      }
    }

    // 生成随机数
    function random (min, max) {
      return parseInt(Math.random() * (max - min) + min)
    }

    // 处理结果
    function result (index) {
      var str = ''
      switch (index) {
        case 0:
          str = '金币+20'
          break
        case 1:
          str = '5元现金券'
          break
        case 2:
          str = '10元现金券'
          break
        case 3:
          str = '15元现金券'
          break
        case 5:
          str = '金币+50'
          break
        case 6:
          str = '谢谢参与'
          break
        case 7:
          str = '金币+100'
          break
        case 8:
          str = '30元现金券'
      }
      setTimeout(function () {
        $('.result').html(str).show()
        flag = false
      }, 800)
    }
  }
}
</script>

<style scoped>
body,
ul,
li {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
body {
  background: pink;
}
.wrapper {
  position: relative;
  width: 300px;
  height: 300px;
  margin: 30px auto;
}
.box {
  width: 300px;
  height: 300px;
}
li {
  position: relative;
  float: left;
  width: 100px;
  height: 100px;
}
li img {
  width: 100%;
  height: 100%;
}
.cover {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 100px;
  background-image: url("./images/cover.png");
  background-size: 100% 100%;
}
.active .cover {
  display: block;
}
.result {
  display: none;
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -80px;
  width: 160px;
  height: 80px;
  line-height: 80px;
  border: 3px solid #000;
  border-radius: 20px;
  text-align: center;
  background: #ff6a91;
  color: #fff;
}
</style>
