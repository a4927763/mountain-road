<template>
    <div class="home">
        <BannerCarousel />
        <TopicCarousel/>
        <SectionStore />
        <SectionBrandLibrary />
        <SectionArticle />
        <SectionGetInTouch />
    </div>
</template>

<script>
import BannerCarousel from "~/components/_page/home/BannerCarousel.vue";
import TopicCarousel from "~/components/_page/home/TopicCarousel.vue";
import SectionStore from "~/components/_page/home/SectionStore.vue";
import SectionBrandLibrary from "~/components/_page/home/SectionBrandLibrary.vue";
import SectionArticle from "~/components/_page/home/SectionArticle.vue";
import SectionGetInTouch from "~/components/_page/home/SectionGetInTouch.vue";


export default {
    name: 'SectionHome',
    components: {
        BannerCarousel,
        TopicCarousel,
        SectionStore,
        SectionBrandLibrary,
        SectionArticle,
        SectionGetInTouch,
    },
    data() {
        return {
          
        }
    },
   
    mounted() {
    },
}
</script>

<style lang="sass" scoped>
.home
    color: white

</style>
