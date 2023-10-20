<template>
  <transition name="slide" mode="out-in">
    <button
      @click="scrollToTop"
      class="fixed bottom-16 right-4 p-2 rounded-lg bg-gray-500 text-white shadow-lg hover:bg-gray-700"
      key="scroll-to-top-button"
    >
      🚀
    </button>
  </transition>
</template>

<script lang="ts">
export default {
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>
<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}
.slide-leave-to /* .slide-leave-active 在 <2.1.8 中是 */ {
  transform: translateX(300%);
}
</style>
