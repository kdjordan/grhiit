<template>
  <div class="min-h-screen bg-grhiit-black text-white font-secondary">
    <header class="absolute top-0 left-0 right-0 z-20 bg-transparent">
      <nav class="container mx-auto px-8 py-6">
        <div class="flex items-center justify-between">
          <NuxtLink to="/" class="text-4xl font-primary uppercase"
            >GRHIIT</NuxtLink
          >
          <div class="flex gap-8 items-center">
            <NuxtLink
              to="/"
              class="text-white hover:text-grhiit-red transition-colors uppercase tracking-wide text-sm font-bold"
              >Home</NuxtLink
            >
            <NuxtLink
              to="/program"
              class="text-white hover:text-grhiit-red transition-colors uppercase tracking-wide text-sm font-bold"
              >Program</NuxtLink
            >
            <NuxtLink
              to="/articles"
              class="text-white hover:text-grhiit-red transition-colors uppercase tracking-wide text-sm font-bold"
              >Articles</NuxtLink
            >
            <NuxtLink
              to="/about"
              class="text-white hover:text-grhiit-red transition-colors uppercase tracking-wide text-sm font-bold"
              >About</NuxtLink
            >
            <UiGButton size="sm" @click="openWaitlistModal"
              >Join Waitlist</UiGButton
            >
          </div>
        </div>
      </nav>
    </header>
    <main>
      <slot />
    </main>
    <footer
      class="bg-grhiit-gray border-t border-grhiit-light-gray mt-20 py-12"
    >
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 class="text-2xl font-primary font-bold mb-4">GRHIIT</h3>
            <p class="text-gray-400">
              High-intensity interval training built on real science. No
              equipment. No fluff.
            </p>
          </div>
          <div>
            <h4 class="text-white font-bold uppercase mb-4">Principles</h4>
            <ul class="space-y-2 text-gray-400">
              <li>Intensity over duration</li>
              <li>Discipline over motivation</li>
              <li>Consistency over perfection</li>
            </ul>
          </div>
          <div>
            <h4 class="text-white font-bold uppercase mb-4">Connect</h4>
            <p class="text-gray-400 mb-4">All it takes is all you've got.</p>
            <UiGButton size="md" @click="openWaitlistModal"
              >Get Started</UiGButton
            >
          </div>
        </div>
        <div
          class="border-t border-grhiit-light-gray pt-8 text-center text-gray-500"
        >
          <p>&copy; 2025 GRHIIT. Do hard things.</p>
        </div>
      </div>
    </footer>

    <!-- Waitlist Modal -->
    <ClientOnly>
      <UiWaitlistModal
        :is-open="isWaitlistModalOpen"
        @close="closeWaitlistModal"
        @submit="handleWaitlistSubmit"
      />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
const isWaitlistModalOpen = ref(false);

const openWaitlistModal = () => {
  isWaitlistModalOpen.value = true;
};

const closeWaitlistModal = () => {
  isWaitlistModalOpen.value = false;
};

const handleWaitlistSubmit = (data: { email: string; name: string }) => {
  // TODO: Send to backend/email service
  console.log("Waitlist signup:", data);

  // Show success message or redirect
  alert(`Thanks ${data.name}! We'll be in touch soon.`);
};
</script>
