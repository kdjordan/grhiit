<template>
  <div>
    <section class="py-20 bg-grhiit-black border-b border-grhiit-gray">
      <div class="container mx-auto px-4">
        <h1 class="text-5xl font-primary font-bold mb-6">ARTICLES</h1>
        <p class="text-xl text-gray-300">Evidence-based training insights. No fluff.</p>
      </div>
    </section>
    
    <section class="py-20 bg-grhiit-gray">
      <div class="container mx-auto px-4">
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <article v-for="article in articles" :key="article._id" class="bg-grhiit-black border border-grhiit-light-gray hover:border-grhiit-red transition-colors">
            <NuxtLink :to="`/articles/${article._stem}`" class="block p-6">
              <h2 class="text-2xl font-bold mb-3 hover:text-grhiit-red transition-colors">{{ article.title }}</h2>
              <p class="text-gray-400 mb-4">{{ article.description }}</p>
              <div class="flex items-center justify-between text-sm text-gray-500">
                <span>{{ article.date }}</span>
                <span v-if="article.author" class="text-grhiit-red">{{ article.author }}</span>
              </div>
              <div v-if="article.tags" class="mt-4 flex flex-wrap gap-2">
                <span v-for="tag in article.tags" :key="tag" class="px-2 py-1 border border-grhiit-light-gray text-xs uppercase">
                  {{ tag }}
                </span>
              </div>
            </NuxtLink>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { data: articles } = await useContent('articles').find()
</script>