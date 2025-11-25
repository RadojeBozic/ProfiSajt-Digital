<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import Header from '../partials/Header.vue'
import Footer from '../partials/Footer.vue'

const { t } = useI18n()
const route = useRoute()

const form = ref({
  email: '',
  token: '',
  password: '',
  password_confirmation: '',
})

const loading = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

onMounted(() => {
  form.value.email = route.query.email || ''
  form.value.token = route.query.token || ''
})

const API_URL = 'https://api.profisajt.digital'

const onSubmit = async () => {
  loading.value = true
  successMessage.value = ''
  errorMessage.value = ''

  try {
    const response = await fetch(`${API_URL}/api/password/reset`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(form.value),
    })

    const data = await response.json()

    if (!response.ok) throw new Error(data.message)

    successMessage.value = 'Lozinka uspešno resetovana. Možete se prijaviti.'
  } catch (err) {
    errorMessage.value = err.message || 'Došlo je do greške.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <Header />
  <div class="max-w-md mx-auto py-16 mt-24 mb-12 px-4 bg-white rounded-2xl shadow-sm border border-slate-100">
    <h1 class="text-3xl font-bold mb-6">Reset Password</h1>

    <form @submit.prevent="onSubmit" class="space-y-4">
      <div>
        <label>Email</label>
        <input v-model="form.email" class="form-input w-full" type="email" readonly />
      </div>

      <div>
        <label>New Password</label>
        <input v-model="form.password" class="form-input w-full" type="password" required />
      </div>

      <div>
        <label>Confirm Password</label>
        <input v-model="form.password_confirmation" class="form-input w-full" type="password" required />
      </div>

      <button class="btn bg-blue-600 text-white w-full" :disabled="loading">
        {{ loading ? "Saving..." : "Reset Password" }}
      </button>

      <p v-if="successMessage" class="text-green-600 text-center">{{ successMessage }}</p>
      <p v-if="errorMessage" class="text-red-600 text-center">{{ errorMessage }}</p>
    </form>
  </div>

  
  <Footer />
</template>
