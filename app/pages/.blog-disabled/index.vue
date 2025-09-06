<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-8">Blog</h1>
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <article v-for="post in posts" :key="post._id" class="border rounded-lg p-6 hover:shadow-lg transition-shadow">
        <NuxtLink :to="`/blog/${post._stem}`">
          <h2 class="text-2xl font-semibold mb-2">{{ post.title }}</h2>
          <p class="text-gray-600 mb-4">{{ post.description }}</p>
          <div class="flex items-center justify-between text-sm text-gray-500">
            <span>{{ post.date }}</span>
            <span v-if="post.category" class="px-2 py-1 bg-blue-100 text-blue-800 rounded">{{ post.category }}</span>
          </div>
          <div v-if="post.tags" class="mt-3 flex flex-wrap gap-2">
            <span v-for="tag in post.tags" :key="tag" class="px-2 py-1 bg-gray-100 rounded-full text-xs">
              {{ tag }}
            </span>
          </div>
        </NuxtLink>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
const posts = await queryContent('blog').find()
</script>