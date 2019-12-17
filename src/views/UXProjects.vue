<template>
  <div class="uxprojects">
    <div class="container">
      <div class="header">
        <p class="header-text-1">UI/UX Projects</p>
        <p class="header-text-2">How I use design to solve problems.</p>
        <img class="header-image" src="assets/astronaut.svg" alt="">
      </div>
      <div>
        <h3 class="subheading">All of my projects</h3>
      </div>
      <div class="card-container" v-for="(section, index) in Object.keys(entries)" :key="index">
        <div class="card" v-for="entry in entries[section]" :key="entry.id">
          <div class="card-top">
            <img :src="entry.thumbnail" alt="">
          </div>

          <div class="card-content">
            <div class="content">
              <p class="tag" v-if="entry.status == 'In Progress'">In Progress</p>
              <h4>{{entry.title}}</h4>
              <p class="description">{{entry.description}}</p>
              <a v-if="entry.status == 'In Progress'" @click="openLink(entry.link)">View Updates</a>
              <a v-else-if="entry.status == 'Done'">View Case Study</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import allProjects from '@/statics/data/all-projects.json'

  export default {
    name: "uxprojects",
    computed: {
      entries() {
        return allProjects
      }
    },
    methods: {
      openLink: function(param) {
        window.open(param, "_blank");
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~@/styles/all-projects.scss";
</style>