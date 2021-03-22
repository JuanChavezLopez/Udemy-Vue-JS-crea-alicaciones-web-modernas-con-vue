<template>
  <div id="app">
    <center>
      <img alt="Vue logo" src="./assets/logo.png"><br>
      <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
      <contador/>
      <contador/>
      <contador/>
      <contador/>
      <contador/>
      <contador/><br>
      <h2>LISTADO DE PLANES DE CURSOS DE PROGRAMACION</h2>
      <div class="planes">
        <!-- <div class="plan">
          <div class="descripcion">
            <span class="titulo">Plan 1 - Principiante</span>
          </div>
        </div>
        <div class="plan">
          <div class="descripcion">
            <span class="titulo">Plan 2 - Intermedio</span>
          </div>
        </div>
        <div class="plan">
          <div class="descripcion">
            <span class="titulo">Plan 3 - Avanzado</span>
          </div>
        </div> -->
        <!-- <plan nombre="Plan 1 - Principiante"/>
        <plan nombre="Plan 2 - Intermedio"/>
        <plan nombre="Plan 3 - Avanzado"/>
        <plan nombre="Plan 4 - Hackers"/>  -->
        <!-- este se crea por defecto principiante -->
        <!-- <plan/> -->
        <!-- <plan v-for="pla in planes" :nombre="pla" :key="pla"/> -->
        <planes/>
      </div>
    </center>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Contador from './components/Contador.vue'
import Planes from './components/Planes.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    Contador,
    Planes
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;

}


</style>
