<template>
  <section id="testimonials">
    <div class="testimonials__header">
      <p>What our satisfied clients say about Acorn Globus</p>
      <button>Book a free consultation</button>
    </div>
    <div class="testimonials__cards">
      <TestimonialCard />
      <TestimonialCard />
      <TestimonialCard />
    </div>
  </section>
</template>

<script setup lang="ts">
import TestimonialCard from "~/components/services/TestimonialCard.vue";
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
</style>