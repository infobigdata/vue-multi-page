import * as types from '../mutation-types'
import api from '../api'
/**
 *
 * @通用配置；
 */
  const isObjetEmpty = (e)=>{
   for(var i in e){
     return false
   }
  return true
}
const state={
  shosho:{},
  echartsList:{},
  screenState:{
      type:false,
      titles:'',
      charts:{}
  },
  echartsData:{
      titles:'',
      id:'',
      data:{}
  }
}

const actions = {
  getShoso({commit},params){

         //console.log(params.keyValue)
        api.shoso(params).then((res)=>{
             commit(types.SHO_SOKEY,res)
        }).catch((err)=>{
          console.log(err)
        })
  },
    onscreen({commit},params){
       commit(types.SHOW_SCREEN,params)
    },
    echartsData({commit},params){
        commit(types.ECHART_DATA,params)
    }
}

const mutations={
    [types.SHO_SOKEY](state,res){
      state.shosho = res
    },
    [types.SHOW_SCREEN](state,res){
        state.screenState.type = res.typeState
        state.screenState.titles = res.title
        state.screenState.charts = res.echarts
    },
    [types.ECHART_DATA](state,res){
        state.echartsData.id = res.id;
        state.echartsData.data = res.opitions;
        state.echartsData.titles = res.title;
    }
}

const getters = {
     getshosoValue:state=>{
       if(!isObjetEmpty(state.shosho)){
         return state.shosho
       }
       return ''
     },
    getScreenState:state=>state.screenState,

    getEchartsData:state=>state.echartsData

}

export default{
  state,
  actions,
  mutations,
  getters
}


