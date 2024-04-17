<template>
  <div class="card">
    <img :src="icon" :alt="title" />
    <p>{{ title }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["title", "icon"]);
</script>

<style scoped>
.card {
  display: flex;
  width: 160px;
  height: 160px;
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  border-radius: 4px;
  background: var(--White, #FFF);
  border: none;
  outline: none;
}
.card > img {
  width: 64px;
  height: 64px;
}
.card > p {
  color: #000;
  text-align: center;
  font-family: Aileron,sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
  letter-spacing: 0;
  text-transform: uppercase;
}
</style>