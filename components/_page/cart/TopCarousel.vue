<template>
    <div>
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
</template>

<script>
import Swiper from "swiper/swiper-bundle.min";
import "swiper/swiper-bundle.min.css";

export default {
    name: 'TopCarousel',
    data() {
        return {
            mySwiper: null,
            bannerList: [
                {
                    id: 1,
                    url: require('~/static/images/dummy/cart/banner-img-1.jpg'),
                },
                {
                    id: 2,
                    url: require('~/static/images/dummy/cart/banner-img-2.jpg'),
                },
                {
                    id: 3,
                    url: require('~/static/images/dummy/cart/banner-img-3.jpg'),
                },
            ]
        }
    },
    methods: { 
        initSwiper() {
            this.mySwiper = new Swiper(this.$refs['banner-swiper'], {
                loop: true,
                slidesPerView: 1,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
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
.client-swiper__card
    img
        width: 100%
.swiper
    --swiper-theme-color: #207D92
    --swiper-pagination-bullet-inactive-color: white
    --swiper-pagination-bullet-inactive-opacity: 1
    --swiper-pagination-bullet-size: 14px

.swiper-pagination
    bottom: 20px

</style>