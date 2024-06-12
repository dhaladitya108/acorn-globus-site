<template>
  <section id="companies" class="companies">
    <div class="container mx-auto px-4">
      <div
        class="all__companies flex flex-col sm:flex-row items-center justify-between flex-wrap"
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
}

.box .company__img {
  width: 150px;
  filter: grayscale(1);
  opacity: 0.5;
  transition: 0.2s ease;
  z-index: 11;
  position: relative;
}

.company__img {
  /* //height: 48px; */
  aspect-ratio: 16/4;
}

.cayzen {
  aspect-ratio: 16/7;
}
.hacker-rank {
  aspect-ratio: 16/6;
}

.box .company__img:hover {
  filter: none;
  opacity: 1;
  cursor: pointer;
}

@media screen and (max-width: 992px) {
  .all__companies {
    gap: 1rem;
  }

  .box {
    width: 30%;
  }

  .box .company__img {
    filter: none;
    opacity: 1;
    transition: 0.2s ease;
  }

  .company__img,
  .cayzen,
  .hacker-rank {
    aspect-ratio: auto;
  }
}

@media screen and (max-width: 575.5px) {
  .all__companies {
    /* //margin-top: 2em; */
    gap: 3em;
  }
}
</style>
