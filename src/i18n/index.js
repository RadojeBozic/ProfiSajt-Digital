import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import sr from './locales/sr.json'

function getStartingLocale() {
  const saved = localStorage.getItem('lang')
  if (saved) return saved
  const nav = (navigator.language || 'en').toLowerCase()
  return nav.startsWith('sr') ? 'sr' : 'en'
}

export const i18n = createI18n({
  legacy: false,
  locale: getStartingLocale(),
  fallbackLocale: 'en',
  messages: { en, sr },
})

export function setLocale(lang) {
  i18n.global.locale.value = lang
  localStorage.setItem('lang', lang)
  document.documentElement.setAttribute('lang', lang === 'sr' ? 'sr' : 'en')
}
