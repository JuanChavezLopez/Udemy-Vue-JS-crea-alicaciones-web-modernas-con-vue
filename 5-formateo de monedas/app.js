Vue.filter('moneda', function(valor){
    return accounting.formatMoney(valor);
})

new Vue ({
    el: '#app',
    data: {
        inventario: [
            {nombre:'Galaxy', precio:'250'},
            {nombre:'iPhone', precio:'450'},
            {nombre:'iPad', precio:'389.5'},
            {nombre:'Laptop gamer', precio:'665.99'}
        ]
    }

});