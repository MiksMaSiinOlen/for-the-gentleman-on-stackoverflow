<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <PageHeader/>
  <PageFooter/>
  <MainPageSidenavs/>
  <MainPageBody/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MainPageBody from './components/MainPageBody.vue';
import PageHeader from './components/PageHeader.vue';
import PageFooter from './components/PageFooter.vue';
import MainPageSidenavs from './components/MainPageSidenavs.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    PageHeader,
    PageFooter,
    MainPageSidenavs,
    MainPageBody
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
