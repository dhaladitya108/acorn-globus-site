<template>
  <article class="p-5 border border-neutral-200 rounded-lg cursor-pointer">
    <header class="flex justify-between">
      <h4 @click="expanded = !expanded" class="text-xl font-semibold">
        {{ title }}
      </h4>
      <button class="btn" @click="expanded = !expanded">
        <svg
          v-show="expanded"
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20 12H4"
          ></path>
        </svg>
        <svg
          v-show="!expanded"
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          ></path>
        </svg>
      </button>
    </header>
    <div :style="contentStyle" class="content">
      <p :style="infoStyle" class="info">{{ info }}</p>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  title: String,
  info: String,
  isOpen: {
    type: Boolean,
    default: false,
  },
});
const expanded = ref(props.isOpen);
const contentStyle = computed(() => {
  return { "max-height": expanded.value ? "100px" : 0 };
});

const infoStyle = computed(() => {
  return {
    opacity: expanded.value ? 1 : 0,
    marginTop: expanded.value ? "8px" : 0,
  };
});
</script>

<style scoped>
.question p {
  color: var(--clr-grey-3);
  margin-bottom: 0;
  margin-top: 0.5rem;
}
.question header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.question header h4 {
  margin-bottom: 0;
}
.btn {
  background: transparent;
  border-color: transparent;
  width: 2rem;
  height: 2rem;
  background: var(--clr-grey-special);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: var(--clr-red-special);
  cursor: pointer;
  margin-left: 1rem;
  align-self: center;
  min-width: 2rem;
  z-index: 1;
}

.question-title {
  cursor: pointer;
}

.content {
  max-height: 0;
  transition: max-height 0.2s ease-out;
}
.info {
  z-index: -1;
  opacity: 0;
  transition: opacity 0.2s ease-out;
}
</style>
