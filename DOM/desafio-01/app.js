new Vue({
  el: '#desafio',
  data: {
    name: 'Ednardo',
    age: 34,
    link: 'http://2.bp.blogspot.com/_mtJsQ3STaBg/SV2Q3ueUXsI/AAAAAAAABac/G8tbMw54J2Q/s400/s%C3%B3_alegria.jpg'
  },
  methods: {
    multiplicaIdade: function() {
      return this.age * 3;
    },
    numeroAleatorio: function() {
      return Math.random();
    }
  }
});
