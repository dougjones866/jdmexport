<template>
  <div>
  
    <div class="main-content">
      <h2>Welcome to JDM Exporters - Your Gateway to Japanese Cars!</h2>
      <p>
        At JDM Exporters, we specialize in connecting enthusiasts and buyers
        worldwide with the finest selection of Japanese Domestic Market (JDM)
        vehicles. From everyday rides to high-performance sports cars and
        adapted vehicles for individuals with special needs, we offer an
        extensive inventory to cater to diverse preferences and requirements.
      </p>
    <div class = "car1">
      <img src="../assets/car1.jpg" alt="JDM Vehicles" />
      </div>
      <p>
        Discover our diverse inventory, catering to every driving need and
        preference:
      </p>
      <p>
        Embark on your daily commute with confidence, as our selection of
        everyday commuters includes reliable sedans, hatchbacks, and compact
        cars from top Japanese brands renowned for their durability, efficiency,
        and innovation.
      </p>
      <p>
        For those craving adrenaline-fueled thrills, our curated collection of
        sports and performance cars awaits. From iconic models to limited
        editions, each vehicle is designed to deliver unmatched performance and
        exceptional handling, whether on the track or the open road.
      </p>
      <p>
        At JDM Exporters, inclusivity is paramount. That's why we take pride in
        offering adapted vehicles designed to accommodate individuals with
        disabilities. Meticulously crafted for comfort, safety, and freedom of
        mobility, these vehicles ensure every driver can experience the joy of
        hitting the road.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<style scoped>

.main-content {
  margin-top: 100px; /* This should be slightly more than the header height */
  padding: 20px;
}
.car1 img {
  width: 100%;
  height: auto;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>