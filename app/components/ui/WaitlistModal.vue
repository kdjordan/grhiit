<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-75" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel class="w-full max-w-md transform overflow-hidden bg-grhiit-black border border-grhiit-gray p-8 text-left align-middle shadow-xl transition-all">
              <DialogTitle as="h3" class="text-2xl font-primary font-bold leading-6 text-white mb-6">
                JOIN THE FIRST 1,000
              </DialogTitle>
              
              <div class="mb-6">
                <p class="text-gray-300 mb-4">
                  Get early access to GRHIIT, live session invites, and the complete 8 Weeks starter program.
                </p>
                <p class="text-grhiit-red font-bold text-sm uppercase">
                  All it takes is all you've got.
                </p>
              </div>

              <form @submit.prevent="submitForm" class="space-y-4">
                <div>
                  <label for="email" class="block text-sm font-bold text-white mb-2 uppercase tracking-wide">
                    Email Address
                  </label>
                  <input
                    id="email"
                    v-model="email"
                    type="email"
                    required
                    class="w-full px-4 py-3 bg-grhiit-gray border border-grhiit-light-gray text-white placeholder-gray-400 focus:outline-none focus:border-grhiit-red focus:ring-1 focus:ring-grhiit-red"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label for="name" class="block text-sm font-bold text-white mb-2 uppercase tracking-wide">
                    First Name
                  </label>
                  <input
                    id="name"
                    v-model="name"
                    type="text"
                    required
                    class="w-full px-4 py-3 bg-grhiit-gray border border-grhiit-light-gray text-white placeholder-gray-400 focus:outline-none focus:border-grhiit-red focus:ring-1 focus:ring-grhiit-red"
                    placeholder="Your name"
                  />
                </div>

                <div class="flex gap-3 mt-8">
                  <UiGButton type="submit" :disabled="loading" full-width>
                    {{ loading ? 'JOINING...' : 'JOIN NOW' }}
                  </UiGButton>
                  <UiGButton variant="outline" @click="closeModal" type="button">
                    CLOSE
                  </UiGButton>
                </div>
              </form>

              <p class="text-xs text-gray-500 mt-4 text-center">
                One day. One second. One rep at a time.
              </p>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'

interface Props {
  isOpen: boolean
}

const props = defineProps<Props>()

const emit = defineEmits<{
  close: []
  submit: [data: { email: string; name: string }]
}>()

const email = ref('')
const name = ref('')
const loading = ref(false)

const closeModal = () => {
  emit('close')
  // Reset form
  email.value = ''
  name.value = ''
  loading.value = false
}

const submitForm = async () => {
  loading.value = true
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  emit('submit', {
    email: email.value,
    name: name.value
  })
  
  loading.value = false
  closeModal()
}
</script>