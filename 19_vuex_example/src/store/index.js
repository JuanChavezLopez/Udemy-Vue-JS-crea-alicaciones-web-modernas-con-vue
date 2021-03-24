import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msg: 'VueX desde cero,que interesante, nos olvidamos de envio de informacion de padre a hijo y de hijo a padre',
    nombre: 'Grover',
    apellido: 'Vasquez',
    amigos: [],
    // amigo: null
  },
  mutations: {
    addAmigo(state, amigo) {
      state.amigos= [amigo, ...state.amigos];/* conbinamos el arreglo con el dato que viene de addAmigoAction */
    },
    delAmigo(state, index) {
      state.amigos.splice(index,1)
    }
  },
  actions: {
    addAmigoAction (context, amigo) {
      context.commit('addAmigo', amigo);
    },
    delAmigoAction(context, index) {
      context.commit('delAmigo', index);
    }
  },
  modules: {

  },
  getters : {
    mensaje(state) {
      return state.msg;
    },
    nombreCompleto( state) {
      return `${state.nombre} ${state.apellido}`;
    }
  }
})
