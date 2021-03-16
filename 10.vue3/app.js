const app = Vue.createApp({
    template: `
        <button v-on:click="incrementar(5)">Incrementar</button>
        <p> {{ contador }} </p>
        <div v-if="esPar(contador) && contador !== 0">
            Es par
        </div>
        <div v-else>
            No es par
        </div>
        <div v-for="num in numeros">
            <div :class="getClass(num)" :title="num">
                {{ num }}
            </div>
        </div>
    `,
    data() {
        return {
            msg: 'Hola mundo',
            persona: {
                nombre: 'Grover',
                edad: 39
            }, 
            contador: 0,
            numeros: [1,2,3,4,5,6,7,8,9]
        }
    },
    methods: {
        incrementar(val){
            this.contador += val;
        }, 
        esPar(num) {
            return num % 2 === 0
        },
        getClass(num) {
            if (this.esPar(num)) {
                return 'rojo';
            }
            return 'azul';
        }
    },
    computed: {
        listarNumero() {
            return this.numeros;
        }
    }
});

app.mount('#app');