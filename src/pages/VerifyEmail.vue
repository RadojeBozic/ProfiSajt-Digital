<!-- src/pages/VerifyEmail.vue -->
<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import Header from '../partials/Header.vue'
import Footer from '../partials/Footer.vue'

const { t } = useI18n()
const router = useRouter()

const API_URL = 'https://api.profisajt.digital'

const loading = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const resendVerification = async () => {
  loading.value = true
  successMessage.value = ''
  errorMessage.value = ''

  try {
    const response = await fetch(`${API_URL}/api/email/verification-notification`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      // važno: da bi Sanctum cookie išao uz request
      credentials: 'include',
    })

    const data = await response.json().catch(() => ({}))

    if (!response.ok) {
      throw new Error(data.message || 'Error')
    }

    successMessage.value = t('auth.verifyEmail.messages.resent')
  } catch (error) {
    console.error(error)
    errorMessage.value = t('auth.verifyEmail.messages.error')
  } finally {
    loading.value = false
  }
}

// opciono: dugme “Nazad na login”
const goToLogin = () => {
  router.push({ name: 'signin' })
}
</script>

<template>
  <Header />
  <div class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
    <main class="relative grow flex">
      <!-- Leva pozadinska dekoracija -->
      <div class="absolute left-0 -translate-x-1/3 bottom-0 pointer-events-none" aria-hidden="true">
        <div class="w-80 h-80 rounded-full bg-gradient-to-tr from-blue-500 opacity-70 blur-[160px] will-change-[filter]"></div>
      </div>

      <!-- Content -->

      <div class="w-full">
        <div class="h-full flex flex-col justify-center before:min-h-[4rem] md:before:min-h-[5rem] before:flex-1 after:flex-1">
          <div class="px-4 sm:px-6">
            <div class="w-full max-w-md mx-auto">
              <div class="py-16 md:py-20">
                <!-- Naslov -->
                <div class="mb-8 text-center">
                  <h1 class="text-3xl md:text-4xl font-bold mb-2">
                    {{ t('auth.verifyEmail.title') || 'Potvrdite email adresu' }}
                  </h1>
                  <p class="mt-2 text-sm text-gray-500">
                    {{
                      t('auth.verifyEmail.subtitle')
                      || 'Poslali smo vam verifikacioni link na vašu email adresu. Molimo proverite inbox (i spam folder).'
                    }}
                  </p>
                </div>

                <!-- Info box -->
                <div class="mb-6 rounded-xl border border-blue-100 bg-blue-50 px-4 py-3 text-sm text-blue-800">
                  {{ t('auth.verifyEmail.info') || 'Bez potvrde email adrese neke funkcije neće biti dostupne.' }}
                </div>

                <!-- Dugme: Pošalji ponovo -->
                <button
                  type="button"
                  class="btn text-white bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] hover:bg-[length:100%_150%] bg-[bottom] shadow w-full"
                  :disabled="loading"
                  @click="resendVerification"
                >
                  <span v-if="!loading">
                    {{ t('auth.verifyEmail.resendButton') || 'Pošalji verifikacioni email ponovo' }}
                  </span>
                  <span v-else>
                    {{ t('auth.verifyEmail.loading') || 'Slanje...' }}
                  </span>
                </button>

                <!-- Poruke -->
                <div class="mt-4 text-center">
                  <p v-if="successMessage" class="text-green-600 text-sm">
                    {{ successMessage }}
                  </p>
                  <p v-if="errorMessage" class="text-red-500 text-sm">
                    {{ errorMessage }}
                  </p>
                </div>

                <!-- Linkovi -->
                <div class="mt-8 text-center space-y-2 text-sm">
                  <p class="text-gray-500">
                    {{ t('auth.verifyEmail.notReceived') || 'Niste dobili email u roku od nekoliko minuta?' }}
                  </p>
                  <button
                    type="button"
                    class="text-blue-600 hover:text-blue-700 underline hover:no-underline"
                    @click="resendVerification"
                  >
                    {{ t('auth.verifyEmail.resendLink') || 'Kliknite ovde da pokušate ponovo.' }}
                  </button>

                  <div class="mt-4">
                    <button
                      type="button"
                      class="text-gray-600 hover:text-gray-800 underline hover:no-underline"
                      @click="goToLogin"
                    >
                      {{ t('auth.verifyEmail.backToLogin') || 'Nazad na prijavu' }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right side -->
      <div class="hidden relative lg:block shrink-0 w-[572px] my-6 mr-6 rounded-2xl overflow-hidden">
        <!-- Background -->
        <div
          class="bg-blue-50 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 -ml-24 pointer-events-none -z-10"
          aria-hidden="true">
          <img src="../images/auth-bg.svg" class="max-w-none" width="1285" height="1684" alt="Auth bg">
        </div>
        <!-- Illustration -->
        <div class="absolute top-1/2 -translate-y-1/2 left-32 w-[500px]">
          <div class="w-full aspect-video bg-gray-900 rounded-2xl px-5 py-3 shadow-xl transition duration-300">
            <div
              class="relative flex items-center justify-between before:block before:w-[41px] before:h-[9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,var(--color-gray-600)_4.5px,_transparent_0)] before:bg-[length:16px_9px] after:w-[41px] mb-8">
              <span class="text-white font-medium text-[13px]">profisajt.digital</span>
            </div>
            <div class="text-gray-500 font-mono [&amp;_span]:opacity-0 text-sm transition duration-300">
              <span class="text-gray-200 animate-[code-1_10s_infinite]">Sigurna prijava</span> <span
                class="animate-[code-2_10s_infinite]">--Verifikujemo vašu email adresu…</span><br>
              <span class="animate-[code-3_10s_infinite]">⇢ Šaljemo siguran link</span> <span
                class="animate-[code-4_10s_infinite]">⇢ Čuvamo vaše podatke</span><br><br>
              <span class="text-gray-200 animate-[code-5_10s_infinite]">Bezbednost na prvom mestu</span><br>
              <span class="animate-[code-6_10s_infinite]">ProFi Sajt · Secure Login System</span>
            </div>
          </div>
        </div>
      </div>
      

        
    </main>
  </div>
  <Footer />
</template>

