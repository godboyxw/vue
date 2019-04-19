import Vue from 'vue'
import Vuex from 'vuex'
// import state from './state'
import {a} from './actions'  //export输出时,import需要加大括号{}
console.log(a)

import * as types from './state'
console.log(types)
console.log(types.state1)
Vue.use(Vuex)
const store = new Vuex.Store({
  // state : {
  //   num :1
  // },
  state : types.state1,
  getters : { //类似vue里面computed
    changeNum(state){ //传入上面定义的state对象作为形参
      return state.num + 1
    }
  },
  mutations :{
    add(state,i){ //传入上面定义的state对象作为形参
      return state.num = state.num + i
    },
    minus(state,i){ //传入上面定义的state对象作为形参
      return state.num = state.num - i
    }
  },
  actions : { //注册actions,类似vue里面methods
    addFun(context,i){ //接收一个与store实例具有相同方法属性的对象context
      context.commit('add',i)
    },
    minusFun(context,i){ //接收一个与store实例具有相同方法属性的对象context
      context.commit('minus',i)
    }
  }
})
export default store
