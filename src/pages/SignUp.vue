<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const form = ref({
  name: '',
  email: '',
  phone: '',
  password: '',
})

const loading = ref(false)
const errorMessage = ref('')
const successMessage = ref('')

// Baza za API – čita iz Vite .env, fallback je direktan URL
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://api.profisajt.digital/api'
const REGISTER_URL = `${API_BASE_URL.replace(/\/$/, '')}/register`

const onSubmit = async () => {
  loading.value = true
  errorMessage.value = ''
  successMessage.value = ''

  try {
    const res = await fetch(REGISTER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(form.value),
    })

    const data = await res.json().catch(() => null)

    if (!res.ok) {
      throw new Error(data?.message || 'Registration failed.')
    }

    successMessage.value = t('auth.signup.messages.success')
    form.value = { name: '', email: '', phone: '', password: '' }
  } catch (error) {
    errorMessage.value = error.message || 'Došlo je do greške pri registraciji.'
  } finally {
    loading.value = false
  }
}
</script>


<template>
  <div class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">

    <!-- Site header -->
    <header class="absolute w-full z-30">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="flex items-center justify-between h-16 md:h-20">

          <!-- Site branding -->
          <div class="shrink-0 mr-4">
            <!-- Logo -->
            <router-link class="inline-flex" to="/" :aria-label="t('footer.logoAria')">
              <img src="../images/profi_logo.png" alt="ProfiSajt.digital logo" class="h-16 w-auto" />
            </router-link>
          </div>

        </div>
      </div>
    </header>

    <main class="relative grow flex">

      <div class="absolute left-0 -translate-x-1/3 bottom-0 pointer-events-none" aria-hidden="true">
        <div class="w-80 h-80 rounded-full bg-gradient-to-tr from-blue-500 opacity-70 blur-[160px] will-change-[filter]"></div>
      </div>

      <!-- Content -->
      <div class="w-full">

        <div
          class="h-full flex flex-col justify-center before:min-h-[4rem] md:before:min-h-[5rem] before:flex-1 after:flex-1">

          <div class="px-4 sm:px-6">
            <div class="w-full max-w-sm mx-auto">
              <div class="py-16 md:py-20">

                <div class="mb-10">
                  <h1 class="text-4xl font-bold">{{ t('auth.signup.title') }}</h1>
                </div>

                <!-- Form -->
                <form @submit.prevent="onSubmit">
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm text-gray-700 font-medium mb-1" for="name">
                      {{ t('auth.signup.fullName') }}
                    </label>
                    <input
                      id="name"
                      v-model="form.name"
                      class="form-input py-2 w-full"
                      type="text"
                      :placeholder="t('auth.signup.placeholders.fullName')"
                      required
                    />
                  </div>

                  <div>
                    <label class="block text-sm text-gray-700 font-medium mb-1" for="email">
                      {{ t('auth.signup.email') }}
                    </label>
                    <input
                      id="email"
                      v-model="form.email"
                      class="form-input py-2 w-full"
                      type="email"
                      :placeholder="t('auth.signup.placeholders.email')"
                      required
                    />
                  </div>

                  <div>
                    <label class="block text-sm text-gray-700 font-medium mb-1" for="phone">
                      {{ t('auth.signup.phone') }}
                    </label>
                    <input
                      id="phone"
                      v-model="form.phone"
                      class="form-input py-2 w-full"
                      type="text"
                      :placeholder="t('auth.signup.placeholders.phone')"
                    />
                  </div>

                  <div>
                    <label class="block text-sm text-gray-700 font-medium mb-1" for="password">
                      {{ t('auth.signup.password') }}
                    </label>
                    <input
                      id="password"
                      v-model="form.password"
                      class="form-input py-2 w-full"
                      type="password"
                      autocomplete="on"
                      :placeholder="t('auth.signup.placeholders.password')"
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
                    <span v-if="!loading">{{ t('auth.signup.registerButton') }}</span>
                    <span v-else>{{ t('auth.signup.loading') }}</span>
                  </button>

                  <div class="italic text-sm text-gray-400 text-center">
                    {{ t('auth.signup.or') }}
                  </div>

                  <button
                    type="button"
                    class="btn text-white bg-gradient-to-t from-gray-900 to-gray-700 bg-[length:100%_100%] hover:bg-[length:100%_150%] bg-[bottom] shadow w-full"
                  >
                    {{ t('auth.signup.googleButton') }}
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
                  <p class="text-sm text-gray-500">
                    {{ t('auth.signup.terms.prefix') }}
                    <router-link
                      class="font-medium text-gray-700 underline hover:no-underline whitespace-nowrap"
                      to="/terms"
                    >
                      {{ t('auth.signup.terms.tos') }}
                    </router-link>

                    {{ t('auth.signup.terms.and') }}

                    <router-link
                      class="font-medium text-gray-700 underline hover:no-underline whitespace-nowrap"
                      to="/privacy"
                    >
                      {{ t('auth.signup.terms.privacy') }}
                    </router-link>.
                  </p>
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
              <span class="text-gray-200 animate-[code-1_10s_infinite]">npm login</span> <span
                class="animate-[code-2_10s_infinite]">--registry=https://npm.pkg.github.com</span><br>
              <span class="animate-[code-3_10s_infinite]">--scope=@phanatic</span> <span
                class="animate-[code-4_10s_infinite]">Successfully logged-in.</span><br><br>
              <span class="text-gray-200 animate-[code-5_10s_infinite]">npm publish</span><br>
              <span class="animate-[code-6_10s_infinite]">Package published.</span>
            </div>
          </div>
        </div>
      </div>

    </main>

  </div>
</template>