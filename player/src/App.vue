<template>
  <div id="app">
    <bgCanvas></bgCanvas>
    <div class="menu">
      <router-link to="/"
                   class="home">我的首页</router-link>
      <router-link to="/collections"
                   class="collections">我的收藏</router-link>
      <router-link to="/mine"
                   class="likes">个人中心</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import bgCanvas from '@/components/canvas'
export default {
  name: 'App',
  components: {
    bgCanvas
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
</style>
