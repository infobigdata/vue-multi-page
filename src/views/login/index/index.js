import Vue from 'vue'
import { C } from 'assets/js/base'

require('./less/login.less')

import App from './indexApp'

new Vue({
  render: h => h(App)
}).$mount('#login')
