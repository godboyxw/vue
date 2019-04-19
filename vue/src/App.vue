<template>
    <div id="app">
        <img src="./assets/logo.png">
        <HelloWorld />
        <h1>{{this.$store.state.num}}</h1>
        <h2>{{this.$store.getters.changeNum}}</h2>
        {{count}} <br> <br>
        {{num}} <br> <br>
        {{getCount}} <br> <br>
        {{changeNum}} <br> <br>
        <button @click="add">add</button>
        <button @click="minus">minus</button>
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
    name: 'App',
    components: {
        HelloWorld
    },
    computed: {
        ...mapState({
            // count : (state)=>{ return state.num}
            count: 'num' //num就是指state中的变量
        }),
        ...mapState([
            'num'
        ]),
        ...mapGetters({
            getCount: 'changeNum' //changeNum就是指getters中的函数
        }),
        ...mapGetters([
            'changeNum'
        ])
    },
    methods: {
        add () {
            // this.$store.commit('add')
            var i = 10
            this.$store.dispatch('addFun', i)
        },
        minus () {
            var i = 10
            // this.$store.commit('minus')
            this.$store.dispatch('minusFun', i)
        },
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
</style>
