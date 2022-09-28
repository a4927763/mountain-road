<template>
    <div class="container">
        <div class="header">
            <div class="header__title">
                <div class="flex items-center">
                    <h4 class="pb-1 border-solid border-b-[3px] border-[#207D92]">路線列表</h4>
                    <p class="ml-5">共15筆路線資料</p>
                </div>
            </div>
            <HeaderCategoryButton/>
        </div>
    </div>
</template>

<script>
import HeaderCategoryButton from '~/components/_shared/HeaderCategoryButton.vue'

export default {
    components: {
        HeaderCategoryButton
    }
}
</script>

<style lang="sass" scoped>
    .header
        display: flex
        justify-content: space-between
        align-items: center
        margin-top: 46px
        margin-bottom: 26px

                

</style>