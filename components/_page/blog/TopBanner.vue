<template>
    <div class="banner"></div>
</template>

<script>
export default {
    name: "TopBanner"
}
</script>

<style lang="sass" scoped>
.banner
    background-image: url(~/static/images/others/blog-banner.jpg)
    background-repeat: no-repeat
    background-size: cover
    background-position: center center
    height: 592px
    width: 100%
    display: flex
    flex-direction: column
    justify-content: flex-end
    align-items: center
    padding-bottom: 58px
</style>