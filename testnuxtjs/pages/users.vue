<template>
    <div class="red">
        <Nav></Nav>
        <h2 class="liens">Page users Parent qui contiens le contenu du dossier users </h2>
        <!-- charge le dossier : users -->
        <nuxt-child class="enfant"></nuxt-child>
    </div>
  
</template>

<script>
import Nav from '../components/Navigation'
    export default {
        components: {
            Nav,
        },
        layout : 'users'
    }
</script>

<style lang="scss">
.enfant {
    padding: 30px;
    margin: 20px;
    background-color:rgb(206, 206, 206);
}
.red {
    background-color:rgba(223, 43, 43, 0.383);
}


</style>