<script setup>
import Accordion from '../partials/Accordion.vue'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t, tm } = useI18n()

// tm vraća strukture; stavimo u computed da se menja sa jezikom
const faqs = computed(() => (tm('faqs.items') || []) )
</script>

<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pb-12 md:pb-20">
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 class="text-3xl md:text-4xl font-bold">
            {{ t('faqs.heading') }}
          </h2>
        </div>

        <div class="max-w-3xl mx-auto">
          <div class="space-y-2">
            <template v-for="(faq, index) in faqs" :key="index">
              <Accordion :title="faq.question" :id="`faqs-${index}`" :active="faq.active">
                {{ faq.answer }}
              </Accordion>
            </template>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
