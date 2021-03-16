Vue.filter('fecha', function(date){
    return moment(date).format('LLL');
})

new Vue ({
    el: '#app',
    data: {
        fechaRevFranc: '1789-05-05 17'
    }
});