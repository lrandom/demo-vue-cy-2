<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function clickToGoPage2() {
  const path = router.resolve({
    name: 'Page2',
    params: {
      id: 1,
      name: 'Luan',
    },
    query: {
      myAge: 18,
    },
  })
  console.log(path)
}


</script>
<template>
  Page 1

  <button @click="clickToGoPage2()">Go To Page 2</button>
  <RouterLink
    :to="{
      name: 'Page2',
      params: {
        id: 1,
        name: 'Luan',
      },
      query: {
        myAge: 18,
      },
    }"
    >Go to Page 2
  </RouterLink>
</template>
