<template>
  <div id="app">
    <div class="row">
      <p class="text-center titulo">MAGAZIN EMAG</p>
      <div class="col-md-7">
        <div class="row">
          <div class="col-md-6" v-for="prod in productos" :key="prod.id">
            <!-- Vamos a interactuar con el componente producto, que le enviamos el producto, y a la vez esperamos el evento @agregar_carro -->

            <!-- PROPS:  :enviamos informacion--- producto and :estaEn Carrito -->
            <!-- En el componente producto: recogemos informacion del hijo: @eventoAgregarCarro y ejecutamos el metodo-- agregarProdCarro -->


            <!-- <producto :producto="prod" @eventoAgregarCarro="agregarProdCarro" :estaEnCarrito="estaEnCarrito(prod)"></producto> -->
            <producto :producto="prod" @eventoAgregarCarro="agregarProdCarro" ></producto>

          </div>
        </div>
      </div>

      <div class="col-md-5 my-5">
        <!-- PROPS: enviamos informacion ----items -->
        <!-- en el componente carrito escuchamos los eventos: @eventoRemoverItem and @eventoPagar -->
        <carrito :unidades="cantidad" :items="carrito" @eventoRemoverItem="removerProducto" @eventoPagar="pagar"></carrito>
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
      productos,  /*  de nuestro archivo productos.json */
      carrito: [],
      cantidad:1
      
    }
  },
  methods: {
    agregarProdCarro(producto) { /* agrega al array carrito */
      const existe = this.carrito.find(item => 
      item.id === producto.id
      // item.push('cantidad',cantidad);
      
      );
      
      if(existe){
        this.cantidad++;
      }else{

        this.carrito.push(producto);
      }
    },
    // estaEnCarrito(producto) { /* retorna true or false, para habilitar el botton */
    //   const item = this.carrito.find(item => item.id === producto.id);
    //   if(item) {
    //     return true;
    //   }
    //   return false;
    // },
    removerProducto(producto){ /* genera un nuevo arreglo sin el producto */
      this.carrito = this.carrito.filter(item => item.id != producto.id)
    },
    pagar() { /* limpiamos el array */
      this.carrito =[];
      alert('Pay success..!');
    }
  }
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
