<template>
  <section id="development-services" class="wrapper md:mb-8">
    <div
      class="container__wrapper flex flex-col gap-10 lg:flex-row lg:gap-24 text-center lg:text-start"
    >
      <div class="lg:w-1/2">
        <h2 class="section__heading mx-auto max-w-lg sticky top-8 left-0">
          Our End-to-end Web Application Development Services
        </h2>
      </div>
      <div class="flex flex-col gap-8 lg:w-1/2">
        <Services.DevelopmentServicesCard
          v-for="card in cards"
          :key="card.title"
          v-bind="card"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import codeBrowserIcon from "~/assets/images/services/development-services__code-browser.svg";
import databaseIcon from "~/assets/images/services/development-services__database.svg";
import settingsIcon from "~/assets/images/services/development-services__settings.svg";
import brushIcon from "~/assets/images/services/development-services__brush.svg";
import shoppingBagIcon from "~/assets/images/services/development-services__shopping-bag.svg";

const cards = [
  {
    icon: codeBrowserIcon,
    title: "Custom Website Design & Development",
    description:
      "Don't settle for a web app based on generic templates. Our team creates unique, pixel-perfect websites that reflect your brand identity and resonate with your target audience. We combine stunning design with functionality to deliver an exceptional user experience that keeps visitors engaged and coming back for more.",
  },
  {
    icon: shoppingBagIcon,
    title: "e-Commerce Development",
    description:
      "Don't settle for a web app based on generic templates. Our team creates unique, pixel-perfect websites that reflect your brand identity and resonate with your target audience. We combine stunning design with functionality to deliver an exceptional user experience that keeps visitors engaged and coming back for more.",
  },
  {
    icon: databaseIcon,
    title: "Content Management Systems (CMS)",
    description:
      "Don't settle for a web app based on generic templates. Our team creates unique, pixel-perfect websites that reflect your brand identity and resonate with your target audience. We combine stunning design with functionality to deliver an exceptional user experience that keeps visitors engaged and coming back for more.",
  },
  {
    icon: brushIcon,
    title: "UI/UX Web Design",
    description:
      "Don't settle for a web app based on generic templates. Our team creates unique, pixel-perfect websites that reflect your brand identity and resonate with your target audience. We combine stunning design with functionality to deliver an exceptional user experience that keeps visitors engaged and coming back for more.",
  },
  {
    icon: settingsIcon,
    title: "Ongoing Maintenance & Support",
    description:
      "Don't settle for a web app based on generic templates. Our team creates unique, pixel-perfect websites that reflect your brand identity and resonate with your target audience. We combine stunning design with functionality to deliver an exceptional user experience that keeps visitors engaged and coming back for more.",
  },
];
</script>

<style scoped></style>
