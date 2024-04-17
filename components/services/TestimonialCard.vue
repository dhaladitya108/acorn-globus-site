<template>
  <div class="card">
    <img class="card__rating" :src="fiveStar" alt="Five Star Rating" />
    <p class="card__text">
      I love SARK. The market is slow in some locations and booming in the big cities.It is very professional and made you feel appreciated for the work you were doing.
    </p>
    <div class="card__user">
      <img class="card__user-image" src="https://imgs.search.brave.com/uPSlvBEU0rYntBNfRATkh_KUbu3teQ7F8HIP4PvvKPM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWd2/My5mb3Rvci5jb20v/aW1hZ2VzL2NvdmVy/LXBob3RvLWltYWdl/L0ZlbWFsZS1wb3J0/cmFpdC13aXRoLWEt/dHJhbnNwYXJlbnQt/UE5HLWJhY2tncm91/bmQtZWRpdGVkLXVz/aW5nLUZvdG9yLXBo/b3RvLWVkaXRvci5q/cGc" alt="User" />
      <div class="card__user-info">
        <p class="card__user-info-name">John Doe</p>
        <p class="card__user-info-position">CEO, Acorn Globus</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import fiveStar from '~/assets/images/services/five-star.svg'
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.card {
  width: 300px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 2px solid rgba(18, 20, 29, 0.10);
  background: var(--White, #FFF);
  display: flex;
  flex-direction: column;
  padding: 18px 30px;
  outline: none;
}
.card__rating {
  width: 96px;
  height: 50px;
}
.card__user {
  display: flex;
  gap: 12px;
  margin-top: 24px;
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