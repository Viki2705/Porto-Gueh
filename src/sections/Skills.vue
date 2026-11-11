<template>
  <div id="list-item-4">
    <div class="skill-section-area">
      <BContainer>
        <BRow>
          <BCol lg="12">
            <div class="skill-header heading1">
              <h5 data-aos="fade-left" data-aos-duration="800">
                <img :src="subLogo" alt="" />
                My Skill
              </h5>
              <div class="space24" />
              <h2 data-aos="fade-left" data-aos-duration="1000">The Tools Behind</h2>
              <div class="space24" />
              <h2 class="head" data-aos="fade-left" data-aos-duration="1100">
                Exceptional <span>Design</span>
              </h2>
            </div>
            <div class="space80" />
            <BRow>
              <BCol
                v-for="(item, idx) in skills"
                :key="idx"
                lg="4"
                md="6"
                data-aos="zoom-out"
                data-aos-duration="1000"
              >
                <div class="skill-boxarea">
                  <div class="icons">
                    <img :src="item.image" alt="" />
                  </div>
                  <div class="space24" />
                  <h3>
                    <count-up
                      :end-val="item.percentage"
                      :options="{ suffix: '%' }"
                      class="counter"
                    />
                  </h3>
                  <div class="space16" />
                  <p>{{ item.title }}</p>
                </div>
              </BCol>
            </BRow>
          </BCol>
        </BRow>
      </BContainer>
    </div>
  </div>
</template>

<script setup lang="ts">
import subLogo from '@/assets/img/icons/sublogo1.svg'
import skill1 from '@/assets/img/icons/skill1.svg'
import skill2 from '@/assets/img/icons/skill2.svg'
import skill3 from '@/assets/img/icons/skill3.svg'
import skill4 from '@/assets/img/icons/skill4.svg'
import skill5 from '@/assets/img/icons/skill5.svg'
import skill6 from '@/assets/img/icons/skill6.svg'

import CountUp from 'vue-countup-v3'
import { BCol, BContainer, BRow } from 'bootstrap-vue-next'

type SkillType = {
  title: string
  percentage: number
  image: string
}

const skills: SkillType[] = [
  {
    title: 'Figma',
    percentage: 96,
    image: skill1,
  },
  {
    title: 'Photoshop',
    percentage: 87,
    image: skill2,
  },
  {
    title: 'Maze',
    percentage: 80,
    image: skill3,
  },
  {
    title: 'Canva',
    percentage: 89,
    image: skill4,
  },
  {
    title: 'Visual Studio Code',
    percentage: 55,
    image: skill5,
  },
  {
    title: 'Capcut',
    percentage: 86,
    image: skill6,
  },
]
</script>
