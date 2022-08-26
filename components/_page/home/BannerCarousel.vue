<template>
    <div>
        <div class="client-swiper" :style="{backgroundImage: 'url('+activeItem.url+')'}">
            <div class="container">
                <div class="client-swiper-info">
                    <div class="client-swiper__left-side">
                        <h1>{{activeItem.title}}</h1>
                        <p>{{activeItem.description}}</p>
                        <button class="btn btn-primary">
                            立即探索
                        </button>
                    </div>
                    <div class="client-swiper-wrapper">
                        <div @click="slideMove(-1)" class="swiper-btn rounded-[50%] flex items-center justify-center swiper-btn-left cursor-pointer bg-white/80 w-10 h-10">
                            <span class="i i-carousel-left"></span>
                        </div>
                        <div @click="slideMove(1)" class="swiper-btn rounded-[50%] flex items-center justify-center swiper-btn-right cursor-pointer bg-white/80 w-10 h-10">
                            <span class="i i-carousel-right"></span>
                        </div>
                        <client-only>
                            <div ref="banner-swiper" class="swiper">
                                <div class="swiper-wrapper">
                                    <div
                                        class="swiper-slide" 
                                        v-for="(item, i) in bannerList" 
                                        :key="'card-key'+i"
                                    >
                                        <div class="client-swiper__card">
                                            <img :src="item.url" alt="">                        
                                            
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-pagination" slot="pagination"></div>
                            </div>
                        </client-only>
                    </div>
                </div>


            </div>

        </div>

    </div>
</template>

<script>
import Swiper from "swiper/swiper-bundle.min";
import "swiper/swiper-bundle.min.css";

export default {
    name: 'BannerCarousel',

    data() {
        return {
            mySwiper: null,
            focusIndex: 0,
            bannerList: [
                {
                    url: 'https://picsum.photos/200/300?random=1',
                    id: 1,
                    title: '111 BORN TO BE WILD',
                    description: '111 Outdoor專業選物店，提供各式戶外活動行程及登山、露營配備，跟我們一起走進大自然，探索山林之美！',      
                },
                {
                    url: 'https://picsum.photos/200/300?random=2',
                    id: 2,
                    title: '222 BORN TO BE WILD',
                    description: '222 Outdoor專業程及登山、露一起走進大自然，探索山林之美！',      
                },
                {
                    url: 'https://picsum.photos/200/300?random=3',
                    id: 3,
                    title: '333 BORN TO BE WILD',
                    description: '333 Outdoor專業備，跟我們一起走進大自然，探索山林之美！',      
                },
                {
                    url: 'https://picsum.photos/200/300?random=4',
                    id: 4,
                    title: '444 BORN TO BE WILD',
                    description: 'Outdoor專業動行程及登山、露營配備，跟我們一起走進大自然，探索山林之美！',      
                },
                {
                    url: 'https://picsum.photos/200/300?random=5',
                    id: 5,
                    title: '555 BORN TO BE WILD',
                    description: '5555 5 5 5',      
                },
                {
                    url: 'https://picsum.photos/200/300?random=6',
                    id: 6,
                    title: '666 BORN TO BE WILD',
                    description: '666 Outdoor專業選物店，提供各式戶外活動行程及登山、露營配備，跟我們一起走進大自然，探索山林之美！',      
                },
            ]
        }
    },

    computed: {
        activeItem() {
            return this.bannerList[this.focusIndex]
        }
    },

    methods: {
        onSlideChange() {
            this.focusIndex = this.mySwiper?.realIndex
        },
        slideMove(move) {
            move <= 0
                ? this.mySwiper.slidePrev()
                : this.mySwiper.slideNext();
        },
        initSwiper() {
            this.mySwiper = new Swiper(this.$refs['banner-swiper'], {
                loop: true,
                slidesPerView: 2.5,
                spaceBetween: 20,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    type: 'progressbar',
                },
                on: {
                    realIndexChange: this.onSlideChange,
                },
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
.swiper-slide-active
    display: none
.swiper-pagination-progressbar
    position: absolute
    top: calc(100% - 4px)
    border-radius: 10px
    background: #FFFFFF
    ::v-deep(.swiper-pagination-progressbar-fill)
        background: linear-gradient(270deg, #207D92 -3.72%, #A0EDFF 100%) !important



.client-swiper
    position: relative
    background-size: cover
    background-position: center
    &-info
        width: 100%
        height: 100vh
        display: flex
        justify-content: flex-start
        align-items: center
        height: calc(var(--vh, 1vh) * 100 - 80px) 
        position: relative
    &__left-side
        width: 50%
        
    &-wrapper
        position: absolute
        width: 41.38%
        top: 50%
        right: 0%
        .swiper-btn
            position: absolute
            z-index: 10
            top: calc(50% - 24px)
            transform: translateY(-50%)
            &-left
                left: -20px
            &-right
                right: 0
    &__card
        position: relative
        width: 100%
        height: 0
        padding-bottom: 114.54%
        margin-bottom: 48px
        img
            position: absolute
            width: 100%
            height: 100%
            object-fit: cover
            filter: drop-shadow(0px 0px 5px #FFFFFF)
</style>