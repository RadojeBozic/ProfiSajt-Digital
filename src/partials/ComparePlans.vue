<script setup>
import Tooltip from './../partials/Tooltip.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section>
    <div class="w-full max-w-6xl mx-auto px-4 md:px-6">
      <div class="pb-12 md:pb-20">

        <div class="max-w-sm mx-auto md:max-w-none grid md:grid-cols-5 md:-mx-6 max-md:gap-6">

          <!-- Column with labels -->
          <section
            class="md:contents [&>div:first-child]:pt-5 [&>div:first-child]:rounded-t-2xl [&>div:last-child]:rounded-b-2xl md:[&>div:last-child>div]:border-none">

            <!-- Empty cell -->
            <div></div>

            <!-- # Key features -->
            <div class="px-6 flex flex-col justify-end max-md:hidden md:order-1" aria-hidden="true">
              <div class="font-bold mb-2 mt-5">{{ t('compare.sections.key') }}</div>
            </div>

            <!-- Translated Words -->
            <div class="px-6 flex flex-col justify-end max-md:hidden md:order-2" aria-hidden="true">
              <div class="py-4 text-sm border-b border-gray-200">
                <Tooltip id="01" :content="t('compare.tooltips.translatedWords')">
                  {{ t('compare.labels.translatedWords') }}
                </Tooltip>
              </div>
            </div>

            <!-- Search Page Limit -->
            <div class="px-6 flex flex-col justify-end max-md:hidden md:order-3" aria-hidden="true">
              <div class="py-4 text-sm border-b border-gray-200">
                <Tooltip id="02" :content="t('compare.tooltips.searchLimit')">
                  {{ t('compare.labels.searchLimit') }}
                </Tooltip>
              </div>
            </div>

            <!-- Custom Fonts -->
            <div class="px-6 flex flex-col justify-end max-md:hidden md:order-4" aria-hidden="true">
              <div class="py-4 text-sm border-b border-gray-200">
                <Tooltip id="03" :content="t('compare.tooltips.customFonts')">
                  {{ t('compare.labels.customFonts') }}
                </Tooltip>
              </div>
            </div>

            <!-- Code Editor -->
            <div class="px-6 flex flex-col justify-end max-md:hidden md:order-5" aria-hidden="true">
              <div class="py-4 text-sm border-b border-gray-200">
                <Tooltip id="04" :content="t('compare.tooltips.codeEditor')">
                  {{ t('compare.labels.codeEditor') }}
                </Tooltip>
              </div>
            </div>

            <!-- # Hosting -->
            <div class="px-6 flex flex-col justify-end max-md:hidden md:order-6" aria-hidden="true">
              <div class="font-bold mb-2 mt-5">{{ t('compare.sections.hosting') }}</div>
            </div>

            <!-- Bandwidth -->
            <div class="px-6 flex flex-col justify-end max-md:hidden md:order-7" aria-hidden="true">
              <div class="py-4 text-sm border-b border-gray-200">
                <Tooltip id="06" :content="t('compare.tooltips.bandwidth')">
                  {{ t('compare.labels.bandwidth') }}
                </Tooltip>
              </div>
            </div>

            <!-- Visitors -->
            <div class="px-6 flex flex-col justify-end max-md:hidden md:order-8" aria-hidden="true">
              <div class="py-4 text-sm border-b border-gray-200">
                <Tooltip id="07" :content="t('compare.tooltips.visitors')">
                  {{ t('compare.labels.visitors') }}
                </Tooltip>
              </div>
            </div>

            <!-- Max Upload Size -->
            <div class="px-6 flex flex-col justify-end max-md:hidden md:order-9" aria-hidden="true">
              <div class="py-4 text-sm border-b border-gray-200">
                <Tooltip id="08" :content="t('compare.tooltips.maxUpload')">
                  {{ t('compare.labels.maxUpload') }}
                </Tooltip>
              </div>
            </div>

            <!-- SSL Certificate -->
            <div class="px-6 flex flex-col justify-end max-md:hidden md:order-10" aria-hidden="true">
              <div class="py-4 text-sm border-b border-gray-200">
                <Tooltip id="09" :content="t('compare.tooltips.ssl')">
                  {{ t('compare.labels.ssl') }}
                </Tooltip>
              </div>
            </div>

            <!-- # Creation -->
            <div class="px-6 flex flex-col justify-end max-md:hidden md:order-11" aria-hidden="true">
              <div class="font-bold mb-2 mt-5">{{ t('compare.sections.creation') }}</div>
            </div>

            <!-- Created Words -->
            <div class="px-6 flex flex-col justify-end max-md:hidden md:order-12" aria-hidden="true">
              <div class="py-4 text-sm border-b border-gray-200">
                <Tooltip id="11" :content="t('compare.tooltips.createdWords')">
                  {{ t('compare.labels.createdWords') }}
                </Tooltip>
              </div>
            </div>

            <!-- Team Projects -->
            <div class="px-6 flex flex-col justify-end max-md:hidden md:order-13" aria-hidden="true">
              <div class="py-4 text-sm border-b border-gray-200">
                <Tooltip id="12" :content="t('compare.tooltips.teamProjects')">
                  {{ t('compare.labels.teamProjects') }}
                </Tooltip>
              </div>
            </div>
          </section>
          <!-- End: Column with labels -->

          <!-- ---------- Hobby ---------- -->
          <section
            class="md:contents [&>div:first-child]:pt-5 [&>div:first-child]:rounded-t-2xl [&>div:last-child]:rounded-b-2xl md:[&>div:last-child>div]:border-none">
            <div class="relative px-6 flex flex-col justify-end">
              <div class="grow">
                <div class="font-medium mb-5">{{ t('compare.plans.hobby') }}</div>
                <div>
                  <a class="btn-sm py-1.5 rounded-lg text-white bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] hover:bg-[length:100%_150%] bg-[bottom] shadow-sm w-full"
                    href="#0">{{ t('compare.cta') }}</a>
                </div>
              </div>
            </div>

            <div class="px-6 flex flex-col justify-end md:order-1">
              <div class="font-bold mb-2 mt-5 md:sr-only">{{ t('compare.sections.key') }}</div>
            </div>

            <div class="px-6 flex flex-col justify-end md:order-2">
              <div class="h-full text-sm border-b border-gray-200 py-4">
                5,000 <span class="md:sr-only">{{ t('compare.labels.translatedWords') }}</span>
              </div>
            </div>

            <div class="px-6 flex flex-col justify-end md:order-3">
              <div class="h-full text-sm border-b border-gray-200 py-4">
                100 <span class="md:sr-only">{{ t('compare.labels.searchLimit') }}</span>
              </div>
            </div>

            <div class="px-6 flex flex-col justify-end md:order-4">
              <div class="flex items-center h-full text-sm border-b border-gray-200 py-4">
                <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9"><path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"/></svg>
                <span class="md:sr-only">{{ t('compare.labels.customFonts') }}</span>
              </div>
            </div>

            <div class="px-6 flex flex-col justify-end md:order-5">
              <div class="max-md:sr-only flex items-center h-full text-sm border-b border-gray-200 py-4">
                <span class="md:sr-only">{{ t('compare.labels.codeEditor') }}</span>
              </div>
            </div>

            <div class="px-6 flex flex-col justify-end md:order-6">
              <div class="font-bold mb-2 mt-5 md:sr-only">{{ t('compare.sections.features') }}</div>
            </div>

            <div class="px-6 flex flex-col justify-end md:order-7">
              <div class="h-full text-sm border-b border-gray-200 py-4">
                100MB <span class="md:sr-only">{{ t('compare.labels.bandwidth') }}</span>
              </div>
            </div>

            <div class="px-6 flex flex-col justify-end md:order-8">
              <div class="h-full text-sm border-b border-gray-200 py-4">
                1,000 <span class="md:sr-only">{{ t('compare.labels.visitors') }}</span>
              </div>
            </div>

            <div class="px-6 flex flex-col justify-end md:order-9">
              <div class="h-full text-sm border-b border-gray-200 py-4">
                5MB <span class="md:sr-only">{{ t('compare.labels.maxUpload') }}</span>
              </div>
            </div>

            <div class="px-6 flex flex-col justify-end md:order-10">
              <div class="flex items-center h-full text-sm border-b border-gray-200 py-4">
                <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9"><path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"/></svg>
                <span class="md:sr-only">{{ t('compare.labels.ssl') }}</span>
              </div>
            </div>

            <div class="px-6 flex flex-col justify-end md:order-11">
              <div class="font-bold mb-2 mt-5 md:sr-only">{{ t('compare.sections.creation') }}</div>
            </div>

            <div class="px-6 flex flex-col justify-end md:order-12">
              <div class="h-full text-sm border-b border-gray-200 py-4">
                {{ t('compare.values.unlimited') }} <span class="md:sr-only">{{ t('compare.labels.createdWords') }}</span>
              </div>
            </div>

            <div class="px-6 flex flex-col justify-end md:order-13">
              <div class="max-md:sr-only flex items-center h-full text-sm border-b border-gray-200 py-4">
                <span class="md:sr-only">{{ t('compare.labels.teamProjects') }}</span>
              </div>
            </div>
          </section>
          <!-- End: Hobby -->

          <!-- ---------- Basic ---------- -->
          <section
            class="md:contents [&>div:first-child]:pt-5 [&>div:first-child]:rounded-t-2xl [&>div:last-child]:rounded-b-2xl md:[&>div:last-child>div]:border-none">
            <div class="relative px-6 flex flex-col justify-end">
              <div class="grow">
                <div class="font-medium mb-5">{{ t('compare.plans.basic') }}</div>
                <div>
                  <a class="btn-sm py-1.5 rounded-lg text-white bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] hover:bg-[length:100%_150%] bg-[bottom] shadow-sm w-full"
                    href="#0">{{ t('compare.cta') }}</a>
                </div>
              </div>
            </div>

            <div class="px-6 flex flex-col justify-end md:order-1">
              <div class="font-bold mb-2 mt-5 md:sr-only">{{ t('compare.sections.key') }}</div>
            </div>

            <div class="px-6 flex flex-col justify-end md:order-2">
              <div class="h-full text-sm border-b border-gray-200 py-4">
                15,000 <span class="md:sr-only">{{ t('compare.labels.translatedWords') }}</span>
              </div>
            </div>

            <div class="px-6 flex flex-col justify-end md:order-3">
              <div class="h-full text-sm border-b border-gray-200 py-4">
                1,000 <span class="md:sr-only">{{ t('compare.labels.searchLimit') }}</span>
              </div>
            </div>

            <div class="px-6 flex flex-col justify-end md:order-4">
              <div class="flex items-center h-full text-sm border-b border-gray-200 py-4">
                <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9"><path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"/></svg>
                <span class="md:sr-only">{{ t('compare.labels.customFonts') }}</span>
              </div>
            </div>

            <div class="px-6 flex flex-col justify-end md:order-5">
              <div class="flex items-center h-full text-sm border-b border-gray-200 py-4">
                <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9"><path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"/></svg>
                <span class="md:sr-only">{{ t('compare.labels.codeEditor') }}</span>
              </div>
            </div>

            <div class="px-6 flex flex-col justify-end md:order-6">
              <div class="font-bold mb-2 mt-5 md:sr-only">{{ t('compare.sections.features') }}</div>
            </div>

            <div class="px-6 flex flex-col justify-end md:order-7">
              <div class="h-full text-sm border-b border-gray-200 py-4">
                1GB <span class="md:sr-only">{{ t('compare.labels.bandwidth') }}</span>
              </div>
            </div>

            <div class="px-6 flex flex-col justify-end md:order-8">
              <div class="h-full text-sm border-b border-gray-200 py-4">
                10,000 <span class="md:sr-only">{{ t('compare.labels.visitors') }}</span>
              </div>
            </div>

            <div class="px-6 flex flex-col justify-end md:order-9">
              <div class="h-full text-sm border-b border-gray-200 py-4">
                15MB <span class="md:sr-only">{{ t('compare.labels.maxUpload') }}</span>
              </div>
            </div>

            <div class="px-6 flex flex-col justify-end md:order-10">
              <div class="flex items-center h-full text-sm border-b border-gray-200 py-4">
                <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9"><path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"/></svg>
                <span class="md:sr-only">{{ t('compare.labels.ssl') }}</span>
              </div>
            </div>

            <div class="px-6 flex flex-col justify-end md:order-11">
              <div class="font-bold mb-2 mt-5 md:sr-only">{{ t('compare.sections.creation') }}</div>
            </div>

            <div class="px-6 flex flex-col justify-end md:order-12">
              <div class="h-full text-sm border-b border-gray-200 py-4">
                {{ t('compare.values.unlimited') }} <span class="md:sr-only">{{ t('compare.labels.createdWords') }}</span>
              </div>
            </div>

            <div class="px-6 flex flex-col justify-end md:order-13">
              <div class="max-md:sr-only flex items-center h-full text-sm border-b border-gray-200 py-4">
                <span class="md:sr-only">{{ t('compare.labels.teamProjects') }}</span>
              </div>
            </div>
          </section>
          <!-- End: Basic -->

          <!-- ---------- Business ---------- -->
          <section
            class="md:contents [&>div:first-child]:pt-5 [&>div:first-child]:rounded-t-2xl [&>div:last-child]:rounded-b-2xl md:[&>div:last-child>div]:border-none [&>div]:bg-gray-800">
            <div class="relative px-6 flex flex-col justify-end">
              <div class="grow">
                <div class="text-gray-200 font-medium mb-5">{{ t('compare.plans.business') }}</div>
                <div>
                  <a class="btn-sm py-1.5 rounded-lg text-white bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] hover:bg-[length:100%_150%] bg-[bottom] shadow-sm w-full"
                    href="#0">{{ t('compare.cta') }}</a>
                </div>
              </div>
            </div>

            <div class="px-6 flex flex-col justify-end md:order-1">
              <div class="text-gray-200 font-bold mb-2 mt-5 md:sr-only">{{ t('compare.sections.key') }}</div>
            </div>

            <div class="text-gray-300 px-6 flex flex-col justify-end md:order-2">
              <div class="h-full text-sm border-b border-gray-600 py-4">
                25,000 <span class="md:sr-only">{{ t('compare.labels.translatedWords') }}</span>
              </div>
            </div>

            <div class="text-gray-300 px-6 flex flex-col justify-end md:order-3">
              <div class="h-full text-sm border-b border-gray-600 py-4">
                {{ t('compare.values.unlimited') }}
              </div>
            </div>

            <div class="text-gray-300 px-6 flex flex-col justify-end md:order-4">
              <div class="flex items-center h-full text-sm border-b border-gray-600 py-4">
                <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9"><path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"/></svg>
                <span class="md:sr-only">{{ t('compare.labels.customFonts') }}</span>
              </div>
            </div>

            <div class="text-gray-300 px-6 flex flex-col justify-end md:order-5">
              <div class="flex items-center h-full text-sm border-b border-gray-600 py-4">
                <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9"><path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"/></svg>
                <span class="md:sr-only">{{ t('compare.labels.codeEditor') }}</span>
              </div>
            </div>

            <div class="px-6 flex flex-col justify-end md:order-6">
              <div class="text-gray-200 font-bold mb-2 mt-5 md:sr-only">{{ t('compare.sections.features') }}</div>
            </div>

            <div class="text-gray-300 px-6 flex flex-col justify-end md:order-7">
              <div class="h-full text-sm border-b border-gray-600 py-4">
                10GB <span class="md:sr-only">{{ t('compare.labels.bandwidth') }}</span>
              </div>
            </div>

            <div class="text-gray-300 px-6 flex flex-col justify-end md:order-8">
              <div class="h-full text-sm border-b border-gray-600 py-4">
                50,000 <span class="md:sr-only">{{ t('compare.labels.visitors') }}</span>
              </div>
            </div>

            <div class="text-gray-300 px-6 flex flex-col justify-end md:order-9">
              <div class="h-full text-sm border-b border-gray-600 py-4">
                25MB <span class="md:sr-only">{{ t('compare.labels.maxUpload') }}</span>
              </div>
            </div>

            <div class="text-gray-300 px-6 flex flex-col justify-end md:order-10">
              <div class="flex items-center h-full text-sm border-b border-gray-600 py-4">
                <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9"><path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"/></svg>
                <span class="md:sr-only">{{ t('compare.labels.ssl') }}</span>
              </div>
            </div>

            <div class="px-6 flex flex-col justify-end md:order-11">
              <div class="text-gray-200 font-bold mb-2 mt-5 md:sr-only">{{ t('compare.sections.creation') }}</div>
            </div>

            <div class="text-gray-300 px-6 flex flex-col justify-end md:order-12">
              <div class="h-full text-sm border-b border-gray-600 py-4">
                {{ t('compare.values.unlimited') }} <span class="md:sr-only">{{ t('compare.labels.createdWords') }}</span>
              </div>
            </div>

            <div class="text-gray-300 px-6 flex flex-col justify-end md:order-13">
              <div class="flex items-center h-full text-sm border-b border-gray-600 py-4">
                <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9"><path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"/></svg>
                <span class="md:sr-only">{{ t('compare.labels.teamProjects') }}</span>
              </div>
            </div>
          </section>
          <!-- End: Business -->

          <!-- ---------- Enterprise ---------- -->
          <section
            class="md:contents [&>div:first-child]:pt-5 [&>div:first-child]:rounded-t-2xl [&>div:last-child]:rounded-b-2xl md:[&>div:last-child>div]:border-none">
            <div class="relative px-6 flex flex-col justify-end">
              <div class="grow">
                <div class="font-medium mb-5">{{ t('compare.plans.enterprise') }}</div>
                <div>
                  <a class="btn-sm py-1.5 rounded-lg text-white bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] hover:bg-[length:100%_150%] bg-[bottom] shadow-sm w-full"
                    href="#0">{{ t('compare.cta') }}</a>
                </div>
              </div>
            </div>

            <div class="px-6 flex flex-col justify-end md:order-1">
              <div class="font-bold mb-2 mt-5 md:sr-only">{{ t('compare.sections.key') }}</div>
            </div>

            <div class="px-6 flex flex-col justify-end md:order-2">
              <div class="h-full text-sm border-b border-gray-200 py-4">
                50,000 <span class="md:sr-only">{{ t('compare.labels.translatedWords') }}</span>
              </div>
            </div>

            <div class="px-6 flex flex-col justify-end md:order-3">
              <div class="h-full text-sm border-b border-gray-200 py-4">
                {{ t('compare.values.unlimited') }}
              </div>
            </div>

            <div class="px-6 flex flex-col justify-end md:order-4">
              <div class="flex items-center h-full text-sm border-b border-gray-200 py-4">
                <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9"><path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"/></svg>
                <span class="md:sr-only">{{ t('compare.labels.customFonts') }}</span>
              </div>
            </div>

            <div class="px-6 flex flex-col justify-end md:order-5">
              <div class="flex items-center h-full text-sm border-b border-gray-200 py-4">
                <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9"><path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"/></svg>
                <span class="md:sr-only">{{ t('compare.labels.codeEditor') }}</span>
              </div>
            </div>

            <div class="px-6 flex flex-col justify-end md:order-6">
              <div class="font-bold mb-2 mt-5 md:sr-only">{{ t('compare.sections.features') }}</div>
            </div>

            <div class="px-6 flex flex-col justify-end md:order-7">
              <div class="h-full text-sm border-b border-gray-200 py-4">
                100GB <span class="md:sr-only">{{ t('compare.labels.bandwidth') }}</span>
              </div>
            </div>

            <div class="px-6 flex flex-col justify-end md:order-8">
              <div class="h-full text-sm border-b border-gray-200 py-4">
                100,000 <span class="md:sr-only">{{ t('compare.labels.visitors') }}</span>
              </div>
            </div>

            <div class="px-6 flex flex-col justify-end md:order-9">
              <div class="h-full text-sm border-b border-gray-200 py-4">
                {{ t('compare.values.custom') }} <span class="md:sr-only">{{ t('compare.labels.maxUpload') }}</span>
              </div>
            </div>

            <div class="px-6 flex flex-col justify-end md:order-10">
              <div class="flex items-center h-full text-sm border-b border-gray-200 py-4">
                <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9"><path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"/></svg>
                <span class="md:sr-only">{{ t('compare.labels.ssl') }}</span>
              </div>
            </div>

            <div class="px-6 flex flex-col justify-end md:order-11">
              <div class="font-bold mb-2 mt-5 md:sr-only">{{ t('compare.sections.creation') }}</div>
            </div>

            <div class="px-6 flex flex-col justify-end md:order-12">
              <div class="h-full text-sm border-b border-gray-200 py-4">
                {{ t('compare.values.unlimited') }} <span class="md:sr-only">{{ t('compare.labels.createdWords') }}</span>
              </div>
            </div>

            <div class="px-6 flex flex-col justify-end md:order-13">
              <div class="flex items-center h-full text-sm border-b border-gray-200 py-4">
                <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9"><path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"/></svg>
                <span class="md:sr-only">{{ t('compare.labels.teamProjects') }}</span>
              </div>
            </div>
          </section>
          <!-- End: Enterprise -->

        </div>

      </div>
    </div>
  </section>
</template>

<style scoped></style>
