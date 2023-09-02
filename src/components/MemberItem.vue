<script lang="ts">
export default {
  props: {
    memberItem: Object,
  },
  data() {
    return {
      avatar: `https://avatars.githubusercontent.com/${this.memberItem?.userName}`,
      githubURL: `https://www.github.com/${this.memberItem?.userName}`,
    };
  },
};
</script>

<template>
  <div class="flex items-center gap-x-6">
    <img class="h-16 w-16 rounded-full" :src="avatar" alt="" />
    <div>
      <h3
        class="text-base font-semibold leading-7 tracking-tight text-gray-900"
      >
        <a :href="githubURL">{{ memberItem?.userName }}</a>
      </h3>
    </div>
  </div>
</template>
