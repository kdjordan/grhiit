<template>
  <div class="container mx-auto px-4 py-8 max-w-4xl">
    <article v-if="post">
      <header class="mb-8">
        <h1 class="text-4xl font-bold mb-4">{{ post.title }}</h1>
        <p class="text-xl text-gray-600 mb-4">{{ post.description }}</p>
        <div class="flex items-center gap-4 text-sm text-gray-500">
          <span>{{ post.date }}</span>
          <span v-if="post.author">By {{ post.author }}</span>
          <span v-if="post.category" class="px-2 py-1 bg-blue-100 text-blue-800 rounded">{{ post.category }}</span>
        </div>
        <div v-if="post.tags" class="mt-4 flex flex-wrap gap-2">
          <span v-for="tag in post.tags" :key="tag" class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
            {{ tag }}
          </span>
        </div>
      </header>
      <div class="prose prose-lg max-w-none">
        <ContentRenderer :value="post" />
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { data: post } = await useContent('blog').where({ _stem: route.params.slug }).findOne()

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Blog post not found' })
}
</script>