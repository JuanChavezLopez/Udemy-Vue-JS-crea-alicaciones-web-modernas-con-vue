<template>
    <div>
        
        <ul class="list-group">
            <h1 class="text-center">LIST PRODUCTS</h1>
            <li class="list-group-item" v-for="item in items" :key="item.id">
                
                <div class="row">
                    <div class="col-md-8">
                        {{ item.titulo }} - ${{ item.precio }}
                    </div>
                    <div class="col-md-4">
                        <button class="btn btn-danger float-right" @click="removerItem(item)">Delete</button>
                    </div>
                </div>
            </li>
        </ul>
        <div class="card p-3 my-5">
            <h4 class="text-center total">Total: $ {{ total }}</h4>

        </div>
        <button :hidden="items.length === 0" @click="$emit('pagar')" class="btn btn-info form-control pagar">Pay now</button>
    </div>
</template>

<script>
export default {
    name: 'Carrito',
    props: ['items'],
    computed: {
        total() {
            return this.items.reduce((acumulador, item) => acumulador + Number(item.precio), 0);
        }
    },
    methods: {
        removerItem(item) {
            this.$emit('remover-item', item);
        }
    },
    
}
</script>

<style>
    .total {
        font-size: 40px;
        font-weight: 800;
        color: black;
        /* background: linear-gradient(to right,#ff1d25 5%,#a0328c 35%,#7040a4 45%,#4359c7 55%,#0082e6 70%); */
        /* padding: 20px; */
        /* display: inline-block; */
        /* background-color: green; */
    }
    .pagar{
        color: white;
        font-size: 40px;
        padding: 25px;
        background: linear-gradient(to right,#ff1d25 5%,#a0328c 35%,#7040a4 45%,#4359c7 55%,#0082e6 70%);
    }
</style>