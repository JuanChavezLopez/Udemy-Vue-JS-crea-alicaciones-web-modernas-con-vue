new Vue ({
    el: '#app',
    data: {
        animales : {
            perro:'woof',
            gato:'miauh',
            elefante: 'urhhhh'
        },
        // animales: ['perro', 'gato','elefante'],
        sonidos: ['wof','miauh','urrrr'],
        entrada: 'hola',
        options: [],
        contador: 1,
        inicialContador:6
    },
    methods: {
        mostrarTitulo:  function() {
            return 'Hola mundo desde methods!'
        },
        aumentarContador: function() {
            this.contador++;
        },
        cambiarContador: function() {
            this.contador = this.inicialContador;
        }
    }
});