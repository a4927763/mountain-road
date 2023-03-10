<template>
    <div class="topic-section relative">
        <div class="container">
            <SectionTitle text="熱門主題"/>
            <div class="relative mt-[26px]">
                <client-only>
                    <div ref="topic-carousel"
                        class="swiper"
                    >
                        <div class="swiper-wrapper">
                            <div class="swiper-slide"
                                v-for="(item, i) in bannerList" 
                                :key="'topic-card-key'+i"
                            >
                                <div class="card">
                                    <div class="card__img">
                                        <img :src="item.url" alt="">      
                                    </div>
                                    <div class="card__title-block">
                                        title
                                    </div>              
                                </div>
                            </div>
                        </div>   
                    </div>
                </client-only>
                <div @click="slideMove(-1)" class="swiper-btn rounded-[50%] flex items-center justify-center swiper-btn-left cursor-pointer bg-white/80 w-10 h-10">
                    <span class="i i-carousel-left"></span>
                </div>
                <div @click="slideMove(1)" class="swiper-btn rounded-[50%] flex items-center justify-center swiper-btn-right cursor-pointer bg-white/80 w-10 h-10">
                    <span class="i i-carousel-right"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SectionTitle from "~/components/_shared/title/SectionTitle.vue";

import Swiper from "swiper/swiper-bundle.min";
import "swiper/swiper-bundle.min.css";

export default {
    name: 'TopicCarousel',
    components: {
        SectionTitle
    },
    data() {
        return {
            mySwiper: null,
            bannerList: [
                {
                    url: require("~/static/images/dummy/home/topic-1.jpg"),
                    id: 1,
                    title: '111 BORN TO BE WILD',
                    description: '111 Outdoor專業選物店，提供各式戶外活動行程及登山、露營配備，跟我們一起走進大自然，探索山林之美！',      
                },
                {
                    url: require("~/static/images/dummy/home/topic-2.jpg"),
                    id: 2,
                    title: '222 BORN TO BE WILD',
                    description: '222 Outdoor專業程及登山、露一起走進大自然，探索山林之美！',      
                },
                {
                    url: require("~/static/images/dummy/home/topic-3.jpg"),
                    id: 3,
                    title: '333 BORN TO BE WILD',
                    description: '333 Outdoor專業備，跟我們一起走進大自然，探索山林之美！',      
                },
                {
                    url: require("~/static/images/dummy/home/topic-1.jpg"),
                    id: 4,
                    title: '444 BORN TO BE WILD',
                    description: 'Outdoor專業動行程及登山、露營配備，跟我們一起走進大自然，探索山林之美！',      
                },
                {
                    url: require("~/static/images/dummy/home/topic-2.jpg"),
                    id: 5,
                    title: '555 BORN TO BE WILD',
                    description: '5555 5 5 5',      
                },
                {
                    url: require("~/static/images/dummy/home/topic-3.jpg"),
                    id: 6,
                    title: '666 BORN TO BE WILD',
                    description: '666 Outdoor專業選物店，提供各式戶外活動行程及登山、露營配備，跟我們一起走進大自然，探索山林之美！',      
                },
            ]
        }
    },
    methods: {
        slideMove(move) {
            move <= 0
                ? this.mySwiper.slidePrev()
                : this.mySwiper.slideNext();
        },

        initSwiper() {
            this.mySwiper = new Swiper(this.$refs['topic-carousel'], {
                loop: true,
                slidesPerView: 3,
                spaceBetween: 20,
                centeredSlides: true,
            });
        },
    },
    mounted() {
        this.$nextTick(() => {
            setTimeout(this.initSwiper, 0);
        });
    },
}
</script>

<style lang="sass" scoped>
.swiper 
    min-height: 520px
    max-height: 520px
.swiper-wrapper
    min-height: 520px
    max-height: 520px

.swiper-btn
    position: absolute
    z-index: 10
    top: calc(50%)
    transform: translateY(-50%)
    &-left
        left: 25px
    &-right
        right: 25px
.swiper-slide-active
    .card__img
        padding-bottom: 129.3% !important
    .card__title-block
        opacity: 1 !important

.topic-section
    background-image: url(~/static/images/others/home-topic-bg.jpg)
    background-repeat: no-repeat
    background-position: center
    background-size: cover
    background-attachment: fixed
    padding: 40px 0 70px
    ::v-deep(.swiper-wrapper)
        align-items: center
    .card
        position: relative
        width: 80%
        border-radius: 5.3px
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25)
        margin: auto
        &__img
            width: 100%
            height: 0
            padding-bottom: 108.69% 
            position: relative
            transition: all 0.3s
            img
                position: absolute
                width: 100%
                height: 100%
                object-fit: cover
        &__title-block
            position: absolute
            bottom: 0
            left: 0
            width: 100%
            background-color: rgba(0, 0, 0, 0.5)
            color: white
            height: 54px
            line-height: 54px
            text-align: center
            opacity: 0
            transition: all 0.3s
</style>