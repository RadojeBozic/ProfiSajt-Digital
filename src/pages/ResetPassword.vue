<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Header from '../partials/Header.vue'
import Footer from '../partials/Footer.vue'

const { t } = useI18n()

const form = ref({
  email: '',
})

// ❗ Mora biti definisano
const loading = ref(false)
const errorMessage = ref('')
const successMessage = ref('')

const API_URL = 'https://api.profisajt.digital'

const onSubmit = async () => {
  loading.value = true
  errorMessage.value = ''
  successMessage.value = ''

  try {
    const response = await fetch(`${API_URL}/api/password/email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        email: form.value.email,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || 'Error')
    }

    // može i successMessage.value = data.message
    successMessage.value = t('auth.reset.messages.success')
  } catch (error) {
    console.error(error)
    errorMessage.value = t('auth.reset.messages.error')
  } finally {
    loading.value = false
  }
}
</script>


<template>
  <Header />
  <div class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">

    <main class="relative grow flex">

      <!-- Leva pozadinska dekoracija -->
      <div class="absolute left-0 -translate-x-1/3 bottom-0 pointer-events-none" aria-hidden="true">
        <div
          class="w-80 h-80 rounded-full bg-gradient-to-tr from-blue-500 opacity-70 blur-[160px] will-change-[filter]">
        </div>
      </div>

      <!-- Content -->
      <div class="w-full">
        <div
          class="h-full flex flex-col justify-center before:min-h-[4rem] md:before:min-h-[5rem] before:flex-1 after:flex-1">

          <div class="px-4 sm:px-6">
            <div class="w-full max-w-sm mx-auto">
              <div class="py-16 md:py-20">

                <!-- Naslov -->
                <div class="mb-10">
                  <h1 class="text-4xl font-bold">
                    {{ t('auth.reset.title') }}
                  </h1>
                  <p class="mt-2 text-sm text-gray-500">
                    {{ t('auth.reset.subtitle') }}
                  </p>
                </div>

                <!-- Form -->
                <form @submit.prevent="onSubmit">
                  <div class="space-y-4">
                    <div>
                      <label
                        class="block text-sm text-gray-700 font-medium mb-1"
                        for="email"
                      >
                        {{ t('auth.reset.email') }}
                      </label>
                      <input
                        id="email"
                        v-model="form.email"
                        class="form-input py-2 w-full"
                        type="email"
                        :placeholder="t('auth.reset.placeholders.email')"
                        required
                      />
                    </div>
                  </div>

                  <div class="mt-6">
                    <button
                      type="submit"
                      class="btn text-white bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] hover:bg-[length:100%_150%] bg-[bottom] shadow w-full"
                      :disabled="loading"
                    >
                      <span v-if="!loading">{{ t('auth.reset.button') }}</span>
                      <span v-else>{{ t('auth.reset.loading') }}</span>
                    </button>
                  </div>

                  <!-- Poruke -->
                  <div class="mt-4 text-center">
                    <p v-if="errorMessage" class="text-red-500 text-sm">{{ errorMessage }}</p>
                    <p v-if="successMessage" class="text-green-500 text-sm">{{ successMessage }}</p>
                  </div>
                </form>

                <!-- Link za povratak na login -->
                <div class="text-center mt-6">
                  <router-link
                    class="text-sm text-gray-700 underline hover:no-underline"
                    to="/signin"
                  >
                    {{ t('auth.reset.backToLogin') }}
                  </router-link>
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
              <span class="text-gray-200 animate-[code-1_10s_infinite]">Bezbedan oporavak lozinke</span><br><br>
              <span class="animate-[code-2_10s_infinite]">--Obezbedili smo siguran mehanizam za resetovanje lozinke;</span><br><br>
              <span class="animate-[code-3_10s_infinite]">--Ako nalog sa unetom email adresom postoji, poslaćemo Vam link za oporavak lozinke;</span><br><br> 
                 <span class="animate-[code-4_10s_infinite]">--Pratite uputstva u email-u koji ćete dobiti;</span><br><br>
              <span class="text-gray-200 animate-[code-5_10s_infinite]">ProFi Sajt · Secure Login System</span><br>
              <span class="animate-[code-6_10s_infinite]">Bezbednost na prvom mestu</span>
            </div>
          </div>
        </div>
      </div>

      
    </main>

  </div>
  <Footer />
</template>
