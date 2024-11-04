<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  isChangeData: {
    default:false,
    type: Boolean,
  }
})

const data = ref({
  message: 'Hello from Child component',
})

function changeMessage() {
  data.value.message = 'Hello from Parent component'
}

watch(() => props.isChangeData, (value) => {
  if (value) {
    changeMessage()
  }
})

/*defineExpose({
  changeMessage,
})*/
</script>

<template>
  <slot :data="data"></slot>
</template>

<style scoped></style>
