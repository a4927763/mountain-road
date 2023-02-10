<template>
    <div class="sidebar">
        <div class="sidebar__top-block">
            <div class="sidebar__top-block__img">
                <img src="https://fakeimg.pl/250x100/" alt="">
            </div>
            <div class="ml-3">
                <h6 class="mb-2 pl-1">Shin</h6>
                <div class="flex">
                    <span v-for="item in levelbind" class="i i-ribbon-star i-ribbon-star-active"></span>
                    <span v-for="item in levelUnbind" class="i i-ribbon-star"></span>
                </div>
            </div>
        </div>
        <ul class="sidebar__list">
            <li 
                v-for="(item, index) in sidebarList" 
                class="sidebar__list__item"
                :key="item.routerLink"
                @click="onClickList(item.linkId)"
            >
                <span class="i" :class="item.icon"></span>
                <h6 class="ml-3">{{item.name}}</h6>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "SidebarList",
    data() {
        return {
            personalInfo: {
                name: 'Shin',
                level: 2,
            },
            sidebarList: [
                {
                    name: '個人資訊',
                    icon: 'i-member-info',
                    routerLink: 'PersonalInfo',
                    linkId: 0,
                },
                {
                    name: '百岳護照',
                    icon: 'i-montain',
                    routerLink: 'MontainPassport',
                    linkId: 1,

                },
                {
                    name: '我的收藏',
                    icon: 'i-heart-solid',
                    routerLink: 'MyLike',
                    linkId: 2,
                },
                {
                    name: '訂單中心',
                    icon: 'i-order',
                    routerLink: '',
                    linkId: 3,
                },
                {
                    name: '行前準備清單',
                    icon: 'i-baggagelist',
                    routerLink: 'OrderCenter',
                    linkId: 4,
                },
                {
                    name: '帳戶安全',
                    icon: 'i-security-checked',
                    routerLink: 'AccountSecurity',
                    linkId: 5,
                },
                {
                    name: '偏好設定',
                    icon: 'i-setting',
                    routerLink: 'TheSetting',
                    linkId: 6,
                },
                {
                    name: '登出',
                    icon: 'i-logout',
                    routerLink: 'MemberLogout',
                    linkId: 7,
                },
            ]
        }
    },
    computed: {
        levelbind() {
            return this.personalInfo.level
        },
        levelUnbind() {
            return 5 - this.personalInfo.level
        }
    },
    methods: {
        onClickList(linkId) {
            this.$emit('changePage', linkId)
        }
    }
}
</script>

<style lang="sass" scoped>
.sidebar
    width: 220px
    &__top-block
        display: flex
        justify-content: center
        margin-bottom: 38px
        &__img
            img
                width: 68px
                height: 68px
                border-radius: 50%
    &__list
        &__item
            display: flex
            align-items: center
            background: white
            box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25)
            margin-bottom: 4px
            height: 54px
            padding: 0 18px
            cursor: pointer
            transition: all 0.3s
            &:hover
                box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5)
                
</style>