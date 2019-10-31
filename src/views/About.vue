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
                    <h2>Brief History of Me</h2>
                    <hr>
                    <p>You can call me 🧀. That's what most of friends and colleague call me here.</p>
                    <h3>2016</h3>
                    <p>I started out as a front-end web developer back in 2016 where I was developing websites for my father's businesses.</p>
                    <h3>2016-2018</h3>
                    <p>I focus more on designing when I went to university and later help designed graphical content for the clubs and also tech communities in KL.
                    </p>
                    <h3>2018-2019</h3>
                    <p>I joined FutureLab as a UX Designer to help build the experience of their online mentorship Saas platform.</p>
                    <h3>2019-Present</h3>
                    <p>I'm currently a freelance UI/UX Designer and still design for local tech and design communities in Malaysia.</p>
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
h2 {
    font-size: 1.5rem;
}

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
            padding: 1rem 0;
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