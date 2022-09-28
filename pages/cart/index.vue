<template>
    <div>
        <TopCarousel/>

        <div class="container">
            
            <div class="flex mt-[88px]">
                <SideCategoryBar/>
                <SectionMain/>
            </div>
        </div>
    </div>
</template>

<script>
import TopCarousel from '~/components/_page/cart/TopCarousel.vue'
import SectionMain from '~/components/_page/cart/SectionMain.vue'
import SideCategoryBar from '~/components/_page/cart/SideCategoryBar.vue'


export default {
    components: {
        TopCarousel,
        SectionMain,
        SideCategoryBar
    }
}
</script>

<style lang="sass" scoped>
    
</style>