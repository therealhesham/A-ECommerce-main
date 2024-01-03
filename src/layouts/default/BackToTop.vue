<script>
export default {
    methods: {
        scrollMethod() {
            this.$nextTick(() =>
                document.getElementById("home").scrollIntoView({ behavior: "smooth" })
            );
        },
    },
};
</script>
<template>
    <a class="back-to-top d-flex justify-center" @click="scrollMethod">
        <v-icon> mdi-arrow-up</v-icon>
    </a>
</template>
<style scoped>
.back-to-top {
    width: 3%;
    text-align: center;
    color: #fff;
    position: fixed;
    background: linear-gradient(to top left, #82bce9ef, #f88fb4ee) !important;
    border-radius: 50%;
    padding: 0.5rem;
    bottom: 20px;
    right: 20px;
    font-size: 20px;
    opacity: 1;
    transition: all 0.3s;
}

.back-to-top:hover {
    color: #fff;
    background: rgba(89, 77, 182, 0.492);
}

@media (max-width: 900px) {
    .back-to-top {
        width: 10%;
        bottom: 4px;
        right: 4px;
        font-size: 12px;
    }
}
</style>