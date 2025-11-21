<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import Dropdown from './Dropdown.vue'
import { setLocale } from '@/i18n'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'
import { useAuth } from '@/composables/useAuth'

// Logo
const logo = new URL('@/images/profi_logo.png', import.meta.url).href

const { locale, t } = useI18n()
const route = useRoute()
const router = useRouter()

// Auth (korisnik, token, logout)
const { user, isAuthenticated, logout } = useAuth()
const currentName = computed(() => user.value?.name || user.value?.email || '')

// Mobile meni
const mobileNavOpen = ref(false)
const mobileNav = ref(null)
const hamburger = ref(null)

const clickOutside = (e) => {
  if (!mobileNavOpen.value) return

  const navEl = mobileNav.value
  const hamEl = hamburger.value

  if (!navEl || !hamEl) return
  if (navEl.contains(e.target) || hamEl.contains(e.target)) return

  mobileNavOpen.value = false
}

const keyPress = (e) => {
  if (!mobileNavOpen.value) return
  if (e.key === 'Escape' || e.keyCode === 27) {
    mobileNavOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', clickOutside)
  document.addEventListener('keydown', keyPress)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', clickOutside)
  document.removeEventListener('keydown', keyPress)
})

// Jezik
const langs = ['sr', 'en']
const isActiveLang = (l) => locale.value === l

const btnClass = (l) => [
  'px-2 py-1 rounded-md text-sm transition select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60',
  isActiveLang(l)
    ? 'bg-gray-900 text-white shadow-sm'
    : 'text-gray-700 hover:bg-gray-100 active:bg-gray-200',
]

const label = (l) => (l === 'sr' ? 'SR' : 'EN')

// Glavna navigacija
const navItems = [
  { to: '/pricing',  labelKey: 'nav.pricing' },
  { to: '/projects', labelKey: 'nav.projects' },
  { to: '/blog',     labelKey: 'nav.blog' },
  { to: '/contact',  labelKey: 'nav.contact' },
]

// Aktivni link
const isActiveRoute = (path) => route.path === path

// Logout akcija iz headera (da uvek ide na početnu)
const handleLogout = async () => {
  await logout(router)
}
</script>


