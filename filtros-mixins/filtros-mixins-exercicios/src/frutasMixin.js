export default {
  data() {
    return {
      fruta: '',
      frutas: ['abacaxi', 'melancia', 'pêra']
    }
  },
  methods: {
    add() {
      this.frutas.push(this.fruta)
      this.fruta = ''
    }
  }
}
