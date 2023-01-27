import { GetterTree } from 'vuex';
import { ProductsStateInterface } from './state';
import { IState } from '../index';

const getters: GetterTree<ProductsStateInterface, IState> = {
    //Definimos los getters de las propiedades del store products
    getProducts(state) {
        return state.products;
    },
    getProductsPagination(state) {
        return state.productsFiltered;
    },
    getIsLoading(state){
        return state.isLoading;
    },
    getProduct(state){
        return state.selectedProduct;
    },
    getProductsLength(state){
        return state.products.length;
    }
};

export default getters;