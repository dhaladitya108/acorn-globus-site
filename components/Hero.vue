<template>
  <section class="bg__primary position-relative overflow-hidden" id="hero">
    <Nav />
    <div class="hero">
      <div class="container">
        <h1 class="hero__heading text-center text-md-start">
          Building innovative software for industry leaders
        </h1>
        <a
          href="#projects"
          class="hero__btn d-flex align-items-center justify-content-center justify-content-md-start"
        >
          Our Projects
          <svg
            width="38"
            height="20"
            viewBox="0 0 38 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M36.9247 10.9247C37.4353 10.414 37.4353 9.58601 36.9247 9.07534L28.6027 0.753379C28.092 0.242702 27.2641 0.242702 26.7534 0.753379C26.2427 1.26406 26.2427 2.09203 26.7534 2.6027L34.1507 10L26.7534 17.3973C26.2427 17.908 26.2427 18.7359 26.7534 19.2466C27.2641 19.7573 28.092 19.7573 28.6027 19.2466L36.9247 10.9247ZM0 11.3077H36V8.69233H0V11.3077Z"
              fill="white"
            />
          </svg>
        </a>
      </div>
    </div>
    <img
      src="@/assets/images/acorn-watermark.png"
      alt="Acorn Globus Logo Watermark"
      class="hero-watermark"
    />
  </section>
</template>

<script>
export default {};
</script>

<style>
.hero {
  padding-top: 6.5rem;
  padding-bottom: 8.75rem;

  position: relative;
  z-index: 10;
}

.hero__heading {
  font-size: 4.5rem;
  line-height: 86px;
  font-weight: 900;
  text-transform: capitalize;
  color: white;
  margin-bottom: 2.5rem;
}

.hero__btn {
  font-weight: 600;
  font-size: 1.375rem;
  line-height: 30px;
  color: white;
  text-decoration: none;
  gap: 1rem;
  transition: all ease-in-out 300ms;
}

.hero__btn:hover {
  gap: 2rem;
  color: white;
}

.hero-watermark {
  position: absolute;
  right: -15%;
  top: -10%;
}

@media screen and (max-width: 992px) {
  .hero-watermark {
    right: -30%;
  }
}

@media screen and (max-width: 768px) {
  .hero__heading {
    font-size: 54px;
    line-height: 78px;
  }
  .hero-watermark {
    display: none;
  }
}

@media screen and (max-width: 540px) {
  .hero__heading {
    font-size: 48px;
    line-height: 62px;
  }

  .hero {
    z-index: 1;
  }
}
</style>
