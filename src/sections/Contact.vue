<template>
  <div id="list-item-8">
    <div class="contact-section-area">
      <BContainer>
        <BRow>
          <BCol lg="12">
            <div class="contact-heading heading1">
              <h5 data-aos="fade-left" data-aos-duration="900">
                <img :src="subLogo" alt="" />Contact Me
              </h5>
              <div class="space24" />
              <h2 data-aos="fade-left" data-aos-duration="1000">Have Any Project in</h2>
              <div class="space24" />
              <h2 class="head" data-aos="fade-left" data-aos-duration="1100">
                Mind, <span>Lets Talk</span>
              </h2>
            </div>
            <div class="space50" />
            <div class="contact-boxarea" data-aos="zoom-in" data-aos-duration="1000">
              <h3>Let’s Work Together!</h3>
              <div class="space12" />
              <BForm class="row">
                <BCol lg="6" md="6">
                  <div class="input-area">
                    <BFormInput type="text" placeholder="Full Name" />
                  </div>
                </BCol>
                <BCol lg="6" md="6">
                  <div class="input-area">
                    <BFormInput type="email" placeholder="Email Address" />
                  </div>
                </BCol>
                <BCol lg="6" md="6">
                  <div class="input-area">
                    <BFormInput type="number" placeholder="Phone Number" />
                  </div>
                </BCol>
                <BCol lg="6" md="6">
                  <div class="input-area">
                    <BFormInput type="text" placeholder="Subject" />
                  </div>
                </BCol>
                <BCol lg="12">
                  <div class="input-area">
                    <BFormInput type="text" placeholder="Your Budget (optional)" />
                  </div>
                </BCol>
                <BCol lg="12">
                  <div class="input-area">
                    <BFormTextarea placeholder="Message" />
                  </div>
                </BCol>
                <BCol lg="12">
                  <div class="input-area">
                    <button type="submit" class="vl-btn1">
                      Send <img :src="mailIcon" alt="" />
                    </button>
                  </div>
                </BCol>
              </BForm>
            </div>
          </BCol>

          <BCol lg="12">
            <div class="space50" />
            <div class="footer-area">
              <div class="btn-area1">
                <RouterLink to="/"><img :src="logo" alt="" /></RouterLink>
              </div>
              <p>© {{ currentYear }} {{ appName }}. All Rights Reserved.</p>
            </div>
          </BCol>
        </BRow>
      </BContainer>
    </div>
  </div>
</template>

<script setup lang="ts">
import subLogo from '@/assets/img/icons/sublogo1.svg'
import logo from '@/assets/img/logo/logo1.png'
import mailIcon from '@/assets/img/icons/mail1.svg'
import { appName, currentYear } from '@/helpers'
import { BCol, BContainer, BForm, BFormInput, BFormTextarea, BRow } from 'bootstrap-vue-next'
</script>
