<template>
<main>

    <div class="d-flex justify-content-center">
        <h1 class="animate__animated animate__fadeIn text-center">Sheikah's forum</h1>
        <img class="animate__animated animate__fadeInDown text-center" src="../../public/image/1200px-The_Legend_of_Zelda_-_Sheikah_Symbol.svg.png" alt="">
    </div>


    <MainComp/>

</main>

</template>

<script>

import MainComp from './components/MainComp.vue';

export default {
    name: 'App',
    components:{
        MainComp,
    },

}
</script>

<style lang="scss" scoped>
h1{
    font-size: 100px;
    animation-duration: 3s;
}
img{
    height: 150px;
    animation-duration: 4s;
}

</style>
