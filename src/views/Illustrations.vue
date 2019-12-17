<template>
  <div class="home">
    <div class="container">
      <div class="header">
        <p class="header-text-2">Illustrations helped me visualise a problem and also its fun!</p>
        <img class="header-image" src="assets/astronaut.svg" alt="">
      </div>
      <div>
        <h3 class="subheading">my recent illustrations</h3>
      </div>
      <div class="card-container" v-for="(section, index) in Object.keys(entries)" :key="index">
        <div class="card" v-for="entry in entries[section]" :key="entry.id">
          <div class="card-top">
            <img :src="entry.thumbnail" alt="">
          </div>

          <div class="card-content">
            <div class="content">
              <h6>{{entry.title}}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import illustrationEntries from '@/statics/data/illustrations.json'

  export default {
    name: "home",
    computed: {
      entries() {
        return illustrationEntries
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
  // @import "~@/styles/illustrations.scss";
</style>