import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    initialNumber : 0,
    onlineUsers : [], 
    messages : []
  },
  mutations: {
    'SOCKET_USER_CONNECTED' (state, payload) { 
      state.onlineUsers = payload,
      state.messages = payload
    }
  },
  actions: {
    randomNumber (context) { 
      const random = Math.floor(Math.random()* 6) 
    }
  },
  modules: {
  }
})
