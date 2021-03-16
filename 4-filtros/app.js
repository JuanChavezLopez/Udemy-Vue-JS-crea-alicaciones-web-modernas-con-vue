Vue.filter('capitalize', function (string) {
    var primerCaracter = string.charAt(0).toUpperCase();
    var restoCaracteres = string.slice(1, string.lenght);
    return primerCaracter+ restoCaracteres;
})

new Vue ({
    el: '#app'

});