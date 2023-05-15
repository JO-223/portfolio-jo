<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" :class="{ active: currentRoute === 'Projects' }"
                            @click="linkClicked('Projects')">
                            Projects
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" :class="{ active: currentRoute === 'Skills' }" @click="linkClicked('Skills')">
                            Skills
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" :class="{ active: currentRoute === 'Contact' }" @click="linkClicked('Contact')">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
  
<script>
export default {
    name: "Links",

    props: {
        currentRoute: String,
    },

    methods: {
        linkClicked(link) {
            this.$emit("link-clicked", link);
            this.$router.push({ name: link });
        },
    },
};
</script>
  