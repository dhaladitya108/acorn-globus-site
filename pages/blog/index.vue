<template>
  <div>
    <div class="bg__primary">
      <Nav />
    </div>
    <div class="relative overflow-hidden mb-5 pb-5">
      <h1 class="big__heading my-20 text-center">Our Blog</h1>
      <div class="flex flex-col gap-16 container__wrapper">
        <BlogCard
          v-for="article in articles"
          :key="article.title"
          :article="article"
        />
      </div>
      <img
        src="@/assets/images/acorn-light-watermark.png"
        alt="Acorn Watermark"
        class="absolute acorn-light-watermark"
      />
    </div>
    <div class="bg__primary relative overflow-hidden">
      <Cta />

      <img
        src="@/assets/images/acorn-watermark.png"
        alt="Acorn Globus Symbol Watermark"
        class="footer-watermark-acorn absolute"
        height="500"
      />
      <img
        src="@/assets/images/footer-watermark.png"
        alt="Footer Watermark"
        class="footer-watermark-geometry absolute"
      />
    </div>

    <Footer />
  </div>
</template>

<script setup>
import BlogCard from "~/components/blog/BlogCard.vue";

let { data: articles } = await useAsyncData("articles-list", () =>
  queryContent("blog").find()
);
articles = articles.value;

articles.forEach((article) => {
  article.slug = article._path.replace("/blog/", "");
});
</script>

<style>
.big__heading {
  font-size: 4.5rem;
  line-height: 86px;
  font-weight: 900;
  text-transform: capitalize;
}

.my-20 {
  margin-block: 80px;
}

.gap-16 {
  gap: 64px;
}

.acorn-light-watermark {
  top: 36px;
  z-index: -1;
}

@media screen and (max-width: 768px) {
  .big__heading {
    font-size: 48px;
    line-height: 56px;
    font-weight: 700;
  }
}
</style>
