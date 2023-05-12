<template>
    <Navbar />
    <div class="container-fluid" id="welcome">
        <div class="row vh-100">
            <div class="col-7 d-flex flex-column justify-content-end align-items-center text-white text-center">
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
            <div class="col-4 d-flex justify-content-end align-items-center ">
                <img src="images/bg1.jpg" class="" alt="Your Image" style="width: 20%; height: auto;" />
            </div>
            <div class="col-1 text-end position-relative">
                <div class="vertical-text position-absolute bottom-0 end-0">
                    <a href="#" class="btn">UpWork</a><br />
                    <a href="#" class="btn ">Github</a><br />
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import Navbar from '@/components/Navbar.vue'

export default {
    components: {
        Navbar
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
        }
    }
}
</script>
  
<style scoped>
#welcome {
    background-image: url('images/bg2.png');
    background-color: hsl(0, 94%, 27%);
    /* background-color: hsl(208, 64%, 54%); */
    background-blend-mode: color-burn;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
    height: 100vh;
    width: 100%;
}


.vertical-text a {
    display: block;
    writing-mode: vertical-lr;
}

.vertical {
    writing-mode: vertical-lr;
    text-orientation: mixed;
}
</style>
  