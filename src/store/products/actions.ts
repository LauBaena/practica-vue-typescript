import fakePlatziApi from "@/api/fakePlatziApi";
import { Product } from "@/models/product";
import { AxiosResponse } from "axios";
import { ActionTree } from "vuex";
import { IState } from "..";
import { ProductsStateInterface } from "./state";

const actions: ActionTree<ProductsStateInterface, IState> = {
    async fetchProducts({commit}){
        commit('setIsLoading', true);
        const {data} = await fakePlatziApi.get<unknown, AxiosResponse<Product[]>>('/products');
        commit('setIsLoading', false);
        commit('setProducts', data);
    },

    async fetchProductById({commit}, productId: number) {
        commit('setIsLoading', true);
        const {data} = await fakePlatziApi.get<unknown, AxiosResponse<Product>>(`/products/${productId}`);
        commit('setIsLoading', false);
        commit('setSelectedProduct', data);
    },

    async fetchProductByTitle({commit}, productTitle: string) {
        commit('setIsLoading', true);
        const {data} = await fakePlatziApi.get<unknown, AxiosResponse<Product[]>>(`/products/?title=${productTitle}`);
        commit('setIsLoading', false);
        commit('setProducts', data);
    },
}

export default actions;