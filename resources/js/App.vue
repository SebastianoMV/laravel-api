<template>
<main>
 <div v-for="post in posts" :key="post.id">
    {{post.title}}
    ciao
 </div>


</main>

</template>

<script>
import Axios from 'axios';
import MainComp from './components/MainComp.vue';

export default {
    name: 'App',
    components:{
        MainComp,
    },

    data(){
      return{
        posts:[],
      }
    },

    methods: {
        getApi(){
            Axios.get('/api/posts')
            .then(resp =>{
                this.posts = resp.data.posts;
                console.log(this.posts);
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
