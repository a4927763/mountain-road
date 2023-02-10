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
                <div class="relative mr-6">
                    <input class="w-[150px] bg-[#ffffff3d] rounded-[20px] py-3 pl-[18px] pr-[38px]" type="text" name="" id="">
                    <div class="absolute top-[6px] right-[12px]">
                        <span class="i i-search"></span>
                    </div>
                </div>
                <div class="mr-6 pb-1">
                    <span class="i i-cart"></span>
                </div>
                <div class="mr-6 pb-1">
                    <span class="i i-like"></span>
                </div>
                <div class="pb-1">
                    <nuxt-link to="/member">
                        <span class="i i-member"></span>

                    </nuxt-link>
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
    background-repeat: no-repeat
    background-size: cover
    color: white
    height: 100%
</style>