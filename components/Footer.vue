<template>
  <footer class="footer__container text-white text-center text-lg-start">
    <div class="container mx-auto px-4 md:px-12 p-4">
      <div class="row">
        <div class="col-lg-5 col-md-12 mb-4 mb-lg-0">
          <div class="logo">
            <img
              src="~/assets/images/acorn-globus-logo-dark.svg"
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
            class="social__icons flex justify-content-lg-start justify-center"
          >
            <a
              href="https://www.linkedin.com/company/acornglobus/about/"
              target="_blank"
            >
              <img src="~/assets/images/socials/linkedin.svg" alt="Linkedin" />
            </a>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
          <h5 class="footer__subheading mb-4">Quick Links</h5>
          <ul class="footer__items list-unstyled mb-0">
            <li>
              <a href="#hero" class="footer__link text-black">Home</a>
            </li>
            <li>
              <a href="#services" class="footer__link text-black">Services</a>
            </li>
            <li>
              <a href="#projects" class="footer__link text-black">Projects</a>
            </li>
            <li>
              <a href="#expertize" class="footer__link text-black">Expertise</a>
            </li>
            <li>
              <a href="#cta" class="footer__link text-black">Contact</a>
            </li>
            <li>
              <a
                href="https://handbook.acornglobus.com"
                class="footer__link text-black"
                >Handbook</a
              >
            </li>
          </ul>
        </div>
        <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
          <h5 class="footer__subheading mb-4">Reach Us</h5>
          <div class="flex justify-content-lg-start justify-center">
            <ul
              class="footer__items list-unstyled flex flex-col align-items-start justify-center"
            >
              <li class="text-white flex items-center">
                <a class="footer__link" href="mailto:business@acornglobus.com">
                  <img src="~/assets/images/icons/mail.svg" alt="E-Mail" />
                  <span class="ml-2">business@acornglobus.com</span>
                </a>
              </li>
              <li class="text-white flex items-center">
                <a class="footer__link" href="#">
                  <img src="~/assets/images/icons/phone.svg" alt="Phone" />
                  <span class="ml-2">+91 55555555555</span>
                </a>
              </li>
              <li class="footer__link text-white flex items-center">
                <img src="~/assets/images/icons/location.svg" alt="Location" />
                <span class="ml-2">49/D, Naya Bazar, Jamshedpur</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center p-3 copyright">
      © 2022 Acorn Globus. <span class="text-black">All Rights Reserved</span>
    </div>
  </footer>
</template>

<script setup></script>

<style>
.footer__container {
  position: relative;
  z-index: 10;
  background: hsla(222, 58%, 90%, 1);
  padding-top: 48px;
  padding-bottom: 12px;
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

.copyright {
  font-size: 12px;
  font-weight: 200;
  letter-spacing: 0.8px;
}
</style>
