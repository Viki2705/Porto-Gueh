<template>
  <div id="list-item-3">
    <div class="service-section-area">
      <BContainer>
        <BRow>
          <BCol lg="12">
            <div class="service-header heading1">
              <h5 data-aos="fade-left" data-aos-duration="800">
                <img :src="subLogo" alt="" />
                My Services
              </h5>
              <div class="space24" />
              <h2 data-aos="fade-left" data-aos-duration="1000">Elevating Brands</h2>
              <div class="space24" />
              <h2 class="head" data-aos="fade-left" data-aos-duration="1100">
                Intuitive <span>Design</span>
              </h2>
              <div class="space50" />

              <template v-for="(service, idx) in services" :key="idx">
                <div class="div" data-aos="fade-left" data-aos-duration="1000">
                  <div class="service-main-boxes">
                    <h4>{{ service.title }}</h4>
                    <div class="space24" />
                    <p>{{ service.description }}</p>
                  </div>
                </div>
                <div v-if="services.length - 1 !== idx" class="space30" />
              </template>
            </div>
          </BCol>
        </BRow>
      </BContainer>
    </div>
  </div>
</template>

<script setup lang="ts">
import subLogo from '@/assets/img/icons/sublogo1.svg'
import { BCol, BContainer, BRow } from 'bootstrap-vue-next'

type ServiceType = {
  title: string
  description: string
}

const services: ServiceType[] = [
  {
    title: 'UI/UX Design',
    description:
      'Designing intuitive, user-focused interfaces that prioritize functionality and seamless navigation.',
  },
  {
    title: 'User Research & Prototyping',
    description:
      'Conducting in-depth user research and creating interactive prototypes to validate ideas and refine designs.',
  },
  {
    title: 'Responsive Web Design',
    description:
      'Crafting designs that adapt seamlessly across all devices, ensuring a consistent user experience.',
  },
  {
    title: 'Wireframing & Visual Design',
    description:
      'Creating detailed wireframes and visually stunning designs to bring ideas into focus.',
  },
]
</script>
