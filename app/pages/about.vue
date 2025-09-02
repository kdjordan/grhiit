<template>
  <div class="min-h-screen bg-grhiit-black">
    <div class="container mx-auto px-4 py-20">
      <h1 class="text-4xl md:text-5xl font-primary font-bold text-white mb-8 text-center">
        ABOUT GRHIIT
      </h1>
      
      <div class="max-w-4xl mx-auto">
        <div class="bg-grhiit-gray p-8 border-l-4 border-grhiit-red mb-8">
          <h2 class="text-2xl font-bold text-white mb-4">The Method</h2>
          <p class="text-gray-300 mb-4">
            GRHIIT (Grit High-Intensity Interval Training) is a science-based approach to bodyweight fitness that builds both physical capacity and mental resilience.
          </p>
          <p class="text-gray-300">
            No equipment. No excuses. Just disciplined execution and progressive overload through time-based intervals.
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8 mb-8">
          <div class="bg-grhiit-gray p-6">
            <h3 class="text-xl font-bold text-white mb-4">The Science</h3>
            <p class="text-gray-300">
              Built on proven HIIT protocols with structured work-to-rest ratios. 
              20:10, 6:3, and 60:20 intervals designed for maximum adaptation.
            </p>
          </div>
          
          <div class="bg-grhiit-gray p-6">
            <h3 class="text-xl font-bold text-white mb-4">The Mindset</h3>
            <p class="text-gray-300">
              Discipline over motivation. Consistency over perfection. 
              Building grit as much as building strength.
            </p>
          </div>
        </div>
        
        <div class="bg-grhiit-black border border-grhiit-light-gray p-8 text-center">
          <h3 class="text-2xl font-bold text-white mb-4">ALL IT TAKES IS ALL YOU'VE GOT</h3>
          <p class="text-gray-400 mb-6">
            Ready to build discipline through movement?
          </p>
          <button class="bg-grhiit-red hover:bg-red-600 text-white px-8 py-3 font-bold uppercase transition-colors">
            Join the Movement
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Static about page content for now
// Later we can use queryContent to load from content files
</script>