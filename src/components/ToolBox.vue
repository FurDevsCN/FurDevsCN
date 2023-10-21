<template>
  <div class="flex flex-col overflow-x-hidden">
    <ScrollToTop v-show="showScroll" />
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
      showScroll: false,
    };
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 100) {
        this.showScroll = true;
      } else {
        this.showScroll = false;
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
