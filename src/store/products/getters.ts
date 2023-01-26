import { GetterTree } from 'vuex';
import { ProductsStateInterface } from './state';
import { IState } from '../index';

const getters: GetterTree<ProductsStateInterface, IState> = {
    getProducts(state) {
        return state.products;
    },

    getIsLoading(state){
        return state.isLoading;
    },
    getProduct(state){
        return state.selectedProduct;
    },
};

export default getters;