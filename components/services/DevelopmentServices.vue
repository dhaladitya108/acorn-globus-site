<template>
  <section id="development-services">
    <div class="development-services__header">
      <p>Our End-to-end Web Application Development Services</p>
    </div>
    <div class="development-services__cards">
      <DevelopmentServicesCard
        v-for="card in cards"
        :key="card.title"
        :title="card.title"
        :description="card.description"
        :icon="card.icon"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import DevelopmentServicesCard from "~/components/services/DevelopmentServicesCard.vue";
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

<style scoped>
#development-services {
  display: flex;
  padding: 64px 80px;
  justify-content: center;
  align-items: flex-start;
  gap: 64px;
}
.development-services__header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: 35%;
  position: sticky;
}
.development-services__header > p {
  color: var(--Black, #12141d);
  text-align: start;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 56px; /* 116.667% */
}
.development-services__cards {
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 65%;
}
@media screen and (max-width: 600px) {
  #development-services {
    flex-direction: column;
    padding: 64px 24px;
    gap: 32px;
  }
  .development-services__header {
    width: 100%;
  }
  .development-services__header > p {
    text-align: center;
    font-size: 32px;
    line-height: 40px; /* 116.667% */
  }
  .development-services__cards {
    width: 100%;
  }
}
</style>
