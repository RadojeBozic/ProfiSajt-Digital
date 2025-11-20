<script setup>
import PageIllustration from "./PageIllustration.vue"
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="relative">
    <PageIllustration />

    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <!-- Main content -->
      <div class="max-w-3xl mx-auto pt-32 pb-12 md:pt-40 md:pb-20">

        <!-- Section header -->
        <div class="pb-16">
          <h1 class="text-5xl font-bold mb-4">{{ t('blogList.heading') }}</h1>
          <p class="text-lg text-gray-700">{{ t('blogList.subheading') }}</p>
        </div>

        <!-- Categories -->
        <div class="flex flex-wrap gap-2 mb-10">
          <button class="btn-sm font-normal text-gray-200 bg-gray-800 hover:bg-gray-900 shadow-sm">
            {{ t('blogList.categories.all') }}
          </button>
          <button class="btn-sm font-normal text-gray-800 bg-white hover:bg-gray-50 shadow-sm">
            {{ t('blogList.categories.interviews') }}
          </button>
          <button class="btn-sm font-normal text-gray-800 bg-white hover:bg-gray-50 shadow-sm">
            {{ t('blogList.categories.inspiration') }}
          </button>
          <button class="btn-sm font-normal text-gray-800 bg-white hover:bg-gray-50 shadow-sm">
            {{ t('blogList.categories.updates') }}
          </button>
          <button class="btn-sm font-normal text-gray-800 bg-white hover:bg-gray-50 shadow-sm">
            {{ t('blogList.categories.product') }}
          </button>
          <button class="btn-sm font-normal text-gray-800 bg-white hover:bg-gray-50 shadow-sm">
            {{ t('blogList.categories.misc') }}
          </button>
        </div>

        <!-- Articles -->
        <div class="space-y-10 border-l [border-image:linear-gradient(to_bottom,var(--color-slate-200),var(--color-slate-300),transparent)1]">

          <!-- 1 -->
          <article class="pl-6 sm:pl-10">
            <header class="mb-2">
              <div class="relative flex items-center gap-2 mb-2 before:absolute before:-left-6 sm:before:-left-10 before:-ml-px before:inset-y-0 before:w-px before:bg-blue-500">
                <img class="rounded-full" src="../images/blog-author-01.jpg" width="24" height="24" alt="Author 01" />
                <div class="text-sm text-gray-500">{{ t('blogList.articles.a1.author') }}</div>
              </div>
              <h2 class="text-2xl font-bold">
                <router-link class="hover:underline" to="/blog-post">
                  {{ t('blogList.articles.a1.title') }}
                </router-link>
              </h2>
            </header>
            <p class="text-gray-700 mb-4">{{ t('blogList.excerpt') }}</p>
            <footer>
              <router-link class="text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors" to="/blog-post">
                {{ t('blogList.readMore') }} <span class="tracking-normal text-blue-300">-&gt;</span>
              </router-link>
            </footer>
          </article>

          <!-- 2 -->
          <article class="pl-6 sm:pl-10">
            <header class="mb-2">
              <div class="relative flex items-center gap-2 mb-2 before:absolute before:-left-6 sm:before:-left-10 before:-ml-px before:inset-y-0 before:w-px before:bg-blue-500">
                <img class="rounded-full" src="../images/blog-author-02.jpg" width="24" height="24" alt="Author 02" />
                <div class="text-sm text-gray-500">{{ t('blogList.articles.a2.author') }}</div>
              </div>
              <h2 class="text-2xl font-bold">
                <router-link class="hover:underline" to="/blog-post">
                  {{ t('blogList.articles.a2.title') }}
                </router-link>
              </h2>
            </header>
            <p class="text-gray-700 mb-4">{{ t('blogList.excerpt') }}</p>
            <footer>
              <router-link class="text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors" to="/blog-post">
                {{ t('blogList.readMore') }} <span class="tracking-normal text-blue-300">-&gt;</span>
              </router-link>
            </footer>
          </article>

          <!-- 3 -->
          <article class="pl-6 sm:pl-10">
            <header class="mb-2">
              <div class="relative flex items-center gap-2 mb-2 before:absolute before:-left-6 sm:before:-left-10 before:-ml-px before:inset-y-0 before:w-px before:bg-blue-500">
                <img class="rounded-full" src="../images/blog-author-01.jpg" width="24" height="24" alt="Author 01" />
                <div class="text-sm text-gray-500">{{ t('blogList.articles.a3.author') }}</div>
              </div>
              <h2 class="text-2xl font-bold">
                <router-link class="hover:underline" to="/blog-post">
                  {{ t('blogList.articles.a3.title') }}
                </router-link>
              </h2>
            </header>
            <p class="text-gray-700 mb-4">{{ t('blogList.excerpt') }}</p>
            <footer>
              <router-link class="text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors" to="/blog-post">
                {{ t('blogList.readMore') }} <span class="tracking-normal text-blue-300">-&gt;</span>
              </router-link>
            </footer>
          </article>

          <!-- 4 -->
          <article class="pl-6 sm:pl-10">
            <header class="mb-2">
              <div class="relative flex items-center gap-2 mb-2 before:absolute before:-left-6 sm:before:-left-10 before:-ml-px before:inset-y-0 before:w-px before:bg-blue-500">
                <img class="rounded-full" src="../images/blog-author-02.jpg" width="24" height="24" alt="Author 02" />
                <div class="text-sm text-gray-500">{{ t('blogList.articles.a4.author') }}</div>
              </div>
              <h2 class="text-2xl font-bold">
                <router-link class="hover:underline" to="/blog-post">
                  {{ t('blogList.articles.a4.title') }}
                </router-link>
              </h2>
            </header>
            <p class="text-gray-700 mb-4">{{ t('blogList.excerpt') }}</p>
            <footer>
              <router-link class="text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors" to="/blog-post">
                {{ t('blogList.readMore') }} <span class="tracking-normal text-blue-300">-&gt;</span>
              </router-link>
            </footer>
          </article>

          <!-- 5 -->
          <article class="pl-6 sm:pl-10">
            <header class="mb-2">
              <div class="relative flex items-center gap-2 mb-2 before:absolute before:-left-6 sm:before:-left-10 before:-ml-px before:inset-y-0 before:w-px before:bg-blue-500">
                <img class="rounded-full" src="../images/blog-author-01.jpg" width="24" height="24" alt="Author 01" />
                <div class="text-sm text-gray-500">{{ t('blogList.articles.a5.author') }}</div>
              </div>
              <h2 class="text-2xl font-bold">
                <router-link class="hover:underline" to="/blog-post">
                  {{ t('blogList.articles.a5.title') }}
                </router-link>
              </h2>
            </header>
            <p class="text-gray-700 mb-4">{{ t('blogList.excerpt') }}</p>
            <footer>
              <router-link class="text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors" to="/blog-post">
                {{ t('blogList.readMore') }} <span class="tracking-normal text-blue-300">-&gt;</span>
              </router-link>
            </footer>
          </article>

          <!-- 6 -->
          <article class="pl-6 sm:pl-10">
            <header class="mb-2">
              <div class="relative flex items-center gap-2 mb-2 before:absolute before:-left-6 sm:before:-left-10 before:-ml-px before:inset-y-0 before:w-px before:bg-blue-500">
                <img class="rounded-full" src="../images/blog-author-02.jpg" width="24" height="24" alt="Author 02" />
                <div class="text-sm text-gray-500">{{ t('blogList.articles.a6.author') }}</div>
              </div>
              <h2 class="text-2xl font-bold">
                <router-link class="hover:underline" to="/blog-post">
                  {{ t('blogList.articles.a6.title') }}
                </router-link>
              </h2>
            </header>
            <p class="text-gray-700 mb-4">{{ t('blogList.excerpt') }}</p>
            <footer>
              <router-link class="text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors" to="/blog-post">
                {{ t('blogList.readMore') }} <span class="tracking-normal text-blue-300">-&gt;</span>
              </router-link>
            </footer>
          </article>

          <!-- 7 -->
          <article class="pl-6 sm:pl-10">
            <header class="mb-2">
              <div class="relative flex items-center gap-2 mb-2 before:absolute before:-left-6 sm:before:-left-10 before:-ml-px before:inset-y-0 before:w-px before:bg-blue-500">
                <img class="rounded-full" src="../images/blog-author-01.jpg" width="24" height="24" alt="Author 01" />
                <div class="text-sm text-gray-500">{{ t('blogList.articles.a7.author') }}</div>
              </div>
              <h2 class="text-2xl font-bold">
                <router-link class="hover:underline" to="/blog-post">
                  {{ t('blogList.articles.a7.title') }}
                </router-link>
              </h2>
            </header>
            <p class="text-gray-700 mb-4">{{ t('blogList.excerpt') }}</p>
            <footer>
              <router-link class="text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors" to="/blog-post">
                {{ t('blogList.readMore') }} <span class="tracking-normal text-blue-300">-&gt;</span>
              </router-link>
            </footer>
          </article>

          <!-- 8 -->
          <article class="pl-6 sm:pl-10">
            <header class="mb-2">
              <div class="relative flex items-center gap-2 mb-2 before:absolute before:-left-6 sm:before:-left-10 before:-ml-px before:inset-y-0 before:w-px before:bg-blue-500">
                <img class="rounded-full" src="../images/blog-author-02.jpg" width="24" height="24" alt="Author 02" />
                <div class="text-sm text-gray-500">{{ t('blogList.articles.a8.author') }}</div>
              </div>
              <h2 class="text-2xl font-bold">
                <router-link class="hover:underline" to="/blog-post">
                  {{ t('blogList.articles.a8.title') }}
                </router-link>
              </h2>
            </header>
            <p class="text-gray-700 mb-4">{{ t('blogList.excerpt') }}</p>
            <footer>
              <router-link class="text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors" to="/blog-post">
                {{ t('blogList.readMore') }} <span class="tracking-normal text-blue-300">-&gt;</span>
              </router-link>
            </footer>
          </article>

        </div>

        <!-- Load more -->
        <div class="text-center mt-12">
          <button class="btn-sm text-gray-200 bg-gray-800 hover:bg-gray-900 shadow-sm py-1.5 min-w-[220px]">
            {{ t('blogList.loadMore') }} <span class="tracking-normal text-gray-500 ml-2">↓</span>
          </button>
        </div>

      </div>
    </div>
  </section>
</template>
