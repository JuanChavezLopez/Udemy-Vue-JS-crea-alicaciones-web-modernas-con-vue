<template>
    <div>
        <ul class="list-group">
            <h1 class="text-center">LIST PRODUCTS</h1>
            <li class="list-group-item" v-for="item in items" :key="item.id">
                <div class="row list-products">
                    <div class="col-md-6">
                        {{ item.titulo }} - ${{ item.precio }}
                    </div>
                    <div class="col-md-2">
                        <img style="width:100px;" :src="item.imagen" alt="">

                    </div>
                    <div class="col-md-2">
                        {{ unidades }}

                    </div>
                    <div class="col-md-2">
                        <button class="btn btn-danger float-right" @click="removerItem(item)">Delete</button>
                    </div>
                </div>
            </li>
        </ul>
        <div class="card p-3 my-5">
            <h4 class="text-center total">Total: $ {{ total }}</h4>

        </div>
        <button :hidden="items.length === 0" @click="$emit('eventoPagar')" class="btn btn-info form-control pagar">Pay now</button>
        <img style="width:710px;" src="https://www.romania-insider.com/sites/default/files/styles/article_large_image/public/2020-07/emag_store_-_photo_lenutaidi_-_dreamstime.com_.jpg" alt="">
    </div>
</template>

<script>
export default {
    name: 'Carrito',
    props: ['items', 'unidades'], /* recibimos los items que nos envian del padre */
    computed: {
        total() {
            return this.items.reduce((acumulador, item) => acumulador + Number(item.precio)*this.unidades, 0);
        }
    },
    methods: {
        removerItem(item) {
            this.$emit('eventoRemoverItem', item);
        }
    },
    
}
</script>

<style>

    .boxs {
        /* display: flex;
        flex-direction: column;
        align-items: center; */
    }
    .list-products {
        display: flex;
        /* flex-direction: column; */
        align-items: center;
    }
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