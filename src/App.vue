<template>
  <div id="app">
    <header-app></header-app>
    <router-view></router-view>    
    <!-- <component v-bind:is="component"></component> -->
    <footer-app></footer-app>
  </div>
</template>

<script>
/* Header & Footer */
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

/* Components */
import Home from './components/Home.vue';

export default {
  components:{
    'header-app':Header,
    'footer-app':Footer,
    'home': Home    
  },
  data () {
    return {
      component: 'home',
    }
  }, 
}
</script>

<style>
</style>
