<template>
    <div class="container">
        <div class="header">
            <div class="header__title">
                <div class="flex items-center">
                    <h4 class="pb-1 border-solid border-b-[3px] border-[#207D92]">路線列表</h4>
                    <p class="ml-5">共15筆路線資料</p>
                </div>
            </div>
            <div class="header__btn-block">
                <button type="button" class="mr-[10px] btn btn-gray btn-gray-radius">
                    綜合排序
                </button>
                <button type="button" class="mr-[10px] btn btn-gray btn-gray-radius">
                    熱銷排名
                </button>
                <button type="button" class="mr-[10px] btn btn-gray btn-gray-radius">
                    最新上架
                </button>
                <button type="button" class=" btn btn-gray btn-gray-radius">
                    價格排序
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="sass" scoped>
    .header
        display: flex
        justify-content: space-between
        align-items: center
        margin-top: 46px
        margin-bottom: 26px
        &__btn-block
            box-shadow: 0px 0px 2.61248px rgb(0 0 0 / 25%)
            border-radius: 5px
            padding: 10px
            transition: all 0.3s
            &:hover
                box-shadow: 0px 0px 2.61248px rgb(0 0 0 / 60%)
                

</style>