<script setup>
import { onMounted, onUnmounted, watch, nextTick, computed } from 'vue'
import { useRoute } from 'vue-router'
import AOS from 'aos'

import DefaultLayout from './layouts/DefaultLayout.vue'
import AuthLayout from './layouts/AuthLayout.vue'

const route = useRoute()

// Bira layout na osnovu route.meta.layout
const layout = computed(() =>
  route.meta.layout === 'auth' ? AuthLayout : DefaultLayout
)

let scrollListener = null

const scrollSpy = () => {
  const targets = document.querySelectorAll('[data-scrollspy-target]')
  const links = document.querySelectorAll('[data-scrollspy-link]')
  if (links.length < 1 || targets.length < 1) return

  const addActive = (i) => {
    const link = links[i] ? links[i] : links[0]
    link.classList.add('scrollspy-active')
  }
  const removeActive = (i) => {
    links[i].classList.remove('scrollspy-active')
  }
  const removeAllActive = () =>
    [...Array(targets.length).keys()].forEach((link) => removeActive(link))

  const targetMargin = 100
  let currentActive = 0
  addActive(0)

  scrollListener = () => {
    const current =
      targets.length -
      [...targets].reverse().findIndex(
        (target) => window.scrollY >= target.offsetTop - targetMargin,
      ) -
      1

    if (current !== currentActive && current >= 0) {
      removeAllActive()
      currentActive = current
      addActive(current)
    }
  }

  window.addEventListener('scroll', scrollListener)
}

onMounted(() => {
  AOS.init({
    once: true,
    disable: 'phone',
    duration: 700,
    easing: 'ease-out-cubic',
  })

  if (document.readyState === 'complete') {
    scrollSpy()
  } else {
    window.addEventListener('load', scrollSpy)
  }
})

onUnmounted(() => {
  if (scrollListener) {
    window.removeEventListener('scroll', scrollListener)
  }
  window.removeEventListener('load', scrollSpy)
})

// Re-init scrollSpy na promenu rute
watch(
  () => route.path,
  async () => {
    await nextTick()
    scrollSpy()
  },
)
</script>

<template>
  <component :is="layout">
    <router-view />
  </component>
</template>
