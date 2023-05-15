<template>
    <Navbar />
    <div class="container-fluid" id="welcome">
        <div class="row vh-100">
            <div class="col-6 d-flex flex-column justify-content-end align-items-center text-white text-center mt-5">
                <h2 class="display-1 greatings" v-text="currentGreeting"></h2>
                <h1 class="display-1">I'm JO</h1>
                <div class="row m-5">
                    <div class="col-4">
                        <p class="vertical"><span class="line">
                                &lt;</span> Web Developer <span class="line">&gt;</span></p>
                    </div>
                    <div class="col-4">
                        <p class="vertical"><span class="line">
                                &lt;</span> Web Designer <span class="line">&gt;</span></p>
                    </div>
                    <div class="col-4">
                        <p class="vertical"><span class="line">
                                &lt;</span> Learning Database <span class="line">&gt;</span></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-2">
                        <h1>023</h1>
                    </div>
                    <div class="col-8 ms-2">
                        <p class="line">_ find words _</p>
                    </div>
                </div>
            </div>
            <div class="col-6 d-flex justify-content-start align-items-end">
                <div class="row">
                    <!-- Add dynamic component here -->
                    <div class="col-12 d-flex justify-content-start align-items-center">
                        <transition name="fade">
                            <component :is="currentComponent"></component>
                        </transition>
                    </div>
                    <div :class="['col-12', 'd-flex', justifyContentClass, 'align-items-center']">
                        <Links @link-clicked="updateJustifyContent" :currentRoute="$route.name" />
                    </div>
                </div>
            </div>
            <HireMe />
        </div>
    </div>
</template>
  
<script>
import Navbar from '@/components/Navbar.vue'
import HireMe from '@/components/HireMe.vue'
import Links from '@/components/Links.vue'
import Contact from '@/components/Contact.vue'
import Projects from '@/components/Projects.vue'
import Skills from '../components/Skills.vue'

export default {
    name: "Layout",
    components: {
        Navbar,
        HireMe,
        Links,
        Contact,
        Projects,
        Skills
    },

    data() {
        return {
            greetings: [
                'Ciao',
                'Hello',
                'Hola',
                '你好',
                'こんにちは',
                'مرحبا',
                'Привет',
                'Bonjour',
                'Hallo'
            ],
            justifyContentClass: 'justify-content-center',
            currentGreeting: '',
            currentLetterIndex: 0,
            currentGreetingIndex: 0
        }
    },

    mounted() {
        this.updateGreeting();
    },

    methods: {
        updateGreeting() {
            if (this.currentLetterIndex === this.greetings[this.currentGreetingIndex].length) {
                this.currentGreetingIndex = (this.currentGreetingIndex + 1) % this.greetings.length;
                this.currentLetterIndex = 0;
            }

            this.currentGreeting = this.greetings[this.currentGreetingIndex].slice(0, this.currentLetterIndex + 1);
            this.currentLetterIndex++;

            setTimeout(() => {
                this.updateGreeting();
            }, 500);
        },

        updateJustifyContent(link) {
            if (link === 'Contact' || link === 'Projects' || link === 'Skills') {
                this.justifyContentClass = 'justify-content-start';
            } else {
                this.justifyContentClass = 'justify-content-end';
            }
        },
    },

    computed: {
        currentComponent() {
            if (this.$route.name === 'Contact') {
                return 'Contact'
            } else if
                (this.$route.name === 'Projects') {
                return 'Projects'
            } else if
                (this.$route.name === 'Skills') {
                return 'Skills'
            } else
                return null
        }
    }
}
</script>

<style scoped>
#welcome {
    background-image: url("images/bg2.png");
    background-color: hsl(0, 100%, 20%);
    /* background-color: hsl(147, 84%, 15%); */
    background-blend-mode: color-burn;
    ;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
    height: 100vh;
    width: 100%;
}
</style>