<template>
  <div>
    <Hero />
    <Compaines />
    <Services />
    <Expertise />
    <Project />
    <Teams />
    <div class="bg__primary position-relative overflow-hidden">
      <Cta />
      <Footer />
      <img
        src="@/assets/images/acorn-watermark.png"
        alt="Acorn Globus Symbol Watermark"
        class="footer-watermark-acorn position-absolute"
        height="500"
      />
      <img
        src="@/assets/images/footer-watermark.png"
        alt="Footer Watermark"
        class="footer-watermark-geometry position-absolute"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>
