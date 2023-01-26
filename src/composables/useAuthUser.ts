import { UserRequest } from "@/models/userRequest";
import { computed } from "vue";
import { useStore } from "vuex";

const useAuthUser = () => {
    //Accedemos al store para usar sus getters y actions
    const store = useStore();
    return {
        //GETTERS: Accedemos a las propiedades del store authUser
        token: computed(()=> store.getters['authUser/getToken']),
        authUser: computed(()=> store.getters['authUser/getAuthUser']),
        isLoading: computed(()=> store.getters['authUser/getIsLoading']),
        
        //ACTIONS: Accedemos a los actions del store authUser
        fetchToken: (data: UserRequest) => store.dispatch('authUser/fetchToken', data),
        fetchAuthUser: () => store.dispatch('authUser/fetchAuthUser'),
        deleteToken: () => store.dispatch('authUser/deleteToken')
    }
};

export default useAuthUser;