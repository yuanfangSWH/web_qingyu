import Vue from 'vue'
import App from './App'
import router from './router'
//element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

//axios
import axios from 'axios'
Vue.prototype.axios = axios

//资源
import './assets/css/index.css'
//封装的axios方法
import api from './api/api'
Vue.prototype.api = api
Vue.use(api)

//全局注册导航组件
import topNavigation from "./components/topNavigation/topNavigation";
Vue.component("Navigation", topNavigation);
//全局注册分页组件
import paging from "./components/paging/paging";
Vue.component("Paging", paging);
//全局注册搜索组件
import search from "./components/search/search";
Vue.component("Search", search);
//Vuex公共管理
import store from './vuex/store'

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
