import { Module } from "vuex";

import state, { ProductsStateInterface } from "./state";
import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";
import { IState } from "..";

const productsModule: Module<ProductsStateInterface, IState> = {
    namespaced: true,
    state,
    mutations,
    getters,
    actions,
}

export default productsModule;