<template>
  <header class="fixed top-2 md:top-6 w-full z-30">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div
        class="relative flex items-center justify-between gap-3 h-16 rounded-2xl px-3 md:px-4 backdrop-blur-xs bg-white/90 shadow-lg"
      >
        <!-- Logo -->
        <div class="flex-1 flex items-center">
          <router-link class="inline-flex items-center" to="/" :aria-label="t('nav.logoAria')">
            <img :src="logo" alt="ProfiSajt.Digital logo" class="h-16 w-auto" />
          </router-link>
        </div>

        <!-- Desktop navigation -->
        <nav class="hidden md:flex md:grow items-center">
          <ul class="text-sm flex grow justify-center flex-wrap items-center gap-3 lg:gap-6">
            <li v-for="item in navItems" :key="item.to">
              <router-link
                :to="item.to"
                class="flex items-center transition border-b-2 pb-0.5"
                :class="isActiveRoute(item.to)
                  ? 'text-gray-900 border-gray-900 font-semibold'
                  : 'text-gray-700 border-transparent hover:text-gray-900 hover:border-gray-300'"
              >
                {{ t(item.labelKey) }}
              </router-link>
            </li>

            <!-- Dropdown extra -->
            <Dropdown :title="t('nav.extra')">
              <li>
                <router-link
                  class="text-sm text-gray-700 hover:bg-gray-100 flex py-1.5 px-2 rounded-lg"
                  to="/support"
                >
                  {{ t('nav.support') }}
                </router-link>
              </li>
              <li>
                <router-link
                  class="text-sm text-gray-700 hover:bg-gray-100 flex py-1.5 px-2 rounded-lg"
                  to="/apps"
                >
                  {{ t('nav.apps') }}
                </router-link>
              </li>
            </Dropdown>
          </ul>

          <!-- Language switch -->
          <div class="flex items-center gap-2 ml-3 pl-3 border-l border-gray-200">
            <button
              v-for="l in langs"
              :key="l"
              :class="btnClass(l)"
              @click="setLocale(l)"
            >
              {{ label(l) }}
            </button>
          </div>
        </nav>

        <!-- Desktop: authentication zone -->
        <ul class="flex-1 flex justify-end items-center gap-3">

          <!-- Ako NIJE ulogovan -->
          <template v-if="!isAuthenticated()">
            <li>
              <router-link class="btn-sm text-gray-800 bg-white hover:bg-gray-50 shadow-sm" to="/signin">
                {{ t('nav.login') }}
              </router-link>
            </li>
            <li>
              <router-link class="btn-sm text-gray-200 bg-gray-800 hover:bg-gray-900 shadow-sm" to="/signup">
                {{ t('nav.register') }}
              </router-link>
            </li>
          </template>

          <!-- Ako JE ulogovan -->
          <template v-else>
            <li class="text-gray-700 font-medium">
              👋 {{ currentName }}
            </li>

            <li>
              <router-link
                class="btn-sm text-gray-800 bg-white hover:bg-gray-50 shadow-sm"
                to="/welcome"
              >
                {{ t('nav.dashboard') || 'Dashboard' }}
              </router-link>
            </li>

            <li>
              <button
                @click="handleLogout"
                class="btn-sm text-white bg-red-600 hover:bg-red-700 shadow-sm"
              >
                {{ t('nav.logout') || 'Logout' }}
              </button>
            </li>
          </template>

        </ul>

        <!-- Mobile menu toggle -->
        <div class="flex md:hidden">
          <button
            class="group inline-flex w-8 h-8 text-gray-800 bg-white text-center items-center justify-center transition"
            ref="hamburger"
            @click="mobileNavOpen = !mobileNavOpen"
          >
            <span class="sr-only">Menu</span>
            <svg class="fill-current pointer-events-none" width="16" height="16" viewBox="0 0 16 16">
              <rect y="7" x="7" width="9" height="2" rx="1"
                class="origin-center transition-all duration-300 -translate-y-[5px] translate-x-[7px]
                group-aria-expanded:rotate-[315deg] group-aria-expanded:translate-y-0 group-aria-expanded:translate-x-0" />
              <rect y="7" width="16" height="2" rx="1"
                class="origin-center transition-all duration-300 group-aria-expanded:rotate-45" />
              <rect y="7" width="9" height="2" rx="1"
                class="origin-center transition-all duration-300 translate-y-[5px]
                group-aria-expanded:rotate-[135deg] group-aria-expanded:translate-y-0" />
            </svg>
          </button>

          <!-- Mobile navigation -->
          <Transition enter-active-class="transition ease-out duration-200 transform"
                      enter-from-class="opacity-0 -translate-y-2"
                      enter-to-class="opacity-100 translate-y-0"
                      leave-active-class="transition ease-out duration-200"
                      leave-from-class="opacity-100"
                      leave-to-class="opacity-0">
            <nav v-show="mobileNavOpen" id="mobile-nav" ref="mobileNav"
                 class="absolute top-full left-0 w-full bg-white rounded-xl shadow-lg p-2 z-20">
              
              <ul class="text-sm space-y-0.5">
                <li v-for="item in navItems" :key="'m-' + item.to">
                  <router-link
                    :to="item.to"
                    class="flex text-gray-700 hover:bg-gray-100 rounded-lg py-1.5 px-2 transition"
                    @click="mobileNavOpen = false"
                  >
                    {{ t(item.labelKey) }}
                  </router-link>
                </li>
              </ul>

              <div class="h-px bg-gray-200 my-2"></div>

              <!-- Mobile login / logout -->

              <!-- NIJE ulogovan -->
              <template v-if="!isAuthenticated()">
                <router-link
                  class="block text-gray-700 py-2 px-2 rounded-lg hover:bg-gray-100"
                  to="/signin"
                  @click="mobileNavOpen = false"
                >
                  {{ t('nav.login') }}
                </router-link>
                <router-link
                  class="block text-gray-700 py-2 px-2 rounded-lg hover:bg-gray-100"
                  to="/signup"
                  @click="mobileNavOpen = false"
                >
                  {{ t('nav.register') }}
                </router-link>
              </template>

              <!-- JE ulogovan -->
              <template v-else>
                <div class="px-2 py-1 text-gray-700">
                  👋 {{ currentName }}
                </div>

                <router-link
                  class="block text-gray-700 py-2 px-2 rounded-lg hover:bg-gray-100"
                  to="/welcome"
                  @click="mobileNavOpen = false"
                >
                  {{ t('nav.dashboard') || 'Dashboard' }}
                </router-link>

                <button
                  @click="handleLogout"
                  class="block text-left w-full text-red-600 py-2 px-2 rounded-lg hover:bg-red-50"
                >
                  {{ t('nav.logout') || 'Logout' }}
                </button>
              </template>

            </nav>
          </Transition>
        </div>

      </div>
    </div>
  </header>
</template>

