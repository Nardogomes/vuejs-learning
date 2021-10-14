<template>
  <div>
    <ul>
      <li v-for="fruta in frutas" :key="fruta">{{ fruta }}</li>
    </ul>
    <div class="input">
      <input type="text" v-model="fruta" @keydown.enter="add">
      <button @click="add">+</button>
    </div>
  </div>
</template>

<script>
import frutasMixin from './frutasMixin'

export default {
  mixins: [frutasMixin]
}
</script>

<style>
.input {
  display: flex;
  justify-content: center;
  align-items: center;
}
button {
  width: 32px;
  height: 52px;
  background-color: #4574b3;
  color: #fff;
  font-size: 1.5rem;
}
</style>
