<template>
  <NuxtLayout>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
@import "tailwindcss";

/* Add custom GRHIIT colors directly until config works */
@layer utilities {
  .bg-grhiit-red { background-color: #F20D0D; }
  .bg-grhiit-black { background-color: #202124; }
  .bg-grhiit-gray { background-color: #2E2E2E; }
  .bg-grhiit-light-gray { background-color: #F5F5F5; }
  .text-grhiit-red { color: #F20D0D; }
  .border-grhiit-gray { border-color: #2E2E2E; }
  .border-grhiit-light-gray { border-color: #F5F5F5; }
  .font-primary { font-family: 'Anton', 'Arial Black', sans-serif; }
  .font-secondary { font-family: 'Inter', 'Arial', sans-serif; }
}
</style>
