import Vue from 'vue'
import iView from 'iview'
import ElementUI from 'element-ui'

Vue.use(iView)
Vue.use(ElementUI)

import C from 'assets/js/common'

require('assets/less/common.less')
import 'iview/dist/styles/iview.css'
import 'element-ui/lib/theme-default/index.css'

export default {
  Vue,C
}
