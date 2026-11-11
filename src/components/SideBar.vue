<template>
  <div class="header-site-icon">
    <div class="slide-bar slide-bar1" :class="{ show: show }">
      <div class="sidebar-info">
        <div class="sidebar-logo">
          <LogoBox />
          <div class="close-mobile-menu">
            <a @click="toggleSideBar">
              <Icon icon="fa6-solid:xmark" size="32" />
            </a>
          </div>
        </div>
        <div class="sidebar-content">
          <ul>
            <li v-for="(link, idx) in navLinks" :key="idx">
              <RouterLink :to="link.url">{{ link.label }}</RouterLink>
            </li>
          </ul>
        </div>
        <div class="space32" />
        <div class="space16" />
        <div class="btn-area">
          <RouterLink to="#" class="vl-btn1"
            >Get in touch now <img :src="mailIcon" alt=""
          /></RouterLink>
        </div>
        <div class="space40" />
        <div class="social-link-area">
          <h3 class="sidebar-heading">Social Links</h3>
          <ul>
            <li>
              <RouterLink v-for="(link, idx) in socialLinks" :key="idx" :to="link.url">
                <Icon :icon="link.icon" />
              </RouterLink>
            </li>
          </ul>
        </div>
        <div class="space40" />
        <div class="form-area">
          <h3>Subscribe To Newsletter</h3>
          <form>
            <input type="text" placeholder="Email Address*" />
            <button type="submit" class="vl-btn1">subscribe</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import mailIcon from '@/assets/img/icons/mail1.svg'
import LogoBox from '@/components/LogoBox.vue'
import { Icon } from '@iconify/vue'

type PropsType = {
  show: boolean
}

const props = defineProps<PropsType>()

const emit = defineEmits<{ (e: 'update:show', value: boolean): void }>()

const toggleSideBar = () => {
  emit('update:show', !props.show)
}

type NavLinkType = {
  label: string
  url: string
}

const navLinks: NavLinkType[] = [
  { label: 'Home', url: '#list-item-1' },
  { label: 'About Us', url: '#list-item-2' },
  { label: 'Service', url: '#list-item-3' },
  { label: 'Skill', url: '#list-item-4' },
  { label: 'Portfolio', url: '#list-item-5' },
  { label: 'Testimonial', url: '#list-item-6' },
  { label: 'Contact', url: '#list-item-8' },
]

type SocialLinkType = {
  label: string
  icon: string
  url: string
}

const socialLinks: SocialLinkType[] = [
  {
    label: 'Facebook',
    icon: 'fa6-brands:facebook-f',
    url: '#',
  },
  {
    label: 'Instagram',
    icon: 'fa6-brands:instagram',
    url: '#',
  },
  {
    label: 'LinkedIn',
    icon: 'fa6-brands:linkedin-in',
    url: '#',
  },
  {
    label: 'Pinterest',
    icon: 'fa6-brands:pinterest-p',
    url: '#',
  },
  {
    label: 'YouTube',
    icon: 'fa6-brands:youtube',
    url: '#',
  },
]
</script>
