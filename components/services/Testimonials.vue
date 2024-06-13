<template>
  <section id="testimonials">
    <!--    <div class="testimonials__header">-->
    <!--      <p>What our satisfied clients say about Acorn Globus</p>-->
    <!--      <button>Book a free consultation</button>-->
    <!--    </div>-->
    <div class="testimonials__cards">
      <TestimonialCard
        v-for="testimonial in testimonials"
        :key="testimonial.name"
        :name="testimonial.name"
        :position="testimonial.position"
        :avatar="testimonial.avatar"
        :title="testimonial.title"
        :content="testimonial.content"
      />
    </div>
  </section>
</template>

<script setup>
import TestimonialCard from "~/components/services/TestimonialCard.vue";

import enzo from "~/assets/images/testimonials/enzo.jpeg";
import bogdan from "~/assets/images/testimonials/bogdan.jpeg";
import alon from "~/assets/images/testimonials/alon.jpeg";

const testimonials = [
  {
    name: "Alon Diamant",
    position: "CTO, Selectom",
    avatar: alon,
    title: "Ankit is a very proficient developer",
    content:
      "Ankit is a very proficient developer, who is very quick to learn new technologies and concepts. He quickly dove in deep and generated impressive results of high quality, that are still operational to this day.",
  },
  {
    name: "Enzo Zadrima",
    position: "Co-Founder & CTO, EquipmentConnect",
    avatar: enzo,
    title: "He is a gifted developer",
    content:
      "He is a gifted developer with a rare combination of attention to detail and overall sense for the big picture. He is very passionate about what he does and comes up proactively with improvements ideas.",
  },
  {
    name: "Bogdan Arsenie",
    position: "Founder, OrganizedEffort",
    avatar: bogdan,
    title: "Ankit is my go to person",
    content:
      "Ankit is my go to person when I need somebody I can trust to execute any front-end project. He's super attentive, communicates effectively and he will accurately manage your expectations for his time and involvement.",
  },
];
</script>

<style scoped>
#testimonials {
  display: flex;
  padding: 64px 80px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  align-self: stretch;
}
.testimonials__header {
  display: flex;
  max-width: 640px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}
.testimonials__header > p {
  color: var(--Black, #12141d);
  text-align: center;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 56px; /* 116.667% */
}
.testimonials__header > button {
  display: none;
}
.testimonials__cards {
  max-width: 100%;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

@media screen and (max-width: 600px) {
  .testimonials__header > p {
    font-size: 32px;
    line-height: 40px; /* 116.667% */
  }
  .testimonials__header > button {
    display: flex;
    padding: 16px 20px;
    align-items: flex-start;
    gap: 12px;
    border-radius: 4px;
    background: var(--primary, #192a52);
    color: var(--White, #fff);
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px; /* 136.364% */
    text-transform: capitalize;
  }
}
@media screen and (max-width: 400px) {
  #testimonials {
    padding: 32px 24px;
  }
}
</style>
