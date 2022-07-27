<template>
    <div class="home">
        SectionHome
        <client-only>
            <div class="swiper" ref="banner-swiper">
                <div class="swiper-wrapper">
                    <!-- <div 
                        class="swiper-slide" 
                        v-for="(item, i) in contentList"
                        :key="i"
                    >
                        <CardProduct size="md" dropTop :content="item"/>
                    </div> -->
                    <div class="swiper-slide">
                        <p>111</p>
                    </div>
                    <div class="swiper-slide">
                        <p>222</p>
                    </div>
                    <div class="swiper-slide">
                        <p>333</p>
                    </div>
                    <div class="swiper-slide">
                        <p>444</p>
                    </div>
                </div>
                <!-- <div class="swiper-scrollbar" ref="scrollbar" /> -->
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
        </client-only>
    </div>
</template>

<script>
import Swiper from "swiper/swiper-bundle.min";
import "swiper/swiper-bundle.min.css";

export default {
    name: 'SectionHome',
    data() {
        return {
            mySwiper: null,
        }
    },
    methods: {
        initSwiper() {
            this.mySwiper = new Swiper(this.$refs['banner-swiper'], {
                speed: 800,
                cssMode: true,
                slidesPerView: "auto",
                spaceBetween: 20,
                slidesPerView: 3,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                // scrollbar: {
                //     el: this.$refs.scrollbar,
                //     hide: false,
                //     draggable: true,
                // },
            });
        },
    },

    mounted() {
        this.$nextTick(this.initSwiper);
    },
    // beforeDestroy() {
    //     if(this.mySwiper) this.mySwiper.destroy();
    // },
}
</script>

<style lang="sass" scoped>
.home
    background-color: #afbeff
    min-height: 100vh
    color: white
</style>