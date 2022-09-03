<template>
    <button
        type="button"
        class="scroll-btn"
        :class="{
            'scroll-up': dir === 'up',
        }"
        @click="scrollHandler"
        aria-label="Scroll down"
    ></button>
</template>

<script>

export default {
    name: "ScrollBtn",
    props: {
        dir: {
            type: String,
            default: () => "down",
        },
        targetId: {
            type: String,
            default: () => "",
        },
    },
    methods: {
        scrollHandler() {
            console.log('scrollHandler')
            window.scroll({
                top: 0,
                behavior: 'smooth'
            }, 1000);
            // if (this.dir === "down") {
            //     if (this.targetId) {
            //         top = document.getElementById(this.targetId).offsetTop;
            //     }
            //     window.scroll({
            //         top: 500,
            //         behavior: 'smooth'
            //     }, 800);
            // } else {
            //     if (this.targetId) {
            //         top = document.getElementById(this.targetId).getBoundingClientRect().top;
            //     }
            //     window.scroll({
            //         top: 0,
            //         behavior: 'smooth'
            //     }, 1000);
            // }
        },
    },
};
</script>

<style lang="sass" scoped>
.scroll-btn
    width: 50px
    height: 50px
    cursor: pointer
    transition: all 0.3
    background-color: #207D92
    position: relative
    &::before
        position: absolute
        top: 0
        left: 0
        content: ''
        width: 50px
        height: 50px
        background: url("~static/images/icon/icon-go-top.svg") center center no-repeat
        background-size: auto
        background-position: center
    @screen md
        width: 40px
        height: 40px
    // &:hover
    //     @include media-breakpoint-up(md)
    //         background: url("~static/images/icon-scroll-down-blue.svg") center center no-repeat
    //         background-size: 100% auto
    // &.scroll-up
    //     background: url("~static/images/icon-scroll-down-blue.svg") center center no-repeat
    //     background-size: 100% auto
    //     transform: rotateZ(180deg)
        // &:hover
        //     @include media-breakpoint-up(md)
        //         background: url("~static/images/icon-scroll-down-white.svg") center center no-repeat
        //         background-size: 100% auto
</style>