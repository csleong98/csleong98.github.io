<template>
  <div id="app">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <div class="container">
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
    data: function () {
      return {
        showNav: false
      }
    }
  }
</script>

<style lang="scss">
  @import "~@/styles/style.sass";

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
    router-link {
      font-size: 1.5rem;
    }
  }

  .header {
    display: grid;
    grid-template-columns: 3fr minmax(250px, 350px);
    grid-template-rows: auto;

    @media screen and (max-width: $large-phones) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      grid-template-areas:
        " image "
        " text1 "
        " text2 "
        " text3 ";
    }

    grid-gap: 1rem;
    margin: 4rem auto;
    width: 90%;
    grid-template-areas: 
    " text1 image "
    " text2 image "
    " text3 image ";
  }

  .header-text-1 {
    background-color: bisque;
    font-size: 3rem;
    grid-area: text1;
  }

  .header-text-2 {
    background-color: aquamarine;
    font-size: 1.5rem;
    grid-area: text2;
  }

  .header-text-3 {
    background-color: aquamarine;
    font-size: 1.5rem;
    grid-area: text3;
  }

  .header-image {
    background-color: chocolate;
    grid-area: image;
  }

  footer {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
</style>

<style lang="sass">
  @import "~bulma/bulma.sass";
</style>