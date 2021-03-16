
new Vue ({
    el: '#app',
    data: {
        presas : [
            {nombre: 'Represa Nurek', pais: 'Tajikistan', electricidad: 32000},
            {nombre: 'Represa gargantas', pais: 'China', electricidad: 22500},
            {nombre: 'Represa Tarbela', pais: 'Venezuela', electricidad: 3500},
            {nombre: 'Represa Guri', pais: 'Pakistan', electricidad: 10200}
        ]
    }, 
    computed: {
        presasPorElectricidad() {
            return this.presas.sort((d1, d2) => d2.electricidad - d1.electricidad);
        }
    },
});