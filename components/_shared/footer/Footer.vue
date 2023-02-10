<template>
  <div class="footer" ref="footer">
    <div class="footer__bg">
      <div class="container h-full">
        <div class="footer__main h-full">
            <div class="footer__main__logo">
            <img src="~/static/images/logo/logo-footer.png" alt="" />
            </div>
            <ul class="footer__main__nav">
            <li class="nav-col ">
                <div>
                    <nuxt-link to="/" class="nav-col__tag">關於我們</nuxt-link>
                </div>
                <p class="mt-[13px] px-4">品牌介紹</p>
                <p class="mt-[5px] px-4">服務條款</p>
                <p class="mt-[5px] px-4">隱私政策</p>
            </li>
            <li class="nav-col nav-col-store">
                <nuxt-link to="/" class="nav-col__tag">山野商城</nuxt-link>
                <p class="mt-[13px] px-4">商品資訊</p>
                <p class="mt-[5px] px-4">品牌代理</p>
                <p class="mt-[5px] px-4">購物須知</p>
                <p class="mt-[5px] px-4">常見問題</p>
            </li>
            <li class="nav-col">
                <div class="nav-col__tag">追蹤山野一路</div>
                <div>
                    <div class="my-[13px] px-4">
                        <span class="i i-facebook"></span>
                        <span class="i i-instagram"></span>
                        <span class="i i-youtube"></span>
                    </div>
                    <p class="mt-[5px] px-4">客服時間：每日11:00~18:00</p>
                    <p class="mt-[5px] px-4">客服信箱：service@mtwild-elu.com.tw</p>
                </div>
            </li>
            <li class="nav-col">
                <div class="nav-col__tag">訂閱電子報</div>
                <div class="mt-4">
                    <InputFooterEmail />
                </div>
                <div class="flex mt-4">
                    <a href="/">
                        <img class="mr-2" src="~/static/images/logo/footer-apple-store.svg" alt="">
                    </a>
                    <a href="/">
                        <img src="~/static/images/logo/footer-android-google.svg" alt="">
                    </a>
                </div>
            </li>
            </ul>
        </div>
      </div>
    </div>
    <div class="mt-20">
        <h6 class="text-center font-bold text-[#8F8F93]">Copyright © 2022 山野一路 |  All rights reserved</h6>
    </div>
  </div>
</template>

<script>
import InputFooterEmail from '~/components/_shared/input/InputFooterEmail.vue'

export default {
    components: { 
        InputFooterEmail
    },
    mounted() {
        this.$nextTick(()=> {
            let footerHeight = this.$refs.footer.clientHeight
            let root = document.documentElement;
            root.style.setProperty("--footerHeight", `${footerHeight}px`);
        })
    }
};
</script>

<style lang="sass">
.footer
    padding-top: 50px
    padding-bottom: 25px
    &__bg
        background-image: url(~/static/images/others/footer-banner.jpg)
        min-height: 270px
        background-repeat: no-repeat
        background-position: center
        background-size: cover
        padding: 44px 0
        background-attachment: fixed
        @screen md
            padding: 30px 0
    &__main
        display: flex
        // padding: 60px
        justify-content: space-between
        // align-items: center
        @screen lg
            flex-direction: row-reverse
        @screen md
            flex-direction: column        
        &__logo
            margin-right: 15px
            img
                width: 175px
                @screen md
                    width: 70px

        &__nav
            display: flex
            justify-content: space-between
            flex-wrap: wrap
            flex: 0 1 auto
            @media (max-width: 940px) 
                justify-content: flex-start
            // @screen lg
            //     flex-direction: column
            // .nav-col-store
                    // width: 50%
            .nav-col
                margin-top: 10px
                margin-right: 20px
                font-weight: bold
                &:last-child
                    margin-right: 0
                p
                    font-weight: bold

                &__tag
                    display: block
                    background: #207D92
                    border-radius: 5px
                    color: white
                    padding: 0px 16px
                    height: 35px
                    width: fit-content
                    line-height: 35px
</style>
