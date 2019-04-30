import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);
Vue.use(VueRouter)

import index from './components/index.vue'

const routes= [
  {path: '/index',component:index ,},
  {path : '/' , redirect : '/index'} //访问'/'默认跳转首页

]

// 实例化路由对象
const router = new VueRouter({
  routes
})


import'./assets/statics/site/css/style.css'




Vue.config.productionTip = false



// 挂载到vue实例上
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
