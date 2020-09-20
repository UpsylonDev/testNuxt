<template>
    <div class="">
        <div class="">
            <Navigation/>
        </div>
        <p>Article de :
            {{ $route.params.auteur}}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed blanditiis
            aperiam ut. Repellendus iure, assumenda itaque, vitae veritatis animi eius
            possimus odio rerum quo voluptatibus ad, magnam suscipit explicabo nesciunt.</p>
            <logo/>
    </div>
</template>

<script>
    import Navigation from '../../components/Navigation'
    import logo from '../../components/Logo'
    export default {
    components: {
            Navigation,
            logo
        }
    }
</script>

<style></style>