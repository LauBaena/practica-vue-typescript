import { createStore } from 'vuex'
import productsModule from './products';
import authUserModule from './authUser';

//Definimos el state
export interface IState {
  greeting: string;
}

export default createStore({
  state: {
    greeting: 'Bienvenidas!'
  },

  getters: {
    cambiarSaludo(state, saludo: string){
      state.greeting = saludo;
    }
  },

  mutations: {
    saludo(state){
      return state.greeting;
    }
  },

  actions: {
  },

  modules: {
    products: productsModule,
    authUser: authUserModule
  }
})
