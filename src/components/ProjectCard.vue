<template>
    <div>
        <div class="post-card">
            <div class="card">
                <div class="card-image">
                    <figure class="image is-square">
                        <img :src="image" alt="Placeholder image">
                    </figure>
                </div>

                <div class="card-context">
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-4">{{title}}</p>
                            <p class="title is-6">{{date}}</p>
                        </div>
                    </div>

                    <div class="content">
                        <p>{{snippet}}</p>
                        <router-link to="/" class="button is-fullwidth">View Project</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProjectCard"
}
</script>

<style lang="sass" scoped>
    
</style>