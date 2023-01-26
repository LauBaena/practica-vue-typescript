import { createStore } from 'vuex'
import productsModule from './products';
import authUserModule from './authUser';

//Definimos el state
export interface IState {
  greeting: string;
}

export default createStore({
  state: {
    greeting: 'Welcome to Platzi Store'
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  //Importamos al store los dos modulos creados (el store products y el store authUser)
  modules: {
    products: productsModule,
    authUser: authUserModule
  }
})
