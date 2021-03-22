<template>
    <div>
        <div @click="seleccionar" class="plan" :class="{'plan-activo':seleccionado}">
          <div class="descripcion">
            <span class="titulo">{{ nombre }}</span>
          </div>
        </div>
    </div>
</template>

<script>
export default {
name: "Plan",
//   props: ['nombre']
 props: {
     nombre: {
         type: String,
         default: 'Plan 1 - Principiante',
         required: true
     }
 },
 data() {
     return {
         seleccionado: false
     }
 },
 methods: {
     seleccionar() {
        //!  eventoSelect: es el nombre del evento, el metodo $emit nos ayuda a hacer la propagacion de eventos.

         this.$emit('eventoSelect', this.nombre); 
         this.seleccionado = true; /* si habilitamos la clase se pinta, xq se pone en true */
     }
 },
};

</script>

<style>

</style>