<template>
  <section id="our-team" class="wrapper">
    <div class="container">
      <span class="subtext">our team</span>
      <h2 class="subheading">Get to know us closer</h2>
      <VueSlickCarousel v-bind="settings">
        <div class="team__card">
          <img
            src="@/assets/images/team/ankit-img.png"
            alt="Ankit"
            class="pr__img"
          />
          <h4 class="pr__name mt-4">Ankit</h4>
          <p class="pr__role">Founder & Partner</p>
          <div class="socials d-flex mt-3 d-none">
            <img src="@/assets/images/socials/twitter.svg" alt="Twitter" />
            <img src="@/assets/images/socials/linkedin.svg" alt="Linkedin" />
            <img src="@/assets/images/socials/github.svg" alt="Github" />
            <img src="@/assets/images/socials/instagram.svg" alt="Instagram" />
          </div>
        </div>
        <div class="team__card">
          <img
            src="@/assets/images/team/tarun.png"
            alt="Tarun"
            class="pr__img"
          />
          <h4 class="pr__name mt-4">Tarun</h4>
          <p class="pr__role">Founder & Partner</p>
          <div class="socials d-flex mt-3 d-none">
            <img src="@/assets/images/socials/twitter.svg" alt="Twitter" />
            <img src="@/assets/images/socials/linkedin.svg" alt="Linkedin" />
            <img src="@/assets/images/socials/github.svg" alt="Github" />
            <img src="@/assets/images/socials/instagram.svg" alt="Instagram" />
          </div>
        </div>
        <div class="team__card">
          <img
            src="@/assets/images/team/piyush.png"
            alt="Piyush"
            class="pr__img"
          />
          <h4 class="pr__name mt-4">Piyush</h4>
          <p class="pr__role">Developer</p>
          <div class="socials d-flex mt-3 d-none">
            <img src="@/assets/images/socials/twitter.svg" alt="Twitter" />
            <img src="@/assets/images/socials/linkedin.svg" alt="Linkedin" />
            <img src="@/assets/images/socials/github.svg" alt="Github" />
            <img src="@/assets/images/socials/instagram.svg" alt="Instagram" />
          </div>
        </div>
        <div class="team__card">
          <img
            src="@/assets/images/team/santosh.png"
            alt="Santosh"
            class="pr__img"
          />
          <h4 class="pr__name mt-4">Santosh</h4>
          <p class="pr__role">Developer</p>
          <div class="socials d-flex mt-3 d-none">
            <img src="@/assets/images/socials/twitter.svg" alt="Twitter" />
            <img src="@/assets/images/socials/linkedin.svg" alt="Linkedin" />
            <img src="@/assets/images/socials/github.svg" alt="Github" />
            <img src="@/assets/images/socials/instagram.svg" alt="Instagram" />
          </div>
        </div>
        <div class="team__card">
          <img
            src="@/assets/images/team/aditya.png"
            alt="Aditya"
            class="pr__img"
          />
          <h4 class="pr__name mt-4">Aditya</h4>
          <p class="pr__role">Designer</p>
          <div class="socials d-flex mt-3 d-none">
            <img src="@/assets/images/socials/twitter.svg" alt="Twitter" />
            <img src="@/assets/images/socials/linkedin.svg" alt="Linkedin" />
            <img src="@/assets/images/socials/github.svg" alt="Github" />
            <img src="@/assets/images/socials/instagram.svg" alt="Instagram" />
          </div>
        </div>
        <div class="team__card">
          <img
            src="@/assets/images/team/prashant.png"
            alt="Prashant"
            class="pr__img"
          />
          <h4 class="pr__name mt-4">Prashant</h4>
          <p class="pr__role">Full Stack Engineer</p>
          <div class="socials d-flex mt-3 d-none">
            <img src="@/assets/images/socials/twitter.svg" alt="Twitter" />
            <img src="@/assets/images/socials/linkedin.svg" alt="Linkedin" />
            <img src="@/assets/images/socials/github.svg" alt="Github" />
            <img src="@/assets/images/socials/instagram.svg" alt="Instagram" />
          </div>
        </div>
        <div class="team__card">
          <img
            src="@/assets/images/team/anirudh.png"
            alt="Anirudh"
            class="pr__img"
          />
          <h4 class="pr__name mt-4">Anirudh</h4>
          <p class="pr__role">Developer</p>
          <div class="socials d-flex mt-3 d-none">
            <img src="@/assets/images/socials/twitter.svg" alt="Twitter" />
            <img src="@/assets/images/socials/linkedin.svg" alt="Linkedin" />
            <img src="@/assets/images/socials/github.svg" alt="Github" />
            <img src="@/assets/images/socials/instagram.svg" alt="Instagram" />
          </div>
        </div>
        <div class="team__card">
          <img
            src="@/assets/images/team/ravindra.png"
            alt="Ravindra"
            class="pr__img"
          />
          <h4 class="pr__name mt-4">Ravindra</h4>
          <p class="pr__role">Full Stack Engineer</p>
          <div class="socials d-flex mt-3 d-none">
            <img src="@/assets/images/socials/twitter.svg" alt="Twitter" />
            <img src="@/assets/images/socials/linkedin.svg" alt="Linkedin" />
            <img src="@/assets/images/socials/github.svg" alt="Github" />
            <img src="@/assets/images/socials/instagram.svg" alt="Instagram" />
          </div>
        </div>
      </VueSlickCarousel>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      settings: {
        // arrows: true,
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        autoPlay: true,
        speed: 350,
        autoplaySpeed: 350,
        cssEase: "linear",
        // touchMove: false,
        // swipe: false,
        // swipeToSlide: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 544,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
  },
};
</script>

<style>
.team__card {
  margin: 1rem 0rem;
  padding: 1rem 1.5rem;
  transition: ease-in-out 300ms;
}

.team__card:hover {
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05);
}

.pr__img {
  border-radius: 0.25em;
  filter: grayscale(100%);
  height: auto;
  width: 100%;
}

.pr__name {
  font-size: 1.5rem;
  line-height: 32px;
  color: #333333;
  font-weight: 700;
}

.pr__role {
  font-size: 0.76rem;
  line-height: 2px;
  color: #192a52;
  font-weight: 600;
}

.socials {
  gap: 1em;
}

.socials img {
  width: 32px;
  height: 32px;
}

@media screen and (max-width: 544px) {
  .team__card {
    margin: 0;
  }
}
</style>
