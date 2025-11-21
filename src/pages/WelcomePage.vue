<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '../composables/useAuth'
import { useI18n } from 'vue-i18n'
import Header from '../partials/Header.vue'
import Footer from '../partials/Footer.vue'

const { t } = useI18n()
const router = useRouter()
const { user, isAuthenticated, logout } = useAuth()

const displayName = computed(() => user.value?.name || user.value?.email || 'Korisniče')
</script>

<template>
  <div class="flex flex-col min-h-screen bg-slate-50">
    <Header />
    <!-- Navbar je globalan u App.vue, ovde krećemo od main dela -->
    <main class="flex-1">
      <section class="py-16 md:py-24">
        <div class="max-w-5xl mx-auto px-4 sm:px-6">
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
            <p class="text-sm text-gray-400 mb-2">
              {{ t('welcomePage.hello') }}
            </p>
            <h1 class="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              {{ t('welcomePage.title') }}
              <span class="text-blue-600"> {{ displayName }} </span>
            </h1>
            <p class="text-gray-600 max-w-2xl mb-6">
              {{ t('welcomePage.subtitle') }}
            </p>

            <!-- CTA dugmad -->
            <div class="flex flex-wrap gap-3 mb-8">
              <router-link
                to="/contact"
                class="inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-medium
                       text-white bg-blue-600 hover:bg-blue-700 shadow-sm"
              >
                {{ t('welcomePage.cta.contact') }}
              </router-link>

              <router-link
                to="/"
                class="inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-medium
                       text-blue-600 bg-blue-50 hover:bg-blue-100"
              >
                {{ t('welcomePage.cta.explore') }}
              </router-link>
            </div>

            <!-- Sekcija "šta sledi" -->
            <div class="grid gap-6 md:grid-cols-3">
              <div class="p-4 rounded-xl border border-gray-100 bg-slate-50/60">
                <h3 class="text-sm font-semibold mb-1">
                  {{ t('welcomePage.cards.profile.title') }}
                </h3>
                <p class="text-xs text-gray-500">
                  {{ t('welcomePage.cards.profile.text') }}
                </p>
              </div>
              <div class="p-4 rounded-xl border border-gray-100 bg-slate-50/60">
                <h3 class="text-sm font-semibold mb-1">
                  {{ t('welcomePage.cards.activity.title') }}
                </h3>
                <p class="text-xs text-gray-500">
                  {{ t('welcomePage.cards.activity.text') }}
                </p>
              </div>
              <div class="p-4 rounded-xl border border-gray-100 bg-slate-50/60">
                <h3 class="text-sm font-semibold mb-1">
                  {{ t('welcomePage.cards.security.title') }}
                </h3>
                <p class="text-xs text-gray-500">
                  {{ t('welcomePage.cards.security.text') }}
                </p>
              </div>
            </div>

            <!-- Akcije naloga -->
            <div class="mt-10 pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
              <div class="text-xs text-gray-500">
                <span v-if="isAuthenticated">
                  {{ t('welcomePage.account.loggedInAs') }} {{ user?.email }}
                </span>
              </div>

              <div class="flex flex-wrap gap-3">
                <button
                  type="button"
                  class="text-xs text-gray-600 hover:text-red-500"
                  @click="logout(router)"
                >
                  {{ t('welcomePage.account.logout') }}
                </button>

                <!-- Placeholder za buduće brisanje naloga -->
                <button
                  type="button"
                  class="text-xs text-gray-400 hover:text-red-600 hover:underline"
                  disabled
                  title="Biće dostupno u jednoj od narednih verzija"
                >
                  {{ t('welcomePage.account.deleteDisabled') }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer – možeš ubaciti svoj postojeći -->
    <!-- <footer class="border-t border-gray-100 py-6 text-center text-xs text-gray-400">
      © {{ new Date().getFullYear() }} ProfiSajt.digital · Express Web
    </footer> -->
    <Footer />
  </div>
</template>
