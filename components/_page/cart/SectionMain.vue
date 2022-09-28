<template>
    <div class="main">
        <div class="main__header">
            <div class="main__header__input-block">
                <InputText :placeholder="'搜尋商品名稱'"/>
                <button class="btn btn-search">
                    <span class="i i-search"></span>
                </button>
            </div>
            <HeaderCategoryButton/>
        </div>
        <div class="main__list">
            <div class="grid grid-cols-4 gap-6 mb-[64px]">
                <ProductCard :type="'product'"/>
                <ProductCard :type="'product'"/>
                <ProductCard :type="'product'"/>
                <ProductCard :type="'product'"/>
                <ProductCard :type="'product'"/>
                <ProductCard :type="'product'"/>
            </div>
            <div>
                <PageList :totalPage="totalPage" :currentPage="currentPage" @changePage="changePage"/>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderCategoryButton from '~/components/_shared/HeaderCategoryButton.vue'
import InputText from '~/components/_shared/input/InputText.vue'
import ProductCard from '~/components/_shared/card/ProductCard.vue'
import PageList from '~/components/_shared/pageList/PageList.vue'

export default {
    components: {
        InputText,
        HeaderCategoryButton,
        ProductCard,
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
.main
    width: 100%
    &__header
        display: flex
        justify-content: space-between
        margin-bottom: 64px
        &__input-block
            display: flex
            align-items: center
            margin-right: 30px
            .input-text
                height: 49.2px
                ::v-deep(input)
                    width: 430px 
                    height: 49.2px
                    border-radius: 5px 0 0 5px
                    font-size: 20px
                    font-weight: bold
                    &::placeholder
                        font-weight: bold
                        font-size: 20px
                        letter-spacing: 0.1em
            .btn-search
                background-color: $primary
                width: 49.2px
                height: 49.2px
                display: flex
                align-items: center
                justify-content: center
                border-radius: 0 5px 5px 0
                box-shadow: 0px 0px 3.65161px rgba(0, 0, 0, 0.25)
    &__list
        ::v-deep(.card)
            padding: 16px
        
</style>