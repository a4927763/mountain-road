<template>
  <div class="">
    <div class="client-swiper-wrapper">
      <div class="photo-carousel">
        <div class="photo-size">
          <img :src="activeItem.url" alt="" />
        </div>
        <div
          @click="slideMove(-1)"
          class="swiper-btn swiper-btn-left flex h-6 w-6 cursor-pointer items-center justify-center rounded-[50%] bg-white/80"
        >
          <span class="i i-carousel-left i-filter-white"></span>
        </div>
        <div
          @click="slideMove(1)"
          class="swiper-btn swiper-btn-right flex h-6 w-6 cursor-pointer items-center justify-center rounded-[50%] bg-white/80"
        >
          <span class="i i-carousel-right i-filter-white"></span>
        </div>
      </div>
      <client-only>
        <div ref="banner-swiper" class="swiper">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(item, i) in bannerList"
              :key="'card-key' + i"
            >
              <div class="client-swiper__card">
                <img :src="item.url" alt="" />
              </div>
            </div>
          </div>
          <div class="swiper-pagination" slot="pagination"></div>
        </div>
      </client-only>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper/swiper-bundle.min";
import "swiper/swiper-bundle.min.css";

export default {
  data() {
    return {
      mySwiper: null,
      focusIndex: 0,
      bannerList: [
        {
          url: require("~/static/images/dummy/cart/product-img-6.jpg"),
          id: 1,
          title: "BORN TO BE WILD",
          description:
            "Outdoor專業選物店，提供各式戶外活動行程及登山、露營配備，跟我們一起走進大自然，探索山林之美！",
        },
        {
          url: require("~/static/images/dummy/cart/product-img-6.jpg"),
          id: 2,
          title: "2 BORN TO BE WILD",
          description:
            "2 Outdoor專業選物店，提供各式戶外活動行程及登山、露營配備，跟我們一起走進大自然，探索山林之美！",
        },
        {
          url: require("~/static/images/dummy/cart/product-img-6.jpg"),
          id: 3,
          title: "333 BORN TO BE WILD",
          description:
            "3 Outdoor專業選物店，提供各式戶外活動行程及登山、露營配備，跟我們一起走進大自然，探索山林之美！",
        },
        {
          url: require("~/static/images/dummy/cart/product-img-6.jpg"),
          id: 4,
          title: "444 BORN TO BE WILD",
          description:
            "4 Outdoor專業選物店，提供各式戶外活動行程及登山、露營配備，跟我們一起走進大自然，探索山林之美！",
        },
        {
          url: require("~/static/images/dummy/cart/product-img-6.jpg"),
          id: 5,
          title: "555 BORN TO BE WILD",
          description:
            "5 Outdoor專業選物店，提供各式戶外活動行程及登山、露營配備，跟我們一起走進大自然，探索山林之美！",
        },
      ],
    };
  },
  computed: {
    activeItem() {
      return this.bannerList[this.focusIndex];
    },
  },
  methods: {
    onSlideChange() {
      this.focusIndex = this.mySwiper?.realIndex;
    },
    slideMove(move) {
      move <= 0 ? this.mySwiper.slidePrev() : this.mySwiper.slideNext();
    },
    initSwiper() {
      this.mySwiper = new Swiper(this.$refs["banner-swiper"], {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 14,
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
};
</script>

<style lang="sass" scoped>
.photo-size
    position: relative
    height: 0
    width: 100%
    padding-bottom: 100.75%
    img
        position: absolute
        width: 100%
        height: 100%
        object-fit: cover


.photo-carousel
    position: relative
    margin-bottom: 20px
    .swiper-btn-left
        position: absolute
        z-index: 10
        background: #b5b5b5
        right: calc(100% - 45px)
        top: 50%
        transform: translate(0, -50%)
        &:hover
            box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25)

    .swiper-btn-right
        position: absolute
        z-index: 10
        background: #b5b5b5
        left: calc(100% - 45px)
        top: 50%
        transform: translate(0, -50%)
        &:hover
            box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25)
    .i-carousel-right, i-carousel-left
        &::before
            width: 22px
            height: 22px
</style>
