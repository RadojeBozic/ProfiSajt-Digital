<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

// Slika (postavi je u /src/assets)
const imageUrl = new URL('../assets/about-illustration.jpg', import.meta.url).href
</script>

<template>
  <div class="p-5 rounded-2xl bg-white shadow-sm border border-gray-100">
    <h2 class="text-base font-semibold mb-2">{{ t('about.title') }}</h2>

    <img
      :src="imageUrl"
      alt="Express Web — about"
      class="rounded-xl w-full object-cover mb-3"
      style="max-height: 180px"
    />

    <div class="text-sm text-gray-700 leading-6 space-y-3">
      <p>{{ t('about.paragraph1') }}</p>
      <p>{{ t('about.paragraph2') }}</p>
      <p>{{ t('about.paragraph3') }}</p>
    </div>
  </div>
</template>
