<template>
    <div class="container">
        <ul class="header">
            <li v-for="list in dummayList" 
                :key="'header-name' + list.key"
                :class="{'active': activeKey === list.key}"
                @click="activeKey = list.key"
            >
                <h4>
                    {{list.name}}
                </h4>
            </li>
        </ul>
    </div>
</template>

<script>


export default {
    name: 'ArticleHeader',
    data() {
        return {
            dummayList:[
                { name: '全部文章', key: 0 },  
                { name: '登山知識', key: 1 },  
                { name: '山岳路線', key: 2 },  
                { name: '商品開箱', key: 3 },  
                { name: '達人專訪', key: 4 }
            ],
            activeKey: 0,
        }
    }

}
</script>

<style lang="sass" scoped>
.header
    display: flex
    justify-content: center
    margin: 32px 0

    li
        margin-right: 32px
        cursor: pointer
        transition: all 0.3s
        position: relative
        &:last-child
            margin-right: 0
        &:hover:not(.active)
            opacity: 0.7
        &::before
            position: absolute
            top: 100%
            content: ''
            width: 100%
            height: 3px
            background-color: $primary
            transition: all 0.3s
            transform: scale(0)
    .active
        &::before
            transform: scale(1)


</style>