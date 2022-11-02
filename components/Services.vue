<template>
  <section id="services" class="wrapper">
    <div class="container">
      <div class="d-flex flex-column align-items-center justify-content-center">
        <span class="subtext">our services</span>
        <h2 class="subheading mb-4">What we offer</h2>
        <div class="row services">
          <div
            class="service__card col-lg-4 mt-4 mt-lg-0 d-flex flex-column align-items-center align-items-lg-start text-center text-lg-start"
          >
            <div class="icon">
              <img
                src="@/assets/images/services/fluent_paint-brush-16-regular.svg"
                alt="Paint Brush"
              />
            </div>
            <h3 class="sub__subheading">UI & UX Design</h3>
            <p class="service__description">
              A user interface is like a joke. If you have to explain it, it’s
              not that good.” - that's what we believe in.
            </p>
          </div>
          <div
            class="service__card col-lg-4 mt-4 mt-lg-0 d-flex flex-column align-items-center align-items-lg-start text-center text-lg-start"
          >
            <div class="icon">
              <img
                src="@/assets/images/services/carbon_application-web.svg"
                alt="Computer"
              />
            </div>
            <h3 class="sub__subheading">Web Development</h3>
            <p class="service__description">
              Web development as a whole is an essential component for success,
              and our team of experts make it look simple.
            </p>
          </div>
          <div
            class="service__card col-lg-4 mt-4 mt-lg-0 d-flex flex-column align-items-center align-items-lg-start text-center text-lg-start"
          >
            <div class="icon">
              <img
                src="@/assets/images/services/carbon_application-mobile.svg"
                alt="Mobile"
              />
            </div>
            <h3 class="sub__subheading">Mobile Development</h3>
            <p class="service__description">
              We know precisely how to build highly responsive apps for iOS and
              Android.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.services {
  margin-top: 36px;
  margin-bottom: 24px;
}

.service__description {
  margin-top: 16px;
  /* letter-spacing: 0.6px; */
  color: #000000c4;
  font-weight: 400;
}
.icon {
  background-color: #f0f4ff;
  padding: 1rem;
  border-radius: 50%;
  margin-bottom: 1.5em;
}

@media screen and (max-width: 768px) {
  .services__card {
    max-width: 400px;
  }
}
</style>
