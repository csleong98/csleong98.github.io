<template>
    <div class="about">
        <div class="container">
            <div class="grid-container">
                <div class="profile">
                    <img src="assets/me.jpg" alt="">
                    <p>Me in Hangzhou, West Lake</p>
                </div>
                <div class="aboutme">
                    <h2>Brief History of Me</h2>
                    <hr>
                    <p>You can call me 🧀. That's what most of my friends and colleagues call me here.</p>
                    <h3 class="year">2016</h3>
                    <p>I started out as a front-end web developer where I was developing websites for my father's businesses.</p>
                    <h3 class="year">2016 - 2018</h3>
                    <p>I focus more on designing when I went to university and later help designed graphical content for the clubs and also tech communities in KL.
                    </p>
                    <h3 class="year">2018 - 2019</h3>
                    <p>I joined FutureLab as a UX Designer to help build the experience of their online mentorship SaaS platform.</p>
                    <h3 class="year">2019 - Present</h3>
                    <p>I'm currently a freelance UI/UX Designer and still design for local tech and design communities in Malaysia.</p>
                </div>
                <div class="coffee">
                    <h2>👋 Hey there! I'm actively looking for opportunities in both Interaction Design and Product Design</h2>
                    <p>View my <a href="assets/resume-LeongCheeSeng.pdf" target="_blank"><strong>resume</strong></a></p>
                    <p>Drop me a mail at <a href="mailto:macintoshleong@gmail.com"><strong>macintoshleong@gmail.com</strong></a></p>
                </div>
                <div class="others">
                    <div class="learnings other">
                        <h2>✏️ Currently Learning</h2>
                        <ul>
                            <li>Vue.js Development</li>
                            <li>Interaction Design</li>
                            <li>UI Design</li>
                        </ul>
                    </div>
                    <div class="community other">
                        <h2>🤗 Communities I'm part of</h2>
                        <ul>
                            <li>GDG Cloud KL</li>
                            <li>Sketch Meetup KL</li>
                            <li>APUSDS</li>
                            <li>UM AppClub</li>
                        </ul>
                    </div>
                    <div class="projects other">
                        <h2>🕹️ Hobbies</h2>
                        <ul>
                            <li>Journaling</li>
                            <li>Painting</li>
                            <li>Organising & Participating in Hackathons</li>
                            <li>Walking</li>
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

.profile,
.aboutme,
.coffee {
    margin: 1rem 2rem;
}

    .grid-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 1fr 0.5fr 0.5fr;
        grid-row-gap: 1rem;
        margin-top: 6rem;
        grid-template-areas:
            " profile about "
            " coffee about "
            " others others ";
        @media screen and (max-width: $large-phones){
            grid-template-columns: 1fr;
            grid-template-rows: auto;
            grid-template-areas: 
            " profile "
            " coffee "
            " about "
            " others "
        }
    }

    .profile {
        grid-area: profile;
        text-align: center;
        padding: 1rem 0;

        img {
            border-radius: 10px;
            width: 250px;
            height: 250px;
        }

    }

    .aboutme {
        grid-area: about;
        .year {
            position: relative;
            display: inline-block;
            margin: 5px 0;
        }

        .year::after {
            content: "";
            position: absolute;
            width: 100%;
            height: 3px;
            background-color: $light-blue;
            bottom: 0;
            left: 0;

        }
    }

    .coffee {
        grid-area: coffee;
    }

    .others {
        grid-area: others;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr;
        grid-gap: 1rem;
        margin: 1rem 2rem;
        grid-template-areas:
            " learnings community projects ";
        @media screen and (max-width: $large-phones){
            grid-template-columns: 1fr;
            grid-template-rows: 30px, repeat(3, 1fr);
            grid-template-areas:
            " learnings "
            " community "
            " projects ";
        }
        ul {
            list-style: square;
            padding-left: 2rem;
        }
    }

    .other {
        padding: 1rem;
        background-color: white;
        border-radius: 10px;
        border: 1px solid $light-grey;
        position: relative;
        box-shadow: none;
        transition: all 0.3s ease-out;
    }

    .other:hover, .other:focus {
        transition: all 0.3s ease-out;
        box-shadow: 0 14px 26px rgba(0,0,0,0.2);
    }

    .learnings {
        grid-area: learnings;
    }

    .community {
        grid-area: community;
    }

    .projects {
        grid-area: projects;
    }
</style>