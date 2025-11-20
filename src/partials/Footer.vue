<script setup>
import { useI18n } from 'vue-i18n'

const props = defineProps({ border: Boolean })

const { t } = useI18n()
const year = new Date().getFullYear()
</script>

<template>
  <footer>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <!-- Top area: Blocks -->
      <div
        class="grid sm:grid-cols-12 gap-10 py-8 md:py-12"
        :class="props.border ? 'border-t [border-image:linear-gradient(to_right,transparent,var(--color-slate-200),transparent)1]' : ''"
      >
        <!-- 1st block: logo + copy -->
        <div class="sm:col-span-12 lg:col-span-4 space-y-2">
          <div>
            <router-link class="inline-flex" to="/" :aria-label="t('footer.logoAria')">
              <img src="../images/profi_logo.png" alt="ProfiSajt.digital logo" class="h-16 w-auto" />
            </router-link>
          </div>
          <div class="text-sm text-gray-600">
            &copy; {{ year }} {{ t('footer.brand') }} — {{ t('footer.copyright') }}
          </div>
        </div>

        <!-- 2nd block: Services -->
        <div class="sm:col-span-6 md:col-span-3 lg:col-span-2 space-y-2">
          <h3 class="text-sm font-medium">{{ t('footer.sections.services.title') }}</h3>
          <ul class="text-sm space-y-2">
            <li>
              <router-link class="text-gray-600 hover:text-gray-900 transition" to="/services">
                {{ t('footer.sections.services.links.0') }}
              </router-link>
            </li>
            <li>
              <router-link class="text-gray-600 hover:text-gray-900 transition" to="/services">
                {{ t('footer.sections.services.links.1') }}
              </router-link>
            </li>
            <li>
              <router-link class="text-gray-600 hover:text-gray-900 transition" to="/services">
                {{ t('footer.sections.services.links.2') }}
              </router-link>
            </li>
            <li>
              <router-link class="text-gray-600 hover:text-gray-900 transition" to="/services">
                {{ t('footer.sections.services.links.3') }}
              </router-link>
            </li>
            <li>
              <router-link class="text-gray-600 hover:text-gray-900 transition" to="/services">
                {{ t('footer.sections.services.links.4') }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- 3rd block: Company -->
        <div class="sm:col-span-6 md:col-span-3 lg:col-span-2 space-y-2">
          <h3 class="text-sm font-medium">{{ t('footer.sections.company.title') }}</h3>
          <ul class="text-sm space-y-2">
            <!-- O nama -->
            <li>
              <router-link class="text-gray-600 hover:text-gray-900 transition" to="/about">
                {{ t('footer.sections.company.links.0') }}
              </router-link>
            </li>
            <!-- Projekti (detaljnija stranica iz partials/footer) -->
            <li>
              <router-link class="text-gray-600 hover:text-gray-900 transition" to="/projects-page">
                {{ t('footer.sections.company.links.1') }}
              </router-link>
            </li>
            <!-- Blog (detaljnija blog stranica iz partials/footer) -->
            <li>
              <router-link class="text-gray-600 hover:text-gray-900 transition" to="/blog-page">
                {{ t('footer.sections.company.links.2') }}
              </router-link>
            </li>
            <!-- Karijera – za sada placeholder (dok ne napravimo stranicu) -->
            <li>
              <router-link class="text-gray-600 hover:text-gray-900 transition" to="#0">
                {{ t('footer.sections.company.links.3') }}
              </router-link>
            </li>
          </ul>
        </div>


        <!-- 4th block: Legal -->
        <div class="sm:col-span-6 md:col-span-3 lg:col-span-2 space-y-2">
          <h3 class="text-sm font-medium">{{ t('footer.sections.legal.title') }}</h3>
          <ul class="text-sm space-y-2">
            <!-- Uslovi korišćenja -->
            <li>
              <router-link class="text-gray-600 hover:text-gray-900 transition" to="/terms">
                {{ t('footer.sections.legal.links.0') }}
              </router-link>
            </li>
            <!-- Politika privatnosti -->
            <li>
              <router-link class="text-gray-600 hover:text-gray-900 transition" to="/privacy">
                {{ t('footer.sections.legal.links.1') }}
              </router-link>
            </li>
            <!-- Politika kolačića -->
            <li>
              <router-link class="text-gray-600 hover:text-gray-900 transition" to="/cookies">
                {{ t('footer.sections.legal.links.2') }}
              </router-link>
            </li>
          </ul>
        </div>


        <!-- 5th block: Social -->
        <div class="sm:col-span-6 md:col-span-3 lg:col-span-2 space-y-2">
          <h3 class="text-sm font-medium">{{ t('footer.sections.social.title') }}</h3>
          <ul class="flex gap-3 items-center">
            <!-- LinkedIn -->
            <li>
              <a
                class="flex justify-center items-center transition hover:opacity-80"
                href="https://www.linkedin.com/in/radoje-bo%C5%BEi%C4%87-9b199930b/"
                :aria-label="t('footer.sections.social.linkedin')"
                target="_blank"
                rel="noopener"
              >
                <img src="../images/social/linkedin.png" alt="LinkedIn" class="w-8 h-8 object-contain" />
              </a>
            </li>

            <!-- Facebook -->
            <li>
              <a
                class="flex justify-center items-center transition hover:opacity-80"
                href="https://www.facebook.com/profile.php?id=61579459559619"
                :aria-label="t('footer.sections.social.facebook')"
                target="_blank"
                rel="noopener"
              >
                <img src="../images/social/facebook.png" alt="Facebook" class="w-8 h-8 object-contain" />
              </a>
            </li>

            <!-- Instagram -->
            <li>
              <a
                class="flex justify-center items-center transition hover:opacity-80"
                href="https://www.instagram.com/expressweb.2025/"
                :aria-label="t('footer.sections.social.instagram')"
                target="_blank"
                rel="noopener"
              >
                <img src="../images/social/instagram.png" alt="Instagram" class="w-8 h-8 object-contain" />
              </a>
            </li>

            <!-- GitHub -->
            <li>
              <a
                class="flex justify-center items-center transition hover:opacity-80"
                href="https://github.com/RadojeBozic"
                :aria-label="t('footer.sections.social.github')"
                target="_blank"
                rel="noopener"
              >
                <img src="../images/social/github.png" alt="GitHub" class="w-8 h-8 object-contain" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Big text -->
    <div class="relative -mt-16 h-60 w-full -z-10" aria-hidden="true">
      <div
        class="absolute left-1/2 pointer-events-none -z-10 -translate-x-1/2 text-[348px] leading-none text-center font-bold
               before:content-[attr(data-line1)] before:bg-linear-to-b before:from-gray-200 before:to-gray-100/30 before:to-80% before:text-transparent before:bg-clip-text
               after:content-[attr(data-line2)]  after:absolute after:inset-0 after:bg-gray-300/70 after:text-transparent after:bg-clip-text after:[text-shadow:0_1px_0_white] after:mix-blend-darken"
        :data-line1="t('footer.bigText.line1')"
        :data-line2="t('footer.bigText.line2')"
      />
      <div class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3" aria-hidden="true">
        <div class="w-56 h-56 rounded-full border-[20px] border-blue-700 blur-[80px]"></div>
      </div>
    </div>
  </footer>
</template>
