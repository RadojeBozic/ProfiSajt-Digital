<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

// Baza za API – čita iz Vite .env, fallback je direktan URL
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://api.profisajt.digital/api'

// Konačan endpoint za kontakt formu
const API_URL = `${API_BASE_URL.replace(/\/$/, '')}/contact`

const form = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  // Honeypot:
  company: ''
})

const agree = ref(false)
const loading = ref(false)
const success = ref(false)
const errorMsg = ref('')

// Minimalna validacija
const isEmail = (v) => /\S+@\S+\.\S+/.test(v)
const invalid = computed(() => {
  return (
    !form.value.name ||
    !isEmail(form.value.email) ||
    !form.value.message ||
    !agree.value
  )
})

const submit = async () => {
  errorMsg.value = ''
  success.value = false

  // Ako je honeypot popunjen — prekini (bot)
  if (form.value.company) {
    errorMsg.value = 'Spam detected.'
    return
  }

  try {
    loading.value = true

  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      name: form.value.name,
      email: form.value.email,
      phone: form.value.phone || null,
      subject: form.value.subject || 'Kontakt sa sajta',
      message: form.value.message,
    }),
  })



    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      throw new Error(data?.message || 'Server error')
    }

    success.value = true
    form.value = { name: '', email: '', phone: '', subject: '', message: '', company: '' }
    agree.value = false
  } catch (e) {
    errorMsg.value = e.message || 'Došlo je do greške. Pokušajte ponovo.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="p-6 rounded-2xl bg-white shadow-sm border border-gray-100">
    <h2 class="text-base font-semibold mb-4">{{ t('contact.formTitle') }}</h2>

    <form @submit.prevent="submit" class="space-y-4">
      <div class="grid md:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium mb-1" for="name">{{ t('contact.name') }}</label>
          <input id="name" v-model.trim="form.name" type="text" class="form-input w-full" autocomplete="name" />
        </div>

        <div>
          <label class="block text-sm font-medium mb-1" for="email">{{ t('contact.yourEmail') }}</label>
          <input id="email" v-model.trim="form.email" type="email" class="form-input w-full" autocomplete="email" />
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium mb-1" for="phone">Telefon (opciono)</label>
          <input id="phone" v-model.trim="form.phone" type="tel" class="form-input w-full" autocomplete="tel" />
        </div>

        <div>
          <label class="block text-sm font-medium mb-1" for="subject">Naslov (opciono)</label>
          <input id="subject" v-model.trim="form.subject" type="text" class="form-input w-full" />
        </div>
      </div>

      <div>
        <label class="block text-sm font-medium mb-1" for="message">{{ t('contact.message') }}</label>
        <textarea id="message" v-model.trim="form.message" rows="6" class="form-textarea w-full"></textarea>
      </div>

      <!-- Honeypot -->
      <div class="hidden">
        <label>Company</label>
        <input v-model="form.company" type="text" tabindex="-1" autocomplete="off" />
      </div>

      <!-- Agree -->
      <label class="inline-flex items-start gap-2 text-sm text-gray-600">
        <input type="checkbox" v-model="agree" class="form-checkbox mt-1" />
        <span>
          Saglasan/saglasna sam da moji podaci budu korišćeni isključivo za kontakt.
        </span>
      </label>

      <!-- reCAPTCHA hook (opciono) -->
      <!-- <div class="mt-2">Ovde ubaci reCAPTCHA widget/token</div> -->

      <div class="flex items-center gap-3">
        <button
          type="submit"
          class="btn-sm text-white bg-gray-800 hover:bg-gray-900 shadow-sm disabled:opacity-60"
          :disabled="loading || invalid"
        >
          {{ loading ? '...' : t('contact.send') }}
        </button>

        <p v-if="success" class="text-sm text-green-600">Poruka je uspešno poslata.</p>
        <p v-if="errorMsg" class="text-sm text-red-600">{{ errorMsg }}</p>
      </div>
    </form>
  </div>
</template>
