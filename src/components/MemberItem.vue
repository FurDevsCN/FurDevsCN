<script lang="ts">
import type { MemberItem } from "../member-item";

export default {
  props: {
    memberItem: Object,
  },
  data() {
    return {
      memberInfo: {} as MemberItem,
    };
  },
  methods: {
    async fetchGithubApi(login: string | undefined) {
      await fetch(`https://api.github.com/users/${login}`)
        .then((response) => response.json())
        .then((data) => (this.$data.memberInfo = data));
    }
  },
  mounted() {
    this.fetchGithubApi(this.$props.memberItem?.login)
  },
};
</script>

<template>
  <div class="flex items-center gap-x-6">
    <img class="h-16 w-16 rounded-full" :src="memberInfo?.avatar_url" alt="" />
    <div>
      <h3
        class="text-base font-semibold leading-7 tracking-tight text-gray-900"
      >
        <a :href="memberInfo?.html_url">{{ memberInfo?.name }} ({{ memberInfo?.login }})</a>
        <span>{{ memberInfo?.bio }}</span>
      </h3>
    </div>
  </div>
</template>
