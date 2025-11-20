<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="relative bg-gray-900">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">
        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-10 md:pb-14">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-100">
            {{ t('featuresPlanet.heading') }}
          </h2>
          <p class="mt-4 text-gray-400 text-sm md:text-[15px]">
            {{ t('featuresPlanet.subheading') }}
          </p>
        </div>

        <!-- Planet + strateški partneri -->
        <div class="pb-12 md:pb-16" data-aos="zoom-y-out">
          <div class="text-center">
            <div class="relative inline-flex rounded-full">
              <!-- Glow pozadina (lagana animacija) -->
              <div
                class="absolute inset-0 -z-10 rounded-full bg-blue-500/25 blur-3xl animate-pulse"
                aria-hidden="true"
              />

              <!-- Planeta / čvorište -->
              <img
                class="rounded-full bg-gray-900 border border-slate-700/70"
                src="../images/planet.png"
                width="360"
                height="360"
                :alt="t('featuresPlanet.planetAlt')"
              />

              <!-- Partner tagovi (samo desktop, da bude čisto na mobilu) -->
              <div class="hidden md:block pointer-events-none" aria-hidden="true">
                <!-- Cloudways -->
                <div class="absolute -top-6 -left-28 flex items-center gap-2">
                  <div class="px-3 py-1.5 rounded-full bg-gray-800/90 border border-slate-700/70 shadow-lg">
                    <div class="flex items-center gap-2">
                      <img
                        src="../images/partners/cloudways.png"
                        class="h-6 w-auto"
                        :alt="t('featuresPlanet.tags.cloudways')"
                      />
                      <span class="text-xs text-gray-200 whitespace-nowrap">
                        {{ t('featuresPlanet.tags.cloudways') }}
                      </span>
                    </div>
                  </div>
                </div>

                <!-- Canva -->
                <div class="absolute top-0 left-40 flex items-center gap-2">
                  <div class="px-3 py-1.5 rounded-full bg-gray-800/90 border border-slate-700/70 shadow-lg">
                    <div class="flex items-center gap-2">
                      <img
                        src="../images/partners/canva.png"
                        class="h-6 w-auto"
                        :alt="t('featuresPlanet.tags.canva')"
                      />
                      <span class="text-xs text-gray-200 whitespace-nowrap">
                        {{ t('featuresPlanet.tags.canva') }}
                      </span>
                    </div>
                  </div>
                </div>

                <!-- Namecheap -->
                <div class="absolute bottom-4 -left-24 flex items-center gap-2">
                  <div class="px-3 py-1.5 rounded-full bg-gray-800/90 border border-slate-700/70 shadow-lg">
                    <div class="flex items-center gap-2">
                      <img
                        src="../images/partners/namecheap.png"
                        class="h-6 w-auto"
                        :alt="t('featuresPlanet.tags.namecheap')"
                      />
                      <span class="text-xs text-gray-200 whitespace-nowrap">
                        {{ t('featuresPlanet.tags.namecheap') }}
                      </span>
                    </div>
                  </div>
                </div>

                <!-- Google -->
                <div class="absolute bottom-6 left-44 flex items-center gap-2">
                  <div class="px-3 py-1.5 rounded-full bg-gray-800/90 border border-slate-700/70 shadow-lg">
                    <div class="flex items-center gap-2">
                      <img
                        src="../images/partners/google.png"
                        class="h-6 w-auto"
                        :alt="t('featuresPlanet.tags.google')"
                      />
                      <span class="text-xs text-gray-200 whitespace-nowrap">
                        {{ t('featuresPlanet.tags.google') }}
                      </span>
                    </div>
                  </div>
                </div>

                <!-- Meta -->
                <div class="absolute top-24 -right-32 flex items-center gap-2">
                  <div class="px-3 py-1.5 rounded-full bg-gray-800/90 border border-slate-700/70 shadow-lg">
                    <div class="flex items-center gap-2">
                      <img
                        src="../images/partners/meta.png"
                        class="h-6 w-auto"
                        :alt="t('featuresPlanet.tags.meta')"
                      />
                      <span class="text-xs text-gray-200 whitespace-nowrap">
                        {{ t('featuresPlanet.tags.meta') }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /partner tagovi -->
            </div>
          </div>
        </div>

        <!-- Grid sa objašnjenjima / benefiti partnera -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <!-- AI & automatizacija -->
          <article class="bg-gray-800/60 rounded-xl p-6 md:p-7 border border-gray-800/80">
            <h3 class="font-medium text-gray-100 flex items-center gap-2 mb-2">
              <svg class="fill-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                <path
                  d="M8 0a5 5 0 0 1 5 5v1h1a2 2 0 1 1 0 4h-1v1a5 5 0 0 1-10 0V10H2a2 2 0 1 1 0-4h1V5a5 5 0 0 1 5-5Z"
                />
              </svg>
              <span>{{ t('featuresPlanet.cards.ai.title') }}</span>
            </h3>
            <p class="text-[14px] text-gray-400 leading-relaxed">
              {{ t('featuresPlanet.cards.ai.desc') }}
            </p>
          </article>

          <!-- Cloud hosting (Cloudways) -->
          <article class="bg-gray-800/60 rounded-xl p-6 md:p-7 border border-gray-800/80">
            <h3 class="font-medium text-gray-100 flex items-center gap-2 mb-2">
              <svg class="fill-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                <path
                  d="M5 4a4 4 0 0 1 7.874-1.003A3.5 3.5 0 1 1 13.5 11H4a3 3 0 0 1 1-5.83V5a1 1 0 0 1 0-1Z"
                />
              </svg>
              <span>{{ t('featuresPlanet.cards.cloud.title') }}</span>
            </h3>
            <p class="text-[14px] text-gray-400 leading-relaxed">
              {{ t('featuresPlanet.cards.cloud.desc') }}
            </p>
          </article>

          <!-- Dizajn & vizuali (Canva) -->
          <article class="bg-gray-800/60 rounded-xl p-6 md:p-7 border border-gray-800/80">
            <h3 class="font-medium text-gray-100 flex items-center gap-2 mb-2">
              <svg class="fill-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                <path
                  d="M3 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l4.414 4.414A1 1 0 0 1 14 6.414V14a1 1 0 0 1-1 1H9.828a1 1 0 0 1-.707-.293L3.293 9.879A1 1 0 0 1 3 9.172V2Z"
                  opacity=".4"
                />
                <path
                  d="M3 9a6 6 0 0 1 6-6h2v1a5 5 0 0 1-5 5H3Z"
                />
              </svg>
              <span>{{ t('featuresPlanet.cards.design.title') }}</span>
            </h3>
            <p class="text-[14px] text-gray-400 leading-relaxed">
              {{ t('featuresPlanet.cards.design.desc') }}
            </p>
          </article>

          <!-- Domene & DNS (Namecheap) -->
          <article class="bg-gray-800/60 rounded-xl p-6 md:p-7 border border-gray-800/80">
            <h3 class="font-medium text-gray-100 flex items-center gap-2 mb-2">
              <svg class="fill-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                <path
                  d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1H2V4Zm0 3h12v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7Zm3 3a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H5Z"
                />
              </svg>
              <span>{{ t('featuresPlanet.cards.domains.title') }}</span>
            </h3>
            <p class="text-[14px] text-gray-400 leading-relaxed">
              {{ t('featuresPlanet.cards.domains.desc') }}
            </p>
          </article>

          <!-- Google alati -->
          <article class="bg-gray-800/60 rounded-xl p-6 md:p-7 border border-gray-800/80">
            <h3 class="font-medium text-gray-100 flex items-center gap-2 mb-2">
              <svg class="fill-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                <path
                  d="M7.5 1a6.5 6.5 0 1 1-6.32 8.03A1 1 0 0 1 2.15 7.8 4.5 4.5 0 1 0 7.5 3V1Z"
                />
              </svg>
              <span>{{ t('featuresPlanet.cards.google.title') }}</span>
            </h3>
            <p class="text-[14px] text-gray-400 leading-relaxed">
              {{ t('featuresPlanet.cards.google.desc') }}
            </p>
          </article>

          <!-- Meta / društvene mreže -->
          <article class="bg-gray-800/60 rounded-xl p-6 md:p-7 border border-gray-800/80">
            <h3 class="font-medium text-gray-100 flex items-center gap-2 mb-2">
              <svg class="fill-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                <path
                  d="M4 3a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H4Zm0 2h8a1 1 0 0 1 1 1v4c0 .098-.014.193-.04.283L10.5 8.5 8 10 4.04 6.283A1 1 0 0 1 4 6V5Z"
                />
              </svg>
              <span>{{ t('featuresPlanet.cards.metaAds.title') }}</span>
            </h3>
            <p class="text-[14px] text-gray-400 leading-relaxed">
              {{ t('featuresPlanet.cards.metaAds.desc') }}
            </p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
