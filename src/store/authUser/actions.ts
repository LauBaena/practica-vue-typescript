import fakePlatziApi from "@/api/fakePlatziApi";
import { AuthUser } from "@/models/authUser";
import { UserRequest } from "@/models/userRequest";
import router from "@/router";
import { AxiosResponse } from "axios";
import { ActionTree } from "vuex";
import { IState } from "..";
import { IAuthUserState } from "./state";

const actions: ActionTree<IAuthUserState, IState> = {
    async fetchToken({commit}, body: UserRequest){
        try {
            const { data } = await fakePlatziApi.post('/auth/login', body);
            commit('setToken', data);
            //Guardamos el token en el localStorage y redirigimos a home
            localStorage.setItem('token', data.access_token);
            router.push({name: 'home'});
        } catch(error: any) {
            console.error(error.message)
            alert('Unauthorized user')
        }
    },

    async fetchAuthUser({commit}, token: string){
        commit('setIsLoading', true);
        const {data} = await fakePlatziApi.get<unknown, AxiosResponse<AuthUser>>('/auth/profile');
        commit('setIsLoading', false);
        commit('setAuthUser', data);
        localStorage.setItem('name', data.name);
    },

    deleteToken({commit}){
        commit('deleteToken');
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        router.push({name: 'login'});
    },

}

export default actions;