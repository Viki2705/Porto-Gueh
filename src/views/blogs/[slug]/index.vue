<template>
  <NavBar />

  <div class="main-hero-area parallaxie">
    <BContainer>
      <BRow>
        <BCol lg="4">
          <ContactBox :show-menu="false" />
        </BCol>
        <BCol lg="8">
          <div
            data-bs-spy="scroll"
            data-bs-target="#list-example"
            data-bs-smooth-scroll="true"
            class="scrollspy-example"
            tabindex="0"
          >
            <BlogDetails :slug="route.params.slug" />
            <BlogComment :slug="route.params.slug" />
          </div>
        </BCol>
      </BRow>
    </BContainer>
  </div>

  <BackToTop />
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import ContactBox from '@/sections/ContactBox.vue'
import BlogDetails from '@/sections/BlogDetails.vue'
import BlogComment from '@/sections/BlogComment.vue'
import BackToTop from '@/components/BackToTop.vue'
import { BCol, BContainer, BRow } from 'bootstrap-vue-next'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>
