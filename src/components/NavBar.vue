<!--Component que define el NavBar que estará presente en todas las vistas (se aplica directamente en la App)-->
<template>
    <nav>
        <p class="h2">             
            <img alt="Platzi logo" src="../assets/platzi_favicon.png" width = "100" height = "100">
            {{title}}
        </p>
        <h5>Your fake store</h5>
    </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface NavbarProps {
  title: string,
}

export default defineComponent({
    name: 'NavBar',
    props: {
        title: {
            type: String,
            required: true,
            default: "Platzi Store"
        },
    }
})
</script>

<style scoped>
    nav {
        width: 100%;
        height: 130px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #2c3e50;
        color: white;
        font-weight: bold;
    }
    p{
        color: white;
        padding: 10px
    }
    h5{
        padding: 20px
    }
</style>