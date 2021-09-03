<template>
  <div id="app">
    {{ titulo }}
    <button @click="titulo += '#'">Alterar</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function() {
    return {
      titulo: 'Testando data ususando Vue JS'
    }
  }
}
</script>

<style>
#app {
  background-color: chocolate;
  color: #fff;
}
</style>
