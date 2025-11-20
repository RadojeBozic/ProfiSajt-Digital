<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

// EDIT: po potrebi podesi koordinate (lat, lon) i zoom
const lat = 44.8008
const lon = 20.5201
const zoom = 16

const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${lon-0.01}%2C${lat-0.01}%2C${lon+0.01}%2C${lat+0.01}&layer=mapnik&marker=${lat}%2C${lon}`
</script>

<template>
  <div class="p-5 rounded-2xl bg-white shadow-sm border border-gray-100">
    <h2 class="text-base font-semibold mb-2">{{ t('contact.company') }}</h2>

    <div class="text-sm text-gray-700 space-y-3">
      <div>
        <div class="font-medium">{{ t('contact.addressLabel') }}</div>
        <div>{{ t('contact.address') }}</div>
      </div>
      <div>
        <div class="font-medium">{{ t('contact.emailLabel') }}</div>
        <div>
          <a class="hover:underline" :href="`mailto:${t('contact.email')}`">{{ t('contact.email') }}</a>
        </div>
      </div>
      <div>
        <div class="font-medium">{{ t('contact.phoneLabel') }}</div>
        <div>
          <a class="hover:underline" :href="`tel:${t('contact.phone')}`">{{ t('contact.phone') }}</a>
        </div>
      </div>
    </div>

    <!-- Mapa -->
    <div class="mt-4 rounded-xl overflow-hidden border border-gray-100">
      <iframe
        :src="mapSrc"
        style="border:0;"
        class="w-full aspect-video"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div class="px-3 py-2 bg-gray-50 text-xs text-gray-600">
        <a
          :href="`https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=${zoom}/${lat}/${lon}`"
          target="_blank"
          rel="noopener"
          class="hover:underline"
        >Open in OpenStreetMap</a>
      </div>
    </div>
  </div>
</template>
