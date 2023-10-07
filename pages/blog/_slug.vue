<template>
  <div>
    <div class="container position-relative">
      <article
        class="container mw-840 mt-8rem"
        :class="{ 'mb-3rem': !(article.cta && article.cta.hidden) }"
      >
        <NuxtLink
          :to="`/blog/`"
          class="blog__back"
          :class="article.toc.length ? 'blog__back__margin' : ''"
        >
          <span>← Back</span>
        </NuxtLink>
        <nav
          v-if="article.toc.length"
          class="navbar navbar-expand bg-white sticky-top py-3"
        >
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a
                  class="dropdown-toggle"
                  href="#"
                  id="tocMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Table of Contents
                </a>
                <ul class="dropdown-menu" aria-labelledby="tocMenuLink">
                  <li v-for="link of article.toc" :key="link.id">
                    <NuxtLink class="dropdown-link" :to="`#${link.id}`">
                      {{ link.text }}
                    </NuxtLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
        <h1 class="mb-1 article__heading">{{ article.title }}</h1>
        <div class="d-flex sm-text my-2 datentimeToRead">
          <span>{{ formatDate(article.createdAt) }}</span>
          <span>|</span>
          <div
            class="d-flex align-items-center justify-content-center timeToRead"
          >
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.00016 2.02344C11.6802 2.02344 14.6668 5.0101 14.6668 8.6901C14.6668 12.3701 11.6802 15.3568 8.00016 15.3568C4.32016 15.3568 1.3335 12.3701 1.3335 8.6901C1.3335 5.0101 4.32016 2.02344 8.00016 2.02344ZM8.00016 14.0234C10.9468 14.0234 13.3335 11.6368 13.3335 8.6901C13.3335 5.74344 10.9468 3.35677 8.00016 3.35677C5.0535 3.35677 2.66683 5.74344 2.66683 8.6901C2.66683 11.6368 5.0535 14.0234 8.00016 14.0234ZM10.3575 5.3901L11.3002 6.33277L8.00016 9.63277L7.0575 8.6901L10.3575 5.3901V5.3901Z"
                fill="#8c8c8c"
              ></path>
            </svg>
            <span>{{ article.readingStats.text }}</span>
          </div>
        </div>
        <div class="sm-text mt-1">
          by
          <span class="article__author">{{ article.author }}</span>
        </div>
        <p class="article__desc mt-4">{{ article.description }}</p>
        <nuxt-content :document="article" />
      </article>
    </div>
    <div class="bg__primary position-relative overflow-hidden">
      <Cta />
      <Footer />
      <img
        src="@/assets/images/acorn-watermark.png"
        alt="Acorn Globus Symbol Watermark"
        class="footer-watermark-acorn position-absolute"
        height="500"
      />
      <img
        src="@/assets/images/footer-watermark.png"
        alt="Footer Watermark"
        class="footer-watermark-geometry position-absolute"
      />
    </div>
  </div>
</template>

<script>
export default {
  // fetching the contents of the current blog
  async asyncData({ $content, params }) {
    const article = await $content("blog", params.slug).fetch();

    return { article };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
    to() {
      this.$router.back();
    },
  },
};
</script>

<style>
.article__heading {
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 44px;
  color: hsla(0, 0%, 20%, 1);
}

.nuxt-content h1 {
  font-size: 1.875rem;
  font-weight: 600;
  line-height: 40px;
  color: hsla(0, 0%, 20%, 1);
}

.nuxt-content h2 {
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 36px;
  color: hsla(0, 0%, 20%, 1);
}

.nuxt-content h3 {
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 24px;
  color: hsla(0, 0%, 20%, 1);
}

.nuxt-content a {
  color: var(--clr-primary);
  text-decoration: underline;
}

.nuxt-content p,
.nuxt-content ul,
.article__desc {
  font-size: 17px;
  line-height: 28px;
  letter-spacing: 0.2px;
  color: hsla(0, 0%, 31%, 1);
}

.nuxt-content tr,
.nuxt-content th {
  padding: 10px;
}

.nuxt-content img {
  height: auto;
  width: 100%;
}

.sm-text {
  font-size: 14px;
  line-height: 21px;
  color: hsla(0, 0%, 31%, 1);
}

.article__author {
  font-weight: 600;
}

.mw-840 {
  max-width: 840px;
}

.mt-8rem {
  margin-block: 8rem;
}

.mb-3rem {
  margin-bottom: 3rem;
}

.datentimeToRead {
  color: #8c8c8c;
  gap: 0.75rem;
}

.timeToRead {
  gap: 0.5rem;
}

.blog__back {
  margin-top: -4rem;
  position: absolute;
  color: #777;
  text-decoration: none;
}

.blog__back__margin {
  margin-top: -3rem;
}

#tocMenuLink {
  color: #777;
  font-size: 16px;
}

.dropdown-menu {
  border: 0 solid #e4e4e7;
  backdrop-filter: blur(12px);
  background-color: rgba(255, 255, 255, 0.8);
  max-height: 450px;
  overflow-y: auto;
  overflow-x: hidden;
}

.dropdown-link {
  padding: 0.5em;
  min-width: 750px;
  width: 100%;
  display: block;
}

@media only screen and (max-width: 992px) {
  .dropdown-link {
    min-width: 680px;
  }
}

@media only screen and (max-width: 768px) {
  .dropdown-link {
    min-width: 480px;
  }
}

@media only screen and (max-width: 576px) {
  .dropdown-link {
    min-width: 370px;
  }
}

@media only screen and (max-width: 432px) {
  .dropdown-link {
    min-width: 320px;
  }
}

@media only screen and (max-width: 360px) {
  .dropdown-link {
    min-width: 250px;
  }
}
</style>
