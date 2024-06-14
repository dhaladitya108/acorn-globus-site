<template>
  <ServicesHero />
  <Testimonials />
  <WhyChooseUs />
  <DevelopmentServices />
  <ServicesProcess />
  <TechStack />
  <Expertise />
</template>

<script setup>
import Testimonials from "~/components/Testimonials.vue";
import WhyChooseUs from "~/components/services/WhyChooseUs.vue";
import DevelopmentServices from "~/components/services/DevelopmentServices.vue";

useHead({
  title: "Web Application Development Company | Acorn Globus",
  meta: [
    {
      name: "description",
      content:
        "Acorn Globus is a well-recognized web application development company that offers tech-driven and modern web app solutions to businesses and startups.",
    },
  ],
  link: [{ rel: "canonical", href: "https://www.acronglobus.com/services" }],
});
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
