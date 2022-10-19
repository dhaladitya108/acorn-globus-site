<template>
  <section id="our-team" class="wrapper">
    <div class="container">
      <span class="subtext">our team</span>
      <h2 class="subheading">Get to know us closer</h2>
      <div class="py-4">
        <carousel v-bind="options">
          <slide class="px-2">
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
                <img
                  src="@/assets/images/socials/linkedin.svg"
                  alt="Linkedin"
                />
                <img src="@/assets/images/socials/github.svg" alt="Github" />
                <img
                  src="@/assets/images/socials/instagram.svg"
                  alt="Instagram"
                />
              </div>
            </div>
          </slide>
          <slide class="px-2">
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
                <img
                  src="@/assets/images/socials/linkedin.svg"
                  alt="Linkedin"
                />
                <img src="@/assets/images/socials/github.svg" alt="Github" />
                <img
                  src="@/assets/images/socials/instagram.svg"
                  alt="Instagram"
                />
              </div>
            </div>
          </slide>
          <slide class="px-2">
            <div class="team__card">
              <img
                src="@/assets/images/team/piyush.png"
                alt="Ankit"
                class="pr__img"
              />
              <h4 class="pr__name mt-4">Piyush</h4>
              <p class="pr__role">Developer</p>
              <div class="socials d-flex mt-3 d-none">
                <img src="@/assets/images/socials/twitter.svg" alt="Twitter" />
                <img
                  src="@/assets/images/socials/linkedin.svg"
                  alt="Linkedin"
                />
                <img src="@/assets/images/socials/github.svg" alt="Github" />
                <img
                  src="@/assets/images/socials/instagram.svg"
                  alt="Instagram"
                />
              </div>
            </div>
          </slide>
          <slide class="px-2">
            <div class="team__card">
              <img
                src="@/assets/images/team/santosh.png"
                alt="Ankit"
                class="pr__img"
              />
              <h4 class="pr__name mt-4">Santosh</h4>
              <p class="pr__role">Developer</p>
              <div class="socials d-flex mt-3 d-none">
                <img src="@/assets/images/socials/twitter.svg" alt="Twitter" />
                <img
                  src="@/assets/images/socials/linkedin.svg"
                  alt="Linkedin"
                />
                <img src="@/assets/images/socials/github.svg" alt="Github" />
                <img
                  src="@/assets/images/socials/instagram.svg"
                  alt="Instagram"
                />
              </div>
            </div>
          </slide>
          <slide class="px-2">
            <div class="team__card">
              <img
                src="@/assets/images/team/aditya.png"
                alt="Ankit"
                class="pr__img"
              />
              <h4 class="pr__name mt-4">Aditya</h4>
              <p class="pr__role">Designer</p>
              <div class="socials d-flex mt-3 d-none">
                <img src="@/assets/images/socials/twitter.svg" alt="Twitter" />
                <img
                  src="@/assets/images/socials/linkedin.svg"
                  alt="Linkedin"
                />
                <img src="@/assets/images/socials/github.svg" alt="Github" />
                <img
                  src="@/assets/images/socials/instagram.svg"
                  alt="Instagram"
                />
              </div>
            </div>
          </slide>
          <slide class="px-2">
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
                <img
                  src="@/assets/images/socials/linkedin.svg"
                  alt="Linkedin"
                />
                <img src="@/assets/images/socials/github.svg" alt="Github" />
                <img
                  src="@/assets/images/socials/instagram.svg"
                  alt="Instagram"
                />
              </div>
            </div>
          </slide>
        </carousel>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      options: {
        loop: true,
        perPage: 4,
      },
    };
  },
};
</script>

<style>
.team__card {
  padding: 1em 1.5em;
  transition: ease-in-out 300ms;
}

.team__card:hover {
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05);
}

.pr__img {
  border-radius: 0.25em;
  filter: grayscale(100%);
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
</style>
