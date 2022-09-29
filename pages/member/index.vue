<template>
    <div class="container">
        <div class="page">
            <SidebarList/>
            <component 
                :is='showPage' 
            ></component>
        </div>
    </div>
</template>

<script>
import SidebarList from "~/components/_page/member/SidebarList.vue";

import PersonalInfo from "~/components/_page/member/memberList/PersonalInfo.vue";
import MontainPassport from "~/components/_page/member/memberList/MontainPassport.vue";
import MyLike from "~/components/_page/member/memberList/MyLike.vue";
import OrderCenter from "~/components/_page/member/memberList/OrderCenter.vue";
import PrepareList from "~/components/_page/member/memberList/PrepareList.vue";
import AccountSecurity from "~/components/_page/member/memberList/AccountSecurity.vue";
import TheSetting from "~/components/_page/member/memberList/TheSetting.vue";
import MemberLogout from "~/components/_page/member/memberList/MemberLogout.vue";

export default {
    name: "member",
    components: {
        SidebarList,
        PersonalInfo,
        MontainPassport,
        MyLike,
        OrderCenter,
        PrepareList,
        AccountSecurity,
        TheSetting,
        MemberLogout,
    },
    data() {
        return {
            pageIndex: 0,
        }
    },
    computed: {
        showPage() {
            switch (this.pageIndex) {
                case 0: return PersonalInfo
                case 1: return MontainPassport
                case 2: return MyLike
                case 3: return OrderCenter
                case 4: return PrepareList
                case 5: return AccountSecurity
                case 6: return TheSetting
                case 7: return MemberLogout
                default: return PersonalInfo
            }
        },
    }
}
</script>

<style lang="sass" scoped>
.page
    display: flex
    padding-top: 50px
    min-height: calc((var(--vh, 1vh) * 100) - var(--footerHeight) - var(--headerHeight) )
</style>