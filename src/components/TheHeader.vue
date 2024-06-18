<template>
  <div class="mainheader">
    <nav class="header-nav">
      <img src="../assets/logo.jpg" alt="JDM Exporters Logo" class="logo" />
      <div class="menu-icon" @click="toggleMenu">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
      <ul class="nav-links" :class="{ 'nav-active': isMenuOpen }">
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/Consultation">Consultation and Procurement</RouterLink></li>
        <li><RouterLink to="/contact">Contact Us</RouterLink></li>
        <li><RouterLink to="/about">About Us</RouterLink></li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<style scoped>
a {
  color: #fff;
  text-decoration: none;
}

ul {
  display: inline-flex;
  flex-wrap: wrap; /* Allow wrapping of items */
}

li {
  padding: 5px;
  list-style: none;
}

img.logo {
  width: 75px;
  height: auto;
}

.mainheader {
  background-color: #333;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../assets/lancer.png");
  background-size: cover;
  background-position: center;
  color: #fff;
  /* width: 100%; */
  height: 300px;
  top: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 20px 0 20px;
}

.header-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 20px; /* Ensure some padding on sides */
}

.nav-links {
  display: flex;
  gap: 10px;
}

.menu-icon {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.menu-icon .bar {
  width: 25px;
  height: 3px;
  background-color: #fff;
  margin: 3px 0;
}

@media (max-width: 768px) {
  .nav-links {
    flex-direction: column; /* Stack links vertically on smaller screens */
    align-items: center;
    
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    height: calc(100vh - 60px);
    background-color: rgba(0, 0, 0, 0.9);
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
    opacity: 0;
  }

  .nav-active {
    transform: translateX(0);
    opacity: 1;
  }

  .menu-icon {
    display: flex;
  }

  .header-nav {
    position: relative;
  }

  li {
    padding: 10px 0;
  }

  a {
    font-size: 14px; /* Adjust font size for smaller screens */
  }
}
</style>