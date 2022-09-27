<template>
    <div>
        <TopBanner/>
        <ArticleHeader/>
        <ArticleListMain/>
        <PageList 
            :totalPage="totalPage" 
            :currentPage="currentPage" 
            @changePage="changePage"
        />

    </div>
</template>

<script>
import TopBanner from '~/components/_page/blog/TopBanner.vue'
import ArticleHeader from '~/components/_page/blog/ArticleHeader.vue'
import ArticleListMain from '~/components/_page/blog/ArticleListMain.vue'
import PageList from '~/components/_shared/pageList/PageList.vue'


export default {
    components: {
        TopBanner,
        ArticleHeader,
        ArticleListMain,
        PageList
    },
    data() {
        return {
            currentPage: 1,
            totalPage: 10,
        }
    },
    methods: {
        changePage(page) {
            this.currentPage = page
        }
    }
}
</script>

<style lang="sass" scoped>
    
</style>