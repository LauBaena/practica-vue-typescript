<template>
    <div class="card">
        <slot name="image"></slot>
        <div class="card-body">
            <slot name="header"></slot>
            <slot name="body"></slot>
            <slot name="footer"></slot>
        </div>
    <!--<div class="card">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>-->
    </div>

</template>

<script lang="ts">
    import { defineComponent } from "@vue/runtime-core";

    export default defineComponent({
        name: 'CustomCard'
    });
</script>

<style scoped>
    .card{
        width: 30rem;
        min-height:200px;
        border:1px solid rgb(243, 239, 239);
        border-radius: 1rem;
        box-shadow: 0px 10px 10px rgba(110, 108, 108, 0.2);
    }
</style>