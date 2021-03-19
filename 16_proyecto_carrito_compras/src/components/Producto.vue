<template>
<div class="container">
    <div class="card my-5">
        <div class="card-body">
            <h5 class="text-center card-title">{{ producto.titulo }}</h5>

            <img :src="producto.imagen" alt="" width="280"  height="200">

            <p class="text-center text-muted card-text display-4">${{ Number(producto.precio).toFixed() }}</p>

            <button @click="agregarCarro(producto)" class="btn btn-primary form-control add" :disabled="estaEnCarrito">{{ estaEnCarrito ? 'Aggregate' : 'Add car' }}</button>
        </div>
    </div>

</div>
</template>

<script>


export default {
    name: 'Producto',
    props : ['producto', 'estaEnCarrito'],
    methods: {
        agregarCarro(producto) {
            this.$emit('agregar_carro', producto);
        }
    }
}
</script>

<style>
    .add {
        background: linear-gradient(to right,#3147a8 10%,#206cc7);
    }
</style>