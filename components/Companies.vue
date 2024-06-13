<template>
  <section id="companies" class="companies">
    <div class="container__wrapper">
      <div
        class="flex flex-col sm:flex-row items-center justify-between flex-wrap"
      >
        <div class="box">
          <a href="https://formester.com/" target="_blank">
            <img
              src="~/assets/images/companies/formester.png"
              alt="Formester logo"
              class="company__img"
            />
          </a>
        </div>
        <div class="box">
          <a href="https://about.rumie.org/" target="_blank">
            <img
              src="~/assets/images/companies/rumie.png"
              alt="Rumie logo"
              class="company__img rumie"
            />
          </a>
        </div>
        <div class="box">
          <a href="https://www.mayple.com/main/b" target="_blank">
            <img
              src="~/assets/images/companies/mayple.png"
              alt="Mayple logo"
              class="company__img mayple"
            />
          </a>
        </div>
        <div class="box">
          <a href="https://eitoss.com/" target="_blank">
            <img
              src="~/assets/images/companies/cayzen.png"
              alt="Cayzen logo"
              class="company__img cayzen"
            />
          </a>
        </div>
        <div class="box">
          <a href="https://www.hackerrank.com/" target="_blank">
            <img
              src="~/assets/images/companies/hacker-rank.png"
              alt="HackerRank logo"
              class="company__img hacker-rank"
            />
          </a>
        </div>
        <div class="box">
          <a href="https://equipmentconnect.co.uk/" target="_blank">
            <img
              src="~/assets/images/companies/equipment-connect.png"
              alt="Equipment connect logo"
              class="company__img equipment-connect"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style>
.companies {
  padding-block: 1.5rem;
}

.box {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-inline: 16px;
}

.company__img {
  filter: grayscale(1);
  opacity: 0.5;
  transition: 0.2s ease;
  z-index: 11;
  position: relative;
}

.company__img:hover {
  filter: none;
  opacity: 1;
  cursor: pointer;
}

@media screen and (max-width: 992px) {
  .box {
    width: 30%;
  }

  .company__img {
    filter: none;
    opacity: 1;
    transition: 0.2s ease;
  }
}
</style>
