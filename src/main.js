import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


// 首页组件
import index from './components/index.vue'
// 详情组件
import detail from './components/detail.vue'

const routes= [
  {path : '/' , redirect : '/index'}, //访问'/'默认跳转首页 重定向去首页
  {path: '/index',component:index },
  {path: '/detail/:id',component:detail },


]

// 实例化路由对象
const router = new VueRouter({
  routes
})


// 导入全局样式
import'./assets/statics/site/css/style.css'


Vue.config.productionTip = false

// 设置axios到原型上 方便共享
import axios from 'axios'
Vue.prototype.$axios = axios;

// 设置axios地址
axios.defaults.baseURL = "http://111.230.232.110:8899";

// 定义全局过滤器
import moment from 'moment'
Vue.filter('formatTime',(value)=>{
  // "处理时间并返回"
  return moment(value).format("YYYY-MM-DD");
})




// 挂载到vue实例上
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
