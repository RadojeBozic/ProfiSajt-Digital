import { ref } from "vue"

export function useAuth() {
  const user = ref(JSON.parse(localStorage.getItem("ps_user")))
  const token = ref(localStorage.getItem("ps_token"))

  const isLoggedIn = () => !!token.value

  const logout = () => {
    localStorage.removeItem("ps_token")
    localStorage.removeItem("ps_user")
    user.value = null
    token.value = null
  }

  return {
    user,
    token,
    isLoggedIn,
    logout,
  }
}
