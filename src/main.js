import Vue from 'vue'
import App from './App'
import router from './router'
import * as util from './utils'

import {XButton} from 'vux'
import  {ToastPlugin} from 'vux'

Vue.component('x-button', XButton);

Vue.use(ToastPlugin);

Vue.prototype.$util = util //工具类

window._vue = new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')


