import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import myplugin from "./plugins/myplugin"
import "./style/index.css"
// import store1 from "./store/store1.js"
import store from "./store/store"
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(myplugin)
if(process.env.NODE_ENV==='development'){
  require("./mock/index.js")
}
let vm = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
console.log(vm)