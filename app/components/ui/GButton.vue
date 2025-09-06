<template>
  <button
    :class="buttonClasses"
    :disabled="disabled"
    v-bind="$attrs"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  fullWidth?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  fullWidth: false
})

defineEmits<{
  click: [event: Event]
}>()

const baseClasses = 'font-bold uppercase tracking-wide transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-grhiit-red focus:ring-offset-2 focus:ring-offset-grhiit-black disabled:opacity-50 disabled:cursor-not-allowed'

const variantClasses = {
  primary: 'bg-grhiit-red text-white hover:bg-red-700 active:bg-red-800',
  secondary: 'bg-grhiit-gray text-white hover:bg-grhiit-light-gray hover:text-grhiit-black active:bg-gray-300',
  outline: 'border-2 border-white text-white hover:bg-white hover:text-grhiit-black active:bg-gray-100 active:text-grhiit-black'
}

const sizeClasses = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-lg'
}

const buttonClasses = computed(() => [
  baseClasses,
  variantClasses[props.variant],
  sizeClasses[props.size],
  props.fullWidth ? 'w-full' : '',
  'font-secondary'
])
</script>