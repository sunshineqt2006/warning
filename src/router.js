import Vue from 'vue'
import VueRouter from 'vue-router'
import { setTitle } from './utils'
import Index from '@/views/Index.vue'
import SelectCinema from '@/views/SelectCinema.vue'
import Detail from '@/views/Detail.vue'
import List from '@/views/List.vue'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'hash',
  routes: [
    { path: '/Index',name:'Index',meta: { title: "全部预警" }, component: Index},
    { path: '/SelectCinema',name:'SelectCinema',meta: { title: "选择影院" }, component: SelectCinema},
    { path: '/Detail',name:'Detail',meta: { title: "预警详情" }, component: Detail},
    { path: '/List',name:'List',meta: { title: "预警列表" }, component: List},
    { path: '/*', redirect: '/List'}
  ]
})

router.beforeEach((to, from, next) => {
  if(to.query.openId){
    localStorage.setItem("openId",to.query.openId)
  }
  let title = to.query.title ? to.query.title : (to.meta.title ? to.meta.title : '')
  setTitle(title)
  next()
})


export default router