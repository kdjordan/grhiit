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
          <article v-for="article in articles" :key="article._path || article.id" class="bg-grhiit-black border border-grhiit-light-gray hover:border-grhiit-red transition-colors">
            <NuxtLink 
              :to="article.path || article._path || `/articles/${article.stem}`" 
              class="block p-6"
              @click="handleArticleClick(article)"
            >
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
              <!-- Debug info -->
              <div class="mt-2 text-xs text-gray-600 border-t border-gray-700 pt-2">
                <div>Path: {{ article._path || 'No _path' }}</div>
                <div>Slug: {{ article.slug || 'No slug' }}</div>
                <div>Stem: {{ article.stem || 'No stem' }}</div>
                <div>ID: {{ article.id || 'No id' }}</div>
              </div>
            </NuxtLink>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Clean implementation using the working query.all() method
const { data: articles } = await useAsyncData('articles-list', async () => {
  try {
    const query = queryCollection('articles')
    const all = await query.all()
    return Array.isArray(all) ? all.filter(article => article.published === true) : []
  } catch (err) {
    console.error('Error loading articles:', err)
    return []
  }
})

// Debug click handler
const handleArticleClick = (article: any) => {
  console.log('=== ARTICLE CLICK DEBUG ===')
  console.log('Clicked article:', article.title)
  console.log('Article _path:', article._path)
  console.log('Article slug:', article.slug)
  console.log('Article stem:', article.stem)
  console.log('Article id:', article.id)
  console.log('Article path:', article.path)
  console.log('Full article object:', article)
  
  const targetPath = article._path || `/articles/${article.slug}` || `/articles/${article.stem}`
  console.log('Target navigation path:', targetPath)
  console.log('=== END ARTICLE CLICK DEBUG ===')
}

// Also log the articles structure when loaded
if (articles.value?.length > 0) {
  console.log('=== ARTICLES STRUCTURE ===')
  console.log('First article keys:', Object.keys(articles.value[0]))
  console.log('First article _path:', articles.value[0]._path)
  console.log('First article stem:', articles.value[0].stem)
  console.log('=== END ARTICLES STRUCTURE ===')
}
</script>