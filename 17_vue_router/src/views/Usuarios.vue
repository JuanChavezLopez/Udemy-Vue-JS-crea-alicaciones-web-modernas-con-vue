<template>
    <div class="container">
        <h1>Informacion de usuarios</h1>
        <router-link :to="{ name:'usuarios', params:{id : item}}" v-for="(item,index) of ArregloUsuarios" :key="index">

            <button>{{ item }}</button>

        </router-link>
        
        <usuario/>
    </div>
</template>

<script>

import Usuario from '@/components/Usuario.vue';

export default {
    components: {
        Usuario
    },
    data() {
        return {
            ArregloUsuarios: ['Juan', 'Cesar', 'Pepe', 'Alejandra']
        }
    },
}
</script>