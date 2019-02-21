<template>
  <div class="collections">
    <div class="header">
      <div class="songs">歌曲</div>
      <div class="singer">歌手</div>
      <div class="hot">热度</div>
    </div>
    <div class="lists">
      <div class="item"
           v-for="(item,index) in musicList"
           :key="index">
        <div class="item-song">{{item.title}}</div>
        <div class="item-singer">{{item.author}}</div>
        <div class="item-hot">{{item.hot}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      musicList: [] // 保存获取收藏列表数据
    }
  },
  mounted () {
    let datas = {}
    axios.post('/music/list', datas).then(res => {
      console.log(res)
      this.musicList = res.data.msg
    })
  }
}
</script>

<style scoped>
.collections {
  position: absolute;
  left: 0;
  right: 0;
  top: 150px;
  z-index: 1000;
  color: #fff;
}
.header {
  width: 100%;
  height: 50px;
  font-size: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #fff;
  margin-bottom: 30px;
}
.item {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #fff;
  margin-bottom: 40px;
}
.item-song {
  flex: 1;
  margin-left: 20px;
  font-size: 16px;
  color: skyblue;
}
.item-singer {
  flex: 1;
  font-size: 16px;
  color: skyblue;
}
.item-hot {
  flex: 1;
  font-size: 16px;
  color: skyblue;
}
</style>
