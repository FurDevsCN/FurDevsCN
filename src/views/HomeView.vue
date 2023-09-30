<script lang="ts">
import announcementBar from "../ui/announcementBar.vue";
export default {
  components: {
    announcementBar,
  },
};
</script>
<template>
  <div class="relative isolate px-8 h-screen">
    <announcementBar />
    <div class="mx-12 max-w-2xl my-36">
      <img src="/FurDevsCN.svg" class="h-32 my-6" />
      <div>
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          FurDevsCN
        </h1>
        <p class="my-6 text-lg leading-8 text-gray-600">
          一个有态度的小动物开发团体
        </p>
      </div>
      <a href="https://github.com/FurDevsCN" class="mt-5">
        <svg
          t="1693146049492"
          class="icon hover:fill-gray-700"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3999"
          width="32"
          height="32"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <path
            d="M512 12.672c-282.88 0-512 229.248-512 512 0 226.261333 146.688 418.133333 350.08 485.76 25.6 4.821333 34.986667-11.008 34.986667-24.618667 0-12.16-0.426667-44.373333-0.64-87.04-142.421333 30.890667-172.458667-68.693333-172.458667-68.693333C188.672 770.986667 155.008 755.2 155.008 755.2c-46.378667-31.744 3.584-31.104 3.584-31.104 51.413333 3.584 78.421333 52.736 78.421333 52.736 45.653333 78.293333 119.850667 55.68 149.12 42.581333 4.608-33.109333 17.792-55.68 32.426667-68.48-113.706667-12.8-233.216-56.832-233.216-253.013333 0-55.893333 19.84-101.546667 52.693333-137.386667-5.76-12.928-23.04-64.981333 4.48-135.509333 0 0 42.88-13.738667 140.8 52.48 40.96-11.392 84.48-17.024 128-17.28 43.52 0.256 87.04 5.888 128 17.28 97.28-66.218667 140.16-52.48 140.16-52.48 27.52 70.528 10.24 122.581333 5.12 135.509333 32.64 35.84 52.48 81.493333 52.48 137.386667 0 196.693333-119.68 240-233.6 252.586667 17.92 15.36 34.56 46.762667 34.56 94.72 0 68.522667-0.64 123.562667-0.64 140.202666 0 13.44 8.96 29.44 35.2 24.32C877.44 942.592 1024 750.592 1024 524.672c0-282.752-229.248-512-512-512"
            fill=""
            p-id="4000"
          ></path>
        </svg>
      </a>
    </div>
    <a href="#pageIntro">
      <button
        class="flex w-full justify-center items-center -mt-10 max-lg:-mt-24 duration-300 translate-y-0 ease-in-out hover:-translate-y-6 ease-in-out"
      >
        <svg
          t="1693257852830"
          class="duration-0 icon drop-shadow hover:drop-shadow-xl duration-200"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3996"
          width="64"
          height="64"
        >
          <path
            d="M472.064 751.552 72.832 352.32c-22.08-22.08-22.08-57.792 0-79.872 22.016-22.016 57.792-22.08 79.872 0L512 631.744l359.296-359.296c22.016-22.016 57.792-22.08 79.872 0 22.08 22.08 22.016 57.792 0 79.872l-399.232 399.232C529.856 773.568 494.144 773.568 472.064 751.552z"
            fill="#272636"
            p-id="3997"
          ></path>
        </svg>
      </button>
    </a>
  </div>
</template>
