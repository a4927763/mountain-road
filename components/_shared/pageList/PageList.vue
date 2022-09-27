<template>
    <div class="pages-list">
        <ul
            class="
                flex
                items-center
                h-100
                justify-center 
            "
        >
            <li
                class="page-arrow pr-3 pr-md-4"
                :class="{ 'page-arrow--disable': currentPage === 1 }"
                @click="pageMove(-1)"
            >
                <div class="i i-arrow-page-left"></div>
            </li>
            <template v-for="(item, index) in pageArray">
                <li
                    :key="`${item}-${index}`"
                    v-if="item === 'Ellipsis'"
                    class="page-ellipsis text-center"
                >
                    <p class="font-bold">...</p>
                </li>
                <li
                    v-else
                    class="page-item text-center"
                    :class="{ 'page-item--active': item === currentPage }"
                    :key="`${item}-${index}+others`"
                    @click="changePage(item)"
                >
                    <p class="font-bold">{{ item }}</p>
                </li>
            </template>
            <li
                class="page-arrow pl-3 pl-md-4"
                :class="{ 'page-arrow--disable': currentPage === totalPage }"
                @click="pageMove(1)"
            >
                <div class="i i-arrow-page-right"></div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "PagesList",
    props: {
        totalPage: {
            type: Number,
            default: () => 1,
        },
        currentPage: {
            type: Number,
            default: () => 1,
        },
    },
    computed: {
        list() {
            return this.totalPage;
        },
        pageArray() {
            let arr = [];
            let ellipsis = false;
            for (let i = 1; i <= this.totalPage; i++) {
                if (!this.showPage(i)) {
                    if (!ellipsis) {
                        arr.push(`Ellipsis`);
                        ellipsis = true;
                    }
                } else {
                    ellipsis = false;
                    arr.push(i);
                }
            }
            return arr;
        },
    },
    methods: {
        changePage(page) {
            this.$emit("changePage", page);
        },
        pageMove(move) {
            if (move < 0) {
                this.currentPage > 1
                    ? this.changePage(this.currentPage + move)
                    : undefined;
            } else {
                this.currentPage < this.totalPage
                    ? this.changePage(this.currentPage + move)
                    : undefined;
            }
        },
        showPage(page) {
            if (
                this.totalPage <= 8 &&
                this.currentPage > 3 &&
                this.currentPage < 6
            )
                return true;
            if (
                this.currentPage < 3 ||
                this.currentPage >= this.totalPage - 1
            ) {
                return page <= 3 || page >= this.totalPage - 2;
            }
            return (
                Math.abs(page - this.currentPage) <= 1 ||
                page <= 2 ||
                page >= this.totalPage - 1
            );
        },
    },
};
</script>

<style lang="sass" scoped>
@mixin text-line-height
    p
        line-height: 40px
        @screen sm
            line-height: 32px
.pages-list
    height: 40px
    @screen sm
        height: 32px
    .page-arrow, .page-item
        cursor: pointer
        @include text-line-height
    .page-ellipsis 
        @include text-line-height


    .page-ellipsis, .page-item
        width: 40px
        height: 40px
        color: $black-2
        @include text-line-height
        @screen sm
            width: 32px
            height: 32px


    .page-item, .page-arrow
        &:hover
            @screen md
                opacity: .5
        &--disable
            opacity: .5
            cursor: default

    .page-item
        // &:hover,
        &--active
            color: $color-white
            background-color: $color-primary-1
            border-radius: 4px


        &:hover:not(.page-item--active)
            color: $primary
        &:hover
            opacity: 1

      
        
</style>