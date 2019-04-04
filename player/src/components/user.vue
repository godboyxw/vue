<template>
  <div class="user">
    <div>user页面</div>
    <br><br>
    <div @click="loginOut">退出登录</div>
  </div>
</template>

<script>
export default {
  methods: {
    loginOut () {
      this.$router.push('/mine')
      this.$message({
        type: 'success',
        message: '退出登录成功',
        showClose: true,
        center: true,
        duration: 1500
      })
    }
  }
}
</script>

<style scoped>
.user {
  position: absolute;
  left: 0;
  right: 0;
  top: 150px;
  z-index: 1000;
  color: #fff;
  font-size: 28px;
}
</style>
