<template>
  <div id="list-item-2">
    <div class="about-section-area">
      <div class="heading1">
        <h5 data-aos="fade-left" data-aos-duration="800"><img :src="subLogo" alt="" />About Us</h5>
        <div class="space24" />
        <h1 data-aos="fade-left" data-aos-duration="1000">Crafting Seamless</h1>
        <div class="space24" />
        <h1 class="head" data-aos="fade-left" data-aos-duration="1100">
          User <span>Experiences</span>
        </h1>
      </div>
      <div class="space60" />
      <div class="about-boxarea">
        <BRow>
          <BCol lg="12" data-aos="fade-left" data-aos-duration="1200">
            <div class="about-main-boxes">
              <h4>Alex Carry</h4>
              <div class="space24" />
              <p>
                Hi, I’m Fiki, a dedicated UI/UX Designer with 2 years of experience creating
                meaningful digital experiences. I specialize in crafting user-centered designs that
                enhance engagement and drive results. By combining research, creativity, and
                technical skills, I deliver solutions that not only look great but also function
                seamlessly.
              </p>
            </div>
          </BCol>

          <BCol
            v-for="(item, idx) in skills"
            :key="idx"
            lg="6"
            md="6"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div class="about-boxes2">
              <img :src="item.image" alt="" />
              <div class="content-area">
                <h4>{{ item.title }}</h4>
                <div class="space16" />
                <p>{{ item.description }}</p>
              </div>
            </div>
          </BCol>

          <div class="space20" />

          <BCol lg="6" md="6">
            <h3>Work Experience</h3>
            <div class="space32" />
            <div class="about-others-box" data-aos="zoom-in" data-aos-duration="900">
              <a href="#">2023</a>
              <div class="space16" />
              <h4><a href="#">Back End Officier</a></h4>
              <div class="space16" />
              <p>Amigo Wonosari</p>
              <div class="space32" />
              <a href="#">2025-2026</a>
              <div class="space16" />
              <h4><a href="#">Lab Assistant UI/UX Design</a></h4>
              <div class="space16" />
              <p>University Amikom Yogyakarta</p>
              <div class="space32" />
              <a href="#">2026 - Present</a>
              <div class="space16" />
              <h4><a href="#">Student Staff Verval</a></h4>
              <div class="space16" />
              <p>University Amikom Yogyakarta</p>
            </div>
            <div class="about-others-box text-center" data-aos="zoom-in" data-aos-duration="1000">
              <h4>Stay With Me</h4>
              <div class="space18" />
              <ul>
                <li v-for="(item, idx) in socialLinks" :key="idx">
                  <RouterLink :to="item.url" :class="{ 'm-0': socialLinks.length - 1 === idx }">
                    <img :src="item.image" alt="" />
                  </RouterLink>
                </li>
              </ul>
            </div>
          </BCol>

          <BCol lg="6" md="6">
            <h3>Education</h3>
            <div class="space32" />
            <div class="about-others-box" data-aos="zoom-in" data-aos-duration="1100">
              <a href="#">2020 - 2023</a>
              <div class="space16" />
              <h4><a href="#">Multimedia</a></h4>
              <div class="space16" />
              <p>State Vocational High School 1 Klaten</p>
              <div class="space32" />
              <a href="#">2023 - 2026</a>
              <div class="space16" />
              <h4><a href="#">Bachelor's Degree in Informatics</a></h4>
              <div class="space16" />
              <p>University Amikom Yogyakarta</p>
            </div>
          </BCol>

          <div class="space20" />
        </BRow>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import sIcon1 from '@/assets/img/icons/s-icon1.svg'
import sIcon2 from '@/assets/img/icons/s-icon2.svg'
import sIcon3 from '@/assets/img/icons/s-icon3.svg'
import sIcon4 from '@/assets/img/icons/s-icon4.svg'
import sIcon5 from '@/assets/img/icons/s-icon5.svg'

import home2 from '@/assets/img/icons/home2.svg'
import home3 from '@/assets/img/icons/home3.svg'
import home4 from '@/assets/img/icons/home4.svg'
import home5 from '@/assets/img/icons/home5.svg'
import { BCol, BRow } from 'bootstrap-vue-next'

type SkillType = {
  image: string
  title: string
  description: string
}

const skills: SkillType[] = [
  {
    image: home2,
    title: 'UI/UX Design',
    description:
      'Designing intuitive, user-focused interfaces that prioritize functionality & seamless navigation.',
  },
  {
    image: home3,
    title: 'User Research & Prototyping',
    description:
      'Conducting in-depth user research and creating interactive prototypes to validate ideas and refine designs.',
  },
  {
    image: home4,
    title: 'Responsive Web Design',
    description:
      'Crafting designs adapt seamlessly across all devices ensuring and a consistent user experience.',
  },
  {
    image: home5,
    title: 'Wireframing & Visual Design',
    description:
      'Creating detailed wireframes and visually stunning designs to bring ideas into focus.',
  },
]

type SocialLinkType = {
  label?: string
  image: string
  url: string
}

const socialLinks: SocialLinkType[] = [
  { image: sIcon1, url: '#' },
  { image: sIcon2, url: '#' },
  { image: sIcon3, url: '#' },
  { image: sIcon4, url: '#' },
  { image: sIcon5, url: '#' },
]
</script>
