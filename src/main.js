import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import axios from './axios/request.js'
import 'element-ui/lib/theme-chalk/index.css';
import querystring from "querystring"
import { addLogs } from "@/components/logs/addLogs"
// 引入echarts
// <1> 5.0以下版本： import echarts from 'echarts ’
// <2> 5.0以上版本： import * as echarts from ‘echarts’
import * as echarts from 'echarts'
// 注册在原型上 变为全局变量
Vue.prototype.$echarts = echarts
Vue.prototype.$addLogs = addLogs
// import { Button, Select } from 'element-ui';
// Vue.use(Button)
// Vue.use(Select)
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  store,
  querystring,
  render: h => h(App)
}).$mount('#app')
