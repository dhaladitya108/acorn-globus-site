<template>
  <section id="projects">
    <div class="container mx-auto px-4 md:px-12 pb-3">
      <span class="subtext">our projects</span>
      <h2 class="subheading mb-5">Few Projects we worked on</h2>
      <div class="projects">
        <div class="row1">
          <div class="row1__content">
            <div class="heading row1_heading">
              <img
                src="~/assets/images/projects/cayzen-logo.svg"
                alt="cayzen-logo"
              />
              <h3>Cayzen</h3>
            </div>
            <p class="text">
              Cayzen is a communication tool for managers and frontline workers.
              It builds on the concept of Kaizen and help companies build
              product that are driven by the people who are on the frontline.
            </p>
            <div class="row1__content__cta">
              <a href="https://eitoss.com/" target="_blank">
                View Project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="20"
                  viewBox="0 0 24 20"
                  fill="none"
                >
                  <path
                    d="M22.9024 11.2535C23.4251 10.7552 23.4448 9.92743 22.9464 9.40474L14.8249 0.887051C14.3265 0.364364 13.4988 0.344656 12.9761 0.843032C12.4534 1.34141 12.4337 2.16915 12.9321 2.69183L20.1512 10.2631L12.5799 17.4822C12.0572 17.9806 12.0375 18.8083 12.5359 19.331C13.0343 19.8537 13.862 19.8734 14.3847 19.3751L22.9024 11.2535ZM0.968874 11.1144L21.9689 11.6144L22.0311 8.99983L1.03113 8.49983L0.968874 11.1144Z"
                    fill="#192A52"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div class="row1__image">
            <img src="~/assets/images/projects/cayzen.png" alt="Cayzen" />
          </div>
        </div>
        <div class="row2">
          <div class="row2__project">
            <div class="row2__project__image">
              <img src="~/assets/images/projects/rumie.png" alt="Rumie" />
            </div>
            <div class="row2__project__content">
              <div class="heading">
                <img
                  src="~/assets/images/projects/rumie-logo.png"
                  alt="rumie-logo"
                />
                <h3>Rumie</h3>
              </div>
              <p class="text">
                Medify is a platform that connects patients with doctors. It
                helps patients to book appointments with doctors and get
                consultation online.
              </p>
              <a
                href="https://about.rumie.org/"
                target="_blank"
                class="row2__project__content__cta"
              >
                View Project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="20"
                  viewBox="0 0 24 20"
                  fill="none"
                >
                  <path
                    d="M22.9024 11.2535C23.4251 10.7552 23.4448 9.92743 22.9464 9.40474L14.8249 0.887051C14.3265 0.364364 13.4988 0.344656 12.9761 0.843032C12.4534 1.34141 12.4337 2.16915 12.9321 2.69183L20.1512 10.2631L12.5799 17.4822C12.0572 17.9806 12.0375 18.8083 12.5359 19.331C13.0343 19.8537 13.862 19.8734 14.3847 19.3751L22.9024 11.2535ZM0.968874 11.1144L21.9689 11.6144L22.0311 8.99983L1.03113 8.49983L0.968874 11.1144Z"
                    fill="#192A52"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div class="row2__project">
            <div class="row2__project__image">
              <img
                src="~/assets/images/projects/formester.png"
                alt="Formester"
              />
            </div>
            <div class="row2__project__content">
              <div class="heading">
                <img
                  src="~/assets/images/projects/formester-logo.png"
                  alt="formester-logo"
                />
                <h3>Formester</h3>
              </div>
              <p class="text">
                A form backend as a service. It makes creating form endpoints
                for websites very easy. It requires zero programming knowledge.
                The user has the full control over the look and feel of the
                form. In Formester validation, spam protection and integration
                with different CRMs are few clicks away.
              </p>
              <a
                href="https://formester.com/"
                target="_blank"
                class="row2__project__content__cta"
              >
                View Project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="20"
                  viewBox="0 0 24 20"
                  fill="none"
                >
                  <path
                    d="M22.9024 11.2535C23.4251 10.7552 23.4448 9.92743 22.9464 9.40474L14.8249 0.887051C14.3265 0.364364 13.4988 0.344656 12.9761 0.843032C12.4534 1.34141 12.4337 2.16915 12.9321 2.69183L20.1512 10.2631L12.5799 17.4822C12.0572 17.9806 12.0375 18.8083 12.5359 19.331C13.0343 19.8537 13.862 19.8734 14.3847 19.3751L22.9024 11.2535ZM0.968874 11.1144L21.9689 11.6144L22.0311 8.99983L1.03113 8.49983L0.968874 11.1144Z"
                    fill="#192A52"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style>
.projects {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}
.row1 {
  display: flex;
  flex-direction: row;
  gap: 2rem;
}
.row1__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 50%;
  gap: 4px;
}
.row1__content__cta {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  color: var(--primary, #192a52);
  font-family: Aileron, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration-line: underline;
  text-transform: capitalize;
}
.row1__content__cta a {
  padding: 0;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: flex-start;
  justify-content: center;
  color: black;
  transition: all ease-in-out 300ms;
}
.row1__content__cta a:hover {
  gap: 1rem;
}
.heading {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.heading > img {
  width: 30px;
  height: auto;
  margin-right: 1rem;
}
.row1_heading > img {
  width: 42px;
  height: auto;
  margin-right: 1rem;
}
.heading h3 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #192a52;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
}
.row1__image {
  display: flex;
  padding: 102px 58px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #f0f7f9;
}
.row1__image > img {
  width: 100%;
  height: auto;
}

.row2 {
  display: flex;
  flex-direction: row;
  gap: 2rem;
}
.row2__project {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.row2__project__image {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #f0f7f9;
}
.row2__project__content {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
}
.row2__project__content__cta {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 0.5rem;
  color: var(--primary, #192a52);
  font-family: Aileron, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration-line: underline;
  text-transform: capitalize;
  transition: all ease-in-out 300ms;
}
.row2__project__content__cta:hover {
  gap: 1rem;
  color: var(--primary, #192a52);
}
.row2__project__content h3 {
  font-size: 2rem;
  font-weight: 700;
  color: #192a52;
}

@media screen and (max-width: 768px) {
  .row1 {
    flex-direction: column-reverse;
    gap: 0;
  }
  .row1__content {
    width: 100%;
    gap: 4px;
    margin: 1.75rem 0 0;
  }
  .row1__image {
    padding: 0;
  }
  .row1__image > img {
    width: 100%;
    height: auto;
  }
  .row2 {
    flex-direction: column;
  }
  .row2__project {
    flex-direction: column;
  }
  .row2__project__content {
    gap: 4px;
  }
  .row2__project__content .text {
    margin-top: 4px;
  }
  .row2__project__image {
    padding: 0;
  }
  .row2__project__image > img {
    width: 100%;
    height: auto;
  }
}
</style>
