<template>
    <div class="section-title" :class="{'mx-auto': align}">
        <h4 
            data-aos="fade-in" 
            class="text-center" 
            :class="`text-${color}`"
        >   
            {{text}}
        </h4>
        <div 
            data-aos="line-scale-effect" 
            class="section-title__line"
        ></div>
    </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: 'section text'
        },
        align: {
            type: Boolean,
            default: true,
        },
        color: {
            type: String,
            default: 'black',
        }
    }
}
</script>

<style lang="sass" scoped>
.section-title
    width: fit-content
    &__line
        width: 100%
        height: 3px
        background: #207D92
</style>