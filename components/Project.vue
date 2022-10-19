<template>
  <section id="projects" class="wrapper">
    <div class="container">
      <span class="subtext">our projects</span>
      <h2 class="subheading mb-5">Few Projects we worked on</h2>
      <div class="all__projects d-flex flex-column mt-4">
        <div class="project__card d-flex flex-column flex-lg-row">
          <img
            src="@/assets/images/projects/formester-mockup.svg"
            alt="Formester Mockup"
          />
          <div
            class="d-flex flex-column align-items-start justify-content-center"
          >
            <img
              src="@/assets/images/projects/formester-logo.svg"
              alt="Formester Logo"
            />
            <p class="mt-3 project__description">
              A form backend as a service. It makes creating form endpoints for
              websites very easy. It requires zero programming knowledge. The
              user has the full control over the look and feel of the form. In
              Formester validation, spam protection and integration with
              different CRMs are few clicks away.
            </p>
            <a
              href="https://formester.com/"
              target="_blank"
              class="project__btn d-flex align-items-center justify-content-center"
            >
              View Project
              <svg
                width="24"
                height="20"
                viewBox="0 0 24 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.9024 11.1964C23.4251 10.698 23.4448 9.8703 22.9464 9.34761L14.8249 0.829923C14.3265 0.307235 13.4988 0.287527 12.9761 0.785904C12.4534 1.28428 12.4337 2.11202 12.9321 2.6347L20.1512 10.206L12.5799 17.4251C12.0572 17.9235 12.0375 18.7512 12.5359 19.2739C13.0343 19.7966 13.862 19.8163 14.3847 19.3179L22.9024 11.1964ZM0.968874 11.0573L21.9689 11.5573L22.0311 8.9427L1.03113 8.4427L0.968874 11.0573Z"
                  fill="#192A52"
                />
              </svg>
            </a>
          </div>
        </div>
        <div class="project__card d-flex flex-column flex-lg-row">
          <div
            class="d-flex flex-column align-items-start justify-content-center order-last order-lg-first"
          >
            <img
              src="@/assets/images/projects/rumie-logo.png"
              alt="Rumie Logo"
            />
            <p class="mt-3 project__description">
              Rumie is a non-profit that makes access to free digital education
              possible for underserved communities worldwide. We collaborated on
              revamping the experience for application content managers. The new
              app built using Vue provides a fast and intuitive way to deal with
              complex flows.
            </p>
            <a
              href="https://about.rumie.org/"
              target="_blank"
              class="project__btn d-flex align-items-center justify-content-center"
            >
              View Project
              <svg
                width="24"
                height="20"
                viewBox="0 0 24 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.9024 11.1964C23.4251 10.698 23.4448 9.8703 22.9464 9.34761L14.8249 0.829923C14.3265 0.307235 13.4988 0.287527 12.9761 0.785904C12.4534 1.28428 12.4337 2.11202 12.9321 2.6347L20.1512 10.206L12.5799 17.4251C12.0572 17.9235 12.0375 18.7512 12.5359 19.2739C13.0343 19.7966 13.862 19.8163 14.3847 19.3179L22.9024 11.1964ZM0.968874 11.0573L21.9689 11.5573L22.0311 8.9427L1.03113 8.4427L0.968874 11.0573Z"
                  fill="#192A52"
                />
              </svg>
            </a>
          </div>
          <img src="@/assets/images/projects/rumie-mockup.svg" alt="Rumie" />
        </div>
        <div class="project__card d-flex flex-column flex-lg-row">
          <img src="@/assets/images/projects/eitoss-mockup.svg" alt="Eitoss" />
          <div
            class="d-flex flex-column align-items-start justify-content-center"
          >
            <img
              src="@/assets/images/projects/eitoss-logo.png"
              alt="Eitoss Logo"
            />
            <p class="mt-3 project__description">
              Eitoss is a communication tool for managers and frontline workers.
              It builds on the concept of Kaizen and help companies build
              product that are driven by the people who are on the frontline.
            </p>
            <a
              href="https://eitoss.com/"
              target="_blank"
              class="project__btn d-flex align-items-center justify-content-center"
            >
              View Project
              <svg
                width="24"
                height="20"
                viewBox="0 0 24 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.9024 11.1964C23.4251 10.698 23.4448 9.8703 22.9464 9.34761L14.8249 0.829923C14.3265 0.307235 13.4988 0.287527 12.9761 0.785904C12.4534 1.28428 12.4337 2.11202 12.9321 2.6347L20.1512 10.206L12.5799 17.4251C12.0572 17.9235 12.0375 18.7512 12.5359 19.2739C13.0343 19.7966 13.862 19.8163 14.3847 19.3179L22.9024 11.1964ZM0.968874 11.0573L21.9689 11.5573L22.0311 8.9427L1.03113 8.4427L0.968874 11.0573Z"
                  fill="#192A52"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.all__projects {
  gap: 2.5rem;
}

.project__card {
  gap: 4rem;
  margin-bottom: 14px;
}

.project__subtext {
  font-size: 0.875rem;
  line-height: 22px;
  text-transform: uppercase;
  color: hsla(222, 40%, 43%, 1);
}

.project__description {
  letter-spacing: 0.3px;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
}

.project__btn {
  color: var(--clr-primary);
  font-size: 18px;
  font-weight: 600;
  text-decoration: underline;
  gap: 16px;
  transition: all ease-in-out 300ms;
  margin-top: 16px;
}

.project__btn:hover {
  color: var(--clr-primary);
  gap: 32px;
}
</style>
