<script lang="ts">
import { defineAsyncComponent, ref } from "vue";
import { fetchApi } from "../utils/fetchApi";

export default {
  components: {
    Member: defineAsyncComponent(() => import("../components/MemberItem.vue")),
  },
  data() {
    return {
      memberList: ref([]),
    };
  },
  methods: {
    async getMemberList() {
      this.memberList = await fetchApi(
        "https://api.github.com/orgs/FurDevsCN/members",
      );
    },
  },
  mounted() {
    this.getMemberList();
  },
};
</script>
<template>
  <div class="w-full bg-white py-24 sm:py-32 dark:bg-slate-800" id="pageIntro">
    <div
      class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3"
    >
      <div class="max-w-2xl">
        <h2
          class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white"
        >
          我们的成员
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-200">
          Meet our members in FurDevsCN
        </p>
        <span class="mt-6 text-md leading-8 text-gray-500"
          >按照字母顺序排序，排名不分先后</span
        >
      </div>
      <ul
        role="list"
        class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
      >
        <li v-for="member in memberList" :key="member">
          <Member :memberItem="member" />
        </li>
      </ul>
    </div>
  </div>
</template>
