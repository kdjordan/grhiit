<template>
  <div class="w-full">
    <label v-if="label" :for="id" class="block text-sm font-bold text-white mb-2 uppercase tracking-wide">
      {{ label }}
      <span v-if="required" class="text-grhiit-red">*</span>
    </label>
    <input
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      :class="inputClasses"
      v-bind="$attrs"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  id?: string
  type?: 'text' | 'email' | 'password' | 'number'
  label?: string
  placeholder?: string
  required?: boolean
  disabled?: boolean
  modelValue?: string
  error?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  error: false
})

defineEmits<{
  'update:modelValue': [value: string]
}>()

const inputClasses = computed(() => [
  'w-full px-4 py-3 font-secondary transition-all duration-200',
  'bg-grhiit-gray border text-white placeholder-gray-400',
  'focus:outline-none focus:ring-1 focus:ring-grhiit-red',
  props.error 
    ? 'border-red-500 focus:border-red-500' 
    : 'border-grhiit-light-gray focus:border-grhiit-red',
  props.disabled 
    ? 'opacity-50 cursor-not-allowed' 
    : 'hover:border-gray-300'
])
</script>