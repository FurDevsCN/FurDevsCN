<script lang="ts">
import type { MemberItem } from "../member-item";
import { fetchApi } from "../utils/fetchApi";

export default {
  props: {
    memberItem: Object as () => MemberItem | undefined,
  },
  data() {
    return {
      memberInfo: {} as MemberItem,
    };
  },
  methods: {
    async fetchGithubApi(login: string | undefined) {
      this.$data.memberInfo = await fetchApi(
        `https://api.github.com/users/${login}`,
      );
    },
  },
  mounted() {
    this.fetchGithubApi(this.$props.memberItem?.login);
  },
};
</script>

<template>
  <div class="flex items-center gap-x-6">
    <img class="h-16 w-16 rounded-full" :src="memberItem?.avatar_url" alt="" />
    <div>
      <h3
        class="text-base font-semibold leading-7 tracking-tight text-gray-900"
      >
        <a :href="memberItem?.html_url" class="mt-6 text-md leading-8"
          >{{ memberInfo.name ? memberInfo.name : memberItem?.login }}({{
            memberItem?.login
          }})
        </a>
        <br />
        <span class="mt-6 text-sm leading-8 text-gray-500">{{
          memberInfo?.bio ? memberInfo.bio : "暂无简介"
        }}</span>
      </h3>
    </div>
  </div>
</template>
