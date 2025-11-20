<script setup>
import { ref, watchEffect } from 'vue'
import Accordion from '../partials/Accordion.vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

// Reaktivna struktura koja se puni iz i18n
const sections = ref({
  gettingStarted: { title: '', items: [] },
  profilePlans:  { title: '', items: [] },
  accounts:      { title: '', items: [] },
})

watchEffect(() => {
  // tm vraća objekte – pretvaramo u niz redosledom vrednosti
  const gs = tm('faqs02.sections.gettingStarted.items') || {}
  const pp = tm('faqs02.sections.profilePlans.items')  || {}
  const ac = tm('faqs02.sections.accounts.items')      || {}

  sections.value = {
    gettingStarted: {
      title: t('faqs02.sections.gettingStarted.title'),
      items: Object.values(gs),
    },
    profilePlans: {
      title: t('faqs02.sections.profilePlans.title'),
      items: Object.values(pp),
    },
    accounts: {
      title: t('faqs02.sections.accounts.title'),
      items: Object.values(ac),
    },
  }
})
</script>

<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pb-12 md:pb-20">
        <div class="max-w-3xl mx-auto space-y-12">
          <!-- Getting started -->
          <div>
            <h2 class="text-xl font-bold mb-5">
              {{ sections.gettingStarted.title }}
            </h2>
            <div class="space-y-2">
              <template v-for="(faq, index) in sections.gettingStarted.items" :key="'gs-' + index">
                <Accordion :title="faq.question" :id="`faqs-01-${index}`" :active="faq.active">
                  {{ faq.answer }}
                </Accordion>
              </template>
            </div>
          </div>

          <!-- Profile & plans -->
          <div>
            <h2 class="text-xl font-bold mb-5">
              {{ sections.profilePlans.title }}
            </h2>
            <div class="space-y-2">
              <template v-for="(faq, index) in sections.profilePlans.items" :key="'pp-' + index">
                <Accordion :title="faq.question" :id="`faqs-02-${index}`" :active="faq.active">
                  {{ faq.answer }}
                </Accordion>
              </template>
            </div>
          </div>

          <!-- Accounts -->
          <div>
            <h2 class="text-xl font-bold mb-5">
              {{ sections.accounts.title }}
            </h2>
            <div class="space-y-2">
              <template v-for="(faq, index) in sections.accounts.items" :key="'ac-' + index">
                <Accordion :title="faq.question" :id="`faqs-03-${index}`" :active="faq.active">
                  {{ faq.answer }}
                </Accordion>
              </template>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>
