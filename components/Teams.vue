<template>
  <section id="our-team" class="wrapper">
    <div class="container">
      <span class="subtext">our team</span>
      <h2 class="subheading">Get to know us closer</h2>
<!--      <VueSlickCarousel v-bind="settings">-->
<!--        <div-->
<!--            v-for="(member, index) in teamMembers"-->
<!--            :key="index"-->
<!--            class="team__card"-->
<!--        >-->
<!--          <img-->
<!--              :src="`~/assets/images/team/${member.profileImage}.webp`"-->
<!--              :alt="member.name"-->
<!--              class="pr__img"-->
<!--          />-->
<!--          <h4 class="pr__name mt-4">{{ member.name }}</h4>-->
<!--          <p class="pr__role">{{ member.role }}</p>-->
<!--          <div class="socials d-flex mt-3 d-none">-->
<!--            <img src="~/assets/images/socials/twitter.svg" alt="Twitter" />-->
<!--            <img src="~/assets/images/socials/linkedin.svg" alt="Linkedin" />-->
<!--            <img src="~/assets/images/socials/github.svg" alt="Github" />-->
<!--            <img src="~/assets/images/socials/instagram.svg" alt="Instagram" />-->
<!--          </div>-->
<!--        </div>-->
<!--      </VueSlickCarousel>-->
    </div>
  </section>
</template>

<script setup lang="ts">
import { teamMembers } from "~/constants/team";

const getImageSource = (image) => ``;
</script>

<style>
.team__card {
  margin: 1rem 0;
  padding: 1rem 1.5rem;
  transition: ease-in-out 300ms;
}

.team__card:hover {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05);
}

.pr__img {
  border-radius: 0.25em;
  filter: grayscale(100%);
  height: auto;
  width: 100%;
}

.pr__name {
  font-size: 1.5rem;
  line-height: 32px;
  color: #333333;
  font-weight: 700;
}

.pr__role {
  font-size: 0.76rem;
  line-height: 2px;
  color: #192a52;
  font-weight: 600;
}

.socials {
  gap: 1em;
}

.socials img {
  width: 32px;
  height: 32px;
}

@media screen and (max-width: 544px) {
  .team__card {
    margin: 0;
  }
}
</style>