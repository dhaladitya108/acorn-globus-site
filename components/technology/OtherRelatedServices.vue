<template>
  <section id="other-related-services" class="wrapper">
    <div class="container__wrapper flex flex-col gap-8 lg:gap-16">
      <h2 class="section__heading">Other Related Services</h2>
      <div class="flex flex-col lg:flex-row gap-4">
        <div class="p-6 border border-neutral-200 rounded-lg">
          <img :src="vueIcon" alt="vue Icon" class="h-12" />
          <h3 class="text-xl font-bold mt-6">
            Interactive and Engaging Web Apps
          </h3>
          <p class="mt-2">
            ReactJS excels at creating dynamic interfaces. Its component-based
            architecture allows for smooth transitions and updates, keeping your
            users engaged and providing a delightful user experience.
          </p>
        </div>
        <div class="p-6 border border-neutral-200 rounded-lg">
          <img :src="nodeIcon" alt="Node Icon" class="h-12" />
          <h3 class="text-xl font-bold mt-6">
            Interactive and Engaging Web Apps
          </h3>
          <p class="mt-2">
            ReactJS excels at creating dynamic interfaces. Its component-based
            architecture allows for smooth transitions and updates, keeping your
            users engaged and providing a delightful user experience.
          </p>
        </div>
        <div class="p-6 border border-neutral-200 rounded-lg">
          <img :src="railsIcon" alt="Rails Icon" class="h-12" />
          <h3 class="text-xl font-bold mt-6">
            Interactive and Engaging Web Apps
          </h3>
          <p class="mt-2">
            ReactJS excels at creating dynamic interfaces. Its component-based
            architecture allows for smooth transitions and updates, keeping your
            users engaged and providing a delightful user experience.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import vueIcon from "~/assets/images/tech-stack/vue.svg";
import railsIcon from "~/assets/images/tech-stack/rails.svg";
import nodeIcon from "~/assets/images/tech-stack/node.svg";
</script>
