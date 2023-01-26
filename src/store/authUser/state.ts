import { AuthUser } from "@/models/authUser";
import { Token } from "@/models/token";

//Definimos las propiedades del state de authUser
export interface IAuthUserState {
    token: Token | null;
    authUser: AuthUser | null;
    isLoading: boolean;
}

//Inicializamos las propiedades
function state(): IAuthUserState {
    return {
        token: null,
        authUser: null,
        isLoading: false, 
    }
}

export default state;