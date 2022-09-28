<template>
    <div class="btn-block">
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
</template>
<script>
export default {
    name: 'HeaderCategoryButton'
}
</script>
<style lang="sass" scoped>
.btn-block
    box-shadow: 0px 0px 2.61248px rgb(0 0 0 / 25%)
    border-radius: 5px
    padding: 10px
    transition: all 0.3s
    &:hover
        box-shadow: 0px 0px 2.61248px rgb(0 0 0 / 60%)
    button
        @include tx-body-2
        font-weight: bold
</style>