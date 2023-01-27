<!--Vista que contiene los componentes NavLinks y ProductItem y el form para el filtrado por título-->
<template>
  <div>
    <NavLinks @showAll="showAllProducts"/>
    <form @submit.prevent="validateInput">
      <div class="input-group mb-3">
        <input v-model.lazy="inputFilter" type="text" class="form-control" placeholder="Search by name..." aria-label="Recipient's username" aria-describedby="button-addon2" minlength="3">
        <button class="btn btn-outline-secondary" type="submit" id="button-addon2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
        </button>
      </div>
    </form>
    <NavigationButtons @previous="showPrevious" @next="showNext"/>
    <div class="home">
      <div v-if="isLoading"> Cargando... </div>
      <div class="product-list" v-else>
        <ProductItem v-for="product in productsFiltered" :key="product.id" :product="product" @goDetail="goDetail"/>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue';
import ProductItem from '../components/ProductItem.vue';
import useProducts from '../composables/useProducts';
import NavigationButtons from '../components/NavigationButtons.vue';
import { Product } from '../models/product';
import { useRouter } from 'vue-router';
import NavLinks from "../components/NavLinks.vue";

export default defineComponent({
  name: 'HomeView',
  components: {
    ProductItem,
    NavLinks,
    NavigationButtons,
  },
  setup(){
    //Accedemos a los getters y actions de products, a través del composable useProducts
    const {products, productsFiltered, isLoading, productsLength, fetchProducts, fetchProductByTitle, fetchProductByPagination } = useProducts();
    const router = useRouter();
    //Cargamos la lista completa de productos de la API para poder filtrar por título
    fetchProducts();
    let inputFilter = ref("");

    //Tanto al cargar la vista como al clicar sobre el enlace 'All products', accederemos a los primeros 20 productos de la API 
    const limitShow = 20;
    const showAllProducts = () => {
      fetchProductByPagination({offset: 0, limit: limitShow});
    }
    fetchProductByPagination({offset: 0, limit: limitShow});

    //Evento que se lanza al hacer submit para filtrar productos por título. 
    const validateInput = () => {
      const filter = inputFilter.value.toLowerCase();
      //Recorremos todos los productos para comprovar los que contienen el string introducido por el usuario 
      for(let i = 0; i < productsLength.value; i++){
        if (products.value[i].title.toLowerCase().includes(filter)){    
          //Entre los productos que lo contienen, dividimos por palabras el título de éstos
          const titleArray = products.value[i].title.split(" ");
          for(let j = 0; j < titleArray.length; j++){
            //Seleccionamos la palabra exacta que contiene el string y hacemos la llamada a la API que devolverá los productos filtrados
            if(titleArray[j].toLowerCase().includes(filter)){
              fetchProductByTitle(titleArray[j]);
            }
          }
        }
      }
    }
    //Evento que se lanza al hacer click en 'See previous 20' para mostrar los anteriores 20 productos. 
    let offset = 0;
    const showPrevious = () =>{
      if (offset == 0){
        alert('There are no more previous products')
      }else{
        offset = offset - 20;
        fetchProductByPagination({offset: offset, limit: limitShow});
      }
    }
  
    //Evento que se lanza al hacer click en 'See next 20' para mostrar los siguientes 20 productos. 
    const showNext = () =>{
      if (offset >= productsLength.value){
        alert('There are no more products')
      }else{
        offset = offset + 20;
        fetchProductByPagination({offset: offset, limit: limitShow});
      }
    }

    return {
      products,
      productsFiltered, 
      isLoading,
      goDetail: (product: Product)=> router.push({name: 'detail', params: {id: product.id}}),
      inputFilter,
      validateInput,
      showAllProducts,
      showPrevious,
      showNext
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
