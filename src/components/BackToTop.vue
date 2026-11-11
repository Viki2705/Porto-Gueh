<template>
  <div class="paginacontainer" @click="scrollToTop">
    <div ref="backToTopRef" class="progress-wrap">
      <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          :stroke-dasharray="307"
          :stroke-dashoffset="307 - (progress / 100) * 307"
        />
      </svg>
      <Icon
        icon="fa6-solid:arrow-up"
        size="18"
        class="position-absolute top-50 start-50 z-20 translate-middle"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Icon } from '@iconify/vue'

const progress = ref<number>(0)

const backToTopRef = ref<HTMLElement | null>(null)

onMounted(() => {
  const handleScroll = () => {
    if (backToTopRef.value)
      backToTopRef.value.classList.toggle('active-progress', window.scrollY > 40)

    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight

    progress.value = (scrollTop / docHeight) * 100
  }

  window.addEventListener('scroll', handleScroll)
})

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>
