<template>
  <section class="bg__primary relative overflow-hidden" id="hero">
    <Nav />
    <div class="py-20 relative z-10">
      <div class="container mx-auto px-4 md:px-12">
        <h1 class="hero__heading text-center md:text-left">
          Software Development Agency
        </h1>
        <p class="hero__subheading my-5">
          Spearheaded by a team of talented individuals, we provide scalable and
          reliable software development solutions to our clients globally.
        </p>
        <div class="hero__btns">
          <a
            href="https://app.zencal.io/u/ankit/acorn-globus"
            target="_blank"
            class="contact__btn flex items-center justify-center justify-content-md-start"
          >
            Book a Free Consultation
          </a>
          <a
            href="#projects"
            class="projects__btn flex items-center justify-center justify-content-md-start"
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
    </div>
    <Companies />
    <img
      src="~/assets/images/acorn-watermark.png"
      alt="Acorn Globus Logo Watermark"
      class="hero-watermark"
    />
  </section>
</template>

<script setup></script>

<style>
.hero__heading {
  color: var(--White, #fff);
  font-size: 72px;
  font-style: normal;
  font-weight: 900;
  line-height: 86px; /* 119.444% */
  text-transform: capitalize;
}
.hero__subheading {
  color: var(--White, #fff);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 144.444% */
}
.hero__btns {
  display: flex;
  justify-content: flex-start;
  gap: 1.5rem;
}
.contact__btn {
  text-decoration: none;
  display: flex;
  padding: 16px 20px;
  align-items: flex-start;
  gap: 12px;
  border-radius: 4px;
  background: var(--White, #fff);
  color: #192a52;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px; /* 136.364% */
  text-transform: capitalize;
}
.projects__btn {
  text-decoration: none;
  gap: 1rem;
  transition: all ease-in-out 300ms;
  color: var(--White, #fff);
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px; /* 136.364% */
  text-transform: capitalize;
}

.contact__btn:hover {
  color: #192a52;
}
.projects__btn:hover {
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
  .hero__subheading {
    font-size: 16px;
    line-height: 24px;
  }
}

@media screen and (max-width: 540px) {
  .hero__heading {
    font-size: 40px;
    line-height: 62px;
  }
  .hero__subheading {
    font-size: 12px;
    line-height: 22px;
  }
  .hero {
    z-index: 1;
  }
  .hero__btns {
    flex-direction: column;
    gap: 1rem;
  }
  .contact__btn {
    padding: 12px 16px;
    font-size: 18px;
    line-height: 24px;
  }
  .projects__btn {
    font-size: 18px;
    line-height: 24px;
  }
}
</style>
