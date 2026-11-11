<template>
  <div id="list-item-1">
    <div class="blog-single-area">
      <BContainer>
        <BRow>
          <BCol lg="12">
            <div class="heading1">
              <h5><img :src="subLogo" alt="" />Blog details</h5>
              <div class="space24" />
              <h2>Behind the Pixels: My Favorite Design Projects</h2>
            </div>
            <div class="space48" />
            <div class="blog-details-content">
              <div class="list">
                <ul>
                  <li>
                    <a href="#"> <img :src="blogImg5" alt="" /> Alex Carry </a>
                    <span> | </span>
                  </li>
                  <li><a href="#">UI/UX</a></li>
                </ul>
                <ul class="list1">
                  <li>
                    <a href="#" class="d-inline-flex align-items-center gap-1">
                      <Icon icon="fa6-solid:calendar-days" class="me-1" />
                      Oct 26, 2024 </a
                    ><span class="line"> | </span>
                  </li>
                  <li>
                    <a href="#" class="d-inline-flex align-items-center gap-1">
                      <Icon icon="fa6-solid:clock" class="me-1" />
                      3 min read
                    </a>
                  </li>
                </ul>
              </div>
              <div class="space24" />
              <div class="img1">
                <img :src="blogImg6" alt="" />
              </div>
              <div class="space24" />
              <p>
                Design is more than just visuals; it’s about creating meaningful connections between
                users and digital platforms. Over the years, I’ve had the privilege of working on
                projects that challenged my creativity, enhanced my skills, and left a lasting
                impact on both clients and users. Here’s a closer look at some of my favorite design
                projects and the stories behind them.
              </p>
              <div class="space48" />
              <h3>Redefining an E-Commerce Experience</h3>
              <div class="space24" />
              <p>
                The goal was to create a seamless shopping experience that catered to a diverse
                audience. By focusing on intuitive navigation and personalized interfaces, I
                designed a platform that simplified online shopping without sacrificing style. This
                project was a turning point in understanding the power of user personas and how
                small details like button placements can enhance engagement.
              </p>
              <div class="space48" />
              <h3>A Minimalist Approach to Productivity</h3>
              <div class="space24" />
              <p>
                This project was all about balance. The challenge was to combine functionality with
                simplicity for a productivity app. By stripping down unnecessary elements and using
                a clean, calming color palette, I delivered a design that made task management
                stress-free. This taught me the importance of reducing cognitive load through
                design.
              </p>
              <div class="space48" />
              <h3>Breathing New Life into a Legacy Brand</h3>
              <div class="space24" />
              <p>
                Working with an established company meant maintaining its identity while modernizing
                its digital presence. Through bold typography, dynamic visuals, and a responsive
                layout, I transformed their outdated website into a vibrant online hub. This project
                reinforced my ability to blend tradition with innovation.
              </p>
              <div class="space48" />
              <BRow>
                <BCol lg="6" md="6">
                  <div class="img1">
                    <img :src="blogImg4" alt="" />
                  </div>
                  <div class="space30" />
                </BCol>
                <BCol lg="6" md="6">
                  <div class="img1">
                    <img :src="blogImg3" alt="" />
                  </div>
                  <div class="space30" />
                </BCol>
              </BRow>
              <div class="space18" />
              <h3>Crafting an Immersive Experience</h3>
              <div class="space24" />
              <p>
                For a platform designed to inspire travel, the design had to be as exciting as the
                destinations it showcased. High-resolution imagery, immersive animations, and
                interactive maps brought the user journey to life. This project allowed me to
                experiment with motion design and understand the importance of visual storytelling.
              </p>
              <div class="space48" />
              <div class="pera-box">
                <p>
                  "Good design is making something intelligible and memorable. Great design is
                  making something memorable and meaningful."
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="20"
                  viewBox="0 0 24 20"
                  fill="none"
                >
                  <path
                    d="M13.7277 18.2909C14.7008 17.7229 15.7926 16.9209 16.7705 15.8129C17.4513 15.0511 17.9602 14.1348 18.2586 13.1333C18.5569 12.1317 18.6371 11.0712 18.4928 10.0319C18.4798 9.93292 18.4349 9.84176 18.3658 9.77392C17.8605 9.9643 17.3222 10.0353 16.7884 9.98192C15.8792 9.89192 15.0688 9.45592 14.4477 8.79892C14.2838 8.63575 14.1377 8.45362 14.0119 8.25592C13.4256 7.39192 13.1112 6.28292 13.2025 5.10792C13.3936 2.63092 15.3098 0.797922 17.4811 1.01292L18.1192 1.07592C19.6213 1.22492 22.5493 2.41892 22.5851 6.69392C22.6208 10.9699 21.5366 13.7389 18.4176 16.7989C16.9973 18.1909 15.3183 18.8769 13.9103 19.2109C13.4237 19.3269 13.2844 18.5509 13.7277 18.2909ZM2.07591 18.2909C3.04908 17.7229 4.14085 16.9209 5.11873 15.8129C5.79955 15.0511 6.3084 14.1348 6.60679 13.1333C6.90518 12.1317 6.9853 11.0712 6.84108 10.0319C6.82803 9.93292 6.78314 9.84176 6.71403 9.77392C6.20872 9.96433 5.6704 10.0353 5.13661 9.98192C4.22744 9.89192 3.41708 9.45592 2.79591 8.79892C2.63205 8.63575 2.48589 8.45362 2.36014 8.25592C1.77379 7.39192 1.45944 6.28292 1.55073 5.10792C1.74179 2.63092 3.65803 0.797922 5.83026 1.01292L6.46744 1.07592C7.96956 1.22492 10.8976 2.41892 10.9333 6.69392C10.9691 10.9699 9.88485 13.7379 6.76579 16.7979C5.34555 18.1909 3.6665 18.8769 2.26038 19.2109C1.77285 19.3269 1.63261 18.5509 2.07591 18.2909Z"
                    stroke="#FFAE00"
                    stroke-width="1.4"
                  />
                </svg>
              </div>
              <div class="space48" />
              <div class="tags-social">
                <div class="tags">
                  <ul>
                    <li>Tags:</li>
                    <li><a href="#">#TechSolution</a></li>
                    <li><a href="#" class="m-0">#BussinessIT</a></li>
                  </ul>
                </div>
                <div class="social">
                  <ul>
                    <li>Social:</li>
                    <li>
                      <a href="#">
                        <Icon icon="fa6-brands:facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Icon icon="fa6-brands:instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#" class="m-0">
                        <Icon icon="fa6-brands:youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="space48" />
              <h3>Comments (2)</h3>
              <div class="space32" />
              <div class="comments-boxarea">
                <div class="comments-boxes">
                  <div class="comments-auhtor-box">
                    <div class="img3">
                      <img :src="blogImg7" alt="" />
                    </div>
                    <div class="content">
                      <a href="#" class="name">Mr. Ana Ritchie</a>
                      <a href="#" class="date">8 December 2024</a>
                    </div>
                  </div>
                  <a href="#" class="reply">
                    <Icon icon="fa6-solid:reply" />
                    Reply</a
                  >
                </div>
                <div class="space16" />
                <p>
                  Before diving into complex design software or frameworks, it's crucial to have a
                  solid understanding of the fundamentals of web design, including HTML, CSS, and
                  JavaScript. These languages form the backbone of every website and are.
                </p>
              </div>
              <div class="space30" />
              <div class="comments-boxarea box2">
                <div class="comments-boxes">
                  <div class="comments-auhtor-box">
                    <div class="img3">
                      <img :src="blogImg8" alt="" />
                    </div>
                    <div class="content">
                      <a href="#" class="name">Andre Philips</a>
                      <a href="#" class="date">8 December 2024</a>
                    </div>
                  </div>
                  <a href="#" class="reply">
                    <Icon icon="fa6-solid:reply" />
                    Reply</a
                  >
                </div>
                <div class="space16" />
                <p>
                  The field of web design is constantly evolving, with new trends and technologies
                  emerging regularly. Make it a habit to stay updated on the latest design trends by
                  following industry blogs, attending.
                </p>
              </div>
            </div>
          </BCol>
        </BRow>
      </BContainer>
    </div>
  </div>
</template>

<script setup lang="ts">
import subLogo from '@/assets/img/icons/sublogo1.svg'

import blogImg3 from '@/assets/img/all-images/blog/blog-img3.png'
import blogImg4 from '@/assets/img/all-images/blog/blog-img4.png'
import blogImg5 from '@/assets/img/all-images/blog/blog-img5.png'
import blogImg6 from '@/assets/img/all-images/blog/blog-img6.png'
import blogImg7 from '@/assets/img/all-images/blog/blog-img7.png'
import blogImg8 from '@/assets/img/all-images/blog/blog-img8.png'
import { BCol, BContainer, BRow } from 'bootstrap-vue-next'
import { Icon } from '@iconify/vue'

type PropsType = {
  slug: string | string[]
}

defineProps<PropsType>()
</script>
