<template>
  <div>
      <button
        @click="toggleDarkMode"
        class="fixed bottom-4 right-4 p-2 rounded-lg bg-gray-500 text-white shadow-lg hover:bg-gray-700"
        key="scroll-to-top-button"
      >
        <div v-if="$data.darkMode">☀</div>
        <div v-else>🌙</div>
      </button>
  </div>
</template>

<script lang="ts">
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage';
export default {
    data(){
        return {
            darkMode: getLocalStorage("darkMode")
        }
    },
  methods: {
    toggleDarkMode() {
        this.darkMode === "true"? setLocalStorage("darkMode", "true"): setLocalStorage("darkMode", "false");
    }
  },
  mounted() {
    const darkMode = getLocalStorage("darkMode");
    darkMode ? setLocalStorage("darkMode", darkMode): setLocalStorage("darkMode", "false");
  }
};
</script>


