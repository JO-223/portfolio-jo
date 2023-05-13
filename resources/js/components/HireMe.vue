<template>
    <div class="col-1 text-end position-relative">
        <div class="vertical-text position-absolute bottom-0 end-0">
            <a href="#" class="btn">UpWork</a><br />
            <a href="#" class="btn ">Github</a><br />
        </div>
    </div>
</template>

<script>
export default {
    name: "HireMe",
};
</script>

<style scoped>
.vertical-text a {
    display: block;
    writing-mode: vertical-lr;
}
</style>