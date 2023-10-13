<template>
  <div>
    <transition name="slide" mode="out-in">
      <button
        @click="scrollToTop"
        class="fixed bottom-4 right-4 p-2 rounded-lg bg-gray-500 text-white shadow-lg hover:bg-gray-700"
        v-show="showScrollToTopButton"
        key="scroll-to-top-button"
      >
        👆
      </button>
    </transition>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      showScrollToTopButton: false,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    handleScroll() {
      if (window.scrollY > 100) {
        this.showScrollToTopButton = true;
      } else {
        this.showScrollToTopButton = false;
      }
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style>
.slide-enter-active, .slide-leave-active {
  transition: transform 0.5s;
}
.slide-enter, .slide-leave-to /* .slide-leave-active 在 <2.1.8 中是 */ {
  transform: translateX(300%);
}
</style>
