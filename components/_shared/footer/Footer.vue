<template>
  <div class="footer">
    <div class="footer__bg">
      <div class="container h-full">
        <div class="footer__main h-full">
            <div class="footer__main__logo">
            <img src="~/static/images/logo/logo-footer.png" alt="" />
            </div>
            <ul class="footer__main__nav">
            <li class="nav-col">
                <nuxt-link to="/" class="nav-col__tag"> 關於我們 </nuxt-link>
                <p class="mt-4">品牌介紹</p>
                <p>品牌介紹</p>
                <p>品牌介紹</p>
            </li>
            <li class="nav-col">
                <nuxt-link to="/" class="nav-col__tag"> 山野商城 </nuxt-link>
                <p class="mt-4">商品資訊</p>
                <p>品牌代理</p>
                <p>購物須知</p>
                <p>常見問題</p>
            </li>
            <li class="nav-col">
                <div class="nav-col__tag inline">追蹤山野一路</div>
                <div>
                    <div class="mt-4">
                        <span class="i i-facebook"></span>
                        <span class="i i-instagram"></span>
                        <span class="i i-youtube"></span>
                    </div>
                    <p>客服時間：每日11:00~18:00</p>
                    <p>客服信箱：service@mtwild-elu.com.tw</p>
                </div>
            </li>
            <li class="nav-col">
                <div class="nav-col__tag inline">訂閱電子報</div>
                <div class="mt-4">
                    <InputFooterEmail />
                </div>
                <div class="flex">
                    <img src="~/static/images/logo/footer-apple-store.png" alt="">
                    <img src="~/static/images/logo/footer-android-google.png" alt="">
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
    }
};
</script>

<style lang="sass">
.footer
    margin-top: 50px
    margin-bottom: 25px
    &__bg
        background-image: url(~/static/images/others/footer-banner.jpg)
        min-height: 270px
        background-repeat: no-repeat
        background-position: center
        background-size: cover
        padding: 44px 0
    &__main
        display: flex
        // padding: 60px
        justify-content: space-between
        align-items: center
        &__nav
            display: flex
            justify-content: center
            .nav-col
                margin-right: 20px
                &:last-child
                    margin-right: 0
                &__tag
                    background: #207D92
                    border-radius: 5px
                    color: white
                    padding: 4px 16px
                    margin-bottom: 16px
</style>
