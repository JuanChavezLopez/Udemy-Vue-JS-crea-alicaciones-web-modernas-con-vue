new Vue ({
    el: '#app',
    data: {
        contador: 1,
        inicialContador:0,
        x: 0,
        y:  0
    },
    methods: {
        mostrarTitulo:  function() {
            return 'Hola mundo desde methods!'
        },
        aumentarContador: function(valor) {
            this.contador += valor;
        },
        cambiarContador: function() {
            this.contador = parseInt(this.inicialContador);
        },
        actualizarValores: function(event) {
            this.x = event.clientX;
            this.y = event.clientY;
        }
    }
});