<template>
  <footer class="footer__container text-white text-center text-lg-start">
    <div class="container p-4">
      <div class="row">
        <div class="col-lg-5 col-md-12 mb-4 mb-lg-0">
          <div class="logo">
            <img
                src="~/assets/images/acorn-globus-logo.svg"
                alt="Company Logo"
                width="150px"
            />
          </div>
          <p class="mt-4 footer__desc mx-auto mx-lg-0">
            We do more than just develop software for our partners - we help
            build their businesses. Our experience working with Fortune 500
            companies will help you meet your objectives and reach your goals
            faster than you ever thought possible.
          </p>
          <div
              class="social__icons d-flex justify-content-lg-start justify-content-center"
          >
            <a
                href="https://www.linkedin.com/company/acornglobus/about/"
                target="_blank"
            >
              <img
                  src="~/assets/images/socials/linkedin-dark.svg"
                  alt="Linkedin"
              />
            </a>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
          <h5 class="footer__subheading mb-4">Quick Links</h5>
          <ul class="footer__items list-unstyled mb-0">
            <li>
              <a href="#hero" class="footer__link text-white">Home</a>
            </li>
            <li>
              <a href="#services" class="footer__link text-white">Services</a>
            </li>
            <li>
              <a href="#projects" class="footer__link text-white">Projects</a>
            </li>
            <li>
              <a href="#expertize" class="footer__link text-white">Expertise</a>
            </li>
            <li>
              <a href="#cta" class="footer__link text-white">Contact</a>
            </li>
            <li>
              <a
                  href="https://handbook.acornglobus.com"
                  class="footer__link text-white"
              >Handbook</a
              >
            </li>
          </ul>
        </div>
        <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
          <h5 class="footer__subheading mb-4">Reach Us</h5>
          <div class="d-flex justify-content-lg-start justify-content-center">
            <ul
                class="footer__items list-unstyled d-flex flex-column align-items-start justify-content-center"
            >
              <li class="text-white d-flex align-items-center">
                <a class="footer__link" href="mailto:business@acornglobus.com">
                  <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.0025 3.2959C18.3435 3.2959 19.6335 3.8259 20.5825 4.7769C21.5325 5.7259 22.0635 7.0059 22.0635 8.3459V16.2459C22.0635 19.0359 19.7935 21.2959 17.0025 21.2959H7.12348C4.33248 21.2959 2.06348 19.0359 2.06348 16.2459V8.3459C2.06348 5.5559 4.32248 3.2959 7.12348 3.2959H17.0025ZM18.5935 9.8359L18.6735 9.7559C18.9125 9.4659 18.9125 9.0459 18.6625 8.7559C18.5235 8.6069 18.3325 8.5159 18.1335 8.4959C17.9235 8.4849 17.7235 8.5559 17.5725 8.6959L13.0635 12.2959C12.4835 12.7769 11.6525 12.7769 11.0635 12.2959L6.56348 8.6959C6.25248 8.4659 5.82248 8.4959 5.56348 8.7659C5.29348 9.0359 5.26348 9.4659 5.49248 9.7659L5.62348 9.8959L10.1735 13.4459C10.7335 13.8859 11.4125 14.1259 12.1235 14.1259C12.8325 14.1259 13.5235 13.8859 14.0825 13.4459L18.5935 9.8359Z"
                        fill="#3A5EB4"
                    />
                  </svg>
                  <span class="ms-2">business@acornglobus.com</span>
                </a>
              </li>
              <li class="footer__link text-white d-flex align-items-center">
                <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.093 2.29592C14.353 2.30592 16.513 3.20592 18.093 4.78592C19.683 6.37592 20.573 8.52592 20.563 10.7559V10.8059C20.503 13.8359 18.803 16.6259 16.683 18.8059C15.483 20.0359 14.153 21.1259 12.703 22.0459C12.313 22.3759 11.743 22.3759 11.353 22.0459C9.20299 20.6459 7.30299 18.8859 5.76299 16.8359C4.41299 15.0559 3.64299 12.9159 3.56299 10.6859C3.58299 6.03592 7.40299 2.28592 12.093 2.29592ZM12.093 13.5559C12.803 13.5559 13.483 13.2859 13.983 12.7959C14.503 12.2859 14.794 11.6069 14.794 10.8959C14.794 9.41592 13.583 8.22592 12.093 8.22592C10.603 8.22592 9.40299 9.41592 9.40299 10.8959C9.40299 12.3569 10.583 13.5359 12.063 13.5559H12.093Z"
                      fill="#3A5EB4"
                  />
                </svg>
                <span class="ms-2">49/D, Naya Bazar, Jamshedpur</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center p-3 copyright">
      © 2022 Acorn Globus. <span class="text-white">All Rights Reserved</span>
    </div>
  </footer>
</template>

<script setup lang="ts">

</script>

<style>
.footer__container {
  position: relative;
  z-index: 10;
}

.footer__desc {
  max-width: 400px;
  font-weight: 200;
  letter-spacing: 0.5px;
}

.footer__subheading {
  font-size: 1.5rem;
  line-height: 32px;
  font-weight: 600;
}

.footer__items {
  display: flex;
  flex-direction: column;
  gap: 0.75em;
}

.footer__link {
  text-decoration: none;
  font-weight: 300;
  color: white;
}

.social__icons {
  gap: 1em;
}

.footer-watermark-acorn {
  left: -10%;
  bottom: 0;
}

.footer-watermark-geometry {
  top: 0;
  right: 0;
}

@media screen and (max-width: 768px) {
  .footer-watermark-acorn {
    left: -20%;
  }
  .footer-watermark-geometry {
    right: -20%;
  }
}

@media screen and (max-width: 576px) {
  .footer-watermark-geometry,
  .footer-watermark-acorn {
    display: none;
  }
}

.copyright {
  font-size: 12px;
  font-weight: 200;
  letter-spacing: 0.8px;
}
</style>