<template>
  <div>
    <NavBar/>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import  NavBar  from "./components/NavBar.vue";

export default defineComponent({
  name: 'AppComponent',
  components: {
      NavBar,
  },
  /*
  setup() {
    let navColor = ref<string>('');
    let greeting = "Welcome"
  },*/
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #05203b;
}

nav a.router-link-exact-active {
  color: #4f81b3;
}
</style>
