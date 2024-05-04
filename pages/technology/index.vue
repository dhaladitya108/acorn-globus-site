<template>
  <section class="bg__primary position-relative overflow-hidden" id="hero">
    <Nav />
    <div class="hero">
      <div class="text-center">
        <img
            src="~/assets/images/tech-stack/react.svg"
            alt="React"
            height="80px"
            width="80px"
        />
      </div>
      <div class="container text-center mt-4">
        <h1 class="hero__heading text-center">
          ReactJS Development Company
        </h1>
        <p class="hero__subheading">
          Need a development partner for your next web project? Our ReactJS proficient developers ensure modern, standards-compliant apps.
        </p>
      </div>
      <button class="hero__btn mt-4">Get Started</button>
    </div>
    <img
        src="~/assets/images/acorn-watermark.png"
        alt="Acorn Globus Logo Watermark"
        class="hero-watermark"
    />
  </section>

  <Testimonials />

  <DevelopmentServices />

  <Benefits />

  <Expertise />

  <div class="bg__primary position-relative overflow-hidden">
    <Cta />
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

  <Footer />
</template>

<script setup lang="ts">

import Testimonials from "~/components/services/Testimonials.vue";
import DevelopmentServices from "~/components/services/DevelopmentServices.vue";
import Benefits from "~/components/technology/Benefits.vue";
</script>

<style scoped>
.hero {
  padding-top: 6.5rem;
  padding-bottom: 8.75rem;
  position: relative;
  z-index: 10;
}
.hero__heading {
  font-size: 4.5rem;
  line-height: 86px;
  font-weight: 900;
  text-transform: capitalize;
  color: white;
  margin-bottom: 2.5rem;
}
.hero__subheading {
  color: var(--White, #FFF);
  text-align: center;
  font-family: Aileron,sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 144.444% */
}
.hero__btn {
  display: flex;
  padding: 16px 20px;
  margin: 24px auto auto;
  align-items: flex-start;
  gap: 12px;
  border-radius: 4px;
  background: var(--White, #FFF);

  color: #192A52;
  font-family: Aileron,sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px; /* 136.364% */
  text-transform: capitalize;
}

@media screen and (max-width: 600px) {
  .hero__heading {
    font-size: 40px;
    line-height: normal;
  }
  .hero__subheading {
    font-size: 16px;
    line-height: 26px;
  }

  .testimonials__header > p {
    font-size: 32px;
    line-height: 40px; /* 116.667% */
  }
}
</style>