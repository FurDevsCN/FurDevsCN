<script setup lang="ts">
import HomeView from "./views/HomeView.vue";
import IntroView from "./views/IntroView.vue";
import AppFooter from "./components/AppFooter.vue";
import LoadingPage from "./components/LoadingPage.vue";
import { onMounted, ref } from "vue";
let show= ref(true);
onMounted(() => {
  window.addEventListener(
      'load',
      () => {
        show = ref(!show)
      },
      { passive: true, once: true }
  )
});
</script>

<template>
  <div class="select-none">
    <LoadingPage v-if="show"/>
    <div v-else>
      <HomeView/>
      <IntroView/>
      <AppFooter/>
    </div>
  </div>
</template>
