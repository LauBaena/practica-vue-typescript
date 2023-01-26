import { GetterTree } from 'vuex';
import { IAuthUserState } from './state';
import { IState } from '../index';

const getters: GetterTree<IAuthUserState, IState> = {
    //Definimos los getters de las propiedades del store authUser
    getToken(state){
        return state.token;
    },
    getAuthUser(state) {
        return state.authUser;
    },
    getIsLoading(state){
        return state.isLoading;
    }
};

export default getters;