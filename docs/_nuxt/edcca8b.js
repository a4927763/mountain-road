(window.webpackJsonp=window.webpackJsonp||[]).push([[51,30,31,32,34,37,40,43],{475:function(t,e,r){t.exports=r.p+"img/product-img-6.31af1c4.jpg"},481:function(t,e,r){t.exports=r.p+"img/article-img-1.4655bc6.jpg"},482:function(t,e,r){t.exports=r.p+"img/photo-sticker.3f24a4e.jpg"},484:function(t,e,r){var content=r(501);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(56).default)("533d1555",content,!0,{sourceMap:!1})},487:function(t,e,r){t.exports=r.p+"img/icon-heart-white.c3690c3.svg"},488:function(t,e,r){t.exports=r.p+"img/product-img-1.d349252.jpg"},489:function(t,e,r){t.exports=r.p+"img/product-img-2.76a5298.jpg"},493:function(t,e,r){var content=r(516);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(56).default)("7c50faba",content,!0,{sourceMap:!1})},500:function(t,e,r){"use strict";r(484)},501:function(t,e,r){var n=r(55)((function(i){return i[1]}));n.push([t.i,".pages-list[data-v-23313fbd]{height:40px}@media (max-width: 576px){.pages-list[data-v-23313fbd]{height:32px}}.pages-list .page-arrow[data-v-23313fbd],.pages-list .page-item[data-v-23313fbd]{cursor:pointer}.pages-list .page-arrow p[data-v-23313fbd],.pages-list .page-ellipsis p[data-v-23313fbd],.pages-list .page-item p[data-v-23313fbd]{line-height:32px}.pages-list .page-ellipsis[data-v-23313fbd],.pages-list .page-item[data-v-23313fbd]{width:32px;height:32px;color:#1a242a}.pages-list .page-ellipsis p[data-v-23313fbd],.pages-list .page-item p[data-v-23313fbd]{line-height:32px}@media (max-width: 767px){.pages-list .page-arrow[data-v-23313fbd]:hover,.pages-list .page-item[data-v-23313fbd]:hover{opacity:.5}}.pages-list .page-arrow--disable[data-v-23313fbd],.pages-list .page-item--disable[data-v-23313fbd]{opacity:.5;cursor:default}.pages-list .page-item--active[data-v-23313fbd]{color:#fff;background-color:#207d92;border-radius:4px}.pages-list .page-item[data-v-23313fbd]:hover:not(.page-item--active){color:#207d92}.pages-list .page-item[data-v-23313fbd]:hover{opacity:1}",""]),n.locals={},t.exports=n},502:function(t,e,r){t.exports=r.p+"img/banner-img-1.dc22c31.jpg"},503:function(t,e,r){t.exports=r.p+"img/banner-img-2.06cd472.jpg"},504:function(t,e,r){t.exports=r.p+"img/banner-img-3.0d6ac81.jpg"},505:function(t,e,r){t.exports=r.p+"img/product-img-3.e6d6172.jpg"},506:function(t,e,r){t.exports=r.p+"img/product-img-4.bc131e8.jpg"},507:function(t,e,r){t.exports=r.p+"img/product-img-5.9c9579a.jpg"},510:function(t,e,r){var content=r(542);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(56).default)("b1dc0996",content,!0,{sourceMap:!1})},514:function(t,e,r){"use strict";r.r(e);r(57),r(119);var n={name:"PagesList",props:{totalPage:{type:Number,default:function(){return 1}},currentPage:{type:Number,default:function(){return 1}}},computed:{list:function(){return this.totalPage},pageArray:function(){for(var t=[],e=!1,i=1;i<=this.totalPage;i++)this.showPage(i)?(e=!1,t.push(i)):e||(t.push("Ellipsis"),e=!0);return t}},methods:{changePage:function(t){this.$emit("changePage",t)},pageMove:function(t){t<0?this.currentPage>1&&this.changePage(this.currentPage+t):this.currentPage<this.totalPage&&this.changePage(this.currentPage+t)},showPage:function(t){return this.totalPage<=8&&this.currentPage>3&&this.currentPage<6||(this.currentPage<3||this.currentPage>=this.totalPage-1?t<=3||t>=this.totalPage-2:Math.abs(t-this.currentPage)<=1||t<=2||t>=this.totalPage-1)}}},o=(r(500),r(23)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pages-list"},[e("ul",{staticClass:"flex items-center h-100 justify-center"},[e("li",{staticClass:"page-arrow pr-3 pr-md-4",class:{"page-arrow--disable":1===t.currentPage},on:{click:function(e){return t.pageMove(-1)}}},[e("div",{staticClass:"i i-arrow-page-left"})]),t._v(" "),t._l(t.pageArray,(function(r,n){return["Ellipsis"===r?e("li",{key:"".concat(r,"-").concat(n),staticClass:"page-ellipsis text-center"},[e("p",{staticClass:"font-bold"},[t._v("...")])]):e("li",{key:"".concat(r,"-").concat(n,"+others"),staticClass:"page-item text-center",class:{"page-item--active":r===t.currentPage},on:{click:function(e){return t.changePage(r)}}},[e("p",{staticClass:"font-bold"},[t._v(t._s(r))])])]})),t._v(" "),e("li",{staticClass:"page-arrow pl-3 pl-md-4",class:{"page-arrow--disable":t.currentPage===t.totalPage},on:{click:function(e){return t.pageMove(1)}}},[e("div",{staticClass:"i i-arrow-page-right"})])],2)])}),[],!1,null,"23313fbd",null);e.default=component.exports},515:function(t,e,r){"use strict";r(493)},516:function(t,e,r){var n=r(55)((function(i){return i[1]}));n.push([t.i,".btn-block[data-v-10b38e46]{box-shadow:0 0 2.61248px rgba(0,0,0,.25);border-radius:5px;padding:10px;transition:all .3s}.btn-block[data-v-10b38e46]:hover{box-shadow:0 0 2.61248px rgba(0,0,0,.6)}.btn-block button[data-v-10b38e46]{font-size:14px;line-height:1.5;font-weight:700}",""]),n.locals={},t.exports=n},524:function(t,e,r){"use strict";r.r(e);var n={name:"HeaderCategoryButton"},o=(r(515),r(23)),component=Object(o.a)(n,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"btn-block"},[e("button",{staticClass:"mr-[10px] btn btn-gray btn-gray-radius",attrs:{type:"button"}},[t._v("\n        綜合排序\n    ")]),t._v(" "),e("button",{staticClass:"mr-[10px] btn btn-gray btn-gray-radius",attrs:{type:"button"}},[t._v("\n        熱銷排名\n    ")]),t._v(" "),e("button",{staticClass:"mr-[10px] btn btn-gray btn-gray-radius",attrs:{type:"button"}},[t._v("\n        最新上架\n    ")]),t._v(" "),e("button",{staticClass:"btn btn-gray btn-gray-radius",attrs:{type:"button"}},[t._v("\n        價格排序\n    ")])])}],!1,null,"10b38e46",null);e.default=component.exports},536:function(t,e,r){var content=r(582);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(56).default)("8069f57a",content,!0,{sourceMap:!1})},537:function(t,e,r){var content=r(585);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(56).default)("16954fab",content,!0,{sourceMap:!1})},538:function(t,e,r){var map={"./article-img-1.jpg":481,"./article-img-2.jpg":539,"./article-img-3.jpg":540,"./banner-img-1.jpg":502,"./banner-img-2.jpg":503,"./banner-img-3.jpg":504,"./photo-sticker.jpg":482,"./product-img-1.jpg":488,"./product-img-2.jpg":489,"./product-img-3.jpg":505,"./product-img-4.jpg":506,"./product-img-5.jpg":507,"./product-img-6.jpg":475};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=538},539:function(t,e,r){t.exports=r.p+"img/article-img-2.de15b9f.jpg"},540:function(t,e,r){t.exports=r.p+"img/article-img-3.2dc74fd.jpg"},541:function(t,e,r){"use strict";r(510)},542:function(t,e,r){var n=r(55),o=r(120),c=r(487),l=n((function(i){return i[1]})),d=o(c);l.push([t.i,".card[data-v-c82db1fe]{box-shadow:0 0 2.61248px rgba(0,0,0,.25);border-radius:5px;padding:28.5px 25px 33px;display:flex;flex-direction:column;cursor:pointer;transition:box-shadow .3s}.card[data-v-c82db1fe]:hover{box-shadow:0 0 4px #207d92}.card:hover .card__img img[data-v-c82db1fe]{width:105%;height:105%;top:-2.5%}.card__img[data-v-c82db1fe]{width:100%;height:0;padding-bottom:94.89%;position:relative;border-radius:5px;overflow:hidden}.card__img img[data-v-c82db1fe]{transition:all .3s;position:absolute;top:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.card__footer[data-v-c82db1fe]{display:flex;justify-content:space-between;align-items:center}.card__footer__cart-text[data-v-c82db1fe]{color:#207d92;border:2px solid #207d92;width:100%;height:48px;border-radius:10px;font-weight:700;transition:all .3s}.card__footer__cart-text[data-v-c82db1fe]:hover{color:#fff;background-color:#207d92}.card__footer__like-btn[data-v-c82db1fe]{display:flex;justify-content:center;align-items:center;margin-left:10px;min-width:48px;min-height:48px;width:48px;height:48px;border:2px solid #207d92;border-radius:10px;transition:all .3s}.card__footer__like-btn[data-v-c82db1fe]:hover{background-color:#207d92}.card__footer__like-btn:hover .i-heart-green[data-v-c82db1fe]:before{background:url("+d+") no-repeat 50%/100% auto}",""]),l.locals={},t.exports=l},561:function(t,e,r){"use strict";r.r(e);var n={props:{selected:{type:String,default:""},options:{type:Array,default:[]},placeholder:{type:String,default:""}}},o=r(23),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("v-select",{attrs:{label:"value",value:t.selected,options:t.options,placeholder:t.placeholder}})],1)}),[],!1,null,null,null);e.default=component.exports},562:function(t,e,r){"use strict";r.r(e);var n={name:"activityCard",props:{img:{type:String,default:function(){return"article-img-1"}}}},o=(r(541),r(23)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("nuxt-link",{attrs:{to:"/cart/cartDetail"}},[e("div",{staticClass:"card"},[e("div",{staticClass:"card__top"},[e("div",{staticClass:"card__img mb-[10px]"},[e("img",{attrs:{src:r(538)("./".concat(t.img,".jpg")),alt:""}})]),t._v(" "),e("div",{staticClass:"card__main"},[e("h6",{staticClass:"mb-[6px]"},[t._v("【百岳入門】奇萊南華｜黃金大草原 兩天一夜")]),t._v(" "),e("div",{staticClass:"mb-[10px] flex justify-between"},[e("h6",{staticClass:"mb-[6px] text-green"},[t._v("NT$5000")]),t._v(" "),e("div",{staticClass:"flex items-center"},[e("span",{staticClass:"i i-location-green"}),t._v(" "),e("p",{staticClass:"tx-body-2 ml-[6px] !font-bold text-green"},[t._v("南投")])])])])]),t._v(" "),e("div",{staticClass:"card__footer"},[e("button",{staticClass:"card__footer__cart-text",attrs:{type:"button"}},[t._v("\n        加入購物車\n      ")]),t._v(" "),e("button",{staticClass:"card__footer__like-btn",attrs:{type:"button"}},[e("span",{staticClass:"i i-heart-green"})])])])])}),[],!1,null,"c82db1fe",null);e.default=component.exports},581:function(t,e,r){"use strict";r(536)},582:function(t,e,r){var n=r(55),o=r(120),c=r(583),l=n((function(i){return i[1]})),d=o(c);l.push([t.i,".v-select{width:180px;--vs-dropdown-option--active-bg:#207d92}.v-select .vs__search{padding:0!important;margin:0!important}.v-select .vs__search::-moz-placeholder{color:#8f8f93;font-weight:700;font-size:14px}.v-select .vs__search::placeholder{color:#8f8f93;font-weight:700;font-size:14px}.v-select .vs__selected{height:100%;padding:0;margin:0!important;color:#8f8f93;font-weight:700;font-size:14px}.v-select .vs__selected-options{padding:0 10px 0 15px}.v-select .vs__actions{padding:0 15px 0 0}.v-select .vs__dropdown-toggle{padding:0;border:none;box-shadow:0 0 2.61248px rgba(0,0,0,.25);border-radius:5px}.v-select .vs__dropdown-menu{top:calc(100% - 4px)!important;border:1px solid #207d92;border-top:none;border-radius:0 0 5px 5px}.v-select .vs__dropdown-menu li{font-weight:700;line-height:1.5;font-size:14px;padding:15px!important;color:#8f8f93}.v-select .vs__dropdown-option--highlight{color:#fff!important;background:#207d92}.vs--open .vs__dropdown-toggle{border:1px solid #207d92!important}.banner{background-image:url("+d+");background-repeat:no-repeat;background-size:cover;background-position:50%;background-attachment:fixed;height:592px;width:100%;display:flex;flex-direction:column;justify-content:flex-end;align-items:center;padding-bottom:58px}.banner__main{max-width:980px}.banner__main,.banner__main .input-block{width:100%;display:flex;justify-content:space-between}.banner__main .input-block{background-color:#fff;align-items:center;padding:12px 0 12px 32px;border-radius:4.5px 0 0 4.5px}.banner__main .input-block__search-text{margin-right:28px}.banner__main .input-block__search-text input{width:270px;box-shadow:0 0 2.61248px rgba(0,0,0,.25);border-radius:5px;border:none}.banner__main .input-block__line{width:2px;height:26px;background-color:#e5e5e5;margin-right:23px}.banner__main .input-block__area,.banner__main .input-block__category,.banner__main .input-block__level{margin-right:23px}.banner__main .search-btn{background-color:#207d92;min-width:72px;width:72px;display:flex;align-items:center;justify-content:center;border-radius:0 4.5px 4.5px 0}",""]),l.locals={},t.exports=l},583:function(t,e,r){t.exports=r.p+"img/search-banner.dc81427.jpg"},584:function(t,e,r){"use strict";r(537)},585:function(t,e,r){var n=r(55)((function(i){return i[1]}));n.push([t.i,".header[data-v-4866b1fd]{display:flex;justify-content:space-between;align-items:center;margin-top:46px;margin-bottom:26px}",""]),n.locals={},t.exports=n},640:function(t,e,r){"use strict";r.r(e);var n={components:{InputSelect:r(561).default},data:function(){return{selectedCategory:"",category:[{value:"百岳入門"},{value:"百岳進階"},{value:"中級山/小百岳"},{value:"野溪溫泉"},{value:"戶外攀岩"},{value:"雪攀訓練"},{value:"溯溪體驗"},{value:"懶人露營"}],selectedArea:"",area:[{value:"北部"},{value:"中部"},{value:"南部"},{value:"東部"},{value:"離島"},{value:"國外地區"}],selectedLevel:"",level:[{value:"初階"},{value:"進階"},{value:"高階"}]}}},o=(r(581),r(23)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"banner"},[e("h1",{staticClass:"mb-[18px] text-white"},[t._v("開始探索台灣之美")]),t._v(" "),e("h2",{staticClass:"mb-10 text-white"},[t._v("啟程  從現在開始")]),t._v(" "),e("div",{staticClass:"banner__main"},[e("div",{staticClass:"input-block"},[e("div",{staticClass:"input-block__category"},[e("v-select",{attrs:{label:"value",options:t.category,placeholder:"類型",searchable:!1,clearable:!1},model:{value:t.selectedCategory,callback:function(e){t.selectedCategory=e},expression:"selectedCategory"}})],1),t._v(" "),e("div",{staticClass:"input-block__area"},[e("v-select",{attrs:{label:"value",options:t.area,placeholder:"地區",searchable:!1,clearable:!1},model:{value:t.selectedArea,callback:function(e){t.selectedArea=e},expression:"selectedArea"}})],1),t._v(" "),e("div",{staticClass:"input-block__level"},[e("v-select",{attrs:{label:"value",options:t.level,placeholder:"難易度",searchable:!1,clearable:!1},model:{value:t.selectedLevel,callback:function(e){t.selectedLevel=e},expression:"selectedLevel"}})],1),t._v(" "),e("div",{staticClass:"input-block__line"}),t._v(" "),t._m(0)]),t._v(" "),t._m(1)])])}),[function(){var t=this._self._c;return t("div",{staticClass:"input-block__search-text"},[t("input",{attrs:{type:"text",placeholder:"搜尋登山路線及山岳名稱...."}})])},function(){var t=this._self._c;return t("div",{staticClass:"search-btn"},[t("span",{staticClass:"i i-search"})])}],!1,null,null,null);e.default=component.exports},641:function(t,e,r){"use strict";r.r(e);var n={components:{HeaderCategoryButton:r(524).default}},o=(r(584),r(23)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"header"},[t._m(0),t._v(" "),e("HeaderCategoryButton")],1)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"header__title"},[e("div",{staticClass:"flex items-center"},[e("h4",{staticClass:"pb-1 border-solid border-b-[3px] border-[#207D92]"},[t._v("路線列表")]),t._v(" "),e("p",{staticClass:"ml-5"},[t._v("共15筆路線資料")])])])}],!1,null,"4866b1fd",null);e.default=component.exports},642:function(t,e,r){"use strict";r.r(e);var n=r(562),o=r(514),c={components:{ActivityCard:n.default,PageList:o.default},data:function(){return{currentPage:1,totalPage:10}},methods:{changePage:function(t){this.currentPage=t}}},l=r(23),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"grid grid-cols-3 gap-10 mb-[58px]"},[e("ActivityCard",{attrs:{img:"article-img-1"}}),t._v(" "),e("ActivityCard",{attrs:{img:"article-img-2"}}),t._v(" "),e("ActivityCard",{attrs:{img:"article-img-3"}}),t._v(" "),e("ActivityCard",{attrs:{img:"article-img-1"}}),t._v(" "),e("ActivityCard",{attrs:{img:"article-img-2"}}),t._v(" "),e("ActivityCard",{attrs:{img:"article-img-3"}})],1),t._v(" "),e("div",[e("PageList",{attrs:{totalPage:t.totalPage,currentPage:t.currentPage},on:{changePage:t.changePage}})],1)])}),[],!1,null,null,null);e.default=component.exports},716:function(t,e,r){"use strict";r.r(e);var n=r(640),o=r(641),c=r(642),l={components:{TopBanner:n.default,ProductListHeader:o.default,ProductListMain:c.default}},d=r(23),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("TopBanner"),t._v(" "),e("ProductListHeader"),t._v(" "),e("ProductListMain")],1)}),[],!1,null,"30fb1c20",null);e.default=component.exports}}]);