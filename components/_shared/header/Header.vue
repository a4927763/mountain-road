<template>
    <header class="header" ref="header">
        <div class="flex items-center h-full px-1 mx-auto max-w-7xl sm:px-3 lg:px-6">
            <div class="flex items-center flex-1 justify-start">
                <a href="/">
                    <img class="w-[78px]" 
                        src="~/static/images/logo/logo-3x.png" 
                        alt="mountaion-road-logo"
                    >
                </a>
                <nav class="ml-[240px] items-center justify-center h-full flex">
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
            </div>
            <div class="flex items-center justify-end gap-1 lg:flex-1">
                <input type="text" name="" id="">
                <div class="">
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
    mounted() {
        this.$nextTick(()=> {
            let headerHeight = this.$refs.header.clientHeight
            let root = document.documentElement;
            root.style.setProperty("--headerHeight", `${headerHeight}px`);
        })
    }
}
</script>

<style lang="sass" scoped>
.header
    background-image: url(~/static/images/others/header-bg.jpg)
    color: white
    height: 100%
</style>