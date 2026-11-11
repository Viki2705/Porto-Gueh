<template>
  <div id="list-item-8">
    <div class="contact-section-area">
      <BContainer>
        <BRow>
          <BCol lg="12">
            <div class="space50" />
            <div class="contact-boxarea">
              <h3>Leave A Message</h3>
              <div class="space12" />
              <BForm class="row">
                <BCol lg="12">
                  <div class="input-area">
                    <BFormInput type="text" placeholder="Full Name" />
                  </div>
                </BCol>

                <BCol lg="12">
                  <div class="input-area">
                    <BFormInput type="number" placeholder="Phone Number" />
                  </div>
                </BCol>

                <BCol lg="12">
                  <div class="input-area">
                    <BFormInput type="email" placeholder="Email Address" />
                  </div>
                </BCol>

                <BCol lg="12">
                  <div class="input-area">
                    <BFormInput type="text" placeholder="Subject" />
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
                <a href="#" class="vl-btn1">HIRE ME <img :src="mailIcon" alt="" /></a>
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
import mailIcon from '@/assets/img/icons/mail1.svg'
import { appName, currentYear } from '@/helpers'
import { BCol, BContainer, BForm, BFormInput, BFormTextarea, BRow } from 'bootstrap-vue-next'

type PropsType = {
  slug: string | string[]
}

defineProps<PropsType>()
</script>
