<template>
  <div id="app">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <p>Chee Seng Leong</p>
        </router-link>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false"
          data-target="navbarBasicExample" :class="{ 'is-active': showNav }" @click="showNav = !showNav">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': showNav }">
        <div class="navbar-start">

        </div>

        <div class="navbar-end">
          <router-link to="/" class="navbar-item">
            UX Designs
          </router-link>
          <router-link to="/illustrations" class="navbar-item">
            Illustrations
          </router-link>
          <router-link to="/about" class="navbar-item">
            About
          </router-link>
        </div>
      </div>
    </nav>


    <div class="container">
        <router-view />
    </div>
  
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          Built by Chee Seng Leong with <i class="fas fa-heart"></i>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>

  export default {
    name: 'App',
    data: function() {
      return {
        showNav: false
      }
    }
  }
</script>

<style>
  #app {
    min-height: 100vh;
    overflow: hidden;
    display: block;
    position: relative;
    padding-bottom: 168px; /* height of the footer */
  }

  footer {
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  .header {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 1rem;
    margin: 4rem auto;
    width: 90%;
  }

  .header-text {
    font-size: 3rem;
  }

  .header-secondary-text {
    font-size: 1.5rem;
  }

</style>

<style lang="sass">
  @import "~bulma/bulma.sass";
  @import "~@/styles/style.sass";
</style>