<template>
<div class="container ">
    <div class="card m-3 p-3" v-for="post in posts" :key="post.id">
        <h3>{{post.title}}</h3>
        <p>{{post.content}}</p>
        <ul>
            <li v-for="(tag) in post.tags" :key="tag.id" :class="tag.slug">
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

<style lang="scss" scoped>
.card{

    ul{
        padding: 0;
        list-style: none;
        display: flex;
        li{
            font-size: small;
            font-weight: 600;
            margin-right: 10px;
        }
        .multiplayer{
            color: red;
        }
        .singleplayer{
            color: blueviolet;
        }
        .openworld{
            color: green;
        }
        .online{
            color: blue;
        }
    }
    background-color: rgb(232, 229, 229);

}


</style>
