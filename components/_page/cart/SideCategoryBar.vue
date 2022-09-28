<template>
    <div class="sidebar">
        <div class="sidebar__header">
            <span class="i i-list"></span>
            <p class="ml-3 font-bold tx-h5">商品分類</p>
        </div>
        <div class="sidebar__list">
            <ul>
                <li v-for="(list, idx) in dummyCategory" :key="idx">
                    <AccordionItem
                        :key="idx"
                        :slug="list.key"
                        v-model="collapseKey"
                    >
                        <template #title>
                            <h6 @click="changeActiveKey(list.key)">{{ list.name }}</h6>
                        </template>
                        <template #body>
                            <div v-for="item in list.section" 
                                class="py-[10px] px-[28px]"
                            >
                                <p 
                                    class="font-bold text-[#909090]" 
                                    @click="changeActiveKey(item.key)"
                                >{{ item.name }}</p>
                            </div> 
                        </template>
                    </AccordionItem>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import AccordionItem from '~/components/_shared/accordion/AccordionItem.vue'
export default {
    components: {
        AccordionItem
    },
    data() {
        return {
            collapseKey: [],
            activeKey: '全部商品',
            dummyCategory: [
                {
                    name: '全部商品',
                    key: '全部商品',
                    section: []
                },
                {
                    name: '戶外服飾',
                    key: '戶外服飾',
                    section: [
                        { name: '底層衣', key: '底層衣' },
                        { name: '中層衣', key: '中層衣' },
                        { name: '保暖衣', key: '保暖衣' },
                        { name: '防水風雨衣', key: '防水風雨衣' },
                    ]
                },
                {
                    name: '戶外背包',
                    key: '戶外背包',
                    section: [
                        { name: '25L以下', key: '25L以下' },
                        { name: '25-50L', key: '25-50L' },
                        { name: '50L以上', key: '50L以上' },
                        { name: '腰包/胸前包', key: '腰包/胸前包' },
                        { name: '背包配件', key: '背包配件' },
                    ]
                },
                {
                    name: '品牌專區',
                    key: '品牌專區',
                    section: []
                },

            ]
        }
    },
    methods: {
        changeActiveKey(key) {
            this.activeKey = key
        },
    }
}
</script>

<style lang="sass" scoped>
.sidebar
    width: 230px
    min-width: 230px
    margin-right: 30px
    &__header 
        display: flex
        align-items: center
        padding-bottom: 14px
        padding-top: 4.5px
        border-bottom: 2px solid #CECECE

        
</style>