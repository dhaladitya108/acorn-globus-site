<template>
  <section id="why-choose-us" class="bg__secondary wrapper my-8">
    <div class="container__wrapper">
      <h2 class="section__heading text-center mb-14">
        Why Choose Acorn Globus as Your Web Development Agency
      </h2>
      <div class="why-choose-us__cards">
        <WhyChooseUsCard
          v-for="card in cards"
          :key="card.title"
          :icon="card.icon"
          :title="card.title"
          :description="card.description"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import WhyChooseUsCard from "~/components/services/WhyChooseUsCard.vue";
import lineChartUpIcon from "~/assets/images/services/why-choose-us__line-chart-up.svg";
import phoneIcon from "~/assets/images/services/why-choose-us__phone.svg";
import searchRefractionIcon from "~/assets/images/services/why-choose-us__search-refraction.svg";
import shieldTickIcon from "~/assets/images/services/why-choose-us__shield-tick.svg";
import lighteningIcon from "~/assets/images/services/lightening.svg";
import brushIcon from "~/assets/images/services/brush.svg";

const cards = [
  {
    icon: lineChartUpIcon,
    title: "Increased Conversion Rates",
    description:
      "Our data-driven approach ensures your web app converts visitors into leads and customers.",
  },
  {
    icon: brushIcon,
    title: "Enhanced User Experience",
    description:
      "We design user-friendly web apps that are a joy to navigate and interact.",
  },
  {
    icon: phoneIcon,
    title: "Mobile-Responsive Design",
    description:
      "Your web app will look flawless on all devices, from desktops to smartphones",
  },
  {
    icon: searchRefractionIcon,
    title: "Search Engine Optimization",
    description:
      "We optimize your website to rank higher in search results, driving organic traffic.",
  },
  {
    icon: shieldTickIcon,
    title: "Scalability and Security",
    description:
      "Our solutions are built to grow with your business and prioritize robust security measures.",
  },
  {
    icon: lighteningIcon,
    title: "Skilled Talent",
    description:
      "Our most prized possession is the talented group of hard working individuals that could be working for you.",
  },
];
</script>

<style scoped>
#why-choose-us {
  display: flex;
  padding: 96px 0;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  align-self: stretch;
  background: #fafbff;
}
.why-choose-us__header {
  display: flex;
  max-width: 640px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}
.why-choose-us__header > p {
  color: var(--Black, #12141d);
  text-align: center;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 56px; /* 116.667% */
}

.why-choose-us__cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 32px;
  max-width: 1200px;
  width: 100%;
  padding: 0 32px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

@media screen and (max-width: 767px) {
  .why-choose-us__cards {
    gap: 56px;
  }
}

@media screen and (max-width: 600px) {
  #why-choose-us {
    padding: 64px 16px;
  }
  .why-choose-us__header > p {
    font-size: 32px;
    line-height: 40px; /* 116.667% */
  }
}
</style>
