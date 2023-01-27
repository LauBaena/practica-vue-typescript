import { Pagination } from "@/models/pagination";
import { computed } from "vue";
import { useStore } from "vuex";

const useProducts = () => {
    //Accedemos al store para usar sus getters y actions
    const store = useStore();
    return {
        //GETTERS: Accedemos a las propiedades del store products
        products: computed(()=> store.getters['products/getProducts']),
        productsFiltered: computed(()=> store.getters['products/getProductsPagination']),
        isLoading: computed(()=> store.getters['products/getIsLoading']),
        product: computed(()=> store.getters['products/getProduct']),
        productsLength: computed(()=> store.getters['products/getProductsLength']),

        //ACTIONS: Accedemos a los actions del store products
        fetchProducts: () => store.dispatch('products/fetchProducts'),
        fetchProductById: (productId: number) => store.dispatch('products/fetchProductById', productId),
        fetchProductByTitle: (productTitle: string) => store.dispatch('products/fetchProductByTitle', productTitle),
        fetchProductByPagination: (pagination: Pagination) => store.dispatch('products/fetchProductByPagination', pagination),
    }
};

export default useProducts;