<template>
    <div class="brand-page">
        <div class="container">
            <div class="mb-7">
                <SectionTitle text="品牌旗艦館" />
            </div>

            <div class="grid grid-cols-5 gap-6 mb-[54px]">
                <div class="card" v-for="item in brands" :key="item.name">
                    <div class="card__img">
                        <img :src="item.url" alt="">
                    </div>
                    <div class="card__text">{{item.name}}</div>
                </div>
            </div>

            <div class="mx-auto w-min">
                <button class="btn btn-primary">更多品牌</button>
            </div>
        </div>
    </div>
</template>

<script>
import SectionTitle from "~/components/_shared/title/SectionTitle.vue";

export default {
    name: 'SectionBrandLibrary',
    components: {
        SectionTitle
    },
    data() {
        return {
            brands: [
                {
                    name: "Arc'teryx 始祖鳥", 
                    url: require("~/static/images/dummy/home/brands/arc-teryx.png"),
                },
                {
                    name: "NANGA",
                    url: require("~/static/images/dummy/home/brands/nanga.png"), 
                },
                {
                    name: "Fjallraven 瑞典北極狐",
                    url: require("~/static/images/dummy/home/brands/fjallraven.png"), 
                },
                {
                    name: "Mystery Ranch 神秘農場",
                    url: require("~/static/images/dummy/home/brands/mystery-ranch.png"), 
                },
                {
                    name: "Mammut 長毛象",
                    url: require("~/static/images/dummy/home/brands/mammut.png"), 
                },
                {
                    name: "Hilleberg",
                    url: require("~/static/images/dummy/home/brands/hilleberg.png"), 
                },
                {
                    name: "patagonia",
                    url: require("~/static/images/dummy/home/brands/patagonia.png"), 
                },
                {
                    name: "MSR",
                    url: require("~/static/images/dummy/home/brands/msr.png"), 
                },
                {
                    name: "Darn Tough ",
                    url: require("~/static/images/dummy/home/brands/darn-tough.png"), 
                },
                {
                    name: "Hanwag",
                    url: require("~/static/images/dummy/home/brands/hanwag.png"), 
                },
            ]
        }
    }
}
</script>

<style lang="sass" scoped>
.brand-page
    padding-top: 54px
    padding-bottom: 56px
.card
    &__img
        position: relative
        width: 100%
        height: calc(100% - 35px)
        img
            width: 100%
            height: 100%
            max-height: 176px
            object-fit: contain
    &__text
        color: black
        text-align: center
        margin-top: 10px
</style>