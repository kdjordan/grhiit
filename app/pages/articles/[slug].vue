<template>
  <div class="container mx-auto px-4 py-8 max-w-4xl">
    <article v-if="article">
      <header class="mb-8">
        <h1 class="text-4xl font-bold mb-4">{{ article.title }}</h1>
        <p class="text-xl text-gray-600 mb-4">{{ article.description }}</p>
        <div class="flex items-center gap-4 text-sm text-gray-500">
          <span>{{ article.date }}</span>
          <span v-if="article.author">By {{ article.author }}</span>
        </div>
        <div v-if="article.tags" class="mt-4 flex flex-wrap gap-2">
          <span v-for="tag in article.tags" :key="tag" class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
            {{ tag }}
          </span>
        </div>
      </header>
      <div class="prose prose-lg max-w-none">
        <ContentRenderer :value="article" />
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { data: article } = await useContent('articles').where({ _stem: route.params.slug }).findOne()

if (!article.value) {
  throw createError({ statusCode: 404, statusMessage: 'Article not found' })
}
</script>