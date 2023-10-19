<template>
  <button
    @click="toggleDarkMode"
    class="fixed bottom-4 right-4 p-2 rounded-lg bg-gray-500 text-white shadow-lg hover:bg-gray-700"
  >
    <div v-if="darkMode">☀️</div>
    <div v-else>🌙</div>
  </button>
</template>

<script lang="ts">
import { ref } from "vue";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

export default {
  data() {
    return {
      darkMode: ref(getLocalStorage("darkMode") === "true")
    };
  },
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      setLocalStorage("darkMode", this.darkMode);
      document.documentElement.classList.toggle("dark", this.darkMode);
    },
  },
  mounted() {
    document.documentElement.classList.toggle("dark", this.darkMode);
  },
};
</script>
