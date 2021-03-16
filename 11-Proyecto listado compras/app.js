
let app = new Vue ({
    el: '#lista-compras',
    data: {
        header: 'Vue: Listado de utiles',
        utiles : [

        ],
        newUtil: '',
        estado: 'default'
    },
    methods: {
        agregarElemento: function() {
            this.utiles.push(this.newUtil);
            this.newUtil= '';
        },
        cambiarEstado: function (newEstado) {
            this.estado = newEstado;
            this.newUtil = '';
        }
    },
});