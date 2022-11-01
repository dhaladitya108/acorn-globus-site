<template>
  <NuxtLink
    :to="{ name: 'blog-slug', params: { slug: article.slug } }"
    class="d-flex flex-column flex-md-row gap-md-4 gap-3 blog__card"
  >
    <img src="@/assets/images/blog/abstract1.png" alt="Abstract Image" />
    <div class="d-flex flex-column overflow-hidden">
      <div class="d-flex align-items-center gap-3">
        <span class="badge">{{ article.topic }}</span>
        <span class="sm__text">{{ article.readingStats.text }}</span>
      </div>
      <h2 class="blog__heading my-2">
        {{ article.title }}
      </h2>
      <h3 class="name__text mt-2">{{ article.author }}</h3>
      <span class="sm__text">{{ formatDate(article.createdAt) }}</span>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: ["article"],
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
};
</script>

<style scoped>
.blog__card {
  color: var(--clr-primary);
  text-decoration: none;
}

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
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
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
