<script setup>
import { ref, computed } from 'vue'
import PageIllustration from "./PageIllustration.vue"
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
const isAnnual = ref(true)

// Features iz i18n kao reaktivni nizovi
const hobby    = computed(() => (tm('pricing.plans.hobby')    || {}))
const basic    = computed(() => (tm('pricing.plans.basic')    || {}))
const business = computed(() => (tm('pricing.plans.business') || {}))
const enterprise = computed(() => (tm('pricing.plans.enterprise') || {}))
</script>

<template>
  <section class="relative">
    <PageIllustration />

    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <!-- Hero content -->
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">
        <!-- Section header -->
        <div class="text-center pb-12">
          <h1
            class="text-5xl md:text-6xl font-bold mb-6 border-y [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]">
            {{ t('pricing.title') }}
          </h1>
          <div class="max-w-3xl mx-auto">
            <p class="text-lg text-gray-700">
              {{ t('pricing.subtitle') }}
            </p>
          </div>
        </div>

        <!-- Pricing tables -->
        <div>
          <!-- Pricing toggle -->
          <div class="flex justify-center max-w-xs m-auto mb-16">
            <div class="relative flex w-full mx-6 p-1 bg-gray-200 rounded-lg" role="tablist" aria-label="Billing period">
              <span class="absolute inset-0 m-1 pointer-events-none" aria-hidden="true">
                <span
                  class="absolute inset-0 w-1/2 bg-white rounded-sm shadow-sm transform transition"
                  :class="isAnnual ? 'translate-x-0' : 'translate-x-full'"></span>
              </span>
              <button
                class="relative flex-1 text-sm font-medium p-1 transition"
                :class="isAnnual ? '' : 'text-gray-500'"
                @click="isAnnual = true"
                :aria-pressed="isAnnual"
              >
                {{ t('pricing.toggle.yearly') }}
                <span class="text-emerald-500">{{ t('pricing.toggle.discount') }}</span>
              </button>
              <button
                class="relative flex-1 text-sm font-medium p-1 transition"
                :class="isAnnual ? 'text-gray-500' : ''"
                @click="isAnnual = false"
                :aria-pressed="!isAnnual"
              >
                {{ t('pricing.toggle.monthly') }}
              </button>
            </div>
          </div>

          <div
            class="max-w-sm md:max-w-2xl xl:max-w-none mx-auto grid gap-8 md:grid-cols-2 xl:grid-cols-4 xl:gap-6 items-start">

            <!-- Card helper komponenta kao pattern (ponovimo markup 4x) -->
            <!-- Hobby -->
            <div
              class="relative flex flex-col h-full p-5 rounded-2xl backdrop-blur-xs bg-white/70 shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
              <div class="mb-4">
                <div class="font-medium underline underline-offset-4 decoration-gray-300 mb-1">
                  {{ t('pricing.plans.hobby.name') }}</div>
                <div class="flex items-baseline pb-4 mb-4 border-b border-gray-200 border-dashed">
                  <span class="text-2xl font-bold">$</span>
                  <span class="text-4xl font-bold tabular-nums" v-text="isAnnual ? 12 : 15"></span>
                  <span class="text-sm text-gray-500 pl-1">/{{ t('pricing.perMonth') }}</span>
                </div>
                <div class="grow text-sm text-gray-700">
                  {{ t('pricing.plans.hobby.desc') }}
                </div>
              </div>
              <ul class="text-sm text-gray-500 space-y-2 grow">
                <li v-for="(f,i) in (hobby.features || [])" :key="'h-'+i" class="flex items-center">
                  <svg class="w-3 h-3 fill-current text-emerald-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>{{ f }}</span>
                </li>
              </ul>
              <div class="mt-6">
                <a class="btn-sm py-1.5 rounded-lg text-white bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] hover:bg-[length:100%_150%] bg-[bottom] shadow-sm w-full"
                  href="#0">{{ t('pricing.cta') }}</a>
              </div>
            </div>

            <!-- Basic -->
            <div
              class="relative flex flex-col h-full p-5 rounded-2xl backdrop-blur-xs bg-white/70 shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
              <div class="mb-4">
                <div class="font-medium underline underline-offset-4 decoration-gray-300 mb-1">
                  {{ t('pricing.plans.basic.name') }}</div>
                <div class="flex items-baseline pb-4 mb-4 border-b border-gray-200 border-dashed">
                  <span class="text-2xl font-bold">$</span>
                  <span class="text-4xl font-bold tabular-nums" v-text="isAnnual ? 34 : 39"></span>
                  <span class="text-sm text-gray-500 pl-1">/{{ t('pricing.perMonth') }}</span>
                </div>
                <div class="grow text-sm text-gray-700">
                  {{ t('pricing.plans.basic.desc') }}
                </div>
              </div>
              <ul class="text-sm text-gray-500 space-y-2 grow">
                <li v-for="(f,i) in (basic.features || [])" :key="'b-'+i" class="flex items-center">
                  <svg class="w-3 h-3 fill-current text-emerald-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>{{ f }}</span>
                </li>
              </ul>
              <div class="mt-6">
                <a class="btn-sm py-1.5 rounded-lg text-white bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] hover:bg-[length:100%_150%] bg-[bottom] shadow-sm w-full"
                  href="#0">{{ t('pricing.cta') }}</a>
              </div>
            </div>

            <!-- Business -->
            <div
              class="relative flex flex-col h-full p-5 rounded-2xl backdrop-blur-xs bg-linear-to-tr from-gray-900 to-gray-700 shadow-lg shadow-black/[0.03]">
              <div class="mb-4">
                <div class="text-gray-200 font-medium underline underline-offset-4 decoration-gray-600 mb-1">
                  {{ t('pricing.plans.business.name') }}</div>
                <div class="flex items-baseline pb-4 mb-4 border-b border-gray-600 border-dashed">
                  <span class="text-gray-200 text-2xl font-bold">$</span>
                  <span class="text-gray-200 text-4xl font-bold tabular-nums" v-text="isAnnual ? 47 : 54"></span>
                  <span class="text-sm text-gray-400 pl-1">/{{ t('pricing.perMonth') }}</span>
                </div>
                <div class="text-sm text-gray-300">
                  {{ t('pricing.plans.business.desc') }}
                </div>
              </div>
              <ul class="text-sm text-gray-400 space-y-2 grow">
                <li v-for="(f,i) in (business.features || [])" :key="'bu-'+i" class="flex items-center">
                  <svg class="w-3 h-3 fill-current text-emerald-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>{{ f }}</span>
                </li>
              </ul>
              <div class="mt-6">
                <a class="btn-sm py-1.5 rounded-lg text-white bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] hover:bg-[length:100%_150%] bg-[bottom] shadow-sm w-full"
                  href="#0">{{ t('pricing.cta') }}</a>
              </div>
            </div>

            <!-- Enterprise -->
            <div
              class="relative flex flex-col h-full p-5 rounded-2xl backdrop-blur-xs bg-white/70 shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
              <div class="mb-4">
                <div class="font-medium underline underline-offset-4 decoration-gray-300 mb-1">
                  {{ t('pricing.plans.enterprise.name') }}</div>
                <div class="flex items-baseline pb-4 mb-4 border-b border-gray-200 border-dashed">
                  <span class="text-2xl font-bold">$</span>
                  <span class="text-4xl font-bold tabular-nums" v-text="isAnnual ? 79 : 94"></span>
                  <span class="text-sm text-gray-500 pl-1">/{{ t('pricing.perMonth') }}</span>
                </div>
                <div class="grow text-sm text-gray-700">
                  {{ t('pricing.plans.enterprise.desc') }}
                </div>
              </div>
              <ul class="text-sm text-gray-500 space-y-2 grow">
                <li v-for="(f,i) in (enterprise.features || [])" :key="'e-'+i" class="flex items-center">
                  <svg class="w-3 h-3 fill-current text-emerald-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>{{ f }}</span>
                </li>
              </ul>
              <div class="mt-6">
                <a class="btn-sm py-1.5 rounded-lg text-white bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] hover:bg-[length:100%_150%] bg-[bottom] shadow-sm w-full"
                  href="#0">{{ t('pricing.cta') }}</a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>
