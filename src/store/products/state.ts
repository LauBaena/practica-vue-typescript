import { Product } from "@/models/product";

//Definimos las propiedades del state de product
export interface ProductsStateInterface {
    products: Product[];
    productsFiltered: Product[];
    isLoading: boolean;
    selectedProduct: Product | null;
}

//Inicializamos las propiedades
function state(): ProductsStateInterface {
    return {
        products: [],
        productsFiltered: [],
        isLoading: false,
        selectedProduct: null,
    }
}

export default state;