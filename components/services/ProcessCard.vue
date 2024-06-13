<template>
  <div class="card">
    <div class="card__number">{{ props.number }}</div>
    <div class="card__title">{{ props.title }}</div>
    <div class="card__content">
      <ul>
        <li v-for="item in props.content" :key="item">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["number", "title", "content"]);
</script>

<style scoped>
.card {
  display: flex;
  padding: 40px 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
  border-radius: 8px;
  border: 1px solid #e2e2e2;
  background: white;
  box-shadow: 0 4px 7px 0 rgba(0, 0, 0, 0.03);
  width: 400px;
  max-width: 1200px;
  outline: none;
}
.card__number {
  color: var(--primary, #192a52);
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px; /* 54.167% */
  letter-spacing: 1px;
}
.card__title {
  color: var(--Primary-Dark-Green, #071e0c);
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px; /* 200% */
  letter-spacing: 0;
}
.card__content {
  color: var(--Primary-Dark-Green, #071e0c);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px; /* 168.75% */
  letter-spacing: 0;
}

@media screen and (max-width: 400px) {
  .card {
    width: 100%;
    gap: 16px;
    padding: 24px;
  }
  .card__number {
    font-size: 32px;
  }
  .card__title {
    font-size: 16px;
  }
  .card__content {
    font-size: 14px;
  }
}
</style>
