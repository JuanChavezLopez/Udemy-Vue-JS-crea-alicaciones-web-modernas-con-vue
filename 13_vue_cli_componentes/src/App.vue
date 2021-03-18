<template>
    <!-- <img src="./assets/logo.png"> -->
    <!-- <HelloWorld/> -->
    <div class="container">
    <Header/>
    <EjemploPost/>
    <Footer2/>

    </div>
</template>

<script>
  // import HelloWorld from './components/HelloWorld'
  import EjemploPost from './components/Post'
  import Header from './components/Header'
  import Footer2 from './components/Footer2'

  export default {
    name: 'App',
    components: {
      // HelloWorld,
      EjemploPost,
      Header,
      Footer2
    }
  }

</script>

<style>

@import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

</style>
