<template>
  <header>
    <div class="header-area homepage1 header header-sticky">
      <BContainer>
        <BRow>
          <BCol lg="12">
            <div class="header-elements">
              <LogoBox />

              <div class="btn-area d-lg-flex">
                <div v-if="showThemeToggler" class="theme-toggle-container">
                  <label class="theme-switch">
                    <input
                      type="checkbox"
                      :checked="layout.theme === 'light'"
                      @change="toggleTheme"
                    />
                    <span class="slider">
                      <Icon icon="fa6-solid:moon" class="icon moon-icon" />
                      <Icon icon="fa6-solid:sun" class="icon sun-icon" />
                    </span>
                  </label>
                </div>
                <RouterLink :to="buttonLink" class="vl-btn1">
                  {{ buttonLabel }}
                  <span><img :src="buttonIcon" alt="" /></span>
                </RouterLink>
                <button
                  v-if="sideBarToggler"
                  class="hamburger_menu"
                  @click="() => (showSideBar = !showSideBar)"
                >
                  <img :src="barIcon" alt="" />
                </button>
              </div>
            </div>
          </BCol>
        </BRow>
      </BContainer>
    </div>
  </header>

  <SideBar v-model:show="showSideBar" />
</template>

<script setup lang="ts">
import barIcon from '@/assets/img/icons/bars-icons1.svg'
import mailIcon from '@/assets/img/icons/mail1.svg'
import { useLayoutStore } from '@/stores/layout'
import { breakpointsBootstrapV5, useBreakpoints } from '@vueuse/core'
import LogoBox from '@/components/LogoBox.vue'
import SideBar from '@/components/SideBar.vue'
import { onMounted, ref } from 'vue'
import { Icon } from '@iconify/vue'
import { BCol, BContainer, BRow } from 'bootstrap-vue-next'

type PropsType = {
  buttonLabel?: string
  buttonLink?: string
  buttonIcon?: string

  showSideBarToggler?: boolean
  showThemeToggler?: boolean
}

const props = withDefaults(defineProps<PropsType>(), {
  buttonLabel: 'HIRE ME',
  buttonLink: '/',
  buttonIcon: mailIcon,
  showSideBarToggler: true,
  showThemeToggler: true,
})

const breakpoints = useBreakpoints(breakpointsBootstrapV5)

const mdAndSmaller = breakpoints.smallerOrEqual('md')

const showSideBar = ref<boolean>(false)
const sideBarToggler = ref<boolean>(props.showSideBarToggler)

const { layout, setTheme } = useLayoutStore()

const toggleTheme = () => {
  if (layout.theme === 'dark') {
    return setTheme('light')
  }
  return setTheme('dark')
}

onMounted(() => {
  if (mdAndSmaller.value) {
    sideBarToggler.value = true
  }
})
</script>
