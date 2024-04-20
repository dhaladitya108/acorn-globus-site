<template>
  <section id="our-team" class="wrapper">
    <div class="container">
      <div class="head">
        <div>
          <span class="subtext">our team</span>
          <h2 class="subheading">Get to know us closer</h2>
        </div>
        <button @click="handleNext">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="23" viewBox="0 0 48 23" fill="none">
            <path d="M47.0607 12.9762C47.6464 12.3904 47.6464 11.4407 47.0607 10.8549L37.5147 1.30893C36.9289 0.723139 35.9792 0.723139 35.3934 1.30893C34.8076 1.89471 34.8076 2.84446 35.3934 3.43025L43.8787 11.9155L35.3934 20.4008C34.8076 20.9866 34.8076 21.9363 35.3934 22.5221C35.9792 23.1079 36.9289 23.1079 37.5147 22.5221L47.0607 12.9762ZM0 13.4155H46V10.4155H0V13.4155Z" fill="#B3C8F8"/>
          </svg>
        </button>
      </div>

      <Carousel
          :breakpoints="breakPoints"
          snap-align="start"
          ref="teamsCarousel"
      >
        <Slide v-for="member in teamMembers" :key="member.name">
          <div class="team__card">
            <img
                :src="getImageSource(member.profileImage)"
                :alt="member.name"
                class="pr__img"
            />
            <h4 class="pr__name mt-4">{{ member.name }}</h4>
            <p class="pr__role">{{ member.role }}</p>
          </div>
        </Slide>
      </Carousel>
    </div>
  </section>
</template>

<script setup lang="ts">
import { teamMembers } from "~/constants/team";

const breakPoints = {
  320: {
    itemsToShow: 2,
    itemsToScroll: 2,
  },
  768: {
    itemsToShow: 3,
    itemsToScroll: 3,
  },
  1024: {
    itemsToShow: 4,
    itemsToScroll: 4,
  }
};

const teamsCarousel = ref(null);

const handleNext = () => {
  teamsCarousel.value.next();
};


const getImageSource = (image) => {
  return new URL(`../assets/images/team/${image}.webp`, import.meta.url).href
};

</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.head {
  display: flex;
  justify-content: space-between;
}
.head > button {
  background: transparent;
  border: none;
  outline: none;
}

.team__card {
  margin: 1rem 0;
  padding: 1rem 1.5rem;
  transition: ease-in-out 300ms;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
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
  text-align: start;
}

.pr__role {
  font-size: 0.76rem;
  color: #192a52;
  font-weight: 600;
  width: 100%;
  text-align: start;
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