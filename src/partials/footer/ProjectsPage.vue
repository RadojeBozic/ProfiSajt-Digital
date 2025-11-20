<template>
  <section class="max-w-4xl mx-auto mt-16 px-4 sm:px-6 py-16 text-center">
    <h1 class="text-3xl md:text-4xl font-bold mb-6">
      {{ t('projectsPage.title') }}
    </h1>

    <p class="text-gray-700 text-lg mb-8">
      {{ t('projectsPage.text') }}
    </p>

    <!-- Dugme koje vodi na glavnu Projects stranicu -->
    <router-link
      to="/projects"
      class="inline-block px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
    >
      {{ t('projectsPage.button') }}
    </router-link>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
