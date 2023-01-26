import { Product } from "@/models/product";

export interface ProductsStateInterface {
    products: Product[];
    isLoading: boolean;
    selectedProduct: Product | null;
}

function state(): ProductsStateInterface {
    return {
        products: [],
        isLoading: false,
        selectedProduct: null,
    }
}

export default state;