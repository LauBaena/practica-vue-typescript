import { AuthUser } from '@/models/authUser';
import { Token } from '@/models/token';
import router from '@/router';
import { MutationTree } from 'vuex';
import { IAuthUserState } from './state';

const mutations: MutationTree<IAuthUserState> = {
    //Mutación para añadir el token recibido por parámetro al state
    setToken(state: IAuthUserState, token: Token) {
        state.token = token;
    },
    //Mutación para añadir el usuario autorizado recibido por parámetro al state
    setAuthUser(state: IAuthUserState, authUser: AuthUser) {
        state.authUser = authUser;
    },
    //Mutación que pasará a true mientras se esté procesando la petición
    setIsLoading(state: IAuthUserState, value: boolean){
        state.isLoading = value;
    },
    //Mutación que eliminará el token del store
    deleteToken(state: IAuthUserState) {
        state.token = null;
    },
}

export default mutations;