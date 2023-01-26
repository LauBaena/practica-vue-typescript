import { Product } from '@/models/product';
import { MutationTree } from 'vuex';
import { ProductsStateInterface } from './state';

const mutations: MutationTree<ProductsStateInterface> = {
    //Mutación para añadir los productos recibidos por parámetro al state
    setProducts(state: ProductsStateInterface, products: Product[]) {
        state.products = products;
    },
    //Mutación para añadir los productos recibidos por parámetro al state
    setProductsFiltered(state: ProductsStateInterface, productsFiltered: Product[]) {
        state.productsFiltered = productsFiltered;
    },
    //Mutación que pasará a true mientras se esté procesando la petición
    setIsLoading(state: ProductsStateInterface, value: boolean){
        state.isLoading = value;
    },
    //Mutación para añadir el producto recibido por parámetro al state
    setSelectedProduct(state, product: Product){
        state.selectedProduct = product;
    },
}

export default mutations;