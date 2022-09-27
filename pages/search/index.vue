<template>
    <div>
        <TopBanner/>
        <ProductListHeader/>
        <ProductListMain/>
    </div>
</template>

<script>
import TopBanner from '~/components/_page/search/TopBanner.vue'
import ProductListHeader from '~/components/_page/search/ProductListHeader.vue'
import ProductListMain from '~/components/_page/search/ProductListMain.vue'


export default {
    components: {
        TopBanner,
        ProductListHeader,
        ProductListMain,
    }
}
</script>

<style lang="sass" scoped>
    
</style>