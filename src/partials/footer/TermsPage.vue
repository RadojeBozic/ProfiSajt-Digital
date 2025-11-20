<!-- src/partials/footer/TermsPage.vue -->
<template>
  <section class="max-w-4xl mx-auto mt-16 px-4 sm:px-6 py-16">
    <!-- Naslov -->
    <h1 class="text-3xl md:text-4xl font-bold mb-2">
      {{ t('terms.heading') }}
    </h1>

    <!-- Last updated -->
    <p class="text-sm text-gray-500 mb-6">
      {{ t('terms.updated') }}
    </p>

    <!-- Uvod -->
    <p class="text-gray-700 mb-6">
      {{ t('terms.intro') }}
    </p>

    <!-- Sekcija 1 -->
    <h2 class="text-2xl font-semibold mt-10 mb-4">
      {{ t('terms.section1.title') }}
    </h2>
    <p class="text-gray-700 mb-4">
      {{ t('terms.section1.text') }}
    </p>

    <!-- Sekcija 2 -->
    <h2 class="text-2xl font-semibold mt-10 mb-4">
      {{ t('terms.section2.title') }}
    </h2>
    <p class="text-gray-700 mb-4">
      {{ t('terms.section2.text') }}
    </p>

    <!-- Sekcija 3 -->
    <h2 class="text-2xl font-semibold mt-10 mb-4">
      {{ t('terms.section3.title') }}
    </h2>
    <p class="text-gray-700 mb-4">
      {{ t('terms.section3.text') }}
    </p>

    <!-- Sekcija 4 -->
    <h2 class="text-2xl font-semibold mt-10 mb-4">
      {{ t('terms.section4.title') }}
    </h2>
    <p class="text-gray-700 mb-4">
      {{ t('terms.section4.text') }}
    </p>

    <!-- Sekcija 5 -->
    <h2 class="text-2xl font-semibold mt-10 mb-4">
      {{ t('terms.section5.title') }}
    </h2>
    <p class="text-gray-700 mb-4">
      {{ t('terms.section5.text') }}
    </p>

    <!-- Sekcija 6 -->
    <h2 class="text-2xl font-semibold mt-10 mb-4">
      {{ t('terms.section6.title') }}
    </h2>
    <p class="text-gray-700 mb-4">
      {{ t('terms.section6.text') }}
    </p>

    <!-- Kontakt blok -->
    <div class="mt-12 border-t pt-6">
      <h2 class="text-2xl font-semibold mb-3">
        {{ t('terms.contact.title') }}
      </h2>
      <p class="text-gray-700">
        {{ t('terms.contact.text') }}
      </p>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

