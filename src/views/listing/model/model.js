import Vue from 'vue'
import App from './modelApp.vue'
import VueRouter from 'vue-router'
import '@/assets/css/common.less'
import '@/assets/css/modestyles.css'
import store from '@/store/index'
const Haeder = resolve => require(['@/components/listing/header.vue'],resolve)
const Leftnav = resolve => require(['@/components/listing/leftnav.vue'],resolve)
const Modetable = resolve => require(['./modelApp.vue'],resolve)

Vue.use(VueRouter)
//const router = new VueRouter({
//    //mode:"history",
//    routes:[
//      {
//      path:'/',
//      component:resolve => require(['./modelApp.vue'],resolve)
//      }
//    ]
//    })

  new Vue({
    el:'#app',
    store,
    //router
    //render: h => h(App)
    template:`<div class="listing_mode_page">
    <Haeder></Haeder>
    <Leftnav></Leftnav>
    <Modetable></Modetable>
    </div>`,
    components:{
      Haeder,
      Leftnav,
      Modetable
    }
})
