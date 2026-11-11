<template>
  <div class="personal-contact-box">
    <div v-if="showMenu" class="list-group">
      <RouterLink
        v-for="(item, idx) in menuItems"
        :key="idx"
        class="list-group-item list-group-item-action"
        :class="{ active: activeSectionIndex === idx }"
        :to="'#' + item.url"
      >
        <img :src="item.image" alt="" />
        <span>{{ item.label }}</span>
      </RouterLink>
    </div>
    <div class="img1 image-anime">
      <img :src="heroImage" alt="" />
    </div>
    <div class="space18" />
    <h3>Fiki Fauzianto</h3>
    <div class="space16" />
    <p>
      Hi, I’m Fiki, a passionate UI/UX Designer focused on creating intuitive, user-centered digital
      experiences through thoughtful research and creative design.
    </p>
    <div class="space32" />
    <ul>
      <li v-for="(item, idx) in socialLinks" :key="idx">
        <a
          :href="item.url"
          :target="item.url !== '#' ? '_blank' : undefined"
          :rel="item.url !== '#' ? 'noopener noreferrer' : undefined"
          :class="{ 'm-0': socialLinks.length - 1 === idx }"
          @click="item.url === '#' && $event.preventDefault()"
        >
          <img :src="item.image" :alt="item.label || 'Social media'" />
        </a>
      </li>
    </ul>
    <div class="space44" />
    <div class="btn-area1 text-center">
      <a href="#" download class="vl-btn1">
        Download Now
        <img :src="downloadIcon" alt="" />
      </a>
    </div>
    <div class="space32" />
    <p>© {{ currentYear }} {{ appName }}. All Rights Reserved.</p>
  </div>
</template>

<script setup lang="ts">
import home1 from '@/assets/img/icons/home1.svg'
import home2 from '@/assets/img/icons/home2.svg'
import home3 from '@/assets/img/icons/home3.svg'
import home4 from '@/assets/img/icons/home4.svg'
import home5 from '@/assets/img/icons/home5.svg'
import home6 from '@/assets/img/icons/home6.svg'
import home7 from '@/assets/img/icons/home7.svg'

import heroImage from '@/assets/img/all-images/hero/hero-img1.png'
import downloadIcon from '@/assets/img/icons/download1.svg'

import sIcon1 from '@/assets/img/icons/s-icon1.svg'
import sIcon2 from '@/assets/img/icons/s-icon2.svg'
import sIcon3 from '@/assets/img/icons/s-icon3.svg'
import sIcon4 from '@/assets/img/icons/s-icon4.svg'
import sIcon5 from '@/assets/img/icons/s-icon5.svg'

import { appName, currentYear } from '@/helpers'
import { onMounted, onUnmounted, ref } from 'vue'

type PropsType = {
  showMenu?: boolean
}

const props = withDefaults(defineProps<PropsType>(), {
  showMenu: true,
})

type MenuItemType = {
  label: string
  url: string
  image: string
}

const menuItems: MenuItemType[] = [
  { label: 'Home', url: 'list-item-1', image: home1 },
  { label: 'About Us', url: 'list-item-2', image: home2 },
  { label: 'Our Service', url: 'list-item-3', image: home3 },
  { label: 'My Skill', url: 'list-item-4', image: home4 },
  { label: 'Portfolio', url: 'list-item-5', image: home5 },
  { label: 'Testimonial', url: 'list-item-6', image: home6 },
  { label: 'Contact Us', url: 'list-item-8', image: home7 },
]

type SocialLinkType = {
  label?: string
  image: string
  url: string
}

const socialLinks: SocialLinkType[] = [
  { label: 'X', image: sIcon1, url: '#' },
  { label: 'Instagram', image: sIcon2, url: '#' },
  { label: 'Facebook', image: sIcon3, url: '#' },

  {
    label: 'LinkedIn',
    image: sIcon4,
    url: 'https://www.linkedin.com/in/fikifzt/',
  },

  { label: 'Dribbble', image: sIcon5, url: '#' },
]

const activeSectionIndex = ref<number>(0)

const getActiveSectionIndex = () => {
  if (
    window.scrollY > 0 &&
    window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 1
  ) {
    activeSectionIndex.value = menuItems.length - 1
    return
  }

  for (let i = menuItems.length - 1; i >= 0; i--) {
    const section = document.getElementById(menuItems[i].url)
    if (section && section.getBoundingClientRect().top <= 70) {
      activeSectionIndex.value = i
      return
    }
  }
  activeSectionIndex.value = 0
}

onMounted(() => {
  if (!props.showMenu) return
  getActiveSectionIndex()
  window.addEventListener('scroll', getActiveSectionIndex, { passive: true })
})

onUnmounted(() => window.removeEventListener('scroll', getActiveSectionIndex))
</script>
