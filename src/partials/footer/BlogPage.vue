<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section class="max-w-6xl mx-auto mt-16 px-4 sm:px-6 py-16">
    <h1 class="text-3xl md:text-4xl font-bold mb-6">
      {{ t('pages.blog.title') }}
    </h1>

    <p class="text-lg text-gray-700 leading-relaxed mb-6">
      {{ t('pages.blog.subtitle') }}
    </p>

    <div class="bg-blue-50 border border-blue-200 rounded-xl p-6">
      <h2 class="text-xl font-semibold mb-3">
        {{ t('pages.blog.soonTitle') }}
      </h2>
      <p class="text-gray-700">
        {{ t('pages.blog.soonText') }}
      </p>
    </div>
  </section>
</template>

