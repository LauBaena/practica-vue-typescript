import { UserRequest } from "@/models/userRequest";
import { computed } from "vue";
import { useStore } from "vuex";

const useAuthUser = () => {
    const store = useStore();

    return {
        //GETTERS
        token: computed(()=> store.getters['authUser/getToken']),
        authUser: computed(()=> store.getters['authUser/getAuthUser']),
        isLoading: computed(()=> store.getters['authUser/getIsLoading']),
        
        //ACTIONS
        fetchToken: (data: UserRequest) => store.dispatch('authUser/fetchToken', data),
        fetchAuthUser: (token: string) => store.dispatch('authUser/fetchAuthUser', token),
        deleteToken: () => store.dispatch('authUser/deleteToken')
    }
};

export default useAuthUser;