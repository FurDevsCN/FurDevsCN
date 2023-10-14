<template>
  <div>
      <button
        @click="scrollToTop"
        class="fixed bottom-16 right-4 p-2 rounded-lg bg-gray-500 text-white shadow-lg hover:bg-gray-700"
        key="scroll-to-top-button"
      >
        🚀
      </button>
  </div>
</template>

<script lang="ts">
export default {
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
};
</script>
