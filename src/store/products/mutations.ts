import { Product } from '@/models/product';
import { MutationTree } from 'vuex';
import { ProductsStateInterface } from './state';

const mutations: MutationTree<ProductsStateInterface> = {
    //Mutación para añadir todos los productos al state
    setProducts(state: ProductsStateInterface, products: Product[]) {
        state.products = products;
    },
    //Mutación para saber si estoy cargando la petición
    setIsLoading(state: ProductsStateInterface, value: boolean){
        state.isLoading = value;
    },
    setSelectedProduct(state, product: Product){
        state.selectedProduct = product;
    },
}

export default mutations;