<template>
  <div class="site-logo" :class="className">
    <RouterLink to="/">
      <img :src="logo" alt="" :width="width" :height="height" />
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import logo from '@/assets/img/logo/logo1.png'

type PropsType = {
  height?: number
  width?: string
  className?: string
}

defineProps<PropsType>()
</script>
