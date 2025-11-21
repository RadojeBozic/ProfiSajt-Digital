// src/composables/useAuth.js
import { ref, computed } from 'vue'

const API_BASE_URL =
  import.meta.env.VITE_API_URL || 'https://api.profisajt.digital/api'

// globalni reactive state (deljen između komponenti)
const user = ref(
  localStorage.getItem('ps_user')
    ? JSON.parse(localStorage.getItem('ps_user'))
    : null
)

const token = ref(localStorage.getItem('ps_token') || null)

const isAuthenticated = computed(() => !!token.value)

function setAuth(newUser, newToken) {
  user.value = newUser
  token.value = newToken

  if (newUser) {
    localStorage.setItem('ps_user', JSON.stringify(newUser))
  } else {
    localStorage.removeItem('ps_user')
  }

  if (newToken) {
    localStorage.setItem('ps_token', newToken)
  } else {
    localStorage.removeItem('ps_token')
  }
}

async function logout(router) {
  try {
    if (token.value) {
      await fetch(`${API_BASE_URL.replace(/\/$/, '')}/logout`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token.value}`,
        },
      })
    }
  } catch (e) {
    // ako backend ne odgovori, svejedno ćemo očistiti local state
    console.error('Logout error:', e)
  } finally {
    setAuth(null, null)
    if (router) {
      router.push('/')
    }
  }
}

export function useAuth() {
  return {
    user,
    token,
    isAuthenticated,
    setAuth,
    logout,
  }
}
