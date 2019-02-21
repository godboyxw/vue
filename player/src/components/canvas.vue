<template>
  <div>
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
export default {
  name: 'bgCanvas',
  mounted () {
    let w
    let h
    let num = 350 // 定义全局变量
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d') // 画笔
    let data = [] // 将循环生产的每个粒子的特性保存在一个全局变量里面，所有函数均可以访问到全局变量  存储粒子的属性数据
    let clientX, clientY

    // 初始化画布属性
    init()
    function init () {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
      // for循环，画指定数量粒子
      for (let i = 0; i < num; i++) {
        // push方法属于栈方法，性能没有下标索引找好
        data[i] = {
          x: Math.random() * w,
          y: Math.random() * h,
          vx: Math.random() * 0.6 - 0.3, // -0.3-0.3
          vy: Math.random() * 0.6 - 0.3 // -0.3-0.3
        }
        createArc(data[i].x, data[i].y)
      }
      console.log(data)
    }

    // canvas画圆
    createArc()
    function createArc (x, y) {
      ctx.save() // 保存路径（内存）
      ctx.beginPath() // 开始路径
      ctx.fillStyle = 'pink' // 蘸有颜色的墨水
      ctx.arc(x, y, 3, 0, 2 * Math.PI, false) // 画图参数
      ctx.closePath() // 闭合路径
      ctx.fill() // 作画
      ctx.restore() // 释放路径
    }

    // 粒子运动函数
    function animations () {
      ctx.clearRect(0, 0, w, h) // 清除一整个画布
      for (let i = 0; i < num; i++) {
        data[i].x += data[i].vx
        data[i].y += data[i].vy
        // 碰撞检测条件 触发碰撞后，改变偏移量的正负 ++ 变 --
        if (data[i].x < 0 || data[i].x > w) data[i].vx = -(data[i].vx)
        if (data[i].y < 0 || data[i].y > h) data[i].vy = -(data[i].vy)
        // console.log(data[i].x, data[i].y)
        createArc(data[i].x, data[i].y)
        for (let j = i + 1; j < num; j++) {
          if (Math.pow(data[i].x - data[j].x, 2) + Math.pow(data[i].y - data[j].y, 2) < w / 9 * w / 9) {
            createLine(data[i].x, data[i].y, data[j].x, data[j].y)
          }
        }
      }
      for (let j = 0; j < num; j++) {
        if (Math.pow(clientX - data[j].x, 2) + Math.pow(clientY - data[j].y, 2) < w / 9 * w / 9) {
          createLine(clientX, clientY, data[j].x, data[j].y)
        }
      }
    }
    setInterval(function () {
      animations()
    }, 1000 / 60)

    // 粒子连线函数
    function createLine (x1, y1, x2, y2) {
      ctx.save() // 保存路径（内存）
      let lin = ctx.createLinearGradient(x1, y1, x2, y2)
      lin.addColorStop(0, 'red')
      lin.addColorStop(1, 'blue')
      ctx.lineWidth = 1.5
      ctx.strokeStyle = lin
      ctx.beginPath() // 开始路径
      ctx.moveTo(x1, y1)
      ctx.lineTo(x2, y2)
      ctx.closePath() // 闭合路径
      ctx.stroke() // 作画
      ctx.restore() // 释放路径
    }

    // 鼠标移入
    document.onmousemove = function (e) {
      // console.log(e)
      // console.log(e.clientX, e.clientY)
      clientX = e.clientX
      clientY = e.clientY
    }
  }
}
</script>

<style scoped>
body {
  margin: 0;
}

#canvas {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000;
  display: block;
}
</style>
