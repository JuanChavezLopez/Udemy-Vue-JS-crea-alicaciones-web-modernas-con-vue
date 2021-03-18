<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <div class="form">
      <div class="form-group">
        <label for="">Titulo</label>
        <input class="form-control" type="text" v-model="nota.titulo">
      </div>
      <div class="form-group">
        <label>Texto</label>
        <textarea class="form-control" v-model="nota.texto"></textarea>
      </div>
      <button class="btn btn-primary" @click="agregarNota()">Enviar</button>

    </div>
    <div class="col-sm-12">
      <div class="col-sm-4 nota" v-for="(nota, index) in notas">
        <div class="card">
          <div class="card-block">
            <div class="card-title">
              <div class="card-title">Titulo: {{nota.titulo}}</div>
              <div class="card-subtitle mb-2 text-muted">Subtitulo: {{nota.fecha}}</div>
              <div class="card-text">Texto: {{nota.texto}}</div>
            </div>
          </div>
          <button class="close" @click="eliminarNota(index)">&times;</button>
        </div>
      </div>
    </div>
  </div>
</template>

//! SE PONE LA LOGICA DEL COMPONENTE
<script>
export default {
  name: 'app',
  data () {
    return {
      title: 'Gestion de Notas',
      nota: {
        titulo: '',
        text: ''
      },
      notas: [
        {
          titulo: 'Ir al cine',
          texto: 'Examinar las peliculas de estreno',
          fecha: new Date(Date.now()).toLocaleDateString()
        }
      ]
    }
  },
  methods: {
    agregarNota: function() {
      let {texto, titulo} = this.nota;
      this.notas.push({
        texto, 
        titulo,
        fecha: new Date(Date.now()).toLocaleString()
      })
    },
    eliminarNota: function(index) {
      this.notas.splice(index,1);
    }
  }
}
</script>


// !PONEMOS LOS ESTILOS
<style>
  .form {
    text-align: left;
  }

  .card {
    text-align: left;
    border: 1px solid black;
    border-radius: 20px;
  }
</style>
