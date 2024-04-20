<template>
  <Hero />
  <Testimonials />
  <Services />
  <Project />
  <TechStack />
  <Expertise />
  <Teams />
  <div class="bg__primary position-relative overflow-hidden">
    <Cta />
    <Footer />
    <img
        src="~/assets/images/acorn-watermark.png"
        alt="Acorn Globus Symbol Watermark"
        class="footer-watermark-acorn position-absolute"
        height="500"
    />
    <img
        src="~/assets/images/footer-watermark.png"
        alt="Footer Watermark"
        class="footer-watermark-geometry position-absolute"
    />
  </div>
</template>

<script setup lang="ts">
import Testimonials from "~/components/services/Testimonials.vue";
</script>

<style scoped>

</style>