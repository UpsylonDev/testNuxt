<template>
    <div ref="links" class="navigation">
      <nuxt-link to="/" class="liens">Home</nuxt-link>
      <nuxt-link to="/about" class="liens">Vers page about</nuxt-link>
      <nuxt-link to="/users/" class="liens">Vers Users</nuxt-link>
      <nuxt-link to="/articles" class="liens">Articles</nuxt-link>
      <nuxt-link to="/articles/:auteur" class="liens">Articles par auteurs</nuxt-link>

    </div>
</template>

<script>
export default {
  mounted () {
    this.hideLink()
  },
  methods: {
    hideLink() {
      console.log('cacher les liens inutiles à faire....')
      // faire une methode globale qui ajoute une class hide aux liens à masquer
  
      
    }
  },

}
</script>

<style>
.navigation {
  padding: 30px;
}
</style>