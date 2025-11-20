<script setup>
import PageIllustration from "./PageIllustration.vue"
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="relative">
    <PageIllustration />

    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex justify-between pt-32 pb-12 md:pt-40 md:pb-20">
        <!-- Left content -->
        <div class="max-w-3xl">
          <article>
            <!-- Section header -->
            <header class="pb-8">
              <div class="mb-6">
                <router-link
                  class="text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors"
                  to="/blog"
                >
                  <span class="tracking-normal text-blue-300">&lt;-</span>
                  {{ t('postSingle.backToBlog') }}
                </router-link>
              </div>
              <h1 class="text-5xl font-bold mb-5">
                {{ t('postSingle.title') }}
              </h1>
              <div class="flex items-center gap-3">
                <img class="rounded-full" src="../images/blog-author-01.jpg" width="32" height="32" alt="Author 01" />
                <div class="text-sm text-gray-500">
                  {{ t('postSingle.author') }} ·
                  <span class="text-gray-700">{{ t('postSingle.date') }}</span>
                </div>
              </div>
            </header>

            <div
              class="prose text-gray-700 max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-a:font-medium prose-a:text-blue-500 prose-a:no-underline hover:prose-a:underline prose-strong:font-medium prose-strong:text-gray-900 prose-code:font-mono prose-code:text-gray-900 prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-[''] prose-code:after:content-[''] prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-700 prose-headings:scroll-mt-24 prose-blockquote:pl-4 prose-blockquote:xl:-ml-4 prose-blockquote:border-l-2 prose-blockquote:border-gray-300 prose-blockquote:font-medium prose-blockquote:text-gray-900 prose-blockquote:italic"
            >
              <p>{{ t('postSingle.p1') }}</p>
              <p>{{ t('postSingle.p2') }}</p>

              <!-- The data-scrollspy-target attribute makes the scrollspy work -->
              <h2 data-scrollspy-target id="serverless">{{ t('postSingle.h2_serverless') }}</h2>
              <p>{{ t('postSingle.p3') }}</p>
              <p v-html="t('postSingle.p4_html')"></p>

              <blockquote>
                <p>{{ t('postSingle.quote') }}</p>
              </blockquote>

              <p v-html="t('postSingle.p5_html')"></p>

              <!-- The data-scrollspy-target attribute makes the scrollspy work -->
              <h2 data-scrollspy-target id="benefits">{{ t('postSingle.h2_benefits') }}</h2>
              <ol>
                <li v-html="t('postSingle.benefit1_html')"></li>
                <li v-html="t('postSingle.benefit2_html')"></li>
                <li v-html="t('postSingle.benefit3_html')"></li>
              </ol>

              <!-- The data-scrollspy-target attribute makes the scrollspy work -->
              <h2 data-scrollspy-target id="guide">{{ t('postSingle.h2_guide') }}</h2>
              <p v-html="t('postSingle.p6_html')"></p>
              <p>{{ t('postSingle.p7') }}</p>

              <!-- The data-scrollspy-target attribute makes the scrollspy work -->
              <h2 data-scrollspy-target id="conclusion">{{ t('postSingle.h2_conclusion') }}</h2>
              <p v-html="t('postSingle.p8_html')"></p>
            </div>
          </article>

          <!-- Newsletter form -->
          <div class="text-center md:text-left mt-10 pt-10 border-t border-gray-200">
            <h3 class="text-lg font-bold mb-6 md:mb-8">
              {{ t('postSingle.newsletter.heading') }}
            </h3>
            <form>
              <div class="flex flex-col sm:flex-row justify-center md:justify-start max-w-sm mx-auto sm:max-w-none">
                <div class="relative flex mb-2 sm:mb-0 sm:mr-2 sm:min-w-[340px]">
                  <div class="absolute h-full w-10 flex items-center justify-center pointer-events-none">
                    <svg class="fill-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="none">
                      <path d="M14 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm0 12H2V5.723l5.504 3.145a.998.998 0 0 0 .992 0L14 5.723V12Zm0-8.58L8 6.849 2 3.42V2h12v1.42Z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    class="form-input w-full pl-10"
                    :placeholder="t('postSingle.newsletter.placeholder')"
                    :aria-label="t('postSingle.newsletter.placeholder')"
                  />
                </div>
                <button
                  class="btn text-white bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] hover:bg-[length:100%_150%] bg-[bottom] shadow-sm whitespace-nowrap"
                  type="submit"
                >
                  {{ t('postSingle.newsletter.cta') }}
                </button>
              </div>
            </form>
          </div>
        </div>

        <!-- Right sidebar -->
        <aside class="max-md:hidden w-60 shrink-0 ml-6">
          <div
            class="sticky top-24 p-5 border-l border-r [border-image:linear-gradient(to_bottom,transparent,--theme(--color-slate-300/.5),transparent)1]"
          >
            <div class="font-bold">{{ t('postSingle.toc.title') }}</div>
            <ul class="text-sm space-y-2 mt-2">
              <li>
                <a data-scrollspy-link class="text-gray-700 hover:text-gray-900" href="#serverless">
                  {{ t('postSingle.toc.serverless') }}
                </a>
              </li>
              <li>
                <a data-scrollspy-link class="text-gray-700 hover:text-gray-900" href="#benefits">
                  {{ t('postSingle.toc.benefits') }}
                </a>
              </li>
              <li>
                <a data-scrollspy-link class="text-gray-700 hover:text-gray-900" href="#guide">
                  {{ t('postSingle.toc.guide') }}
                </a>
              </li>
              <li>
                <a data-scrollspy-link class="text-gray-700 hover:text-gray-900" href="#conclusion">
                  {{ t('postSingle.toc.conclusion') }}
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>
