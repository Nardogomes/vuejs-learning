<template>
  <div>
    <Rotulo nome="Nome">
      <input type="text" @input="alterarNome" :value="value.nome">
    </Rotulo>
    <Rotulo nome="Sobrenome">
      <input type="text" @input="alterarSobrenome" :value="value.sobrenome">
    </Rotulo>
  </div>
</template>

<script>
import Rotulo from './Rotulo.vue'

export default {
  components: { Rotulo },
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  methods: {
    alterarNome(event) {
      this.$emit('input', {
        nome: event.target.value,
        sobrenome: this.value.sobrenome
      })
    },
    alterarSobrenome(event) {
      this.$emit('input', {
        sobrenome: event.target.value,
        nome: this.value.nome
      })
    }
  }
}
</script>

<style>

</style>
