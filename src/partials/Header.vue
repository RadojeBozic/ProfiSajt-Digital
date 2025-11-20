<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Dropdown from './Dropdown.vue'
import { setLocale } from '@/i18n'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

// Logo
const logo = new URL('@/images/profi_logo.png', import.meta.url).href

const { locale, t } = useI18n()
const route = useRoute()

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
</script>

<template>
  <header class="fixed top-2 md:top-6 w-full z-30">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div
        class="relative flex items-center justify-between gap-3 h-16 rounded-2xl px-3 md:px-4 backdrop-blur-xs bg-white/90 shadow-lg"
      >
        <!-- Site branding -->
        <div class="flex-1 flex items-center">
          <router-link
            class="inline-flex items-center"
            to="/"
            :aria-label="t('nav.logoAria')"
          >
            <img
              :src="logo"
              alt="ProfiSajt.Digital logo"
              class="h-16 w-auto"
            />
          </router-link>
        </div>

        <!-- Desktop navigation -->
        <nav class="hidden md:flex md:grow items-center">
          <!-- Desktop menu links -->
          <ul
            class="text-sm flex grow justify-center flex-wrap items-center gap-3 lg:gap-6"
          >
            <li
              v-for="item in navItems"
              :key="item.to"
              class="px-2 py-1"
            >
              <router-link
                :to="item.to"
                class="flex items-center transition border-b-2 pb-0.5"
                :class="
                  isActiveRoute(item.to)
                    ? 'text-gray-900 border-gray-900 font-semibold'
                    : 'text-gray-700 border-transparent hover:text-gray-900 hover:border-gray-300'
                "
              >
                {{ t(item.labelKey) }}
              </router-link>
            </li>

            <!-- Dropdown dodatne stavke -->
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

          <!-- Desktop language switcher -->
          <div class="flex items-center gap-2 ml-3 pl-3 border-l border-gray-200">
            <button
              v-for="l in langs"
              :key="l"
              type="button"
              :class="btnClass(l)"
              :aria-label="`Change language to ${label(l)}`"
              :aria-pressed="isActiveLang(l)"
              @click="setLocale(l)"
            >
              {{ label(l) }}
            </button>
          </div>
        </nav>

        <!-- Desktop sign in links -->
        <ul class="flex-1 flex justify-end items-center gap-3">
          <li>
            <router-link
              class="btn-sm text-gray-800 bg-white hover:bg-gray-50 shadow-sm"
              to="/signin"
            >
              {{ t('nav.login') }}
            </router-link>
          </li>
          <li>
            <router-link
              class="btn-sm text-gray-200 bg-gray-800 hover:bg-gray-900 shadow-sm"
              to="/signup"
            >
              {{ t('nav.register') }}
            </router-link>
          </li>
        </ul>

        <!-- Mobile menu -->
        <div class="flex md:hidden">
          <!-- Hamburger button -->
          <button
            class="group inline-flex w-8 h-8 text-gray-800 bg-white text-center items-center justify-center transition"
            ref="hamburger"
            :class="{ active: mobileNavOpen }"
            aria-controls="mobile-nav"
            :aria-expanded="mobileNavOpen"
            @click="mobileNavOpen = !mobileNavOpen"
          >
            <span class="sr-only">Menu</span>
            <svg
              class="fill-current pointer-events-none"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                class="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] -translate-y-[5px] translate-x-[7px] group-aria-expanded:rotate-[315deg] group-aria-expanded:translate-y-0 group-aria-expanded:translate-x-0"
                y="7"
                x="7"
                width="9"
                height="2"
                rx="1"
              />
              <rect
                class="origin-center group-aria-expanded:rotate-45 transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)]"
                y="7"
                width="16"
                height="2"
                rx="1"
              />
              <rect
                class="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] translate-y-[5px] group-aria-expanded:rotate-[135deg] group-aria-expanded:translate-y-0"
                y="7"
                width="9"
                height="2"
                rx="1"
              />
            </svg>
          </button>

          <!-- Mobile navigation -->
          <Transition
            enter-active-class="transition ease-out duration-200 transform"
            enter-from-class="opacity-0 -translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-out duration-200"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <nav
              id="mobile-nav"
              ref="mobileNav"
              v-show="mobileNavOpen"
              class="absolute top-full z-20 left-0 w-full bg-white rounded-xl shadow-lg shadow-black/[0.03]
                     before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent
                     before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box]
                     before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]
                     before:[mask-composite:exclude_!important] before:pointer-events-none"
            >
              <ul class="text-sm p-2 space-y-0.5">
                <li
                  v-for="item in navItems"
                  :key="'m-' + item.to"
                >
                  <router-link
                    :to="item.to"
                    class="flex text-gray-700 hover:bg-gray-100 rounded-lg py-1.5 px-2 transition"
                    :class="isActiveRoute(item.to) ? 'bg-gray-100 font-medium' : ''"
                    @click="mobileNavOpen = false"
                  >
                    {{ t(item.labelKey) }}
                  </router-link>
                </li>

                <!-- Dodatne stranice -->
                <li>
                  <router-link
                    class="flex text-gray-700 hover:bg-gray-100 rounded-lg py-1.5 px-2 transition"
                    to="/support"
                    @click="mobileNavOpen = false"
                  >
                    {{ t('nav.support') }}
                  </router-link>
                </li>
                <li>
                  <router-link
                    class="flex text-gray-700 hover:bg-gray-100 rounded-lg py-1.5 px-2 transition"
                    to="/apps"
                    @click="mobileNavOpen = false"
                  >
                    {{ t('nav.apps') }}
                  </router-link>
                </li>
              </ul>

              <!-- Divider -->
              <div class="h-px bg-gray-200 mx-2"></div>

              <!-- Mobile language switcher -->
              <div class="p-2 flex items-center gap-2">
                <span class="text-xs text-gray-500 pl-1">
                  {{ t('nav.language') }}:
                </span>
                <button
                  v-for="l in langs"
                  :key="'m-' + l"
                  type="button"
                  :class="btnClass(l)"
                  :aria-label="`Change language to ${label(l)}`"
                  :aria-pressed="isActiveLang(l)"
                  @click="setLocale(l)"
                >
                  {{ label(l) }}
                </button>
              </div>
            </nav>
          </Transition>
        </div>
      </div>
    </div>
  </header>
</template>
