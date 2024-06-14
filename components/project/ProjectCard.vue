<template>
  <div class="project__card grid grid-cols-1 lg:grid-cols-2 p-6 rounded-lg">
    <div
      class="bg-primary-light p-10 rounded-lg"
      :class="{ 'lg:order-last': imgPosition === 'right' }"
    >
      <img :src="image" alt="Cayzen" class="rounded-xl" />
    </div>
    <div
      class="flex flex-col justify-center items-center pt-8 lg:items-start gap-4 lg:p-12"
    >
      <div class="flex gap-2 items-center">
        <img :src="logo" alt="cayzen-logo" />
        <h3 class="text-3xl font-semibold">{{ title }}</h3>
      </div>
      <p class="text-center lg:text-start">
        {{ description }}
      </p>
      <div class="flex flex-wrap justify-center lg:justify-start gap-3">
        <div
          v-for="tag in tags"
          key="tag"
          class="bg-primary-light py-2 px-4 rounded-3xl uppercase text-nowrap text-sm font-medium"
        >
          {{ tag }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  logo: String,
  title: String,
  description: String,
  image: String,
  tags: Array,
  imgPosition: {
    type: String,
    default: "left",
    validator: (value) => {
      return ["left", "right"].includes(value.toLowerCase());
    },
  },
});
</script>

<style scoped>
.project__card:hover {
  box-shadow: 0px 4px 18.3px 0px rgba(0, 0, 0, 0.08),
    0px 2px 4px 0px rgba(0, 0, 0, 0.07);
}
</style>
