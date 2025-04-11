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
  <div
    class="flex flex-col h-screen justify-between overflow-hidden"
  >
    <div class="relative h-screen">
      <div
        class="w-screen max-w-2xl absolute inset-0 filter backdrop-blur-md rounded-xl"
      >
        <div class="mx-20 flex-col">
          <img src="/FurDevsCN.svg" class="h-32 mt-36 max-xl:mt-24 invert" />
          <h1
            class="font-HooskaiChamferedSquare text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl dark:text-gray-100 mt-6"
          >
            Fur<br />Devs<br />CN
          </h1>
          <p class="my-6 text-lg leading-8 text-gray-100 dark:text-slate-100">
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
              <img
                src="/Github.svg"
                class="h-8 max-sm:mt-4 invert dark:filter dark:invert"
              />
            </a>
          </div>
        </div>
      </div>
      <div class="fixed inset-0 -z-50">
        <div
          class="dark:w-full dark:h-full dark:absolute dark:inset-0 dark:bg-black dark:opacity-30"
        ></div>
        <video class="object-cover w-full h-full" autoplay muted loop>
          <source src="/wave.mp4" type="video/mp4" />
        </video>
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
  </div>
</template>
<style scoped>
video {
  background: url("/wave.webp") no-repeat center;
}
</style>