<template>
<div>
    <div v-for="post in posts" :key="post.id">
        {{post.title}}
        <ul>
            <li v-for="(tag) in post.tags" :key="tag.id">
                {{tag.name}}
            </li>
        </ul>

    </div>
</div>

</template>

<script>
import Axios from 'axios';

export default {
    name: "MainComp",

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
