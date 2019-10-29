<template>
  <div class="home">
    <div class="container">
      <div class="header">
        <p class="header-text-1">Hi there. I'm a User Experience Designer</p>
        <p class="header-text-2">Aspire to improve the world with good design</p>
        <p class="header-text-3">Previously designed in <a href="https://futurelab.my" target="_blank">FutureLab</a></p>
        <p class="header-image">My Astronaut Image</p>
      </div>
      <div>
        <h3 class="subheading">My Recent Work</h3>
      </div>
      <div class="grid-container" v-for="(section, index) in Object.keys(entries)" :key="index">
        <div class="card" v-for="entry in entries[section]" :key="entry.id">
          <div class="card-top">
            <img :src="entry.thumbnail" alt="">
          </div>

          <div class="card-content">
            <div class="content">
              <h4>{{entry.title}}</h4>
              <p class="description">{{entry.description}}</p>
              <a class="" @click="$router.push({name: entry.id})">View Case Study</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import projectEntries from '@/statics/data/project.json'

  export default {
    name: "home",
    computed: {
      entries() {
        return projectEntries
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~@/styles/style.sass";

  .subheading {
    text-transform: uppercase;
    margin: auto;
    width: 90%;
  }

  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));

    @media screen and (max-width: $large-phones) {
      grid-template-columns: repeat(1, 1fr);
    }

    grid-gap: 1rem;
    margin: 2rem auto;
    width: 90%;
  }

  .card {
    background-color: azure;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 10px;
    position: relative;
  }

  .card-top,
  .card-content {
    display: flex;
  }

  .card-top,
  .card-top>img {
    border-radius: 10px 10px 0 0;
    width: 100%;
  }

  .card-content {
    padding: 1.5rem;
    text-align: left;
  }

  .card-content>a {
    padding: 1rem 2rem 2rem;
    align-items: flex-end;
  }
</style>