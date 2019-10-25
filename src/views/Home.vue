<template>
  <div class="home">
    <div class="grid-container" v-for="(section, index) in Object.keys(entries)" :key="index">
      <div class="grid-item" v-for="entry in entries[section]" :key="entry.id">
        <div class="grid-item">
          <div class="grid-cell--top">
            <img :src="entry.thumbnail" alt="">
          </div>

          <div class="grid-cell--bottom">
            <div>
              <h4>{{entry.title}}</h4>
            </div>
            <p>{{entry.date}}</p>
            <br>
            <span>{{entry.description}}</span>
            <a @click="$router.push({name: entry.id})">View Project</a>
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
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    grid-auto-rows: auto;
    grid-gap: 1rem;
    margin: 2rem auto;
    width: 90%;
  }

  .grid-item {
    background-color: azure;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 10px 60px;
    position: relative;
  }

  .grid-cell--top,
  .grid-cell--bottom {
    display: flex;
  }

  .grid-cell--top, .grid-cell--top > img {
    border-radius: 4px 4px 0 0;
  }

  .grid-cell--bottom {
    padding: 1rem;
    text-align: left;
    height: 100%;
  }
</style>