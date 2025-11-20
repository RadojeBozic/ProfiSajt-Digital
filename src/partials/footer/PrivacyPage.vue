<!-- PrivacyPage.vue -->
<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="max-w-4xl mx-auto mt-16 px-4 sm:px-6 py-16">
    <!-- Naslov -->
    <h1 class="text-3xl md:text-4xl font-bold mb-2">
      {{ t('privacy.heading') }}
    </h1>

    <!-- Last updated -->
    <p class="text-sm text-gray-500 mb-6">
      {{ t('privacy.updated') }}
    </p>

    <!-- Uvod -->
    <p class="text-gray-700 mb-6">
      {{ t('privacy.intro') }}
    </p>

    <!-- Sekcija 1 -->
    <h2 class="text-2xl font-semibold mt-10 mb-4">
      {{ t('privacy.section1.title') }}
    </h2>
    <p class="text-gray-700 mb-4">
      {{ t('privacy.section1.text') }}
    </p>

    <!-- Sekcija 2 -->
    <h2 class="text-2xl font-semibold mt-10 mb-4">
      {{ t('privacy.section2.title') }}
    </h2>
    <p class="text-gray-700 mb-4">
      {{ t('privacy.section2.text') }}
    </p>

    <!-- Sekcija 3 -->
    <h2 class="text-2xl font-semibold mt-10 mb-4">
      {{ t('privacy.section3.title') }}
    </h2>
    <p class="text-gray-700 mb-4">
      {{ t('privacy.section3.text') }}
    </p>

    <!-- Sekcija 4 -->
    <h2 class="text-2xl font-semibold mt-10 mb-4">
      {{ t('privacy.section4.title') }}
    </h2>
    <p class="text-gray-700 mb-4">
      {{ t('privacy.section4.text') }}
    </p>

    <!-- Sekcija 5 -->
    <h2 class="text-2xl font-semibold mt-10 mb-4">
      {{ t('privacy.section5.title') }}
    </h2>
    <p class="text-gray-700 mb-4">
      {{ t('privacy.section5.text') }}
    </p>

    <!-- Sekcija 6 -->
    <h2 class="text-2xl font-semibold mt-10 mb-4">
      {{ t('privacy.section6.title') }}
    </h2>
    <p class="text-gray-700 mb-4">
      {{ t('privacy.section6.text') }}
    </p>

    <!-- Kontakt blok -->
    <div class="mt-12 border-t pt-6">
      <h2 class="text-2xl font-semibold mb-3">
        {{ t('privacy.contact.title') }}
      </h2>
      <p class="text-gray-700">
        {{ t('privacy.contact.text') }}
      </p>
    </div>
  </section>
</template>
