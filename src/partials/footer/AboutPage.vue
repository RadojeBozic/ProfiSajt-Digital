<script setup>
import { useI18n } from 'vue-i18n'


const { t } = useI18n()
</script>

<template>
  <section class="bg-white">
    <div class="max-w-5xl mx-auto mt-16 px-4 sm:px-6 py-12 md:py-20">
      <!-- Intro -->
      <p class="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-3">
        {{ t('about_footer.badge') }}
      </p>
      <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        {{ t('about_footer.heading') }}
      </h1>
      <p class="text-lg text-gray-700 mb-8">
        {{ t('about_footer.lead') }}
      </p>

      <!-- Content blocks -->
      <div class="space-y-8 text-gray-700">
        <!-- Mission -->
        <div>
          <h2 class="text-xl font-semibold text-gray-900 mb-2">
            {{ t('about_footer.sections.mission.title') }}
          </h2>
          <p>{{ t('about_footer.sections.mission.body') }}</p>
        </div>

        <!-- How we work -->
        <div>
          <h2 class="text-xl font-semibold text-gray-900 mb-2">
            {{ t('about_footer.sections.howWeWork.title') }}
          </h2>
          <p class="mb-3">
            {{ t('about_footer.sections.howWeWork.body') }}
          </p>
          <ul class="list-disc list-inside space-y-1">
            <li>{{ t('about_footer.sections.howWeWork.points.0') }}</li>
            <li>{{ t('about_footer.sections.howWeWork.points.1') }}</li>
            <li>{{ t('about_footer.sections.howWeWork.points.2') }}</li>
          </ul>
        </div>

        <!-- Small “signature” block -->
        <div class="border-l-4 border-blue-500 pl-4">
          <p class="font-medium text-gray-900 mb-1">
            {{ t('about_footer.sections.signatureTitle') }}
          </p>
          <p class="text-sm">
            {{ t('about_footer.sections.signatureBody') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
