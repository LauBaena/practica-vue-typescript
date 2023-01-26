<template>
    <nav>
        <p class="h2">             
            <img alt="Platzi logo" src="../assets/platzi_favicon.png" width = "100" height = "100">
            {{title}}
        </p>
        <p class="h4">{{ greeting }}</p>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface NavbarProps {
  title: string,
  greeting: string,
}

export default defineComponent({
    name: 'NavBar',
    props: {
        title: {
            type: String,
            required: true,
            default: "Platzi Store"
        },
        greeting: {
            type: String,
            default: "Welcome"
        }
    },
/*
    setup(props: NavbarProps){

    }*/
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
</style>