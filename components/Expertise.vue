<template>
  <section id="expertize" class="wrapper expertize">
    <div class="container text-center">
      <h2 class="subheading mb-4">Our Industry Expertise</h2>
      <div class="expertises">
        <div class="expertise">
          <img
            src="~/assets/images/expertise/healthcare.png"
            alt="healthcare"
          />
          <span>Healthcare</span>
        </div>
        <div class="expertise">
          <img
              src="~/assets/images/expertise/finance.png"
              alt="finance"
          />
          <span>Finance</span>
        </div>
        <div class="expertise">
          <img
              src="~/assets/images/expertise/hrm.png"
              alt="HRM"
          />
          <span>HRM</span>
        </div>
        <div class="expertise">
          <img
              src="~/assets/images/expertise/travel.png"
              alt="travel"
          />
          <span>Travel</span>
        </div>
        <div class="expertise">
          <img
              src="~/assets/images/expertise/logistics.png"
              alt="logistics"
          />
          <span>Logistics</span>
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
.expertise:hover {
  border-radius: 8px;
  background: var(--White, #FFF);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 2px 4px 0 rgba(0, 0, 0, 0.07);
}
.expertise img {
  width: 64px;
  height: 64px;
}
@media screen and (max-width: 768px) {
  .expertises {
    gap: 16px;
  }
}

@media screen and (max-width: 576px) {
  .expertises {
    gap: 8px;
  }
  .expertise {
    padding: 0;
    gap: 8px;
  }
}
</style>