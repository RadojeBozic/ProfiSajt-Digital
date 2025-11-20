<!-- src/partials/footer/CookiesPage.vue -->
<template>
  <section class="max-w-4xl mx-auto mt-16 px-4 sm:px-6 py-16">
    <!-- Naslov -->
    <h1 class="text-3xl md:text-4xl font-bold mb-2">
      {{ t('cookies.heading') }}
    </h1>

    <!-- Last updated -->
    <p class="text-sm text-gray-500 mb-6">
      {{ t('cookies.updated') }}
    </p>

    <!-- Uvod -->
    <p class="text-gray-700 mb-6">
      {{ t('cookies.intro') }}
    </p>

    <!-- Sekcija 1 -->
    <h2 class="text-2xl font-semibold mt-10 mb-4">
      {{ t('cookies.section1.title') }}
    </h2>
    <p class="text-gray-700 mb-4">
      {{ t('cookies.section1.text') }}
    </p>

    <!-- Sekcija 2 + lista tipova kolačića -->
    <h2 class="text-2xl font-semibold mt-10 mb-4">
      {{ t('cookies.section2.title') }}
    </h2>
    <p class="text-gray-700 mb-4">
      {{ t('cookies.section2.text') }}
    </p>
    <ul class="list-disc list-inside text-gray-700 space-y-1 mb-4">
      <li>{{ t('cookies.section2List.item1') }}</li>
      <li>{{ t('cookies.section2List.item2') }}</li>
      <li>{{ t('cookies.section2List.item3') }}</li>
    </ul>

    <!-- Sekcija 3 -->
    <h2 class="text-2xl font-semibold mt-10 mb-4">
      {{ t('cookies.section3.title') }}
    </h2>
    <p class="text-gray-700 mb-4">
      {{ t('cookies.section3.text') }}
    </p>

    <!-- Sekcija 4 -->
    <h2 class="text-2xl font-semibold mt-10 mb-4">
      {{ t('cookies.section4.title') }}
    </h2>
    <p class="text-gray-700 mb-4">
      {{ t('cookies.section4.text') }}
    </p>

    <!-- Sekcija 5 -->
    <h2 class="text-2xl font-semibold mt-10 mb-4">
      {{ t('cookies.section5.title') }}
    </h2>
    <p class="text-gray-700 mb-4">
      {{ t('cookies.section5.text') }}
    </p>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
