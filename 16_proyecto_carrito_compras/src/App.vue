<template>
  <div id="app">
    <div class="row">
      <p class="text-center titulo">MAGAZIN EMAG</p>
      <div class="col-md-7">
        <div class="row">
          <div class="col-md-6" v-for="prod in productos" :key="prod.id">
            <producto :producto="prod" v-on:agregar_carro="agregarProdCarro" :estaEnCarrito="estaEnCarrito(prod)"></producto>
          </div>
        </div>
      </div>

      <div class="col-md-5 my-5">
        <carrito :items="carrito" v-on:remover-item="removerProducto" v-on:pagar="pagar"></carrito>
      </div>



    </div>
  </div>
</template>

<script>
import productos from './productos.json'
import Producto from './components/Producto.vue'
import Carrito from './components/Carrito.vue'

export default {
  name: 'App',
  components: {
    Producto,
    Carrito
  },
  data(){
    return {
      productos,
      carrito: []
      
    }
  },
  methods: {
    agregarProdCarro(producto) {
      this.carrito.push(producto);

    },
    estaEnCarrito(producto) {
      const item = this.carrito.find(item => item.id === producto.id);
      if(item) {
        return true;
      }
      return false;
    },
    removerProducto(producto){
      this.carrito = this.carrito.filter(item => item.id != producto.id)
    },
    pagar() {
      this.carrito =[];
      alert('Pay success..!');
    }
  },
}
</script>

<style>

.titulo {
  font-weight: 800;
  font-size: 40px;
  padding: 25px;
  color: white;
  background: linear-gradient(to right,#ff1d25 5%,#a0328c 35%,#7040a4 45%,#4359c7 55%,#0082e6 70%);
}
</style>
