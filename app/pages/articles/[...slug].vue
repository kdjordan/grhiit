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
const slug = Array.isArray(route.params.slug) ? route.params.slug.join('/') : route.params.slug

// Use the same working query.all() method and filter for the specific article
const { data: article } = await useAsyncData(`article-${slug}`, async () => {
  try {
    const query = queryCollection('articles')
    const all = await query.all()
    
    if (Array.isArray(all)) {
      console.log('🔍 Looking for slug:', slug)
      console.log('🔍 Available articles paths:', all.map(a => ({ title: a.title, path: a.path, _path: a._path, stem: a.stem })))
      
      const found = all.find(article => 
        article.path === `/articles/${slug}` || 
        article._path === `/articles/${slug}` ||
        article.stem === slug ||
        article.path?.endsWith(slug) ||
        article._path?.endsWith(slug)
      )
      
      console.log('🔍 Found article:', found?.title || 'Not found')
      return found || null
    }
    
    return null
  } catch (err) {
    console.error('Error loading article:', err)
    return null
  }
})

if (!article.value) {
  throw createError({ statusCode: 404, statusMessage: 'Article not found' })
}

// SEO meta tags
useHead({
  title: article.value.title,
  meta: [
    { name: 'description', content: article.value.description },
    { property: 'og:title', content: article.value.title },
    { property: 'og:description', content: article.value.description },
    { name: 'twitter:title', content: article.value.title },
    { name: 'twitter:description', content: article.value.description }
  ]
})
</script>