<template>
  <div class="enfant">
      <nuxt-link to="/users/articles" class="liens">Articles</nuxt-link>
      <nuxt-link to="/users" class="liens">Users </nuxt-link>
    <h1>Contient le contenu du dossier users qui est désormais un enfant de Users.vue</h1>
    <h1>Users : Yann, machin , machine </h1>
      <!-- lien interne à l'enfant users qui s'affichera dans users -->

  </div>
</template>

<script>
export default {
}
</script>

<style>


</style>