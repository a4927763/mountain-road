<template>
    <div class="card">
        <div class="card__top">
            <div class="card__img mb-[10px]">
                <img src="https://fakeimg.pl/250x100/">
            </div>
            <div class="card__main">
                <h6 class="mb-[6px]">【百岳入門】奇萊南華｜黃金大草原 兩天一夜</h6>
                <div class="flex justify-between mb-[10px]">
                    <h6 class="mb-[6px] text-green">NT$5000</h6>
                    <div class="flex items-center">
                        <span class="i i-location-green"></span>
                        <p class="tx-body-2 ml-[6px] text-green !font-bold">
                            南投
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="card__footer">
            <button type="button" class="card__footer__cart-text">加入購物車</button>
            <button type="button" class="card__footer__like-btn">
                <span class="i i-heart-green"></span>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'activityCard',


}
</script>

<style lang="sass" scoped>
.card
    box-shadow: 0px 0px 2.61248px rgb(0 0 0 / 25%)
    border-radius: 5px
    padding: 28.5px 25px 33px
    display: flex
    flex-direction: column
    cursor: pointer
    transition: box-shadow 0.3s
    &:hover
        box-shadow: 0px 0px 4px rgba(32 125 146 / 100%)
        .card__img img
            width: 105%
            height: 105%
            top: -2.5%
        
    &__img
        width: 100%
        height: 0
        padding-bottom: 94.89%
        position: relative
        border-radius: 5px
        overflow: hidden
        img
            transition: all 0.3s
            position: absolute
            top: 0
            width: 100%
            height: 100%
            object-fit: cover


    &__footer
        display: flex
        justify-content: space-between
        align-items: center
        &__cart-text
            color: $primary
            border: 2px solid $primary
            width: 100%
            height: 48px
            border-radius: 10px
            font-weight: bold
            transition: all 0.3s
            &:hover
                color: white
                background-color: $primary
                
        &__like-btn
            display: flex
            justify-content: center
            align-items: center
            margin-left: 18px
            min-width: 48px
            min-height: 48px
            width: 48px
            height: 48px
            border: 2px solid $primary
            border-radius: 10px
            transition: all 0.3s
            &:hover
                background-color: $primary
                .i-heart-green
                    &::before
                        background: url("~static/images/icon/icon-heart-white.svg") no-repeat center / 100% auto
    

</style>