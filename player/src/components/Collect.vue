<template>
  <div class="wrapper">
    <div class="content">
      <el-radio-group v-model="musicType"
                      size="medium"
                      class="group"
                      @change="typeChange">
        <el-radio-button label="1"
                         class="btn">新歌榜</el-radio-button>
        <el-radio-button label="2"
                         class="btn">热歌榜</el-radio-button>
        <el-radio-button label="11"
                         class="btn">摇滚榜</el-radio-button>
        <el-radio-button label="12"
                         class="btn">爵士</el-radio-button>
        <el-radio-button label="16"
                         class="btn">流行</el-radio-button>
        <el-radio-button label="21"
                         class="btn">欧美金曲榜</el-radio-button>
        <el-radio-button label="22"
                         class="btn">经典老歌榜</el-radio-button>
        <el-radio-button label="23"
                         class="btn">情歌对唱榜</el-radio-button>
        <el-radio-button label="24"
                         class="btn">影视金曲榜</el-radio-button>
        <el-radio-button label="25"
                         class="btn">网络歌曲榜</el-radio-button>
      </el-radio-group>
      <ul v-if="!ifSearch"
          class="model">
        <li v-for="(item,index) in jsonpData"
            class="lists"
            :key="index">
          <div class="port-1 effect-1">
            <div class="image-box">
              <img :src="item.pic_premium"
                   alt="pic_premium"
                   class="lists-img">
            </div>
            <div class="text-desc">
              <h3>{{item.title}}</h3>
              <p>歌手：{{item.author}}
                <span style="padding-left:5px">语言：{{item.language}}</span> </p>
              <p>热度：{{item.hot}}</p>
              <a href="javascript:void(0)"
                 @click="playMusic(item.song_id)"
                 class="btn">播放</a>
              <a href="javascript:void(0)"
                 @click="addMusic(item)"
                 class="btn">收藏</a>
              <a href="javascript:void(0)"
                 class="btn">下载</a>
            </div>
          </div>
        </li>
      </ul>
      <div class="audioUrl">
        <audio :src="musicUrl"
               controls="controls"></audio>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  components: {

  },
  data () {
    return {
      ifSearch: false,
      audioShow: true,
      api: 'http://tingapi.ting.baidu.com/v1/restserver/ting',
      musicType: '1', // 音乐类型
      commonParams: {// 列表参数
        method: 'baidu.ting.billboard.billList',
        type: '',
        size: 25,
        offset: 0
      },
      dataObj: {// 公共参数
        format: 'json',
        calback: '',
        from: 'webapp_music'
      },
      playParams: { // 播放参数
        method: 'baidu.ting.song.play',
        songid: ''
      },
      jsonpData: [],
      totalMusic: 0, // 列表总数，下面做翻页
      musicUrl: ''
    }
  },
  methods: {
    getMusicList () {
      // this.loading = true
      this.commonParams.type = this.musicType
      // 合并对象
      const dataMusic = Object.assign({}, this.commonParams, this.dataObj)
      axios.get(this.api, dataMusic).then(json => {
        console.log(json)
        this.jsonpData = json.song_list
        // this.loading = false
        this.totalMusic = parseInt(json.billboard.billboard_songnum)
      })
    },
    typeChange () {
      this.getMusicList()
    },
    playMusic (songid) {
      this.playParams.songid = songid
      console.log(songid)
      const dataMusic = Object.assign({}, this.playParams, this.dataObj)
      this.$jsonp(this.api, dataMusic).then(json => {
        console.log(json)
        this.musicUrl = json.bitrate.file_link
        // this.musicUrl = 'http://sc1.111ttt.cn/2018/1/03/13/396131232171.mp3'
        console.log(this.musicUrl)
      })
    },
    addMusic (item) {
      let datas = {
        song_id: item.song_id,
        author: item.author,
        title: item.title,
        hot: item.hot
      }
      axios.post('/music/collect', datas).then(data => {
        console.log(data)
        if (data.data.states === 1) {
          // Element 为 Vue.prototype 添加了全局方法 $message。因此在 vue instance 中可以采用本页面中的方式调用 Message。
          this.$message({
            message: '收藏成功',
            type: 'success',
            showClose: true,
            center: true,
            duration: 1500
          })
        }
      })
    }
  },
  mounted () {
    this.getMusicList()
  }
}
</script>

<style scoped>
.content {
  padding-top: 30px;
  width: 750px;
  position: absolute;
  top: 150px;
  left: 50%;
  margin-left: -375px;
  /**background-color: rgba(255, 255, 255, 0.3);**/
}
.group {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0 10px 0 10px;
  margin-bottom: 30px;
}
.btn {
  margin: 5px 10px 5px 0;
}
.lists-img {
  width: 500px;
  height: 500px;
}
.model {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.lists {
  margin-bottom: 40px;
}
h3,
p,
a {
  color: #fff;
}
a {
  text-decoration: none;
  display: inline-block;
}
a {
  color: orange;
}
</style>
