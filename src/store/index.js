import Vue from 'vue';
import Vuex from 'vuex';

import login from './modules/login'
import listing from './modules/listing'

Vue.use(Vuex);

export default  new Vuex.Store({
    modules:{
      login,
      listing
    }
})
