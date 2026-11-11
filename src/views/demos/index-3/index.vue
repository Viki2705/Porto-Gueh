<template>
  <NavBar />

  <div class="main-hero-area3 parallaxie">
    <video class="body-overlay" muted autoplay loop>
      <source src="/video2.mp4" type="video/mp4" />
    </video>

    <BContainer>
      <BRow>
        <BCol lg="4">
          <ContactBox />
        </BCol>
        <BCol lg="8">
          <div
            data-bs-spy="scroll"
            data-bs-target="#list-example"
            data-bs-smooth-scroll="true"
            class="scrollspy-example"
            tabindex="0"
          >
            <Hero />
            <div class="space50" />
            <About />
            <Service />
            <div class="space50" />
            <Skills />
            <div class="space30" />
            <Portfolio />
            <div class="space30" />
            <Testimonials />
            <div class="space60" />
            <Contact />
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
import Hero from '@/sections/Hero.vue'
import About from '@/sections/About.vue'
import Service from '@/sections/Service.vue'
import Skills from '@/sections/Skills.vue'
import Portfolio from '@/sections/Portfolio.vue'
import Testimonials from '@/sections/Testimonials.vue'
import Contact from '@/sections/Contact.vue'
import BackToTop from '@/components/BackToTop.vue'
import { BCol, BContainer, BRow } from 'bootstrap-vue-next'
</script>
