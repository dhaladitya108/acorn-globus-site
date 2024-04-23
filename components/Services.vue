<template>
  <section id="services" class="wrapper">
    <div class="container">
      <div class="d-flex flex-column align-items-center justify-content-center">
        <span class="subtext">our services</span>
        <h2 class="subheading mb-4">What we offer</h2>
        <div class="row services">
          <div
              v-for="card in cards"
              class="service__card col-lg-4 mt-4 mt-lg-0 d-flex flex-column align-items-center align-items-lg-start text-center text-lg-start"
          >
            <div class="icon">
              <img
                  src="./test.svg"
                  alt="Paint Brush"
              />
            </div>
            <h3 class="service__title">{{ card.title }}</h3>
            <p class="service__description">
              {{ card.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const cards = [
  {
    title: "Web Application Development",
    description:
        "Build robust and user-friendly web applications that streamline your business processes and enhance user experience.",
    icon: "./test.svg",
  },
  {
    title: "Web Application Development",
    description:
        "Build robust and user-friendly web applications that streamline your business processes and enhance user experience.",
    icon: "./test.svg",
  },
  {
    title: "Web Application Development",
    description:
        "Build robust and user-friendly web applications that streamline your business processes and enhance user experience.",
    icon: "./test.svg",
  },
  {
    title: "Web Application Development",
    description:
        "Build robust and user-friendly web applications that streamline your business processes and enhance user experience.",
    icon: "./test.svg",
  },
  {
    title: "Web Application Development",
    description:
        "Build robust and user-friendly web applications that streamline your business processes and enhance user experience.",
    icon: "./test.svg",
  },
  {
    title: "Web Application Development",
    description:
        "Build robust and user-friendly web applications that streamline your business processes and enhance user experience.",
    icon: "./test.svg",
  },
  {
    title: "Web Application Development",
    description:
        "Build robust and user-friendly web applications that streamline your business processes and enhance user experience.",
    icon: "./test.svg",
  },
  {
    title: "Web Application Development",
    description:
        "Build robust and user-friendly web applications that streamline your business processes and enhance user experience.",
    icon: "./test.svg",
  },
]
</script>

<style scoped>
.services {
  margin-top: 36px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
}
.service__card {
  max-width: 260px;
  display: flex;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
}
.service__card:hover {
  border-radius: 8px;
  border: 1px solid var(--Stroke, #E2E2E2);
  background: var(--White, #FFF);
  box-shadow: 0 4px 7px 0 rgba(0, 0, 0, 0.03);
}
.service__title {
  color: var(--primary, #192A52);
  font-family: Aileron,sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 160% */
  text-transform: capitalize;
}
.service__description {
  color: var(--Secondary-Black, #363636);
  font-family: Aileron,sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
}
.icon {
  background-color: #f0f4ff;
  padding: 1rem;
  border-radius: 50%;
  margin-bottom: 1.5em;
}

@media screen and (max-width: 768px) {

}
</style>