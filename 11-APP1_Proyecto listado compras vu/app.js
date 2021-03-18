
let app = new Vue ({
    el: '#lista-compras',
    data: {
        header: 'Vue: Listado de utiles',
        utiles : [
            {util: '10 cuadernos',
            comprado: true
        },
            {util: '15 lapices',
            comprado: true
        },
            {util: '5 cajas de colores',
            comprado: false
        }

        ],
        newUtil: '',
        estado: 'default'
    },
    computed: {
        cantidadCaracteres: function() {
            return this.newUtil.length;
        }
    },
    methods: {
        agregarElemento: function() {
            // this.utiles.push(this.newUtil);
            this.utiles.push({
                util: this.newUtil,
                comprado: false
            });
            this.newUtil= '';
        },
        cambiarEstado: function (newEstado) {
            this.estado = newEstado;
            this.newUtil = '';
        },
        cambiarEstadoCompra(util){
            util.comprado = !util.comprado;
        }
    },
});