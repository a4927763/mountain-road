<template>
    <div class="relative border-b border-secondary-1 last:border-0">
        <a class="scroll-anchor" v-show="!!scrollId" :id="scrollId" />
        <h2 class="text-h3-mobile lg:text-h2">
            <button
                class="relative flex w-full items-center justify-between py-[10px] px-[22.5px]  text-left outline-0 "
                type="button"
                @click="clickHandler"
            >
                <slot name="title" />
                <div
                    v-show="maxHeight > 0"
                    class="i before:transition-[background] before:duration-300"
                    :class="isOpen ? 'i-chevron-up' : 'i-chevron-down'"
                ></div>
            </button>
        </h2>
        <div ref="wrapperEl" v-set-collapse="{ isOpen, maxHeight }">
            <slot name="body" />
        </div>
    </div>
</template>

<script>
import { setCollapse } from "@/mixins/directive/set-collapse.js";
import { useCollapse } from "@/mixins/function/collapse.js";

export default {
    name: "AccordionItem",
    directives: {
        setCollapse,
    },
    props: {
        value: {
            type: [Number, String, Array],
            default: () => "",
        },
        slug: {
            type: [Number, String],
            default: () => "",
        },
        scrollId: {
            type: String,
            default: () => "",
        },
    },
    setup() {
        const { wrapperEl, maxHeight } = useCollapse();
        return { wrapperEl, maxHeight };
    },
    computed: {
        myValue: {
            get() {
                return this.value;
            },
            set(nVal) {
                let val = nVal;
                if (Array.isArray(this.value))
                    val = this.isOpen
                        ? this.value.filter((v) => v !== this.slug)
                        : [...this.value, this.slug];

                this.$emit("input", val);
            },
        },
        isOpen() {
            if (Array.isArray(this.myValue))
                return this.myValue.includes(this.slug);
            return this.myValue == this.slug;
        },
    },
    methods: {
        clickHandler() {
            this.myValue = this.isOpen ? -1 : this.slug;
        },
    },
};
</script>

<style lang="sass" scoped>
.scroll-anchor
    @apply absolute invisible w-[1px] h-[1px] translate-y-[-70px]
    @screen md
        @apply translate-y-[-150px]
</style>
