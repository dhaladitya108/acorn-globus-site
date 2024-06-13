<template>
  <section class="bg__primary relative overflow-hidden" id="hero">
    <Nav />
    <div class="hero">
      <div class="container mx-auto px-4 md:px-12 text-center">
        <h1 class="hero__heading text-center">
          Web Application Development Services
        </h1>
        <p class="hero__subheading">
          Scale your business to new heights with Acorn Globus. Our dedicated
          web app development services seamlessly grow your user base, no matter
          the size or type of your company. Create purpose based custom
          solutions to help you stand out in the market and satisfy customer
          needs. - What are the needs? Desires the project is done on time and
          is affordable?
        </p>
      </div>
    </div>
    <img
      src="~/assets/images/acorn-watermark.png"
      alt="Acorn Globus Logo Watermark"
      class="hero-watermark"
    />
  </section>

  <Testimonials />

  <WhyChooseUs />

  <DevelopmentServices />

  <Process />

  <Technologies />

  <Expertise />

  <div class="bg__primary relative overflow-hidden">
    <Cta />
    <img
      src="~/assets/images/acorn-watermark.png"
      alt="Acorn Globus Symbol Watermark"
      class="footer-watermark-acorn absolute"
      height="500"
    />
    <img
      src="~/assets/images/footer-watermark.png"
      alt="Footer Watermark"
      class="footer-watermark-geometry absolute"
    />
  </div>

  <Footer />
</template>

<script setup>
import Testimonials from "~/components/Testimonials.vue";
import WhyChooseUs from "~/components/services/WhyChooseUs.vue";
import DevelopmentServices from "~/components/services/DevelopmentServices.vue";
import Technologies from "~/components/services/Technologies.vue";
import Process from "~/components/services/Process.vue";
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
  color: white;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 144.444% */
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
