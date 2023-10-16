<template>
  <div class="flex flex-col overflow-x-hidden" v-show="showToolBox">
    <ScrollToTop />
    <DarkModeButton />
  </div>
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
