<template>
  <transition name="slide" mode="out-in">
    <div class="flex flex-col" v-show="showToolBox">
      <ScrollToTop />
      <DarkModeButton />
    </div>
  </transition>
</template>
<script lang="ts">
import ScrollToTop from "../ui/ScrollToTop.vue";
import DarkModeButton from "../ui/DarkModeButton.vue";
export default {
  components: {
    ScrollToTop,
    DarkModeButton,
  },
  data() {
    return {
      showToolBox: false,
    };
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 100) {
        this.showToolBox = true;
      } else {
        this.showToolBox = false;
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
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}

.slide-leave-to /* .slide-leave-active 在 <2.1.8 中是 */ {
  transform: translateX(300%);
}

.slide-enter-to {
  transform: translateX(-0.25rem);
}
</style>
