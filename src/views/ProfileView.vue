<!--Vista que contiene los componentes NavLinks y CustomCard (con slots) para mostrar los datos del usuario registrado-->
<template>
  <div>
    <NavLinks/>
    <div v-if="!isLoading" class="profileView">
      <CustomCard>
        <template v-slot:image>
          <div class="picture"><img :src="authUser.avatar" class="card-img-top" alt=""></div>
        </template>
        <template v-slot:header>
          <h2 class="card-title">{{ authUser.name }}</h2>
        </template>
        <template v-slot:body>
          <p class="card-text">{{ authUser.email }}</p>
        </template>
        <template v-slot:footer>
          <h2>Role: {{ authUser.role }}</h2>
        </template>
      </CustomCard>
    </div>
    <div v-else>Cargando...</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavLinks from "../components/NavLinks.vue";
import CustomCard from "../components/CustomCard.vue";
import useAuthUser from '../composables/useAuthUser';

export default defineComponent({
  name: 'ProfileView',
  components: {
        NavLinks,
        CustomCard
  },
  setup() {
    //Accedemos a los getters y actions de authUser, a través del composable useAuthUser, para acceder al usuario registrado
    const {authUser, isLoading, fetchAuthUser } = useAuthUser();
    fetchAuthUser();

    return{
      authUser, 
      isLoading, 
      fetchAuthUser
    }
  },
})
</script>

<style scoped>
.profileView{
    margin-top: -40px;
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
}
</style>

