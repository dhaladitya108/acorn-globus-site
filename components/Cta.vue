<template>
  <div class="bg__primary relative overflow-hidden" id="cta">
    <div class="cta">
      <div class="cta__text">
        <h2 class="subheading">Get in touch with us</h2>
        <div></div>
        <p class="mt-2">
          When you objectively analyze your business, you are likely to get a
          new perspective. These new perspectives propel your business up by
          infusing fresh strategy. We can support whenever new strategy is
          needed.
        </p>
      </div>
      <div class="cta__form">
        <formester-standard-form
          set-auto-height="true"
          height="100%"
          class="w-full"
          id="442dee1d-f871-48b9-80c5-9fcf3e76deaa"
          url="https://app.formester.com/f/efd1648b-1621-41ff-ade9-59630c129567"
        ></formester-standard-form>
      </div>
    </div>
    <img
      src="~/assets/images/acorn-watermark.png"
      alt="Acorn Globus Symbol Watermark"
      class="footer-watermark-acorn absolute"
      height="500"
    />
    <img
      src="~/assets/images/footer-watermark.png"
      alt="Footer Watermark"
      class="footer-watermark-geometry absolute"
    />
  </div>
</template>

<script setup>
useHead({
  script: [
    {
      src: "https://app.formester.com/widget/standard.js",
      type: "module",
    },
  ],
});
</script>

<style scoped>
.cta {
  background-color: var(--clr-primary);
  padding: 100px 64px;
  display: flex;
  gap: 64px;
  position: relative;
}
.cta__text {
  color: white;
  display: flex;
  flex-direction: column;
  gap: 24px;
  z-index: 10;
}
.cta__text > h2 {
  color: white;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 56px; /* 116.667% */
}
.cta__text > div {
  width: 119px;
  height: 9px;
  background: white;
  border-radius: 5px;
}
.cta__text > p {
  color: white;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 155.556% */
}

.cta__form {
  display: inline-flex;
  padding: 0;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  border-radius: 8px;
  z-index: 10;
  min-width: 50%;
}
.cta__form > iframe {
  width: 100%;
  border: none;
  border-radius: 8px;
}
.form-component {
  display: flex;
  flex-direction: row;
  gap: 24px;
  width: 100%;
}
.form-component:last-child {
  display: flex;
  flex-direction: column;
  gap: 0;
}
.form-component__element {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.form-component__element > label {
  color: var(--Black, #000);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
}
.form-component__element > label > span {
  color: #ff7171;
}
.form-component__element > input {
  height: 42px;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1px solid #dde1e0;
  background: white;
}
.form-component__element > textarea {
  height: 80px;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1px solid #dde1e0;
  background: white;
}
.form-button {
  display: flex;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  align-self: stretch;
  border-radius: 4px;
  background: #192a52;
  color: white;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

@media screen and (max-width: 768px) {
  .cta {
    flex-direction: column;
    gap: 32px;
    padding: 64px 32px;
  }
  .cta__form {
    padding: 0;
    gap: 32px;
  }
  .cta__form > iframe {
    padding: 0;
  }
  .form-component {
    flex-direction: column;
    gap: 16px;
  }
  .form-component__element > input {
    width: 100%;
  }
  .form-component__element > textarea {
    width: 100%;
  }

  .cta__text > h2 {
    font-size: 32px;
    line-height: 40px;
    align-self: stretch;
  }
  .cta__text > p {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    align-self: stretch;
  }
}
@media screen and (max-width: 480px) {
  .cta {
    padding: 0;
  }
  .cta__text {
    gap: 16px;
    padding: 64px 24px 24px;
  }
  .cta__text > div {
    width: 80px;
    height: 6px;
  }
  .cta__text > h2 {
    font-size: 32px;
    line-height: 32px;
  }
  .cta__text > p {
    font-size: 16px;
    line-height: 20px;
  }

  .cta__form {
    width: 100%;
    gap: 16px;
    padding: 0 0 64px;
  }
}
</style>
