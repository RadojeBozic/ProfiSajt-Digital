<script setup>
import Testimonial from '../partials/Testimonial.vue'
import TechIcon from '../images/tech.svg'
import TeamIcon from '../images/team.svg'
import MarketingIcon from '../images/marketing.svg'
import SecurityIcon from '../images/security.svg'

import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t, tm } = useI18n()

// konstante ostaju iste
const imgs = [TechIcon, TeamIcon, MarketingIcon, SecurityIcon]

// REAKTIVNO: items iz i18n i izveden niz sa slikama
const items = computed(() => (tm('testimonialsCarousel.items') || []))
const testimonials = computed(() =>
  items.value.map((it, i) => ({ ...it, img: imgs[i % imgs.length] }))
)
</script>

<template>
  <section
    class="relative before:absolute before:inset-0 before:h-[120%] before:pointer-events-none before:bg-linear-to-b before:from-gray-100 before:-z-10">
    <div class="pt-12 md:pt-20">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
          <div class="max-w-3xl mx-auto text-center">
              <h2 class="text-3xl md:text-4xl font-bold">
                {{ t('testimonialsCarousel.heading') }}
              </h2>
              <p class="mt-4 text-lg text-gray-700">
                {{ t('testimonialsCarousel.subheading') }}
              </p>
            </div>
      </div>
    
      <div class="relative flex justify-center max-w-[94rem] mx-auto">
        <div class="absolute bottom-20 -translate-x-36 -z-10" aria-hidden="true">
          <div class="w-80 h-80 rounded-full bg-linear-to-tr from-blue-500 to-gray-900 opacity-30 blur-[160px] will-change-[filter]"></div>
        </div>
        <div class="absolute -bottom-10 -z-10" aria-hidden="true">
          <div class="w-80 h-80 rounded-full bg-blue-500 opacity-40 blur-[160px] will-change-[filter]"></div>
        </div>
        <div class="absolute bottom-0 -z-10" aria-hidden="true">
          <div class="w-56 h-56 rounded-full border-[20px] border-white blur-[20px] will-change-[filter]"></div>
        </div>

        <!-- Row -->
        <div
          class="w-full inline-flex flex-nowrap [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)] py-12 md:py-20 group">
          <div class="flex items-start justify-center md:justify-start *:mx-3 animate-[infinite-scroll_60s_linear_infinite] group-hover:[animation-play-state:paused]">
            <Testimonial
              v-for="(tst, index) in testimonials"
              :key="tst.username || index"
              :testimonial="tst"
              class="w-[22rem] group-hover:rotate-0 transition-transform duration-300"
            >
              {{ tst.content }}
            </Testimonial>
          </div>

          <!-- Duplicate for infinite scroll loop -->
          <div class="flex items-start justify-center md:justify-start *:mx-3 animate-[infinite-scroll_60s_linear_infinite] group-hover:[animation-play-state:paused]" aria-hidden="true">
            <Testimonial
              v-for="(tst, index) in testimonials"
              :key="'dup-'+(tst.username || index)"
              :testimonial="tst"
              class="w-[22rem] group-hover:rotate-0 transition-transform duration-300"
            >
              {{ tst.content }}
            </Testimonial>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
