<template>
  <div id="list-item-1">
    <div class="hero-heading-area heading1">
      <h5 data-aos="fade-left" data-aos-duration="800">
        <img :src="subLogo" alt="" />Hi, I’m Fiki Fauzianto, UI/UX Designer
      </h5>
      <div class="space24" />
      <h1 data-aos="fade-left" data-aos-duration="900">Designing Intuitive</h1>
      <div class="space24" />
      <h1 class="head" data-aos="fade-left" data-aos-duration="1000">
        Experiences <span>Inspire</span>
      </h1>
      <div class="space24" />
      <p data-aos="fade-left" data-aos-duration="1100">
        Your gateway to innovative design, seamless user experiences, and impactful solutions.
        Turning complex ideas into user-friendly designs.
      </p>
      <div class="arrow" data-aos="fade-left" data-aos-duration="1200">
        <a href="#">
          <img :src="elements1" alt="" class="elements1 keyframe5" />
          <img :src="arrow1" alt="" class="arrow1" />
        </a>

        <div class="images">
          <img :src="others1" alt="" />
          <p>
            2k+ reviews <br />
            (4.90 of 5)
          </p>
        </div>
      </div>
      <div class="space32" />
      <div class="main-btn-area" data-aos="fade-up" data-aos-duration="1200">
        <a href="#"
          >Lets Work Together
          <span class="icon">
            <Icon icon="fa6-solid:arrow-right" />
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import elements1 from '@/assets/img/elements/elements1.png'
import arrow1 from '@/assets/img/icons/arrow1.svg'
import others1 from '@/assets/img/all-images/others/others1.png'
import { Icon } from '@iconify/vue'
</script>
