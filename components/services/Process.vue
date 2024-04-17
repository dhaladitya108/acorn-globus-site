<template>
  <section id="process">
    <div class="process__header">
      <p>Our process for Web App Development Services</p>
    </div>
    <div class="process__cards">
      <ProcessCard
        v-for="card in cards"
        :key="card.number"
        :number="card.number"
        :title="card.title"
        :content="card.content"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import ProcessCard from "~/components/services/ProcessCard.vue";
const cards = [
  {
    number: "01",
    title: "Define & Plan",
    content: [
        "Create low-fidelity wireframes to visualize website layout and user flow.",
        "Develop interactive prototypes to demonstrate core functionalities and interactions."
    ]
  },
  {
    number: "02",
    title: "Design & Prototype",
    content: [
      "Create low-fidelity wireframes to visualize website layout and user flow.",
      "Develop interactive prototypes to demonstrate core functionalities and interactions."
    ]
  },
  {
    number: "03",
    title: "Development & Testing",
    content: [
      "Skilled developers bring your web app to life using the latest technologies.",
      "Rigorous manual and automated testing ensure flawless functionality across devices and browsers."
    ]
  },
  {
    number: "04",
    title: "Launch & Support",
    content: [
      "Meticulous launch ensures a smooth transition to the live environment.",
      "Ongoing support addresses issues and implements updates based on user feedback."
    ]
  }
];
</script>

<style scoped>
#process {
  display: flex;
  padding: 96px 0;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  align-self: stretch;
}
.process__header {
  display: flex;
  max-width: 640px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}
.process__header > p {
  color: var(--Black, #12141D);
  text-align: center;
  font-family: Aileron,sans-serif;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 56px; /* 116.667% */
}

.process__cards {
  display: flex;
  flex-wrap: wrap;
  gap: 64px;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
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
</style>