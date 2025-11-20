<script setup>
import AppCard from './AppCard.vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

// ikonice ostaju iste...
import I01 from '../images/integration-01.svg'
import I02 from '../images/integration-02.svg'
import I03 from '../images/integration-03.svg'
import I04 from '../images/integration-04.svg'
import I05 from '../images/integration-05.svg'
import I06 from '../images/integration-06.svg'
import I07 from '../images/integration-07.svg'
import I08 from '../images/integration-08.svg'
import I09 from '../images/integration-09.svg'
import I10 from '../images/integration-10.svg'
import I11 from '../images/integration-11.svg'
import I12 from '../images/integration-12.svg'
import I13 from '../images/integration-13.svg'
import I14 from '../images/integration-14.svg'
import I15 from '../images/integration-15.svg'
import I16 from '../images/integration-16.svg'
import I18 from '../images/integration-18.svg'
import I19 from '../images/integration-19.svg'
import I21 from '../images/integration-21.svg'

const { t } = useI18n()

/** Raw kolekcije sa ID-jevima */
const rawLanguages = [
  { id: 'js_ts', image: I10, link: '#0', badge: true },
  { id: 'php',   image: I05, link: '#0' },
  { id: 'node',  image: I16, link: '#0' },
  { id: 'python',image: I19, link: '#0' },
]

const rawFrameworks = [
  { id: 'vue3',     image: I03, link: '#0', badge: true },
  { id: 'vite',     image: I04, link: '#0', badge: true },
  { id: 'tailwind', image: I02, link: '#0' },
  { id: 'vueRouter',image: I07, link: '#0' },
  { id: 'pinia',    image: I12, link: '#0' },
  { id: 'vueI18n',  image: I13, link: '#0' },
  { id: 'http',     image: I06, link: '#0' }, // Axios / Fetch
]

const rawPlatforms = [
  { id: 'bagisto',  image: I21, link: '#0', badge: true },
  { id: 'cruip',    image: I01, link: '#0', badge: true },
  { id: 'cloudways',image: I14, link: '#0' },
  { id: 'namecheap',image: I15, link: '#0', badge: true },
  { id: 'stripe',   image: I18, link: '#0' },
  { id: 'gha',      image: I09, link: '#0' }, // GitHub Actions
]

/** Mapiranje sa prevodima iz i18n */
const languages = computed(() =>
  rawLanguages.map(it => ({
    ...it,
    name: t(`appList.items.languages.${it.id}.name`),
    description: t(`appList.items.languages.${it.id}.description`),
  }))
)

const frameworks = computed(() =>
  rawFrameworks.map(it => ({
    ...it,
    name: t(`appList.items.frameworks.${it.id}.name`),
    description: t(`appList.items.frameworks.${it.id}.description`),
  }))
)

const platforms = computed(() =>
  rawPlatforms.map(it => ({
    ...it,
    name: t(`appList.items.platforms.${it.id}.name`),
    description: t(`appList.items.platforms.${it.id}.description`),
  }))
)
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-6">
    <div class="pb-12 md:pb-20">

      <!-- Header -->
      <div class="pb-10 md:pb-12 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-2">{{ t('appList.title') }}</h2>
        <p class="text-gray-700">{{ t('appList.subtitle') }}</p>
      </div>

      <div class="space-y-12 md:space-y-16">
        <!-- Section: Languages & Runtimes -->
        <section>
          <div class="flex justify-between items-center space-x-2 mb-5">
            <h3 class="font-bold text-xl truncate">{{ t('appList.sections.languages') }}</h3>
            <a class="shrink-0 text-sm font-medium text-blue-500 hover:text-blue-600 transition" href="#0">{{ t('common.viewAll') }}</a>
          </div>
          <div class="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <template v-for="(app, index) in languages" :key="'lang-'+index">
              <div class="group">
                <AppCard :app="app">
                {{ app.description }}
              </AppCard>
              </div>
            </template>
          </div>
        </section>

        <!-- Section: Frameworks & Libraries -->
        <section>
          <div class="flex justify-between items-center space-x-2 mb-5">
            <h3 class="font-bold text-xl truncate">{{ t('appList.sections.frameworks') }}</h3>
            <a class="shrink-0 text-sm font-medium text-blue-500 hover:text-blue-600 transition" href="#0">{{ t('common.viewAll') }}</a>
          </div>
          <div class="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <template v-for="(app, index) in frameworks" :key="'fw-'+index">
              <div class="group">
                <AppCard :app="app">
                  {{ app.description }}
                </AppCard>
              </div>
            </template>
          </div>
        </section>

        <!-- Section: CMS / Templates / Platforms -->
        <section>
          <div class="flex justify-between items-center space-x-2 mb-5">
            <h3 class="font-bold text-xl truncate">{{ t('appList.sections.platforms') }}</h3>
            <a class="shrink-0 text-sm font-medium text-blue-500 hover:text-blue-600 transition" href="#0">{{ t('common.viewAll') }}</a>
          </div>
          <div class="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <template v-for="(app, index) in platforms" :key="'plat-'+index">
              <div class="group">
                <AppCard :app="app">
                  {{ app.description }}
                </AppCard>
              </div>
            </template>
          </div>
        </section>
      </div>

      <!-- Load more (stub) -->
      <div class="text-center mt-12">
        <button class="btn-sm text-gray-200 bg-gray-800 hover:bg-gray-900 shadow-sm py-1.5 min-w-[220px]">
          {{ t('common.loadMore') }} <span class="tracking-normal text-gray-500 ml-2">↓</span>
        </button>
      </div>

    </div>
  </div>
</template>
