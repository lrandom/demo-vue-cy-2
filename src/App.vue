<script setup>
import Parent from '@/components/Parent.vue'
import ParentComponent from '@/components/ParentComponent.vue'
</script>

<template>
  <ParentComponent :component-type="1" />
  <ParentComponent :component-type="2" />
  <ParentComponent :component-type="3" />
</template>
