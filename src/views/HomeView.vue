<template>
  <div>
    <NavLinks @showAll="showAllProducts"/>
    <form>
      <div class="input-group mb-3">
        <input v-model.lazy="inputFilter" type="text" class="form-control" placeholder="Search by name..." aria-label="Recipient's username" aria-describedby="button-addon2" minlength="3">
        <button class="btn btn-outline-secondary" type="button" @click="validateInput" id="button-addon2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
        </button>
      </div>
    </form>
    <!--<PageNavigation v-for="product in products" :key="product.id" :page="product"/>-->
    <div class="home">
      <div v-if="isLoading"> Cargando... </div>
      <div class="product-list" v-else>
        <ProductItem v-for="product in products" :key="product.id" :product="product" @goDetail="goDetail"/>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ProductItem from '../components/ProductItem.vue';
import useProducts from '../composables/useProducts';
//import PageNavigation from '../components/PageNavigation.vue';
import { Product } from '../models/product';
import { useRouter } from 'vue-router';
import NavLinks from "../components/NavLinks.vue";

export default defineComponent({
  name: 'HomeView',
  components: {
    ProductItem,
    NavLinks,
    //PageNavigation,
  },
  setup(){
    const {products, isLoading, fetchProducts, fetchProductByTitle} = useProducts();
    const router = useRouter();
    let inputFilter = ref("");
    const productsArray = products.value;

    const validateInput = () => {
      if(inputFilter.value.length<3){
        alert("Please, enter at least 3 letters.")
      }else{
        const filter = inputFilter.value.charAt(0).toUpperCase() + inputFilter.value.slice(1);
        for(let i = 0; i < productsArray.length; i++){
          if (productsArray[i].title.includes(filter)){
            const titleArray = productsArray[i].title.split(" ");
            for(let j = 0; j < titleArray.length; j++){
              if(titleArray[j].includes(filter)){
                fetchProductByTitle(titleArray[j]);
              }
            }
          }
        }
      }
    }

    const showAllProducts = () => {
      fetchProducts();
    }

    fetchProducts();
    
    return {
      products, 
      isLoading,
      goDetail: (product: Product)=> router.push({name: 'detail', params: {id: product.id}}),
      inputFilter,
      validateInput,
      showAllProducts
    }
  }
});
</script>

<style scoped>
.product-list{
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  gap: 1rem 1rem;
}
</style>
