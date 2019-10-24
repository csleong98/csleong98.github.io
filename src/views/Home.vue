<template>
  <div class="home">
    <h1 class="center">My Projects</h1>

    <div class="columns" v-for="(section, index) in Object.keys(entries)" :key="index">
      <div class="column is-3" v-for="entry in entries[section]" :key="entry.id">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img :src="entry.thumbnail" alt="">
            </figure>
          </div>

          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">{{entry.title}}</p>
                <p class="subtitle is-6">{{entry.date}}</p>
                <br>
                <p class="subtitle">{{entry.description}}</p>
              </div>
            </div>
          </div>

          <footer class="card-footer">
            <a class="card-footer-item" @click="$router.push({name: entry.id})">View Project</a>
          </footer>
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

</style>