<template>
  <section id="testimonials">
    <div class="testimonials__header">
      <p>What our satisfied clients say about Acorn Globus</p>
      <button>Book a free consultation</button>
    </div>
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

<script setup lang="ts">
import TestimonialCard from "~/components/services/TestimonialCard.vue";

const testimonials = [
  {
    name: "Alon Diamant",
    position: "CTO, Selectom",
    avatar: "data:image/jpeg;base64,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",
    title: "Ankit is a very proficient developer",
    content: "Ankit is a very proficient developer, who is very quick to learn new technologies and concepts. He quickly dove in deep and generated impressive results of high quality, that are still operational to this day."
  },
  {
    name: "Enzo Zadrima",
    position: "Co-Founder & CTO, EquipmentConnect",
    avatar: "https://ankit-singhaniya.netlify.app/img/enzo.b894bf06.jpeg",
    title: "He is a gifted developer",
    content: "He is a gifted developer with a rare combination of attention to detail and overall sense for the big picture. He is very passionate about what he does and comes up proactively with improvements ideas."
  },
  {
    name: "Bogdan Arsenie",
    position: "Founder, OrganizedEffort",
    avatar: "https://ankit-singhaniya.netlify.app/img/bogdan.de700b3c.jpeg",
    title: "Ankit is my go to person",
    content: "Ankit is my go to person when I need somebody I can trust to execute any front-end project. He's super attentive, communicates effectively and he will accurately manage your expectations for his time and involvement."
  }
]
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
  color: var(--Black, #12141D);
  text-align: center;
  font-family: Aileron,sans-serif;
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
  gap: 24px;
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
    background: var(--primary, #192A52);
    color: var(--White, #FFF);
    font-family: Aileron,sans-serif;
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