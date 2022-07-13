<template>

</template>

<script>
import Axios from 'axios';

export default {
    name: 'App',

    methods: {
        getApi(){
            Axios.get('/api/posts')
            .then(resp =>{
                console.log(resp.data);
            })
        }
    },

    mounted() {
        this.getApi()
    },

}
</script>

<style>

</style>
