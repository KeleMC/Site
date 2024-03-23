<script setup lang="tsx">
import { ref } from 'vue'

defineProps<{
  name?: string
  desc?: string
  contentList: string
}>()

const images = ref<string[]>([
  '/images/1.png',
  '/images/2.png',
  '/images/3.png',
  '/images/4.png',
  '/images/5.png',
  '/images/6.png',
  '/images/7.png'
])

const configProps = {
  navigationType: 'dots',
  showSlideBtn: 'hover',
  placement: 'inside'
}
</script>
<template>
  <!-- <t-swiper
    :navigation="{ type: configProps.navigationType }"
    trigger="click"
    :duration="300"
    :interval="2000"
  >
    <t-swiper-item v-for="(img, index) in images" :key="index">
      <img :src="img" :alt="`Image- ${index}`" />
    </t-swiper-item>
  </t-swiper> -->
  <div>
    <p>建设中...</p>
  </div>
</template>
<style scoped></style>
