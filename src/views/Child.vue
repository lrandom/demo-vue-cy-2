<script setup>
import { defineProps, onMounted } from 'vue'

const props = defineProps({
  content: {
    default: 'Child Component',
    required: true,
  },
  message: {
    type: [Number, String],
    default: 'Child',
  },
  action: {
    type: Function,
    default: () => {
      alert('TEST')
    },
  },
})

onMounted(() => {})

function childFunction() {
  if (typeof props.action === 'function') {
    props.action()
  }
}
</script>

<template>
  {{ content }}
  {{ message }}

  <button @click="childFunction()">Click Me</button>

  <slot></slot>

  <slot name="footer"></slot>
</template>

<style scoped></style>
