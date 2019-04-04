<template>
  <div id="app">
    <bgCanvas></bgCanvas>
    <div class="menu">
      <router-link to="/"
                   class="home">我的首页</router-link>
      <router-link to="/collections"
                   class="collections">我的收藏</router-link>
      <!-- <router-link to="/mine"
                   class="likes"><span @click="jump">个人中心</span></router-link> -->
      <div @click="jump"
           :class="isActive?'active':''"
           class="likes">个人中心</div>
    </div>
    <router-view />
  </div>
</template>

<script>
import bgCanvas from '@/components/canvas'
import { EventBus } from './util/vue-bus'
export default {
  name: 'App',
  components: {
    bgCanvas
  },
  data () {
    return {
      isLogin: '',
      isActive: false
    }
  },
  methods: {
    jump () {
      // console.log(this.$route)
      // this.$router.beforeEach((to, from, next) => {
      //   console.log(to, from)
      //   if (to.path === '/user') {
      //     this.$router.push('/user')
      //   } else {
      //     this.$router.push('/mine')
      //   }
      // })
      this.$router.push('/mine')
      // this.isActive = true
      EventBus.$on('isLogin', (isLogin) => { // 组件间传值,表明登录状态,来进行登录后,再次点击个人中心后,保证路由在user页面
        this.isLogin = isLogin
        console.log(this.isLogin)
      })
      if (this.isLogin) {
        this.$router.push('/user')
      }
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a {
  text-decoration: none;
  color: #fff;
}
.router-link-exact-active {
  color: orange;
}
.menu {
  position: absolute;
  left: 0;
  right: 0;
  z-index: 1000;
  color: aliceblue;
  font-size: 22px;
  display: flex;
  justify-content: space-around;
}
.active {
  color: orange;
}
</style>
