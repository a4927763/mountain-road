<template>
    <div class="store-page">
        <div class="left-block">
            <div class="left-block__img">
                <img src="https://picsum.photos/200/300?random=1" />
            </div>
        </div>
        <div class="right-block">
            <div class="i i-shop mb-[30px]">
            </div>
            <h4 class="mb-[30px]">精選商品</h4>
            <h6 class="mb-[30px]">精選世界各地優質品牌、從近山郊遊、登山健行到專業探險、各式戶外裝備，精選世界優質商品，從一日健行、多日縱走到專業攀登，超過萬件戶外裝備，提供一站式購足的服務。</h6>
            <button class="btn btn-primary">立即探索</button>
        </div>
    </div>
</template>

<script>
export default {



}
</script>

<style lang="sass" scoped>
.store-page
    display: flex
    background-color: #2F2F2F
    .left-block, .right-block
        width: 50%
    .left-block
        &__img
            width: 100%
            height: 0
            padding-bottom: 96.39%
            position: relative
            img
                position: absolute
                width: 100%
                height: 100%
                object-fit: cover
    .right-block
        display: flex
        align-items: center
        flex-direction: column
        justify-content: center
        padding: 0 80px
</style>