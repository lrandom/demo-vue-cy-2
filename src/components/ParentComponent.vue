<script setup>
import A from '@/components/sub/A.vue'
import B from '@/components/sub/B.vue'
import C from '@/components/sub/C.vue'
import { computed } from 'vue'

const props = defineProps({
  componentType: {
    type: Number,
    required: true,
    default: 1,
  },
})

const component = computed(() => {
  switch (props.componentType) {
    case 1:
      return A
    case 2:
      return B
    case 3:
      return C
    default:
      return A
  }
})

</script>

<template>
<!--  <A v-if="componentType === 1" />
  <B v-if="componentType === 2" />
  <C v-if="componentType === 3" />-->

  <component :is="component"/>
</template>

<style scoped></style>
