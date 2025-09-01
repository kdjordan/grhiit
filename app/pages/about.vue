<template>
  <div class="container mx-auto px-4 py-8 max-w-4xl">
    <div v-if="page" class="prose prose-lg max-w-none">
      <ContentRenderer :value="page" />
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: page } = await useContent('pages').where({ _stem: 'about' }).findOne()

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}
</script>