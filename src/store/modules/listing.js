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
  echartsList:{}
}

const actions = {
  getShoso({commit},params){

         //console.log(params.keyValue)
        api.shoso(params).then((res)=>{
             commit(types.SHO_SOKEY,res)
        }).catch((err)=>{
          console.log(err)
        })

  }
}

const mutations={
    [types.SHO_SOKEY](state,res){
      state.shosho = res
    }
}

const getters = {
     getshosoValue:state=>{
       if(!isObjetEmpty(state.shosho)){
         return state.shosho
       }
       return ''
     }

}

export default{
  state,
  actions,
  mutations,
  getters
}


