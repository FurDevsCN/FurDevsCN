<script lang="ts">
import HomeView from "./views/HomeView.vue";
import IntroView from "./views/IntroView.vue";
import AppFooter from "./ui/AppFooter.vue";
import JoinUs from "./views/JoinUs.vue";
import { defineAsyncComponent } from "vue";
export default {
  components: {
    LoadingPage: defineAsyncComponent(
      () => import("../src/components/LoadingPage.vue"),
    ),
    HomeView,
    IntroView,
    JoinUs,
    AppFooter,
  },
  data() {
    return {
      show: true,
    };
  },
  mounted() {
    window.addEventListener(
      "load",
      () => {
        this.show = false;
      },
      { passive: true, once: true },
    );
  },
};
</script>

<template>
  <div class="select-none">
    <LoadingPage v-if="show" />
    <div v-else>
      <HomeView />
      <JoinUs />
      <IntroView />
      <AppFooter />
    </div>
  </div>
</template>
