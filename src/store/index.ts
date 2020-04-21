import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    backgroundColor: '#ff0000',
    widgetsOnly: new URLSearchParams(location.search).get('widgetsonly') === '1'
  },
  mutations: {
    setBackground (state, background: string) {
      Vue.set(state, 'backgroundColor', background || '#ff0000')
    }
  },
  actions: {
  },
  modules: {
  }
})
