import Vue from 'vue'
import Vuex from 'vuex'
import catalog from './catalog.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    catalog
  }
})
