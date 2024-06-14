<template>
  <section id="process" class="wrapper">
    <div class="container__wrapper">
      <h2 class="section__heading text-center">
        Our process for Web App Development Services
      </h2>
      <div class="grid gap-8 grid-cols-1 md:grid-cols-2 mt-12">
        <ProcessCard v-for="card in cards" :key="card.number" v-bind="card" />
      </div>
    </div>
  </section>
</template>

<script setup>
import ProcessCard from "~/components/services/ProcessCard.vue";
const cards = [
  {
    number: "01",
    title: "Define & Plan",
    content: [
      "Create low-fidelity wireframes to visualize website layout and user flow.",
      "Develop interactive prototypes to demonstrate core functionalities and interactions.",
    ],
  },
  {
    number: "02",
    title: "Design & Prototype",
    content: [
      "Create low-fidelity wireframes to visualize website layout and user flow.",
      "Develop interactive prototypes to demonstrate core functionalities and interactions.",
    ],
  },
  {
    number: "03",
    title: "Development & Testing",
    content: [
      "Skilled developers bring your web app to life using the latest technologies.",
      "Rigorous manual and automated testing ensure flawless functionality across devices and browsers.",
    ],
  },
  {
    number: "04",
    title: "Launch & Support",
    content: [
      "Meticulous launch ensures a smooth transition to the live environment.",
      "Ongoing support addresses issues and implements updates based on user feedback.",
    ],
  },
];
</script>

<style scoped>
.process__header > p {
  color: var(--Black, #12141d);
  text-align: center;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 56px; /* 116.667% */
}

@media screen and (max-width: 600px) {
  #process {
    padding: 64px 0;
  }
  .process__header > p {
    font-size: 32px;
    line-height: 40px; /* 116.667% */
  }
}

@media screen and (max-width: 400px) {
  .process__header > p {
    font-size: 32px;
    line-height: 32px; /* 133.333% */
    padding: 0 12px;
  }
}
</style>
