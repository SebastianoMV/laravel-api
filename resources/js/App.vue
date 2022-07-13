<template>
<main>

    <h1 class="animate__animated animate__fadeIn text-center  m-4">Sheikah's forum</h1>

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

</style>
