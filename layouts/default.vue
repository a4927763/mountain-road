<template>
    <div class="default-layout">
        <Header />
        <Nuxt />

        <transition name="slide">
            <div v-show="isScrollBtnShow" class="scroll-btn">
                <scroll-btn dir="up"></scroll-btn>
            </div>
        </transition>

        <Footer />
    </div>
</template>
<script>
import Header from "~/components/_shared/header/Header.vue";
import Footer from "~/components/_shared/footer/Footer.vue";
import ScrollBtn from "~/components/_shared/ScrollBtn.vue";

export default {
    components: {
        Header,
        Footer,
        ScrollBtn,
    },
    watch: {
        $route() {
            this.$nextTick(this.resizeHandler);
        },
        $_vsScrollY(newV, oldV) {
            this.windowScrollY = newV
        }
    },
    data() {
        return {
            windowScrollY: 0,
            windowHeight: 0
        }
    },
    computed: {
        isScrollBtnShow() {
            return this.windowScrollY > 0.8 * this.windowHeight;
        },
    },
    methods: {
        resizeHandler() {
            let vh = window.innerHeight * 0.01;
            let root = document.documentElement;
            root.style.setProperty("--vh", `${vh}px`);
        },
        scrollHandler() {
            this.windowScrollY = this.$_vsScrollY
            this.windowHeight = this.$_vsHeight;
        },
        addEventListeners() {
            window.addEventListener("resize", this.resizeHandler);
            window.addEventListener("scroll", this.scrollHandler);
            
        },
        removeEventListeners() {
            window.removeEventListener("resize", this.resizeHandler);
            window.removeEventListener("scroll", this.scrollHandler);

        },

    },

    mounted() {
        
        this.$nextTick(() => {
            this.addEventListeners();
            this.resizeHandler();
            this.scrollHandler();
        
        });
    },
    beforeDestroy() {
        this.removeEventListeners();
    },
}

</script>

<style lang="sass" scoped>
.scroll-btn
    position: fixed
    right: 0
    bottom: 0
    z-index: 1
    width: 50px
    height: 50px
    transform: translateY(0)
    // @screen md
    //     width: 40px
    //     height: 40px

.slide-enter-active,
.slide-leave-active
    transition: all .5s ease-in-out

.slide-enter,
.slide-leave-to
    transform: translateY(100%)
</style>