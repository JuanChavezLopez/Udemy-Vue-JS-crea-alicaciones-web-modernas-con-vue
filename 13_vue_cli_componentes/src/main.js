
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// componentes
// var componente_1 = Vue.extend({
//   template: '<h1>Hola - introduccion a componentes</h1>'

// })
// ! ----------COMPONENT TITULO----------------
// var titulo = Vue.extend({
//   template: '<h3>{{ subtitulo }}</h3>',
//   data() {
//     return {
//       subtitulo: 'Listado de frameworks Javascript 2020'
//     }
//   }

// })

// Vue.component('titulo', titulo);

//! ----------COMPONENT LISTA_FRAMEWORKS-----------------
// var lista_frameworks = Vue.extend({
//   template: '<ul><framework v-for="fra in frameworks" :key="fra.id">{{fra.titulo}}</framework></ul>',
//   data() {
//     return {
//       frameworks: [
//         {id:1, titulo: 'Vue 2020'},
//         {id:2, titulo: 'Angular'},
//         {id:3, titulo: 'React 2020'}
//       ]
//     }
//   },

// })

// Vue.component('framework', {
//   template: '<li><slot></slot></li>'
// })

// Vue.component('lista_frameworks', lista_frameworks)

//! ----------------COMPONENT SALUDO--------------------------------
// Vue.component('saludo', {
//   data() {
//     return {
//       titulo: 'Hola desde data del componente......!'
//     }
//   },
//   methods: {
//     display() {
//       console.log('Hola..vue!!!..ya vengo papa ...tu eres el mas bonito')
//     }
//   },
// });



// ! ------------------------INSTANCIA DE VUE---------------------------------

new Vue({
  el: '#app',
  components: {App},
  template:'<App/>'
})
