<script setup>
import MainPage from './components/MainPage.vue'
import Header from './components/TheHeader.vue';
import Footer from './components/TheFooter.vue';
</script>

<template>
  <div>
  <Header />
  <RouterView />
  <Footer />
</div>
</template>

<style scoped>

</style>
