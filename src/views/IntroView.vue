<script lang="ts">
import { defineAsyncComponent, ref } from "vue";
export default {
  components: {
    Member: defineAsyncComponent(() => import("../components/MemberItem.vue")),
  },
  data() {
    return {
      memberList: ref([]),
      lastUpdate: ref(Date),
    };
  },
  methods: {
    async getMemberList() {
      await fetch(
        "https://fur233.oss-cn-hangzhou.aliyuncs.com/common/members.json",
      )
        .then((response) => response.json())
        .then(
          (data) => (
            (this.$data.memberList = data.data),
            (this.$data.lastUpdate = data.updateTime)
          ),
        );
    },
  },
  mounted() {
    this.getMemberList();
  },
};
</script>
<template>
  <div class="w-full bg-white py-24 sm:py-32" id="pageIntro">
    <div
      class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3"
    >
      <div class="max-w-2xl">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          我们的成员
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          Meet our members in FurDevsCN
        </p>
        <span class="text-sm"> 上次更新: {{ lastUpdate }}</span>
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
