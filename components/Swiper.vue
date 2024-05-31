<script setup lang="tsx">
import { ref } from 'vue'
import { Loading, type ImageProps, type ButtonProps } from 'tdesign-vue-next'

defineProps<{
  name?: string
  desc?: string
  contentList?: string
}>()

const images = ref<string[]>([
  '/images/1-o.webp',
  '/images/2-o.webp',
  '/images/3-o.webp',
  '/images/4-o.webp',
  '/images/5-o.webp',
  '/images/6-o.webp',
  '/images/7-o.webp'
])

const renderPlaceholder: ImageProps['placeholder'] = () => (
  <img class='.swiper-img' src='/logo-64.png' />
)

const renderLoading: ImageProps['loading'] = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      background: 'rgba(255,255,255,.4)',
      backdropFilter: 'blur(10px)'
    }}>
    <Loading
      delay={0}
      fullscreen={false}
      indicator
      inheritColor={false}
      loading
      preventScrollThrough
      showOverlay
      size='small'
    />
  </div>
)

const renderRefreshIcon: ButtonProps['icon'] = () => {
  return <t-icon name='refresh' />
}
</script>
<template>
  <t-swiper
    class="swiper"
    :navigation="{ type: 'dots', placement: 'inside', showSlideBtn: 'hover' }"
    trigger="click"
    animation="fade"
    :duration="800"
    :interval="3000"
    type="default">
    <t-swiper-item v-for="(img, index) in images" :key="index">
      <t-image
        class="swiper-img"
        :src="img"
        :lazy="true"
        :alt="`Image- ${index}`"
        :loading="renderLoading"
        :placeholder="renderPlaceholder"
        fit="cover" />
    </t-swiper-item>
  </t-swiper>
</template>
<style scoped>
.swiper {
  display: block;
  position: relative;
  margin: auto;
  overflow: hidden;

  .swiper-img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: fill;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
