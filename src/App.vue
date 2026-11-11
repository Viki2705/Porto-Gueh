<template>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useLayoutStore } from '@/stores/layout'
import { onMounted } from 'vue'
import AOS from 'aos'

onMounted(() => {
  AOS.init()
  useLayoutStore().init()
})
</script>
