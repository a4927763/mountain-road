<template>
    <div class="banner">
        <h1 class="mb-[18px] text-white">開始探索台灣之美</h1>
        <h2 class="mb-10 text-white">啟程  從現在開始</h2>
        <div class="banner__main">
            <div class="input-block">
                <div class="input-block__category">
                    <v-select 
                        label="value"
                        v-model="selectedCategory"
                        :options="category"
                        :placeholder="'類型'"
                        :searchable="false"
                        :clearable="false"
                    >
                    </v-select>
                </div>
                <div class="input-block__area">
                    <v-select 
                        label="value"
                        v-model="selectedArea"
                        :options="area"
                        :placeholder="'地區'"
                        :searchable="false"
                        :clearable="false"
                    >
                    </v-select>
                </div>
                <div class="input-block__level"> 
                    <v-select 
                        label="value"
                        v-model="selectedLevel"
                        :options="level"
                        :placeholder="'難易度'"
                        :searchable="false"
                        :clearable="false"
                    >
                    </v-select>
                </div>
                <div class="input-block__line"></div>
                <div class="input-block__search-text">
                    <input 
                        type="text" 
                        placeholder="搜尋登山路線及山岳名稱...."
                    >
                </div>
            </div>
            <div class="search-btn">
                <span class="i i-search"></span>
            </div>
        </div>

    </div>
</template>
<script>
import InputSelect from '~/components/_shared/input/InputSelect.vue'
export default {
    components: {
        InputSelect
    },
    data() {
        return {
            selectedCategory: '',
            category: [
                {
                    value: '百岳入門',
                },
                {
                    value: '百岳進階',
                },
                {
                    value: '中級山/小百岳',
                },
                {
                    value: '野溪溫泉',
                },
                {
                    value: '戶外攀岩',
                },
                {
                    value: '雪攀訓練',
                },
                {
                    value: '溯溪體驗',
                },
                {
                    value: '懶人露營',
                },
            ],
            selectedArea: '',
            area: [
                {value: '北部'},
                {value: '中部'},
                {value: '南部'},
                {value: '東部'},
                {value: '離島'},
                {value: '國外地區'},
            ],
            selectedLevel: '',
            level: [
                {value: '初階'},
                {value: '進階'},
                {value: '高階'},
            ]
            
        }
    }
}
</script>
<style lang="sass">
.v-select 
    width: 180px
    --vs-dropdown-option--active-bg: #207D92
    .vs__search
        padding: 0 !important
        margin: 0 !important
        &::placeholder
            color: #8F8F93
            font-weight: bold
            font-size: 14px
    .vs__selected
        height: 100%
        padding: 0
        margin: 0 !important
        color: #8F8F93
        font-weight: bold
        font-size: 14px
    .vs__selected-options
        padding: 0 10px 0 15px
    .vs__actions
        padding: 0 15px 0 0

    .vs__dropdown-toggle
        padding: 0
        border-radius: 5px
        border: none
        box-shadow: 0px 0px 2.61248px rgba(0, 0, 0, 0.25)
        border-radius: 5px

    .vs__dropdown-menu
        top: calc(100% - 4px)
        border: 1px solid #207D92
        border-top: none
        border-radius: 0 0 5px 5px

        li
            font-weight: bold
            line-height: 1.5
            font-size: 14px
            padding: 15px 15px !important
            color: #8F8F93
            &:hover
                // color: white
                // background-color: #207D92
    .vs__dropdown-option
        &--highlight
            color: white !important
            background: #207D92
.vs--open
    .vs__dropdown-toggle
        border: 1px solid #207D92 !important
    



.banner
    background-image: url(~/static/images/others/search-banner.jpg)
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
    &__main
        width: 100%
        display: flex
        justify-content: space-between
        max-width: 980px
        
       
        .input-block
            background-color: #fff
            display: flex
            justify-content: space-between
            align-items: center
            padding: 12px 0 12px 32px
            width: 100%
            border-radius: 4.5px 0 0 4.5px 
            &__search-text
                margin-right: 28px
                input
                    width: 270px
                    border: 1px solid
                    box-shadow: 0px 0px 2.61248px rgba(0, 0, 0, 0.25)
                    border-radius: 5px
                    border: none
            &__line
                width: 2px
                height: 26px
                background-color: #E5E5E5
                margin-right: 23px
            &__category
                margin-right: 23px
            &__area
                margin-right: 23px
            &__level
                margin-right: 23px

        .search-btn
            background-color: #207D92
            min-width: 72px
            width: 72px
            display: flex
            align-items: center
            justify-content: center
            border-radius: 0 4.5px 4.5px 0 


        


</style>