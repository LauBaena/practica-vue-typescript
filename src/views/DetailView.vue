<!--Vista que contiene los componentes NavLinks y CustomCard (con slots) para mostrar el detalle del producto seleccionado-->
<template>
    <div>
        <NavLinks/>
        <div v-if="!isLoading" class="detailView">
            <CustomCard>
                <template v-slot:image>
                    <div v-if="!activePic" class="profile">
                        <div class="picture"><img :src="product.images[0]" class="card-img-top" alt=""></div>
                    </div>
                    <div v-else>
                        <div class="picture"><img :src="activePic" class="card-img-top" alt=""></div>
                    </div> 
                    <div class="pictures">
                        <div v-for="(image, index) in product.images" :key="index">
                                <img :src=image class="card-img-top" @click="changeActivePic(index)">
                        </div>
                    </div>
                </template>
                <template v-slot:header>
                    <h2 class="card-title">{{ product.id }}. {{ product.title }}</h2>
                </template>
                <template v-slot:body>
                    <p class="card-text">{{ product.description }}</p>
                </template>
                <template v-slot:footer>
                    <h2>Price: {{ product.price }}$</h2>
                </template>
            </CustomCard>
        </div>
        <div v-else>Cargando...</div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, onMounted, ref } from 'vue';
import useProducts from '../composables/useProducts';
import NavLinks from "../components/NavLinks.vue";
import CustomCard from "../components/CustomCard.vue";

export default defineComponent({
    name: 'DetailView',
    components: {
        NavLinks,
        CustomCard,
    },
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    setup(props) {
        //Accedemos a los getters y actions a través del composable useProducts, con los que accederemos al producto seleccionado por el usuario
        const {product, fetchProductById, isLoading} = useProducts();
        fetchProductById(props.id);
        //Evento lanzado cuando el usuario clica sobre una de las imagenes. Hace que la imagen principal sea la seleccionada. 
        let activePic = ref();   
        const changeActivePic = (index: number) => {
            activePic.value = product.value.images[index];
        }
        return {
            product,
            isLoading,
            activePic,
            changeActivePic
        }
    }
})
</script>

<style scoped>
.detailView{
    margin-top: -40px;
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
}
.pictures{
    width: 900px;
    display:flex;
}

.pictures img{
    width: 150px;
    margin:5px;
    border-radius: 8px;
}
</style>