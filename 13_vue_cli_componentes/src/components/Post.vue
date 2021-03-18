<template>
    <div>
        <p>Hola....estamos creando un nuevo componente..!</p>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Titulo</th>
                    <th scope="col">Body</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="post in post" :key="post.id">
                    <td>{{ post.id }}</td>
                    <td>{{ post.titulo }}</td>
                    <td>{{ post.body }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
  name: "EjemploPost",
  data() {
    return {
        post: [
            {id:1, titulo:'Post1', body:'buen dia'},
            {id:2, titulo:'Post2', body:'buen dia'},
            {id:3, titulo:'Post3', body:'buen dia'},
            {id:4, titulo:'Post4', body:'buen dia'},
            {id:5, titulo:'Post5', body:'buen dia'},
            {id:6, titulo:'Post6', body:'buen dia'}
        ]
    };
  },
};
</script>

<style>
</style>