<template>
  <section id="companies" class="companies">
    <div class="container">
      <div
        class="all__companies d-flex flex-column flex-sm-row align-items-center justify-content-between flex-wrap"
      >
        <div class="box">
          <a href="https://formester.com/" target="_blank">
            <img
              src="@/assets/images/companies/formester.png"
              alt="Formester logo"
              class="company__img"
            />
          </a>
        </div>
        <div class="box">
          <a href="https://about.rumie.org/" target="_blank">
            <img
              src="@/assets/images/companies/rumie.png"
              alt="Rumie logo"
              class="company__img rumie"
            />
          </a>
        </div>
        <div class="box">
          <a href="https://www.mayple.com/main/b" target="_blank">
            <img
              src="@/assets/images/companies/mayple.png"
              alt="Mayple logo"
              class="company__img"
            />
          </a>
        </div>
        <div class="box">
          <a href="https://eitoss.com/" target="_blank">
            <img
              src="@/assets/images/companies/cayzen.png"
              alt="Cayzen logo"
              class="company__img"
            />
          </a>
        </div>
        <div class="box">
          <a href="https://www.hackerrank.com/" target="_blank">
            <img
              src="@/assets/images/companies/HackerRank-Logo.png"
              alt="HackerRank logo"
              class="company__img"
            />
          </a>
        </div>
        <div class="box">
          <a href="https://equipmentconnect.co.uk/" target="_blank">
            <img
              src="@/assets/images/companies/equipment-connect.png"
              alt="Equipment connect logo"
              class="company__img"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

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
  opacity: 0.25;
  transition: 0.2s ease;
}

.box .company__img.rumie {
  opacity: 0.6;
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
}

@media screen and (max-width: 540px) {
  .all__companies {
    margin-top: 2em;
    gap: 3.5em;
  }
}
</style>
