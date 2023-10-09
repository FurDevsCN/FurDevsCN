<template>
  <footer class="bg-white -mt-10">
    <div class="container mx-auto">
      <div class="text-center md:text-left">
        <a href="https://furdevs.cn"><img
          src="/FurDevsCN.svg"
          class="animate-bounce h-12 mx-auto mb-8 max-mb:mb-6 hover:animate-none"
        /></a>
      </div>
      <div class="text-center mb-4">
        <ul class="flex justify-center space-x-3">
          <li v-for="(item, index) in footerItems" :key="item.name">
            <a :href="item.link" class="text-gray-500 hover:text-gray-900">{{ item.name }}</a>
            <span v-if="index < footerItems.length - 1" class="ml-3"> · </span>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
<script lang="ts">
export default {
  data() {
    return {
      footerItems: [
        {
          name: '首页',
          link: '/'
        },
        {
          name: 'Github',
          link: 'https://www.github.com/FurDevsCN'
        },
        {
          name: '联系我们',
          link: 'mailto:colour93@furdevs.cn'
        },
        {
          name: '社群',
          link: 'https://qm.qq.com/q/BWbDSGK5Ms'
        }
      ]
    };
  }
};
</script>
