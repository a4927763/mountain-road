(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{532:function(t,e,n){var content=n(577);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(56).default)("5ec933e2",content,!0,{sourceMap:!1})},576:function(t,e,n){"use strict";n(532)},577:function(t,e,n){var r=n(55)((function(i){return i[1]}));r.push([t.i,".sidebar[data-v-08b8deae]{width:220px}.sidebar__top-block[data-v-08b8deae]{display:flex;justify-content:center;margin-bottom:38px}.sidebar__top-block__img img[data-v-08b8deae]{width:68px;height:68px;border-radius:50%}.sidebar__list__item[data-v-08b8deae]{display:flex;align-items:center;background:#fff;box-shadow:0 0 2px rgba(0,0,0,.25);margin-bottom:4px;height:54px;padding:0 18px;cursor:pointer;transition:all .3s}.sidebar__list__item[data-v-08b8deae]:hover{box-shadow:0 0 2px rgba(0,0,0,.5)}",""]),r.locals={},t.exports=r},631:function(t,e,n){"use strict";n.r(e);n(44);var r={name:"SidebarList",data:function(){return{personalInfo:{name:"Shin",level:2},sidebarList:[{name:"個人資訊",icon:"i-member-info",routerLink:"PersonalInfo",linkId:0},{name:"百岳護照",icon:"i-montain",routerLink:"MontainPassport",linkId:1},{name:"我的收藏",icon:"i-heart-solid",routerLink:"MyLike",linkId:2},{name:"訂單中心",icon:"i-order",routerLink:"",linkId:3},{name:"行前準備清單",icon:"i-baggagelist",routerLink:"OrderCenter",linkId:4},{name:"帳戶安全",icon:"i-security-checked",routerLink:"AccountSecurity",linkId:5},{name:"偏好設定",icon:"i-setting",routerLink:"TheSetting",linkId:6},{name:"登出",icon:"i-logout",routerLink:"MemberLogout",linkId:7}]}},computed:{levelbind:function(){return this.personalInfo.level},levelUnbind:function(){return 5-this.personalInfo.level}},methods:{onClickList:function(t){this.$emit("changePage",t)}}},o=(n(576),n(23)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"sidebar"},[e("div",{staticClass:"sidebar__top-block"},[t._m(0),t._v(" "),e("div",{staticClass:"ml-3"},[e("h6",{staticClass:"mb-2 pl-1"},[t._v("Shin")]),t._v(" "),e("div",{staticClass:"flex"},[t._l(t.levelbind,(function(t){return e("span",{staticClass:"i i-ribbon-star i-ribbon-star-active"})})),t._v(" "),t._l(t.levelUnbind,(function(t){return e("span",{staticClass:"i i-ribbon-star"})}))],2)])]),t._v(" "),e("ul",{staticClass:"sidebar__list"},t._l(t.sidebarList,(function(n,r){return e("li",{key:n.routerLink,staticClass:"sidebar__list__item",on:{click:function(e){return t.onClickList(n.linkId)}}},[e("span",{staticClass:"i",class:n.icon}),t._v(" "),e("h6",{staticClass:"ml-3"},[t._v(t._s(n.name))])])})),0)])}),[function(){var t=this._self._c;return t("div",{staticClass:"sidebar__top-block__img"},[t("img",{attrs:{src:"https://fakeimg.pl/250x100/",alt:""}})])}],!1,null,"08b8deae",null);e.default=component.exports}}]);