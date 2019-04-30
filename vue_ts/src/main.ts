import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import { Button, Select } from 'element-ui';
import service from './utils/http'
// import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Button);
Vue.use(Select);
// Vue.use(ElementUI)
Vue.config.productionTip = false;
Vue.prototype.$http = service //其他页面在使用 axios 的时候直接  this.$http 就可以了

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
