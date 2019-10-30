<template>
    <div class="about">
        <div class="container">
            <div class="grid-container">
                <div class="profile">
                    <div class="picture-container">
                        <img src="assets/me.jpg" alt="" class="is-fullwidth">
                        <p>Me in Hangzhou, West Lake</p>
                    </div>
                </div>
                <div class="aboutme">
                    <h2>About Me</h2>
                    <hr>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde perspiciatis aperiam eius possimus? Sapiente qui eum minus eos perferendis soluta dolores, neque dolorum earum natus sunt tenetur deserunt reprehenderit excepturi?</p>
                </div>
                <div class="others">
                    others
                    <div class="learnings">
                        <h2>Interested & Learning</h2>
                        <ul>
                            <li>Vue.js Development</li>
                            <li>Interaction Design</li>
                            <li>UI Design</li>
                        </ul>
                    </div>
                    <div class="community">
                        <h2>Communities I'm part of</h2>
                        <ul>
                            <li>GDG Cloud KL</li>
                            <li>Sketch Meetup KL</li>
                            <li>Hackathons</li>
                        </ul>
                    </div>
                    <div class="projects">
                        <h2>Projects I'm working on</h2>
                        <ul>
                            <li>1stDayHack</li>
                            <li>Cloud Devfest KL 2019</li>
                            <li>FutureHack 2020</li>
                            <li>Building my portfolio</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "about"
    };
</script>

<style lang="scss" scoped>
@import "~@/styles/_variables.scss";

    .grid-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 2fr 1fr;
        grid-row-gap: 1rem;
        grid-template-areas:
            " profile about "
            " others others ";
        @media screen and (max-width: $large-phones){
            grid-template-columns: 1fr;
            grid-template-rows: auto;
            grid-template-areas: 
            " profile "
            " about "
            " others "
        }
    }

    .profile {
        grid-area: profile;
    
        .picture-container {
            text-align: center;
            margin: 1rem 2rem;
        }

        img {
            border-radius: 10px;
            width: 250px;
            height: 250px;
        }
    }

    .aboutme {
        background-color: darkgray;
        margin: 1rem 2rem;
        grid-area: about;
    }

    .others {
        background-color: aquamarine;
        grid-area: others;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: auto;
        grid-gap: 1rem;
        margin: 1rem 2rem;
        grid-template-areas:
            " . . . "
            " learnings community projects ";
        @media screen and (max-width: $large-phones){
            grid-template-columns: 1fr;
            grid-template-rows: 30px, repeat(3, 1fr);
            grid-template-areas:
            " . " 
            " learnings "
            " community "
            " projects ";
        }
    }

    .learnings {
        background-color: beige;
        grid-area: learnings;
    }

    .community {
        background-color: bisque;
        grid-area: community;
    }

    .projects {
        background-color: burlywood;
        grid-area: projects;
    }
</style>