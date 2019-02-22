<template>
  <div class="collections">
    <div class="header">
      <div class="songs">歌曲</div>
      <div class="singer">歌手</div>
      <div class="hot">热度</div>
      <div class="cancel">取消收藏</div>
    </div>
    <div class="lists">
      <div class="item"
           v-for="(item,index) in musicList"
           :key="index">
        <div class="item-song">{{item.title}}</div>
        <div class="item-singer">{{item.author}}</div>
        <div class="item-hot">{{item.hot}}</div>
        <i class="iconfont icon-cancelCollection"
           :class="index === key ? 'active' :''"
           @click="cancelCollection(index,item.song_id)"></i>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      musicList: [], // 保存获取收藏列表数据
      key: ''
    }
  },
  methods: {
    cancelCollection (index, songId) {
      // this.key = index
      let datas = { song_id: songId }
      axios.post('/music/cancel', datas).then(res => {
        console.log(res)
        if (res.data.states === 1) {
          this.$message({
            type: 'success',
            message: '取消收藏成功',
            showClose: true,
            center: true,
            duration: 1500
          })
          this.getCollection()
        }
      })
    },
    getCollection () {
      let datas = {}
      axios.post('/music/list', datas).then(res => {
        console.log(res)
        this.musicList = res.data.msg
      })
    }
  },
  mounted () {
    this.getCollection()
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
.icon-cancelCollection {
  flex: 1;
  font-size: 16px;
  color: skyblue;
}
.active {
  color: #fff;
}
</style>
