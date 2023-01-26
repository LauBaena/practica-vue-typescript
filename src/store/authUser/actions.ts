import fakePlatziApi from "@/api/fakePlatziApi";
import { AuthUser } from "@/models/authUser";
import { UserRequest } from "@/models/userRequest";
import router from "@/router";
import { AxiosResponse } from "axios";
import { ActionTree } from "vuex";
import { IState } from "..";
import { IAuthUserState } from "./state";

const actions: ActionTree<IAuthUserState, IState> = {
    /*
    Action que hace la llamada a la API para acceder al token. Si el usuario y contraseña es erróneo mostramos alerta (status 401). 
    Si es correcto, usamos las mutations para guardar el token en el store. Lo guardamos en el localStorage y accedemos al home (listado de productos).
    */
    async fetchToken({commit}, body: UserRequest){
        try {
            const { data } = await fakePlatziApi.post('/auth/login', body);
            commit('setToken', data);
            localStorage.setItem('token', data.access_token);
            router.push({name: 'home'});
        } catch(error: any) {
            console.error(error.message)
            alert('401 Unauthorized user')
        }
    },

    //Action que hace la llamada a la API para acceder al usuario autorizado segun el token recibido previamente. Usamos las mutations para guardarlo. 
    async fetchAuthUser({commit}){
        commit('setIsLoading', true);
        const {data} = await fakePlatziApi.get<unknown, AxiosResponse<AuthUser>>('/auth/profile');
        commit('setIsLoading', false);
        commit('setAuthUser', data);
    },

    //Action que usa la mutation para eliminar el token del store, elimina el token del localeStorage y redirecciona al login.
    deleteToken({commit}){
        commit('deleteToken');
        localStorage.removeItem('token');
        router.push({name: 'login'});
    },
}

export default actions;