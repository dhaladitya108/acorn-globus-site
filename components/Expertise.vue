<template>
  <section id="expertize" class="wrapper expertize">
    <div class="container text-center">
      <h2 class="subheading mb-4">Our Industry Expertise</h2>
      <div class="expertises">
        <div class="expertise">
          <img
            src="~/assets/images/tech-stack/vue.png"
            alt="healthcare"
          />
          <span>Healthcare</span>
        </div>
        <div class="expertise">
          <img
              src="~/assets/images/tech-stack/vue.png"
              alt="healthcare"
          />
          <span>Healthcare</span>
        </div>
        <div class="expertise">
          <img
              src="~/assets/images/tech-stack/vue.png"
              alt="healthcare"
          />
          <span>Healthcare</span>
        </div>
        <div class="expertise">
          <img
              src="~/assets/images/tech-stack/vue.png"
              alt="healthcare"
          />
          <span>Healthcare</span>
        </div>
        <div class="expertise">
          <img
              src="~/assets/images/tech-stack/vue.png"
              alt="healthcare"
          />
          <span>Healthcare</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped>
.expertises {
  width: 100%;
  margin: 64px auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 64px;
  align-self: stretch;
  flex-wrap: wrap;
}
.expertise {
  display: flex;
  width: 160px;
  height: 160px;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
}

@media screen and (max-width: 768px) {
  .expertises {
    gap: 16px;
  }
}
</style>