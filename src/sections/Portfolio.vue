<template>
  <div id="list-item-5">
    <div class="portfolio-section-area">
      <BContainer>
        <BRow>
          <BCol lg="12">
            <div class="portfolio-header heading1">
              <h5 data-aos="fade-left" data-aos-duration="800">
                <img :src="subLogo" alt="" />
                My Portfolio
              </h5>
              <div class="space24" />
              <h2 data-aos="fade-left" data-aos-duration="1000">Innovation Designs</h2>
              <div class="space24" />
              <h2 class="head" data-aos="fade-left" data-aos-duration="1100">
                Real <span>Results</span>
              </h2>
            </div>
          </BCol>
          <div class="space50" />
          <BCol lg="12" data-aos="fade-left" data-aos-duration="1000">
            <div class="portfolio-boxarea click-here">
              <div class="img1">
                <a href="javascript:void(0)" @click="openModal(portfolio1, portfolioLinks.foodhub)">
                  <img :src="portfolio1" alt="" />
                </a>
              </div>
              <div class="space24" />
              <a href="javascript:void(0)" @click="openModal(portfolio1, portfolioLinks.foodhub)"
                >Foodhub - Food order reduce wasting</a
              >
            </div>
          </BCol>

          <BCol lg="6" md="6" data-aos="fade-left" data-aos-duration="1100">
            <div class="portfolio-boxarea2 click-here">
              <div class="img1">
                <a href="javascript:void(0)" @click="openModal(portfolio3, portfolioLinks.sakuin)">
                  <img :src="portfolio3" alt="" />
                </a>
              </div>
              <div class="space24" />
              <a href="javascript:void(0)" @click="openModal(portfolio3, portfolioLinks.sakuin)"
                >UI Style Guide - Sakuin</a
              >
            </div>
          </BCol>

          <BCol lg="6" md="6" data-aos="fade-left" data-aos-duration="1200">
            <div class="portfolio-boxarea2 click-here">
              <div class="img1">
                <a href="javascript:void(0)" @click="openModal(portfolio4, portfolioLinks.paymin)">
                  <img :src="portfolio4" alt="" />
                </a>
              </div>
              <div class="space24" />
              <a href="javascript:void(0)" @click="openModal(portfolio4, portfolioLinks.paymin)"
                >PayMin - POS system restaurant</a
              >
            </div>
          </BCol>

          <BCol lg="12" data-aos="fade-left" data-aos-duration="1100">
            <div class="portfolio-boxarea click-here">
              <div class="img1">
                <a href="javascript:void(0)" @click="openModal(portfolio2, portfolioLinks.protas)">
                  <img :src="portfolio2" alt="" />
                </a>
              </div>
              <div class="space24" />
              <a href="javascript:void(0)" @click="openModal(portfolio2, portfolioLinks.protas)"
                >ProTAS - thesis guidance app</a
              >
            </div>
          </BCol>
        </BRow>
      </BContainer>
    </div>
  </div>

  <ContactModal
    v-model="showModal"
    :portfolio-img="selectedPortfolioImage"
    :portfolio-link="selectedPortfolioLink"
  />
</template>

<script setup lang="ts">
import subLogo from '@/assets/img/icons/sublogo1.svg'

import portfolio1 from '@/assets/img/all-images/portfolio/portfolio-img1.png'
import portfolio2 from '@/assets/img/all-images/portfolio/portfolio-img2.png'
import portfolio3 from '@/assets/img/all-images/portfolio/portfolio-img3.png'
import portfolio4 from '@/assets/img/all-images/portfolio/portfolio-img4.png'
import ContactModal from '@/components/ContactModal.vue'
import { ref } from 'vue'
import { BCol, BContainer, BRow } from 'bootstrap-vue-next'

const portfolioLinks = {
  foodhub:
    'https://www.figma.com/design/W14XtkyvEpcXQOtNG8UdL6/IMK-Kelompok-8?node-id=102-4018&t=9XLdGf7hB0M5w3m7-1',

  sakuin:
    'https://www.figma.com/design/UaHNGUyQZSmxzBtQMUtuJ2/InovasiPembayaran?node-id=683-3807&t=CI3TCzkZ0R8JHfWG-1',

  paymin:
    'https://www.figma.com/design/Eoh2bJdHNwxpQpNLkpwMF8/Wirefrime-Pemrog-Web?node-id=0-1&t=UULKZa77iIjSZKzi-1',

  protas:
    'https://www.figma.com/design/8zgIUjUNIoN6E0ykT8JMLS/ANSI-ProTAS?node-id=387-1758&t=EEn44EvxSVe33iFu-1',
}

const showModal = ref<boolean>(false)

const selectedPortfolioImage = ref<string>(portfolio1)
const selectedPortfolioLink = ref<string>('')

const openModal = (image: string, link: string) => {
  selectedPortfolioImage.value = image
  selectedPortfolioLink.value = link
  showModal.value = true
}
</script>
