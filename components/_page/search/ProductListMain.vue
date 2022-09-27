<template>
    <div class="container">
        <div class="grid grid-cols-3 gap-10 mb-[58px]">
            <ActivityCard/>
            <ActivityCard/>
            <ActivityCard/>
            <ActivityCard/>
            <ActivityCard/>
            <ActivityCard/>
        </div>
        <div>
            <PageList :totalPage="totalPage" :currentPage="currentPage" @changePage="changePage"/>
        </div>
    </div>
</template>

<script>
import ActivityCard from '~/components/_shared/card/ActivityCard.vue'
import PageList from '~/components/_shared/pageList/PageList.vue'

export default {
    components: {
        ActivityCard,
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
