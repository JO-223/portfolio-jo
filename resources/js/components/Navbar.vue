<template>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
        <!-- Navbar brand -->
        <div class="container">
            <router-link class="navbar-brand title-animation1" to="/">JO Web Design</router-link>
            <!-- Navbar toggler -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="nav-icon"></span>
                <span class="nav-icon"></span>
                <span class="nav-icon"></span>
            </button>
            <!-- Navbar collapse -->
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!-- Navbar links -->
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/login">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/projects">Projects</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/skills">Skills</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/contact">Contact</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
  
<script>
export default {
    name: "Navbar",
    mounted() {
        console.log('Component mounted.')
        const title = document.querySelector(".title-animation1");
        const text = title.textContent;
        const letters = text.split("");
        title.textContent = "";
        let i = 0;
        let interval;
        const animateTitle = () => {
            interval = setInterval(() => {
                if (i < letters.length) {
                    title.textContent += letters[i];
                    i++;
                } else {
                    clearInterval(interval);
                    setTimeout(() => {
                        title.textContent = text[0];
                        i = 1;
                        animateTitle();
                    }, 4000);
                }
            }, 200);
        };
        animateTitle();
    }
};
</script>
