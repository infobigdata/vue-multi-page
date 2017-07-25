import Vue from 'vue'
import App from './modelApp.vue'
import VueRouter from 'vue-router'
import '@/assets/less/common.less'
import '@/assets/css/modestyles.css'
import store from '@/store/index'
import {mapGetters} from 'vuex'
const Haeder = resolve => require(['@/components/listing/header.vue'],resolve)
const Leftnav = resolve => require(['@/components/listing/leftnav.vue'],resolve)
const Modetable = resolve => require(['./modelApp.vue'],resolve)
const Screen = resolve => require(['./components/screen.vue'],resolve)
const Prompts = resolve => require(['./components/Prompt.vue'],resolve)

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
    <Haeder :titlestate="screestate"></Haeder>
    <Leftnav></Leftnav>
    <Prompts :DataMsg="disprops"></Prompts>
    <Modetable @prompt="propsData"></Modetable>
    <Screen v-if="screestate.type" :chartsData="screestate"></Screen>
    </div>`,
     data(){
       return{
         //showscreen:false
           disprops:''
        }
     },
      methods:{
          propsData(b){
              //console.log(b)
            this.disprops = b
              //console.log(this.disprops)
          }
      },
      computed:{
       ...mapGetters({screestate:'getScreenState'})
      },
    components:{
      Haeder,
      Leftnav,
      Modetable,
        Screen,
        Prompts
    }
})


