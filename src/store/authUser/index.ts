import { Module } from "vuex";

import state, { IAuthUserState } from "./state";
import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";
import { IState } from "..";

const authUserModule: Module<IAuthUserState, IState> = {
    namespaced: true,
    state,
    mutations,
    getters,
    actions,
}

export default authUserModule;