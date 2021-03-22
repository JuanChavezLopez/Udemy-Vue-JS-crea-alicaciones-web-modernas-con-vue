<template>
<div class="container">
    <div class="card my-5">
        <div class="card-body">
            <h5 class="text-center card-title">{{ producto.titulo }}</h5>

            <img :src="producto.imagen" alt="" width="280"  height="200">

            <p class="text-center text-muted card-text display-4">${{ Number(producto.precio).toFixed() }}</p>

            <!-- <button @click="agregarCarro(producto)" class="btn btn-primary form-control add" :disabled="estaEnCarrito">{{ estaEnCarrito ? 'Aggregate' : 'Add car' }}</button> -->
            <button @click="agregarCarro(producto)" class="btn btn-primary form-control add" >Add car</button>
        </div>
    </div>

</div>
</template>

<script>


export default {
    name: 'Producto', /* nombre del componente */
    props : ['producto'], /* recibimos el producto y el estado de: estaEnCarrito */
    methods: {
        agregarCarro(producto) { /* aca le estamos enviando el objeto producto */
            this.$emit('eventoAgregarCarro', producto);
        }
    }
}
</script>

<style>
    .add {
        background: linear-gradient(to right,#3147a8 10%,#206cc7);
    }
</style>