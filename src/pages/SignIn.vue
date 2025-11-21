<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useAuth } from '../composables/useAuth'

const { t } = useI18n()
const router = useRouter()
const { setAuth } = useAuth()

const form = ref({
  email: '',
  password: '',
})

const loading = ref(false)
const errorMessage = ref('')

const API_BASE_URL =
  import.meta.env.VITE_API_URL || 'https://api.profisajt.digital/api'
const LOGIN_URL = `${API_BASE_URL.replace(/\/$/, '')}/login`

const onSubmit = async () => {
  loading.value = true
  errorMessage.value = ''

  try {
    const res = await fetch(LOGIN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        email: form.value.email,
        password: form.value.password,
      }),
    })

    const data = await res.json()

    if (!res.ok) {
      throw new Error(data?.message || t('auth.login.messages.error'))
    }

    // backend vraća: { message, token, user }
    setAuth(data.user, data.token)

    // redirect na Welcome stranicu
    router.push('/welcome')
  } catch (error) {
    errorMessage.value = error.message
  } finally {
    loading.value = false
  }
}
</script>




<template>
  <div class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">

    <main class="relative grow flex">

      <!-- Leva pozadinska dekoracija -->
      <div class="absolute left-0 -translate-x-1/3 bottom-0 pointer-events-none" aria-hidden="true">
        <div class="w-80 h-80 rounded-full bg-gradient-to-tr from-blue-500 opacity-70 blur-[160px] will-change-[filter]"></div>
      </div>

      <!-- Sadržaj -->
      <div class="w-full">
        <div class="h-full flex flex-col justify-center before:min-h-[4rem] md:before:min-h-[5rem] before:flex-1 after:flex-1">

          <div class="px-4 sm:px-6">
            <div class="w-full max-w-sm mx-auto">
              <div class="py-16 md:py-20">

               
                <!-- Naslov -->
                <div class="mb-10">
                  <h1 class="text-4xl font-bold">
                    {{ t('auth.signin.title') }}
                  </h1>
                </div>

                <!-- Forma -->
                <form @submit.prevent="onSubmit">
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm text-gray-700 font-medium mb-1" for="email">
                      {{ t('auth.signin.email') }}
                    </label>
                    <input
                      id="email"
                      v-model="form.email"
                      class="form-input py-2 w-full"
                      type="email"
                      :placeholder="t('auth.signin.placeholders.email')"
                      required
                    />
                  </div>

                  <div>
                    <label class="block text-sm text-gray-700 font-medium mb-1" for="password">
                      {{ t('auth.signin.password') }}
                    </label>
                    <input
                      id="password"
                      v-model="form.password"
                      class="form-input py-2 w-full"
                      type="password"
                      autocomplete="on"
                      :placeholder="t('auth.signin.placeholders.password')"
                      required
                    />
                  </div>
                </div>

                <div class="space-y-3 mt-6">
                  <button
                    type="submit"
                    class="btn text-white bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] hover:bg-[length:100%_150%] bg-[bottom] shadow w-full"
                    :disabled="loading"
                  >
                    <span v-if="!loading">{{ t('auth.signin.loginButton') }}</span>
                    <span v-else>{{ t('auth.signin.loading') }}</span>
                  </button>
                </div>

                <div class="mt-4 space-y-1" v-if="errorMessage">
                  <p class="text-sm text-red-500 text-center">{{ errorMessage }}</p>
                </div>
                <div class="mt-4 space-y-1" v-if="successMessage">
                  <p class="text-sm text-green-500 text-center">{{ successMessage }}</p>
                </div>
              </form>


                <!-- Bottom link -->
                <div class="text-center mt-6">
                  <router-link class="text-sm text-gray-700 underline hover:no-underline" to="/reset-password">
                    {{ t('auth.signin.forgot') }}
                  </router-link>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- Desna ilustracija -->
      <div class="hidden relative lg:block shrink-0 w-[572px] my-6 mr-6 rounded-2xl overflow-hidden">
        <div
          class="bg-blue-50 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 -ml-24 pointer-events-none -z-10">
          <img src="../images/auth-bg.svg" class="max-w-none" width="1285" height="1684" alt="Auth bg" />
        </div>

        <div class="absolute top-1/2 -translate-y-1/2 left-32 w-[500px]">
          <div class="w-full aspect-video bg-gray-900 rounded-2xl px-5 py-3 shadow-xl transition duration-300">
            <div
              class="relative flex items-center justify-between before:block before:w-[41px] before:h-[9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,var(--color-gray-600)_4.5px,_transparent_0)] before:bg-[length:16px_9px] after:w-[41px] mb-8">
              <span class="text-white font-medium text-[13px]">profisajt.digital</span>
            </div>

            <div class="text-gray-500 font-mono text-sm transition duration-300">
              <!-- dekorativni tekst -->
              <span class="text-gray-200">npm login</span> <span>--registry=https://npm.pkg.github.com</span><br>
              <span>--scope=@phanatic</span> <span>Successfully logged-in.</span><br><br>
              <span class="text-gray-200">npm publish</span><br>
              <span>Package published.</span>
            </div>

          </div>
        </div>

      </div>

    </main>

  </div>
</template>
