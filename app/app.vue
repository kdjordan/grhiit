<template>
  <NuxtLayout>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
@import 'tailwindcss';

/* Ensure dark background */
html {
  background-color: #202124 !important;
}

body {
  background-color: #202124 !important;
  color: white !important;
  font-family: 'Inter', Arial, sans-serif !important;
}
</style>
