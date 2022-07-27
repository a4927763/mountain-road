<template>
    <header class="header">
        <div class="flex items-center h-full px-1 mx-auto max-w-7xl sm:px-3 lg:px-6">
            <div class="flex items-center flex-1 justify-center lg:justify-start">
                <a href="/">
                    <img class="w-[78px]" 
                        src="~/static/images/logo/logo-3x.png" 
                        alt="mountaion-road-logo"
                    >
                </a>
            </div>
            <nav class="items-center justify-center hidden h-full lg:flex">
                <div class="mx-[30px]">
                    <nuxt-link to="/search">山野探索</nuxt-link>
                </div>
                <div class="mx-[30px]">
                    <nuxt-link to="/cart">山野商城</nuxt-link>
                </div>
                <div class="mx-[30px]">
                    <nuxt-link to="/blog">山野精選</nuxt-link>    
                </div>
                <div class="mx-[30px]">
                    <nuxt-link to="/contact-us">聯繫我們</nuxt-link>
                </div>
            </nav>
            <div class="flex items-center justify-end gap-1 lg:flex-1">
                <div class="">
                    <input type="text" name="" id="">
                    <span class="i i-search"></span>
                </div>
                <div class="">
                    <span class="i i-cart"></span>
                </div>
                <div class="">
                    <span class="i i-like"></span>
                </div>
                <div class="">
                    <span class="i i-member"></span>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {

        }
    }

}
</script>

<style lang="sass" scoped>
.header
    // background-image: url('~/static/images/others/header-bg.jpg')
    background-image: url(~/static/images/others/header-bg.jpg)
    color: white



</style>