<template>
  <div
    class="w-full h-full rounded-full pointer-events-none"
    :style="{
      background: 'radial-gradient(circle, rgba(59,130,246,0.10) 0%, rgba(59,130,246,0.03) 45%, transparent 70%)',
      filter: 'blur(24px)' // manji blur, suptilan
    }"
    aria-hidden="true"
  />
</template>

<script setup>
// Minimalni glow, bez pozicioniranja.
// Pozicioniranje (top, left, transform) rešava parent u LargeTestimonial.vue
</script>