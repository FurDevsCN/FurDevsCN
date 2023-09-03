<script lang="ts">
import { defineAsyncComponent } from "vue";
export default {
  components: {
    HomeView: defineAsyncComponent(() => import("../src/views/HomeView.vue")),
    IntroView: defineAsyncComponent(() => import("../src/views/IntroView.vue")),
    AppFooter: defineAsyncComponent(
      () => import("../src/components/AppFooter.vue"),
    ),
    LoadingPage: defineAsyncComponent(
      () => import("../src/components/LoadingPage.vue"),
    ),
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
      <IntroView />
      <AppFooter />
    </div>
  </div>
</template>
