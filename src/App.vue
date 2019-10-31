<template>
  <div id="app">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <div class="container">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <router-link class="navbar-item" to="/">
            <span>🧀 Chee Seng Leong</span>
          </router-link>

          <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false"
            data-target="navbarBasicExample" :class="{ 'is-active': showNav }" @click="showNav = !showNav">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': showNav }">
          <div class="navbar-end">
            <router-link to="/" class="navbar-item">
              UX Projects
            </router-link>
            <router-link to="/about" class="navbar-item">
              About
            </router-link>
          </div>
        </div>
      </nav>
    </div>


    <div class="container" >
      <router-view />
    </div>

    <footer class="footer">
      <div class="content has-text-centered">
        <span class="social-icons">
          <a href="https://www.facebook.com/cheesengleong" class="icon is-large" target="_blank">
            <i class="fab fa-facebook-square"></i>
          </a>
          <a href="https://www.linkedin.com/in/cheesengleong/" class="icon is-large" target="_blank">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="https://dribbble.com/csleong98" class="icon is-large" target="_blank">
            <i class="fab fa-dribbble"></i>
          </a>
          <a href="https://www.behance.net/csleong" class="icon is-large" target="_blank">
            <i class="fab fa-behance"></i>
          </a>
          <a href="https://twitter.com/CheeSengLeong" class="icon is-large" target="_blank">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://github.com/csleong98" class="icon is-large" target="_blank">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://medium.com/@macintoshleong" class="icon is-large" target="_blank">
            <i class="fab fa-medium"></i>
          </a>
        </span>
        <p>
          Designed & Built by Chee Seng Leong with <i class="fas fa-heart"></i>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data: function () {
      return {
        showNav: false
      }
    },
    watch: {
      '$route' () {
        this.showNav = false
      }
    }
  }
</script>

<style lang="scss">
@import "~@/styles/_variables.scss";

  @media screen and (max-width: $tablet){
    .navbar {
      padding-top: 2rem;
      margin: 0 !important;
      position: fixed !important;
      width: 100%;
      box-shadow: 0 8px 16px rgba(125, 153, 255, 0.1);

      .navbar-menu {
        box-shadow: 0 20px 16px rgba(125, 153, 255, 0.1);
      }
    }
  }

  #app {
    min-height: 100vh;
    overflow: hidden;
    display: block;
    position: relative;
    padding-bottom: 168px;
    /* height of the footer */
  }

  .navbar {
    margin: 1rem 0 1rem 0;
    font-size: 20px !important;
  }

  footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2.5rem;
    padding: 2rem 0;
  }
</style>

<style lang="sass">
  @import "~bulma/bulma.sass";
</style>