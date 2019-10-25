<template>
    <div class="illustrations">
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
</style>