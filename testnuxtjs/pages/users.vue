<template>
    <div class="">
        <Nav></Nav>
        <h2 class="liens">Page users Parent qui contiens le contenu du dossier users </h2>
        <nuxt-child class="enfant"></nuxt-child>
    </div>
  
</template>

<script>
import Nav from '../components/Navigation'
    export default {
        components: {
            Nav,
        },
    }
</script>

<style>
.enfant {
    padding: 30px;
    margin: 20px;
    background-color:rgb(206, 206, 206);
}


</style>