<template>
  <section id="expertize" class="expertize">
    <div class="container mx-auto px-4 md:px-12 text-center">
      <h2 class="subheading">Our Industry Expertise</h2>
      <div class="expertises">
        <div class="expertise">
          <img
            src="~/assets/images/expertise/healthcare.png"
            alt="healthcare"
          />
          <span>Healthcare</span>
        </div>
        <div class="expertise">
          <img src="~/assets/images/expertise/finance.png" alt="finance" />
          <span>Finance</span>
        </div>
        <div class="expertise">
          <img src="~/assets/images/expertise/hrm.png" alt="HRM" />
          <span>HRM</span>
        </div>
        <div class="expertise">
          <img src="~/assets/images/expertise/travel.png" alt="travel" />
          <span>Travel</span>
        </div>
        <div class="expertise">
          <img src="~/assets/images/expertise/logistics.png" alt="logistics" />
          <span>Logistics</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.expertises {
  width: 100%;
  margin: 64px auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 48px;
  align-self: stretch;
  flex-wrap: wrap;
  padding: 0;
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
  background: var(--White, #fff);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 2px 4px 0 rgba(0, 0, 0, 0.07);
}
.expertise img {
  width: 64px;
  height: 64px;
  aspect-ratio: 1/1;
}
@media screen and (max-width: 768px) {
  .expertises {
    gap: 16px;
  }
}

@media screen and (max-width: 576px) {
  .expertises {
    gap: 8px;
    margin: 32px auto 0;
    padding: 0 32px;
  }
  .expertise {
    padding: 0;
    gap: 8px;
    width: 120px;
    height: 120px;
  }
  .expertise img {
    width: 48px;
    height: 48px;
  }
}
</style>
