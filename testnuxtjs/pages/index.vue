<template>
  <div class="container">
    <Navigation></Navigation>
    <div class="">
      <Logo />
      <h1 class="title">
        Test Nuxt 
      </h1>
    </div>
  </div>
</template>

<script>
import Navigation from '../components/Navigation'

export default {
  components: {
    Navigation,
  },
}
</script>

<style>
.container {
  margin: 5%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.liens {
  font-size: 1.5rem;
}
</style>
