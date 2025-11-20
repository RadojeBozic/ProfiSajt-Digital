<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section class="bg-gray-50 mt-16">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">
      <!-- Intro -->
      <header class="max-w-3xl mb-10">
        <p class="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-3">
          {{ t('services.badge') }}
        </p>
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {{ t('services.heading') }}
        </h1>
        <p class="text-lg text-gray-700">
          {{ t('services.lead') }}
        </p>
      </header>

      <!-- Grid of services -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <article
          v-for="i in 5"
          :key="i"
          class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex flex-col"
        >
          <h2 class="text-lg font-semibold text-gray-900 mb-2">
            {{ t(`services.items.${i - 1}.title`) }}
          </h2>
          <p class="text-sm text-gray-700 mb-3">
            {{ t(`services.items.${i - 1}.desc`) }}
          </p>
          <p class="text-xs text-gray-500 mt-auto">
            {{ t(`services.items.${i - 1}.note`) }}
          </p>
        </article>
      </div>

      <!-- Note -->
      <div class="mt-12 border-t border-gray-200 pt-6 text-sm text-gray-600">
        {{ t('services.footerNote') }}
      </div>
    </div>
  </section>
</template>
