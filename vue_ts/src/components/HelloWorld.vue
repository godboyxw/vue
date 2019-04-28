<template>
    <div class="hello">
        <h1>{{ msg }}</h1> {{test}}
        <p>{{food}}</p>
        <!-- <el-select v-model="value" clearable placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select> -->
        <el-button type="success">成功</el-button>
        <select name=""
                id=""
                v-model="v"
                @change="change">
            <option v-for="item in options"
                    :key="item.value"
                    :value="item.label">{{item.label}}</option>
        </select>
        <ul>
            <li v-for="(item,index) in arr"
                :key="index">{{item}}</li>
        </ul>
        <p>
            For a guide and recipes on how to configure / customize this project,<br />
            check out the
            <a href="https://cli.vuejs.org"
               target="_blank"
               rel="noopener">vue-cli documentation</a>.
        </p>
        <h3>Installed CLI Plugins</h3>
        <ul>
            <li>
                <a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
                   target="_blank"
                   rel="noopener">babel</a>
            </li>
            <li>
                <a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript"
                   target="_blank"
                   rel="noopener">typescript</a>
            </li>
            <li>
                <a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
                   target="_blank"
                   rel="noopener">eslint</a>
            </li>
            <li>
                <a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-mocha"
                   target="_blank"
                   rel="noopener">unit-mocha</a>
            </li>
        </ul>
        <h3>Essential Links</h3>
        <ul>
            <li>
                <a href="https://vuejs.org"
                   target="_blank"
                   rel="noopener">Core Docs</a>
            </li>
            <li>
                <a href="https://forum.vuejs.org"
                   target="_blank"
                   rel="noopener">Forum</a>
            </li>
            <li>
                <a href="https://chat.vuejs.org"
                   target="_blank"
                   rel="noopener">Community Chat</a>
            </li>
            <li>
                <a href="https://twitter.com/vuejs"
                   target="_blank"
                   rel="noopener">Twitter</a>
            </li>
            <li>
                <a href="https://news.vuejs.org"
                   target="_blank"
                   rel="noopener">News</a>
            </li>
        </ul>
        <h3>Ecosystem</h3>
        <ul>
            <li>
                <a href="https://router.vuejs.org"
                   target="_blank"
                   rel="noopener">vue-router</a>
            </li>
            <li>
                <a href="https://vuex.vuejs.org"
                   target="_blank"
                   rel="noopener">vuex</a>
            </li>
            <li>
                <a href="https://github.com/vuejs/vue-devtools#vue-devtools"
                   target="_blank"
                   rel="noopener">vue-devtools</a>
            </li>
            <li>
                <a href="https://vue-loader.vuejs.org"
                   target="_blank"
                   rel="noopener">vue-loader</a>
            </li>
            <li>
                <a href="https://github.com/vuejs/awesome-vue"
                   target="_blank"
                   rel="noopener">awesome-vue</a>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
    @Prop() private msg!: string;
    @Prop({ default: 'bread' }) food!:string;
    options:any[] = [
        {
            value: "选项1",
            label: "黄金糕"
        },
        {
            value: "选项2",
            label: "双皮奶"
        },
        {
            value: "选项3",
            label: "蚵仔煎"
        },
        {
            value: "选项4",
            label: "龙须面"
        },
        {
            value: "选项5",
            label: "北京烤鸭"
        }
    ];
    test:number = 123;
    arr:number[] = [1, 2, 3];
    v :string= "";
    mounted() {}
    change() {
        console.log(this.v);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
