<script lang="ts">
import announcementBar from "@/ui/announcementBar.vue";
export default {
  components: {
    announcementBar,
  },
  methods: {
    scrollIntoView() {
      document
        .getElementById("pageIntro")
        ?.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>
<template>
  <div class="dark:bg-slate-800 flex flex-col h-screen justify-between">
    <announcementBar>
      <a class="text-white">🎉我们正在招新！</a>
      <a
        href="javascript:void(0)"
        @click="scrollIntoView"
        class="text-white nounderline hover:underline"
      >
        <b>点击这里查看详情 →</b>
      </a>
    </announcementBar>
    <div class="w-screen mx-20 max-w-2xl">
      <img src="/FurDevsCN.svg" class="h-32 mt-36 max-xl:mt-24" />
      <div>
        <h1
          class="font-HooskaiChamferedSquare text-4xl font-bold tracking-tight text-gray-800 sm:text-6xl dark:text-gray-100"
        >
          Fur<br />Devs<br />CN
        </h1>
        <p class="my-6 text-lg leading-8 text-gray-600 dark:text-slate-300">
          一个有态度的小动物开发团体
        </p>
      </div>
      <a href="https://github.com/FurDevsCN" class="mt-5">
        <img src="/Github.svg" class="h-8 dark:filter dark:invert" />
      </a>
    </div>
    <button
      @click="scrollIntoView"
      class="mt-16 mx-auto max-xl:mt-8 duration-300 translate-y-0 hover:-translate-y-6 ease-in-out"
    >
      <img
        src="/DownArrow.svg"
        class="icon drop-shadow hover:drop-shadow-xl duration-200 dark:filter dark:invert"
      />
    </button>
  </div>
</template>
