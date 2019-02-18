<template>
  <div>
    <el-radio-group v-model="musicType"
                    size="medium"
                    @change="typeChange">
      <el-radio-button label="1">新歌榜</el-radio-button>
      <el-radio-button label="2">热歌榜</el-radio-button>
      <el-radio-button label="11">摇滚榜</el-radio-button>
      <el-radio-button label="12">爵士</el-radio-button>
      <el-radio-button label="16">流行</el-radio-button>
      <el-radio-button label="21">欧美金曲榜</el-radio-button>
      <el-radio-button label="22">经典老歌榜</el-radio-button>
      <el-radio-button label="23">情歌对唱榜</el-radio-button>
      <el-radio-button label="24">影视金曲榜</el-radio-button>
      <el-radio-button label="25">网络歌曲榜</el-radio-button>
    </el-radio-group>
    <ul v-if="!ifSearch"
        class="geBan">
      <li v-for="(item,index) in jsonpData"
          class="lists"
          :key="index">
        <div class="port-1 effect-1">
          <div class="image-box">
            <img :src="item.pic_premium"
                 alt="pic_premium">
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
               class="btn">添加</a>
            <a href="javascript:void(0)"
               class="btn">下载</a>
          </div>
        </div>
      </li>
    </ul>
    <div class="audioUrl"
         v-show="audioShow">
      <audio :src="musicUrl"
             controls="controls"
             autoplay="autoplay"></audio>
    </div>
  </div>
</template>

<script>
export default {
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
      this.$jsonp(this.api, dataMusic).then(json => {
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
    }
  },
  mounted () {
    this.getMusicList()
  }
}
</script>

<style scoped>
.geBan {
  list-style: none;
}
.lists {
  margin-bottom: 40px;
}
</style>
