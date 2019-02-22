<template>
  <div class="mine">
    <div class="">音乐播放器-demo</div>
    <div><img class="img"
           src="@/assets/logo.png"></div>
    <!-- <el-input type="text"
              placeholder="请输入内容"
              prefix-icon="el-icon-search">
    </el-input>
    <el-input type="password"
              placeholder="请输入密码"
              prefix-icon="el-icon-search">
    </el-input> -->
    <div class="handle">
      <div @click="register"
           :class="showReg ? 'isActive' :''">注册</div>
      <div @click="login"
           :class="showlogin ? 'isActive' :''">登录</div>
    </div>
    <div class="register"
         v-show="showReg">
      <div><input type="text"
               class="text1"
               v-model="text1"
               placeholder="请输入内容"></div> <br> {{text1}}
      <div><input type="password"
               class="password1"
               v-model="password1"
               placeholder="请输入密码"></div><br>
      <button type="submit"
              class="btn1"
              @click="regSub">提交注册</button>
    </div>
    <div class="login"
         v-show="showlogin">
      <div><input type="text"
               v-model="text2"
               class="text2"
               placeholder="请输入内容"></div> <br>
      <div><input type="password"
               class="password2"
               v-model="password2"
               placeholder="请输入密码"></div><br>
      <button type="submit"
              class="btn2"
              @click='loginSub'>登录</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      text1: '',
      password1: '',
      text2: '',
      password2: '',
      showReg: false,
      showlogin: false
    }
  },
  methods: {
    login () {
      this.showlogin = true
      this.showReg = false
    },
    register () {
      this.showReg = true
      this.showlogin = false
    },
    regSub () {
      if (this.text1 && this.password1) {
        let datas = {
          text: this.text1,
          password: this.password1
        }
        axios.post('/music/register', datas).then(res => {
          if (res.data.states === 1) {
            console.log(res)
            this.$message({
              type: 'success',
              message: '注册成功',
              showClose: true,
              center: true,
              duration: 1500
            })
          }
        })
        this.text1 = ''
        this.password1 = ''
      } else {
        this.$message({
          type: 'error',
          message: '输入内容不得为空',
          showClose: true,
          center: true,
          duration: 1500
        })
      }
    },
    loginSub () {
      if (this.text2 && this.password2) {
        let datas = {
          text: this.text2,
          password: this.password2
        }
        axios.post('/music/login', datas).then(res => {
          if (res.data.states === 1) {
            console.log(res)
            this.$message({
              type: 'success',
              message: '登录成功',
              showClose: true,
              center: true,
              duration: 1500
            })
            this.$router.push('/user')
            console.log(this.$route)
          } else {
            console.log(res)
            this.$message({
              type: 'error',
              message: '请检查用户名密码或',
              showClose: true,
              center: true,
              duration: 1500
            })
          }
        })
        this.text2 = ''
        this.password2 = ''
      } else {
        this.$message({
          type: 'error',
          message: '输入内容不得为空',
          showClose: true,
          center: true,
          duration: 1500
        })
      }
    }
  }
}
</script>

<style scoped>
.mine {
  position: absolute;
  left: 0;
  right: 0;
  top: 150px;
  z-index: 1000;
  color: #fff;
  font-size: 18px;
  margin-bottom: 30px;
}
.img {
  width: 300px;
  height: 300px;
}
.handle {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 30px;
}
.isActive {
  color: aqua;
}
.register {
  width: 100%;
}
.text1,
.password1,
.text2,
.password2 {
  width: 60%;
  height: 50px;
  font-size: 20px;
}
.btn1,
.btn2 {
  width: 20%;
  font-size: 20px;
}
</style>
