<template>
  <div class="d-flex flex-column flex-md-row gap-md-4 gap-3">
    <img src="@/assets/images/blog/abstract1.png" alt="Abstract Image" />
    <div class="d-flex flex-column">
      <div class="d-flex align-items-center gap-3">
        <span class="badge">{{ article.topic }}</span>
        <span class="sm__text">{{ article.timeToRead }}</span>
      </div>
      <h2 class="blog__heading my-2">
        {{ article.title }}
      </h2>
      <h3 class="name__text mt-2">{{ article.author }}</h3>
      <span class="sm__text">{{ article.date }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["article"],
};
</script>

<style scoped>
.badge {
  font-size: 14px;
  line-height: 21px;
  color: var(--clr-primary);
  padding: 4px 8px;
  border: 1px solid var(--clr-primary);
  text-transform: capitalize;
}

.blog__heading {
  font-size: 28px;
  line-height: 36px;
  font-weight: 700;
}

.sm__text {
  font-size: 14px;
  line-height: 21px;
}

.name__text {
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;
  margin: 0;
}
</style>
