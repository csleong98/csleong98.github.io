<template>
  <div class="home">
    <div class="container">
      <div class="header">
        <p class="header-text-1">Hi there. I'm a User Experience Designer</p>
        <p class="header-text-2">Aspire to improve the world with good design</p>
        <p class="header-text-3">Previously designed in <a href="https://futurelab.my" target="_blank">FutureLab</a></p>
        <img class="header-image" src="assets/astronaut.svg" alt="">
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

<style lang="scss">
  @import "~@/styles/home.scss";
</style>