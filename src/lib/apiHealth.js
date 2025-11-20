const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://api.profisajt.digital/api'

export async function checkApiHealth() {
  try {
    const res = await fetch(`${API_BASE_URL.replace(/\/$/, '')}/health`)
    return res.ok
  } catch {
    return false
  }
}