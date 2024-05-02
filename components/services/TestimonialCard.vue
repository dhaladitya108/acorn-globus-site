<template>
  <div class="card">
    <img class="card__rating" :src="fiveStar" alt="Five Star Rating" />
    <h6 class="card__heading">
      “{{ title }}”
    </h6>
    <p class="card__text">
      {{ content }}
    </p>
    <div class="card__user">
      <img
          class="card__user-image"
          :src="avatar"
          :alt="name"
      />
      <div class="card__user-info">
        <p class="card__user-info-name">{{ name }}</p>
        <p class="card__user-info-position">{{ position }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import fiveStar from '~/assets/images/services/five-star.svg'

const props = defineProps(['name', 'position', 'avatar', 'title', 'content'])
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.card {
  width: 300px;
  border: 1px solid rgba(18, 20, 29, 0.10);
  background: var(--White, #FFF);
  display: flex;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
}
.card__rating {
  width: 96px;
  height: 42px;
}
.card__heading {
  color: var(--Primary-Black, #12141D);
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Aileron,sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 127.273% */
}
.card__text {
  color: var(--Secondary-Black, #363636);
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: "DM Sans",sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 166.667% */

}
.card__user {
  display: flex;
  width: 100%;
  gap: 12px;
  margin-top: 24px;
  align-items: flex-start;
}
.card__user-image {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.card__user-info {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0;
}
.card__user-info-name {
  color: var(--Black, #12141D);
  font-family: Inter,sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
}
.card__user-info-position {
  color: var(--Black, #12141D);
  font-family: Inter,sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  opacity: 0.7;
}
</style>