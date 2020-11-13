import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    initialNumber : 0,
    onlineUsers : [], 
    messages : [],
    alphabet : ''
  },
  mutations: {
    'SOCKET_USER_CONNECTED' (state, payload) { 
      state.onlineUsers = payload,
      state.messages = payload
    }, 
    setLetter (state, letter) { 
      state.alphabet = letter
    }
  },
  actions: {
    letterRandom (context) { 
      // const random = Math.ceil(Math.random()* 26)
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      const letter = characters.charAt(Math.ceil(Math.random() * 26))
      context.commit('setLetter', letter)
    }, 
  //   letterGenerator () {
  
  // }
  },
  modules: {
  }
})
