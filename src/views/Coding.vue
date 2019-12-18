<template>
  <div class="uxprojects">
    <div class="container">
      <div class="header">
        <p class="header-text-1">Coding</p>
        <p class="header-text-2">Understanding the value of design by building it.</p>
        <img class="header-image" src="assets/illustrations/coding-illustration.svg" alt="">
      </div>
      <div>
        <h3 class="subheading">All of my projects</h3>
      </div>
      <div class="card-container" v-for="(section, index) in Object.keys(entries)" :key="index">
        <div class="card" v-for="entry in entries[section]" :key="entry.id" @click="openLink(entry.link)">
          <div class="card-top">
            <img :src="entry.thumbnail" alt="">
          </div>

          <div class="card-content">
            <div class="content">
              <p class="tag">{{entry.status}}</p>
              <h4>{{entry.title}}</h4>
              <p class="description">{{entry.description}}</p>
              <a @click="openLink(entry.link)">View Project</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import codingProjects from '@/statics/data/coding.json'

  export default {
    name: "uxprojects",
    computed: {
      entries() {
        return codingProjects
      }
    },
    methods: {
      openLink: function(param) {
        window.open(param, "_blank");
      }
    }
  };
</script>

<style lang="scss">
  @import "~@/styles/home.scss";
.tag {
    background-color: $blue !important;
    color: white !important;
}
</style>