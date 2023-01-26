import fakePlatziApi from "@/api/fakePlatziApi";
import { Pagination } from "@/models/pagination";
import { Product } from "@/models/product";
import { AxiosResponse } from "axios";
import { ActionTree } from "vuex";
import { IState } from "..";
import { ProductsStateInterface } from "./state";

const actions: ActionTree<ProductsStateInterface, IState> = {
    //Action que hace la llamada a la API para acceder a todos los productos. Usamos las mutations para guardarlos. 
    async fetchProducts({commit}){
        commit('setIsLoading', true);
        const {data} = await fakePlatziApi.get<unknown, AxiosResponse<Product[]>>('/products');
        commit('setIsLoading', false);
        commit('setProducts', data);
    },

    //Action que hace la llamada a la API para acceder a un producto segun su id. Usamos las mutations para guardarlo. 
    async fetchProductById({commit}, productId: number) {
        commit('setIsLoading', true);
        const {data} = await fakePlatziApi.get<unknown, AxiosResponse<Product>>(`/products/${productId}`);
        commit('setIsLoading', false);
        commit('setSelectedProduct', data);
    },

    //Action que hace la llamada a la API para acceder a todos los productos que tengan la palabra específica en su título. Usamos las mutations para guardarlos. 
    async fetchProductByTitle({commit}, productTitle: string) {
        commit('setIsLoading', true);
        const {data} = await fakePlatziApi.get<unknown, AxiosResponse<Product[]>>(`/products/?title=${productTitle}`);
        commit('setIsLoading', false);
        commit('setProductsFiltered', data);
    },

    //Action que hace la llamada a la API para acceder a todos los productos segun offset y limit. Usamos las mutations para guardarlos. 
    async fetchProductByPagination({commit}, pagination: Pagination) {
            commit('setIsLoading', true);
            const {data} = await fakePlatziApi.get<unknown, AxiosResponse<Product[]>>(`/products?offset=${pagination.offset}&limit=${pagination.limit}`);
            commit('setIsLoading', false);
            commit('setProductsFiltered', data);
    },
}

export default actions;