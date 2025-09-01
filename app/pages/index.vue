<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center bg-grhiit-black">
      <div class="absolute inset-0 bg-gradient-to-b from-transparent to-grhiit-black opacity-50"></div>
      <div class="relative z-10 container mx-auto px-4 text-center">
        <h1 class="text-6xl md:text-8xl font-display font-bold mb-6 tracking-wider">
          GRHIIT
        </h1>
        <p class="text-xl md:text-2xl mb-2 text-gray-300">
          GRIT HIGH-INTENSITY INTERVAL TRAINING
        </p>
        <p class="text-lg md:text-xl mb-8 text-gray-400 max-w-2xl mx-auto">
          A high-intensity interval training system built on real science. It's bodyweight, discipline in motion.
          No equipment. No fluff. Just pure focus.
        </p>
        <p class="text-2xl md:text-3xl font-bold mb-12 text-grhiit-red">
          ALL IT TAKES IS ALL YOU'VE GOT
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <GButton size="lg" @click="openWaitlistModal">
            Join the First 1,000
          </GButton>
          <NuxtLink to="/program">
            <GButton variant="outline" size="lg">
              Learn the Method
            </GButton>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Core Values -->
    <section class="py-20 bg-grhiit-gray">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-5 gap-8 text-center">
          <div>
            <h3 class="text-grhiit-red font-bold text-lg mb-2 uppercase">Intensity</h3>
            <p class="text-gray-400">Over duration</p>
          </div>
          <div>
            <h3 class="text-grhiit-red font-bold text-lg mb-2 uppercase">Discipline</h3>
            <p class="text-gray-400">Over motivation</p>
          </div>
          <div>
            <h3 class="text-grhiit-red font-bold text-lg mb-2 uppercase">Grit</h3>
            <p class="text-gray-400">Focused determination</p>
          </div>
          <div>
            <h3 class="text-grhiit-red font-bold text-lg mb-2 uppercase">Consistency</h3>
            <p class="text-gray-400">Over perfection</p>
          </div>
          <div>
            <h3 class="text-grhiit-red font-bold text-lg mb-2 uppercase">Determination</h3>
            <p class="text-gray-400">Focused determination</p>
          </div>
        </div>
      </div>
    </section>

    <!-- What It Is -->
    <section class="py-20 bg-grhiit-black">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl md:text-5xl font-display font-bold mb-8">
              DO HARD THINGS<br>
              <span class="text-grhiit-red">ON PURPOSE</span>
            </h2>
            <div class="space-y-4 text-gray-300">
              <p class="text-lg">
                <strong class="text-white">Time-based.</strong> 20:10 / 6:3 / 60:20 intervals with progressive overload.
              </p>
              <p class="text-lg">
                <strong class="text-white">Bodyweight-only.</strong> No equipment. No excuses. Train anywhere.
              </p>
              <p class="text-lg">
                <strong class="text-white">Mental toughness.</strong> Build discipline and grit through focused effort.
              </p>
              <p class="text-lg">
                <strong class="text-white">Progressive system.</strong> 8-week cycles with measurable progress.
              </p>
            </div>
          </div>
          <div class="bg-grhiit-gray p-8 border-l-4 border-grhiit-red">
            <h3 class="text-2xl font-bold mb-4 uppercase">The Promise</h3>
            <p class="text-gray-300 mb-6">
              Show up, do the work, and we'll give you:
            </p>
            <ul class="space-y-3 text-gray-300">
              <li class="flex items-start">
                <span class="text-grhiit-red mr-2">→</span>
                Clear timers and progressions
              </li>
              <li class="flex items-start">
                <span class="text-grhiit-red mr-2">→</span>
                Scalable intensity for any fitness level
              </li>
              <li class="flex items-start">
                <span class="text-grhiit-red mr-2">→</span>
                A system that builds grit as much as capacity
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats/Numbers -->
    <section class="py-20 bg-grhiit-gray">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-5xl font-display font-bold text-grhiit-red mb-2">02</div>
            <div class="text-gray-400 uppercase">Rest</div>
          </div>
          <div>
            <div class="text-5xl font-display font-bold text-grhiit-red mb-2">20</div>
            <div class="text-gray-400 uppercase">Mindset</div>
          </div>
          <div>
            <div class="text-5xl font-display font-bold text-grhiit-red mb-2">10</div>
            <div class="text-gray-400 uppercase">Focus</div>
          </div>
          <div>
            <div class="text-5xl font-display font-bold text-grhiit-red mb-2">8</div>
            <div class="text-gray-400 uppercase">Week Cycles</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-grhiit-black border-t border-grhiit-gray">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl md:text-5xl font-display font-bold mb-6">
          JOIN THE FIRST <span class="text-grhiit-red">1,000</span>
        </h2>
        <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Get early access, live session invites, and the 8 Weeks of GRHIIT starter PDF.
        </p>
        <div class="max-w-md mx-auto">
          <GButton size="lg" full-width @click="openWaitlistModal">
            Join Now
          </GButton>
        </div>
        <p class="text-sm text-gray-500 mt-4">
          One day. One second. One rep at a time.
        </p>
      </div>
    </section>

    <!-- Waitlist Modal -->
    <WaitlistModal 
      :is-open="isWaitlistModalOpen" 
      @close="closeWaitlistModal"
      @submit="handleWaitlistSubmit"
    />
  </div>
</template>

<script setup lang="ts">
const isWaitlistModalOpen = ref(false)

const openWaitlistModal = () => {
  isWaitlistModalOpen.value = true
}

const closeWaitlistModal = () => {
  isWaitlistModalOpen.value = false
}

const handleWaitlistSubmit = (data: { email: string; name: string }) => {
  // TODO: Send to backend/email service
  console.log('Waitlist signup:', data)
  
  // Show success message or redirect
  alert(`Thanks ${data.name}! We'll be in touch soon.`)
}
</script>