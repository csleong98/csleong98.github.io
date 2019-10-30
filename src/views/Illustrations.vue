<template>
    <div class="illustrations">
        <div class="header">
            <p class="header-text">Illustrations</p>
            <p class="header-secondary-text">Telling stories through illustrations</p>
        </div>

        <div class="grid-container" v-for="(section, index) in Object.keys(entries)" :key="index">
            <div class="card" v-for="entry in entries[section]" :key="entry.id">
                <div class="card-top">
                    <img :src="entry.thumbnail" alt="">
                </div>

                <div class="card-content">
                    <div class="content">
                        <h4>{{entry.title}}</h4>
                        <a class="" @click="$router.push({name: entry.id})">View Project</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import illustrationEntries from "@/statics/data/illustration.json";

    export default {
        name: "illustrations",
        computed: {
            entries() {
                return illustrationEntries
            }
        }
    }
</script>

<style lang="scss" scoped>

    .grid-container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);

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
        height: 100%;
    }

    .card-content > a {
        padding: 1rem 2rem 2rem;
        align-items: flex-end;
    }
</style>