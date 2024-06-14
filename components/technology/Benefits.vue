<template>
  <section id="benefits" class="wrapper mt-8">
    <div class="container__wrapper flex flex-col gap-16">
      <h2 class="section__heading">Benefits of ReactJS Web Development</h2>
      <div class="flex flex-col gap-4 lg:flex-row xl:gap-8">
        <img
          src="~/assets/images/content.png"
          alt="Content"
          class="lg:order-last"
        />
        <div class="flex flex-col gap-4">
          <Accordion
            v-for="accordion in accordions"
            :key="accordion.id"
            v-bind="accordion"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const accordions = [
  {
    title: "Interactive and Engaging Web Apps",
    info: "ReactJS excels at creating dynamic interfaces. Its component-based architecture allows for smooth transitions and updates, keeping your users engaged and providing a delightful user experience.",
    isOpen: true,
  },
  {
    title: "Easy to Learn and Use",
    info: "ReactJS is known for its simplicity and ease of use. It allows developers to create complex applications with minimal effort, making it a popular choice for web development.",
  },
];
</script>

<style scoped></style>
