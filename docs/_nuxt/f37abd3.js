(window.webpackJsonp=window.webpackJsonp||[]).push([[32,40],{528:function(e,t,n){var content=n(571);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(56).default)("8069f57a",content,!0,{sourceMap:!1})},547:function(e,t,n){"use strict";n.r(t);var l={props:{selected:{type:String,default:""},options:{type:Array,default:[]},placeholder:{type:String,default:""}}},o=n(23),component=Object(o.a)(l,(function(){var e=this,t=e._self._c;return t("div",[t("v-select",{attrs:{label:"value",value:e.selected,options:e.options,placeholder:e.placeholder}})],1)}),[],!1,null,null,null);t.default=component.exports},570:function(e,t,n){"use strict";n(528)},571:function(e,t,n){var l=n(55),o=n(120),r=n(572),c=l((function(i){return i[1]})),d=o(r);c.push([e.i,".v-select{width:180px;--vs-dropdown-option--active-bg:#207d92}.v-select .vs__search{padding:0!important;margin:0!important}.v-select .vs__search::-moz-placeholder{color:#8f8f93;font-weight:700;font-size:14px}.v-select .vs__search::placeholder{color:#8f8f93;font-weight:700;font-size:14px}.v-select .vs__selected{height:100%;padding:0;margin:0!important;color:#8f8f93;font-weight:700;font-size:14px}.v-select .vs__selected-options{padding:0 10px 0 15px}.v-select .vs__actions{padding:0 15px 0 0}.v-select .vs__dropdown-toggle{padding:0;border:none;box-shadow:0 0 2.61248px rgba(0,0,0,.25);border-radius:5px}.v-select .vs__dropdown-menu{top:calc(100% - 4px)!important;border:1px solid #207d92;border-top:none;border-radius:0 0 5px 5px}.v-select .vs__dropdown-menu li{font-weight:700;line-height:1.5;font-size:14px;padding:15px!important;color:#8f8f93}.v-select .vs__dropdown-option--highlight{color:#fff!important;background:#207d92}.vs--open .vs__dropdown-toggle{border:1px solid #207d92!important}.banner{background-image:url("+d+");background-repeat:no-repeat;background-size:cover;background-position:50%;background-attachment:fixed;height:592px;width:100%;display:flex;flex-direction:column;justify-content:flex-end;align-items:center;padding-bottom:58px}.banner__main{max-width:980px}.banner__main,.banner__main .input-block{width:100%;display:flex;justify-content:space-between}.banner__main .input-block{background-color:#fff;align-items:center;padding:12px 0 12px 32px;border-radius:4.5px 0 0 4.5px}.banner__main .input-block__search-text{margin-right:28px}.banner__main .input-block__search-text input{width:270px;box-shadow:0 0 2.61248px rgba(0,0,0,.25);border-radius:5px;border:none}.banner__main .input-block__line{width:2px;height:26px;background-color:#e5e5e5;margin-right:23px}.banner__main .input-block__area,.banner__main .input-block__category,.banner__main .input-block__level{margin-right:23px}.banner__main .search-btn{background-color:#207d92;min-width:72px;width:72px;display:flex;align-items:center;justify-content:center;border-radius:0 4.5px 4.5px 0}",""]),c.locals={},e.exports=c},572:function(e,t,n){e.exports=n.p+"img/search-banner.dc81427.jpg"},621:function(e,t,n){"use strict";n.r(t);var l={components:{InputSelect:n(547).default},data:function(){return{selectedCategory:"",category:[{value:"百岳入門"},{value:"百岳進階"},{value:"中級山/小百岳"},{value:"野溪溫泉"},{value:"戶外攀岩"},{value:"雪攀訓練"},{value:"溯溪體驗"},{value:"懶人露營"}],selectedArea:"",area:[{value:"北部"},{value:"中部"},{value:"南部"},{value:"東部"},{value:"離島"},{value:"國外地區"}],selectedLevel:"",level:[{value:"初階"},{value:"進階"},{value:"高階"}]}}},o=(n(570),n(23)),component=Object(o.a)(l,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"banner"},[t("h1",{staticClass:"mb-[18px] text-white"},[e._v("開始探索台灣之美")]),e._v(" "),t("h2",{staticClass:"mb-10 text-white"},[e._v("啟程  從現在開始")]),e._v(" "),t("div",{staticClass:"banner__main"},[t("div",{staticClass:"input-block"},[t("div",{staticClass:"input-block__category"},[t("v-select",{attrs:{label:"value",options:e.category,placeholder:"類型",searchable:!1,clearable:!1},model:{value:e.selectedCategory,callback:function(t){e.selectedCategory=t},expression:"selectedCategory"}})],1),e._v(" "),t("div",{staticClass:"input-block__area"},[t("v-select",{attrs:{label:"value",options:e.area,placeholder:"地區",searchable:!1,clearable:!1},model:{value:e.selectedArea,callback:function(t){e.selectedArea=t},expression:"selectedArea"}})],1),e._v(" "),t("div",{staticClass:"input-block__level"},[t("v-select",{attrs:{label:"value",options:e.level,placeholder:"難易度",searchable:!1,clearable:!1},model:{value:e.selectedLevel,callback:function(t){e.selectedLevel=t},expression:"selectedLevel"}})],1),e._v(" "),t("div",{staticClass:"input-block__line"}),e._v(" "),e._m(0)]),e._v(" "),e._m(1)])])}),[function(){var e=this._self._c;return e("div",{staticClass:"input-block__search-text"},[e("input",{attrs:{type:"text",placeholder:"搜尋登山路線及山岳名稱...."}})])},function(){var e=this._self._c;return e("div",{staticClass:"search-btn"},[e("span",{staticClass:"i i-search"})])}],!1,null,null,null);t.default=component.exports}}]);