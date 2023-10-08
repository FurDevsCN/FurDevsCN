<script lang="ts">
import announcementBar from "../ui/announcementBar.vue";
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
  <announcementBar>
    <a class="text-white">🎉我们正在招新！</a
    ><a
      href="javascript:void(0)"
      @click="scrollIntoView()"
      class="text-white nounderline hover:underline"
    >
      <b>点击这里查看详情 →</b>
    </a>
  </announcementBar>
  <div class="relative isolate px-1.5 h-screen">
    <div class="mx-20 max-w-2xl my-40 max-lg:my-28">
      <img src="/FurDevsCN.svg" class="h-32 my-1.5" />
      <div>
        <h1
          class="font-HooskaiChamferedSquare text-4xl font-bold tracking-tight text-gray-800 sm:text-6xl"
        >
          Fur<br />Devs<br />CN
        </h1>
        <p class="my-6 text-lg leading-8 text-gray-600">
          一个有态度的小动物开发团体
        </p>
      </div>
      <a href="https://github.com/FurDevsCN" class="mt-5">
        <img src="/Github.svg" class="h-8" />
      </a>
    </div>
    <a href="javascript:void(0)" @click="scrollIntoView()">
      <button
        class="flex w-full justify-center items-center -mt-32 max-lg:-mt-16 duration-300 translate-y-0 ease-in-out hover:-translate-y-6 ease-in-out"
      >
        <img
          src="/DownArrow.svg"
          class="duration-0 icon drop-shadow hover:drop-shadow-xl duration-200"
        />
      </button>
    </a>
  </div>
</template>
