(window.webpackJsonp=window.webpackJsonp||[]).push([[47,13,14,33],{498:function(e,t,n){var content=n(522);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(56).default)("474679b4",content,!0,{sourceMap:!1})},520:function(e,t,n){var content=n(560);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(56).default)("23661149",content,!0,{sourceMap:!1})},521:function(e,t,n){"use strict";n(498)},522:function(e,t,n){var r=n(55)((function(i){return i[1]}));r.push([e.i,".scroll-anchor[data-v-397e4460]{visibility:hidden;position:absolute;height:1px;width:1px;--tw-translate-y:-70px;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@media (max-width: 767px){.scroll-anchor[data-v-397e4460]{--tw-translate-y:-150px;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}}",""]),r.locals={},e.exports=r},523:function(e,t,n){var content=n(564);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(56).default)("6742e528",content,!0,{sourceMap:!1})},545:function(e,t,n){"use strict";n.r(t);var r=n(28),c=(n(119),n(26),n(15),n(57),n(66),n(77),function(e,t,n){e.classList.toggle("max-h-[var(--max-height)]",t),e.classList.toggle("max-h-0",!t),e.classList.toggle("opacity-0",!t),e.style.setProperty("--max-height","".concat(n,"px"))}),o={bind:function(e){e.classList.add("transition-[opacity,max-height]","overflow-hidden","duration-500","ease-easeOutSine")},inserted:function(e,t){var n=t.value,r=n.isOpen,o=n.maxHeight;c(e,r,o)},update:function(e,t){var n=t.value,r=n.isOpen,o=n.maxHeight;c(e,r,o)}},l=n(10),d=(n(24),n(52),n(561)),f=n(2);var v={name:"AccordionItem",directives:{setCollapse:o},props:{value:{type:[Number,String,Array],default:function(){return""}},slug:{type:[Number,String],default:function(){return""}},scrollId:{type:String,default:function(){return""}}},setup:function(){var e=function(){var e=Object(f.ref)(null),t=Object(f.ref)(0);function n(){return r.apply(this,arguments)}function r(){return(r=Object(l.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(f.nextTick)();case 2:t.value=null===(r=e.value)||void 0===r?void 0:r.scrollHeight;case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}Object(d.useMutationObserver)(e,n,{subtree:!0,characterData:!0}),Object(d.useResizeObserver)(e,n),Object(f.onMounted)((function(){Object(d.useEventListener)(window,"resize",n),n()}));var c=Object(f.ref)([]),o=Object(f.ref)([]);function v(){return h.apply(this,arguments)}function h(){return(h=Object(l.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(c.value.length<0)){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,Object(f.nextTick)();case 4:t=[],c.value.forEach((function(e,n){t[n]=e.scrollHeight})),o.value=t;case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(f.watch)(c,v),Object(f.onMounted)((function(){Object(d.useEventListener)(window,"resize",v),v()})),{wrapperEl:e,maxHeight:t,calcHeight:n,wrapperEls:c,maxHeights:o,calcHeights:v}}();return{wrapperEl:e.wrapperEl,maxHeight:e.maxHeight}},computed:{myValue:{get:function(){return this.value},set:function(e){var t=this,n=e;Array.isArray(this.value)&&(n=this.isOpen?this.value.filter((function(e){return e!==t.slug})):[].concat(Object(r.a)(this.value),[this.slug])),this.$emit("input",n)}},isOpen:function(){return Array.isArray(this.myValue)?this.myValue.includes(this.slug):this.myValue==this.slug}},methods:{clickHandler:function(){this.myValue=this.isOpen?-1:this.slug}}},h=v,m=(n(521),n(23)),component=Object(m.a)(h,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"relative border-b border-secondary-1 last:border-0"},[t("a",{directives:[{name:"show",rawName:"v-show",value:!!e.scrollId,expression:"!!scrollId"}],staticClass:"scroll-anchor",attrs:{id:e.scrollId}}),e._v(" "),t("h2",{staticClass:"text-h3-mobile lg:text-h2"},[t("button",{staticClass:"relative flex w-full items-center justify-between py-[10px] px-[22.5px] text-left outline-0",attrs:{type:"button"},on:{click:e.clickHandler}},[e._t("title"),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.maxHeight>0,expression:"maxHeight > 0"}],staticClass:"i before:transition-[background] before:duration-300",class:e.isOpen?"i-chevron-up":"i-chevron-down"})],2)]),e._v(" "),t("div",{directives:[{name:"set-collapse",rawName:"v-set-collapse",value:{isOpen:e.isOpen,maxHeight:e.maxHeight},expression:"{ isOpen, maxHeight }"}],ref:"wrapperEl"},[e._t("body")],2)])}),[],!1,null,"397e4460",null);t.default=component.exports},556:function(e,t,n){e.exports=n.p+"img/banner-img-1.dc22c31.jpg"},557:function(e,t,n){e.exports=n.p+"img/banner-img-2.06cd472.jpg"},558:function(e,t,n){e.exports=n.p+"img/banner-img-3.0d6ac81.jpg"},559:function(e,t,n){"use strict";n(520)},560:function(e,t,n){var r=n(55)((function(i){return i[1]}));r.push([e.i,".client-swiper__card img[data-v-58948ba0]{width:100%}.swiper[data-v-58948ba0]{--swiper-theme-color:#207d92;--swiper-pagination-bullet-inactive-color:#fff;--swiper-pagination-bullet-inactive-opacity:1;--swiper-pagination-bullet-size:14px}.swiper-pagination[data-v-58948ba0]{bottom:20px}",""]),r.locals={},e.exports=r},563:function(e,t,n){"use strict";n(523)},564:function(e,t,n){var r=n(55)((function(i){return i[1]}));r.push([e.i,".sidebar[data-v-7d1fdc0e]{width:230px;min-width:230px;margin-right:30px}.sidebar__header[data-v-7d1fdc0e]{display:flex;align-items:center;padding-bottom:14px;padding-top:4.5px;border-bottom:2px solid #cecece}",""]),r.locals={},e.exports=r},610:function(e,t,n){"use strict";n.r(t);n(85);var r=n(487),c=n.n(r),o=(n(488),{name:"TopCarousel",data:function(){return{mySwiper:null,bannerList:[{id:1,url:n(556)},{id:2,url:n(557)},{id:3,url:n(558)}]}},methods:{initSwiper:function(){this.mySwiper=new c.a(this.$refs["banner-swiper"],{loop:!0,slidesPerView:1,pagination:{el:".swiper-pagination",clickable:!0}})}},mounted:function(){var e=this;this.$nextTick((function(){setTimeout(e.initSwiper,0)}))}}),l=(n(559),n(23)),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("div",[t("client-only",[t("div",{ref:"banner-swiper",staticClass:"swiper"},[t("div",{staticClass:"swiper-wrapper"},e._l(e.bannerList,(function(e,i){return t("div",{key:"card-key"+i,staticClass:"swiper-slide"},[t("div",{staticClass:"client-swiper__card"},[t("img",{attrs:{src:e.url,alt:""}})])])})),0),e._v(" "),t("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})])])],1)}),[],!1,null,"58948ba0",null);t.default=component.exports},611:function(e,t,n){"use strict";n.r(t);n(44);var r={components:{AccordionItem:n(545).default},data:function(){return{collapseKey:[],activeKey:"全部商品",dummyCategory:[{name:"全部商品",key:"全部商品",section:[]},{name:"戶外服飾",key:"戶外服飾",section:[{name:"底層衣",key:"底層衣"},{name:"中層衣",key:"中層衣"},{name:"保暖衣",key:"保暖衣"},{name:"防水風雨衣",key:"防水風雨衣"}]},{name:"戶外背包",key:"戶外背包",section:[{name:"25L以下",key:"25L以下"},{name:"25-50L",key:"25-50L"},{name:"50L以上",key:"50L以上"},{name:"腰包/胸前包",key:"腰包/胸前包"},{name:"背包配件",key:"背包配件"}]},{name:"品牌專區",key:"品牌專區",section:[]}]}},methods:{changeActiveKey:function(e){this.activeKey=e}}},c=(n(563),n(23)),component=Object(c.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"sidebar"},[e._m(0),e._v(" "),t("div",{staticClass:"sidebar__list"},[t("ul",e._l(e.dummyCategory,(function(n,r){return t("li",{key:r},[t("AccordionItem",{key:r,attrs:{slug:n.key},scopedSlots:e._u([{key:"title",fn:function(){return[t("h6",{on:{click:function(t){return e.changeActiveKey(n.key)}}},[e._v(e._s(n.name))])]},proxy:!0},{key:"body",fn:function(){return e._l(n.section,(function(n){return t("div",{staticClass:"py-[10px] px-[28px]"},[t("p",{staticClass:"font-bold text-[#909090]",on:{click:function(t){return e.changeActiveKey(n.key)}}},[e._v(e._s(n.name))])])}))},proxy:!0}],null,!0),model:{value:e.collapseKey,callback:function(t){e.collapseKey=t},expression:"collapseKey"}})],1)})),0)])])}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"sidebar__header"},[t("span",{staticClass:"i i-list"}),e._v(" "),t("p",{staticClass:"ml-3 font-bold tx-h5"},[e._v("商品分類")])])}],!1,null,"7d1fdc0e",null);t.default=component.exports},694:function(e,t,n){"use strict";n.r(t);var r=n(610),c=n(690),o=n(611),l={components:{TopCarousel:r.default,SectionMain:c.default,SideCategoryBar:o.default}},d=n(23),component=Object(d.a)(l,(function(){var e=this,t=e._self._c;return t("div",[t("TopCarousel"),e._v(" "),t("div",{staticClass:"container"},[t("div",{staticClass:"flex mt-[88px]"},[t("SideCategoryBar"),e._v(" "),t("SectionMain")],1)])],1)}),[],!1,null,"46b95f84",null);t.default=component.exports}}]);