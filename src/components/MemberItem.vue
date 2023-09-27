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
  <div class="flex items-center gap-x-6" v-show="memberItem?.login? true: false">
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
  <div class="animate-pulse flex space-x-4" v-show="!memberItem?.login? true: false">
      <div class="rounded-full bg-slate-200 h-16 w-16"></div>
      <div class="flex-1 space-y-6 py-1">
        <div class="h-2 bg-slate-200 rounded"></div>
        <div class="space-y-3">
          <div class="grid grid-cols-3 gap-4">
            <div class="h-2 bg-slate-200 rounded col-span-1"></div>
          </div>
        </div>
      </div>
  </div>
</template>
