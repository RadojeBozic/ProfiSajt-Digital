<!-- src/pages/VerifyEmailSuccess.vue -->
<script setup>
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import Header from '../partials/Header.vue'
import Footer from '../partials/Footer.vue'

const router = useRouter()
const { t } = useI18n()

const goToLogin = () => {
  router.push({ name: 'signin' })
}
</script>

<template>
  <Header />
  <div class="flex flex-col min-h-screen justify-center items-center bg-slate-50 px-4 mt-24 mb-12">
    <div class="max-w-md w-full bg-white rounded-2xl shadow-sm border border-slate-100 p-8 text-center">
      <div class="mx-auto mb-4 h-14 w-14 rounded-full bg-emerald-50 flex items-center justify-center">
        <span class="text-2xl">✅</span>
      </div>

      <h1 class="text-2xl md:text-3xl font-bold mb-2">
        {{ t('auth.verifyEmail.successTitle') || 'Email uspešno verifikovan' }}
      </h1>
      <p class="text-sm text-gray-500 mb-6">
        {{ t('auth.verifyEmail.successText') || 'Vaš nalog je sada aktivan. Možete da se prijavite i koristite sve funkcionalnosti sistema.' }}
      </p>

      <!-- <button
        type="button"
        class="btn text-white bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] hover:bg-[length:100%_150%] bg-[bottom] shadow w-full"
        @click="goToLogin"
      >
        {{ t('auth.verifyEmail.goToLogin') || 'Nastavi na prijavu' }}
      </button> -->
      <RouterLink
        to="/signin"
        class="w-full sm:w-auto inline-flex justify-center items-center px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
      >
        {{ t('auth.verifyEmail.goToLogin') || 'Nastavi na prijavu' }}
      </RouterLink>
    </div>
    <Footer />
  </div>
</template>
