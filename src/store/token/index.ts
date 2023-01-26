import { Module } from "vuex";

import state, { ITokenState } from "./state";
//import mutations from "./mutations";
//import getters from "./getters";
//import actions from "./actions";
import { IState } from "..";

const tokenModule: Module<ITokenState, IState> = {
    namespaced: true,
    state,
    //mutations,
    //getters,
    //actions,
}

export default tokenModule;