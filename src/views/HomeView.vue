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
  <div class="dark:bg-slate-800 flex flex-col h-screen justify-between overflow-hidden">
    <div class="w-screen max-w-2xl h-screen filter backdrop-blur-md rounded-xl">
      <div class="mx-20 flex-col">
        <img src="/FurDevsCN.svg" class="h-32 mt-36 max-xl:mt-24" />
        <h1
          class="font-HooskaiChamferedSquare text-4xl font-bold tracking-tight text-gray-800 sm:text-6xl dark:text-gray-100 mt-6"
        >
          Fur<br />Devs<br />CN
        </h1>
        <p class="my-6 text-lg leading-8 text-gray-600 dark:text-slate-300">
          一个有态度的小动物开发团体
        </p>
        <div class="md:flex md:items-center mt-6">
          <button
            @click="scrollIntoView"
            class="duration-300 ease-in-out bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
          >
            Learn More
          </button>
          <a href="https://github.com/FurDevsCN" class="ml-5">
            <img src="/Github.svg" class="h-8 max-sm:mt-4 dark:filter dark:invert" />
          </a>
        </div>
      </div>
    </div>
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
    <div class="absolute inset-0 -z-50 max-xl:hidden">
      <video autoplay muted loop>
        <source src="/wave.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
</template>
