<script setup>
import PageIllustration from "./PageIllustration.vue"
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section class="relative">
    <PageIllustration />

    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <!-- Main content -->
      <div class="max-w-3xl mx-auto pt-32 pb-10 md:pt-40">
        <!-- Section header -->
        <div class="text-center">
          <h1
            class="text-5xl md:text-6xl font-bold mb-6 border-y [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]">
            {{ t('heroApps.title') }}
          </h1>
          <div class="max-w-3xl mx-auto">
            <p class="text-lg text-gray-700">{{ t('heroApps.subtitle') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
