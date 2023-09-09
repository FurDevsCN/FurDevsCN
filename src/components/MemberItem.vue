<script lang="ts">
export default {
  props: {
    memberItem: Object,
  }
};
</script>

<template>
  <div class="flex items-center gap-x-6">
    <img class="h-16 w-16 rounded-full" :src="memberItem?.avatar_url" alt="" />
    <div>
      <h3
        class="text-base font-semibold leading-7 tracking-tight text-gray-900"
      >
        <a :href="memberItem?.html_url">{{ memberItem?.login }}</a>
      </h3>
    </div>
  </div>
</template>
