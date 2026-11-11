<template>
  <div id="list-item-7">
    <div class="blog-section-area">
      <BContainer>
        <BRow>
          <BCol lg="12">
            <div class="blog-header heading1">
              <h5 data-aos="fade-left" data-aos-duration="900">
                <img :src="subLogo" alt="" />Our Blog
              </h5>
              <div class="space24" />
              <h2 data-aos="fade-left" data-aos-duration="1000">Our Latest Blog Idea</h2>
              <div class="space24" />
              <h2 class="head" data-aos="fade-left" data-aos-duration="1200">
                UI/UX <span>Trends</span>
              </h2>
              <div class="space60" />

              <BRow>
                <BCol v-for="(blog, idx) in blogs" :key="idx" lg="6" md="6">
                  <div class="blog-boxarea">
                    <div class="img1">
                      <RouterLink :to="blog.url"><img :src="blog.image" alt="" /></RouterLink>
                    </div>
                    <div class="content-area">
                      <ul>
                        <li>
                          <a href="#">{{ blog.category }}</a>
                        </li>
                        <li>
                          <a href="#">
                            <Icon icon="fa6-solid:clock" />
                            {{ blog.readTime }}
                          </a>
                        </li>
                      </ul>
                      <div class="space16" />
                      <RouterLink :to="blog.url">{{ blog.title }}</RouterLink>
                      <div class="space16" />
                      <ul>
                        <li>
                          <a href="#"
                            ><img :src="blog.author.image" alt="" />{{ blog.author.name }}</a
                          >
                        </li>
                        <li>
                          <a href="#">
                            <Icon icon="fa6-solid:calendar" />
                            {{ blog.date }}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </BCol>

                <div class="space30" />
                <div class="pagination-area">
                  <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center">
                      <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                          <Icon icon="fa6-solid:angle-left" />
                        </a>
                      </li>
                      <li class="page-item"><a class="page-link active" href="#">1</a></li>
                      <li class="page-item"><a class="page-link" href="#">2</a></li>
                      <li class="page-item"><a class="page-link" href="#">...</a></li>
                      <li class="page-item"><a class="page-link" href="#">12</a></li>
                      <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                          <Icon icon="fa6-solid:angle-right" />
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </BRow>
            </div>
          </BCol>
        </BRow>
      </BContainer>
    </div>
  </div>
</template>

<script setup lang="ts">
import subLogo from '@/assets/img/icons/sublogo1.svg'
import blogImg1 from '@/assets/img/all-images/blog/blog-img1.png'
import blogImg2 from '@/assets/img/all-images/blog/blog-img2.png'
import blogImg3 from '@/assets/img/all-images/blog/blog-img3.png'
import blogImg4 from '@/assets/img/all-images/blog/blog-img4.png'
import authorImg from '@/assets/img/all-images/blog/blog-img5.png'
import { Icon } from '@iconify/vue'
import { BCol, BContainer, BRow } from 'bootstrap-vue-next'

type BlogType = {
  image: string
  title: string
  url: string
  category: string
  readTime: string
  author: {
    name: string
    image: string
  }
  date: string
}

const blogs: BlogType[] = [
  {
    image: blogImg1,
    title: 'Behind the Pixels: My Favorite Design Projects',
    url: '/blogs/behind-the-pixels',
    category: 'UI/UX',
    readTime: '3 min read',
    author: {
      name: 'Alex Carry',
      image: authorImg,
    },
    date: 'Oct 26, 2024',
  },
  {
    image: blogImg2,
    title: 'Crafting Seamless Experiences: My UI/UX Design Philosophy',
    url: '/blogs/behind-the-pixels',
    category: 'UI/UX',
    readTime: '3 min read',
    author: {
      name: 'Alex Carry',
      image: authorImg,
    },
    date: 'Oct 26, 2024',
  },
  {
    image: blogImg3,
    title: 'Staying Ahead: Trends Shaping UI/UX in 2024',
    url: '/blogs/behind-the-pixels',
    category: 'UI/UX',
    readTime: '3 min read',
    author: {
      name: 'Alex Carry',
      image: authorImg,
    },
    date: 'Oct 26, 2024',
  },
  {
    image: blogImg4,
    title: 'From Concept to Reality: My Design Process',
    url: '/blogs/behind-the-pixels',
    category: 'UI/UX',
    readTime: '3 min read',
    author: {
      name: 'Alex Carry',
      image: authorImg,
    },
    date: 'Oct 26, 2024',
  },
]
</script>
