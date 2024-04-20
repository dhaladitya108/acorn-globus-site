<template>
  <section id="expertize" class="wrapper">
    <div class="container text-center">
      <span class="subtext text-uppercase">Our Expertize</span>
      <h2 class="subheading mb-4">Our Technology Stack</h2>
      <div class="tech-stacks">
        <div class="technology">
          <img src="~/assets/images/tech-stack/rails.png" alt="rails logo" />
        </div>
        <div class="technology">
          <img src="~/assets/images/tech-stack/vue.png" alt="vue logo" />
        </div>
        <div class="technology">
          <img src="~/assets/images/tech-stack/react.png" alt="react logo" />
        </div>
        <div class="technology">
          <img src="~/assets/images/tech-stack/python.png" alt="python logo" />
        </div>
        <div class="technology">
          <img src="~/assets/images/tech-stack/node.png" alt="nodejs logo" />
        </div>
        <div class="technology">
          <img
              src="~/assets/images/tech-stack/docker.png"
              alt="kubernetes logo"
          />
        </div>
        <div class="technology">
          <img src="~/assets/images/tech-stack/figma.png" alt="figma logo" />
        </div>
        <div class="technology">
          <img
              src="~/assets/images/tech-stack/postgresql.png"
              alt="postgresql logo"
          />
        </div>
        <div class="technology">
          <img
              src="~/assets/images/tech-stack/github.png"
              alt="version control logo"
          />
        </div>
        <div class="technology">
          <img src="~/assets/images/tech-stack/golang.png" alt="golang logo" />
        </div>
        <div class="technology">
          <img src="~/assets/images/tech-stack/android.png" alt="android logo" />
        </div>
        <div class="technology">
          <img src="~/assets/images/tech-stack/flutter.png" alt="flutter logo" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style>

.tech-stacks {
  max-width: 900px;
  width: 100%;
  margin: 0 auto 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
}
.technology {
  width: 100px;
  margin: 30px 0;
}

@media screen and (max-width: 540px) {
  .technology {
    width: 250px;
    margin: 10px auto;
  }

  .tech-stacks {
    margin-top: 2em;
    gap: 2em;
  }
}
</style>