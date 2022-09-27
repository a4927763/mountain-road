<template>
    <div class="container">
        <div class="grid grid-cols-3 gap-8 mb-14">
            <ArticleCard/>
            <ArticleCard/>
            <ArticleCard/>
            <ArticleCard/>
            <ArticleCard/>
        </div>
    </div>
</template>

<script>
import ArticleCard from "~/components/_shared/card/ArticleCard.vue";

export default {
    name: 'ArticleListMain',
    components: {
        ArticleCard
    }
}
</script>

<style lang="sass" scoped>
    
</style>