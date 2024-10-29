<script setup>
import { reactive } from 'vue'

const form = reactive({
  full_name: 'Nguyen Thanh Luan',
  password: '',
  phone: '',
  hobbies: [],
})

function handleSubmitForm() {
  console.table('DATA', form)
}
</script>

<template>
  <form @submit.prevent="handleSubmitForm()">
    <input type="text" name="full_name" v-model.trim="form.full_name" />
    <input type="password" name="password" v-model.trim="form.password" />
    <input type="text" name="phone" v-model.number="form.phone" />

    <br />
    <label>
      <span>Soccer</span>
      <input type="checkbox" name="hobbies" value="1" v-model="form.hobbies" />
    </label>
    <br />
    <label>
      <span>Gaming</span>
      <input type="checkbox" name="hobbies" value="2" v-model="form.hobbies" />
    </label>
    <br />
    <label>
      <span>Coding</span>
      <input type="checkbox" name="hobbies" value="3" v-model="form.hobbies" />
    </label>

    <button>Submit</button>
  </form>
</template>

<style scoped></style>
