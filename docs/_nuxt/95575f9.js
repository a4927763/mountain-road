(window.webpackJsonp=window.webpackJsonp||[]).push([[7,11,12,13,14],{391:function(t,e,r){var content=r(395);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(39).default)("c8ad7140",content,!0,{sourceMap:!1})},392:function(t,e,r){var content=r(397);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(39).default)("1f2fd526",content,!0,{sourceMap:!1})},393:function(t,e,r){var content=r(407);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(39).default)("5e9ce207",content,!0,{sourceMap:!1})},394:function(t,e,r){"use strict";r(391)},395:function(t,e,r){var n=r(38)((function(i){return i[1]}));n.push([t.i,".input-text[data-v-cfab308e]{display:flex;flex-direction:column}.input-text input[data-v-cfab308e]{box-shadow:0 0 3.65161px rgba(0,0,0,.25);border-radius:4.56452px}[data-v-cfab308e] .require{color:red}",""]),n.locals={},t.exports=n},396:function(t,e,r){"use strict";r(392)},397:function(t,e,r){var n=r(38)((function(i){return i[1]}));n.push([t.i,".input-area[data-v-6ff96d0a]{display:flex;flex-direction:column}.input-area textarea[data-v-6ff96d0a]{box-shadow:0 0 3.65161px rgba(0,0,0,.25);border-radius:4.56452px;resize:none}[data-v-6ff96d0a] .require{color:red}",""]),n.locals={},t.exports=n},398:function(t,e,r){"use strict";r.r(e);r(160);var n={props:{id:{type:String,default:function(){return""}},label:{default:"",type:String},value:{type:[String,Number],default:function(){return""}},isError:{type:Boolean,default:function(){return!1}},error_msg:{type:String,default:function(){return""}}},computed:{defaultErrorMsg:function(){return"default Error Msg"}}},l=(r(394),r(27)),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"input-text"},[e("label",{directives:[{name:"show",rawName:"v-show",value:t.label,expression:"label"}],staticClass:"pb-2 tx-h6",attrs:{for:t.id},domProps:{innerHTML:t._s(t.label)}}),t._v(" "),e("input",t._b({attrs:{type:"text",id:t.id},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}},"input",t.$attrs,!1)),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isError,expression:"isError"}],staticClass:"text-danger pt-1",domProps:{innerHTML:t._s(t.error_msg||t.defaultErrorMsg)}})])}),[],!1,null,"cfab308e",null);e.default=component.exports},399:function(t,e,r){"use strict";r.r(e);r(160);var n={props:{id:{type:String,default:function(){return""}},label:{default:"",type:String},value:{type:[String,Number],default:function(){return""}},isError:{type:Boolean,default:function(){return!1}},error_msg:{type:String,default:function(){return""}}},computed:{defaultErrorMsg:function(){return"default Error Msg"}}},l=(r(396),r(27)),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"input-area"},[e("label",{directives:[{name:"show",rawName:"v-show",value:t.label,expression:"label"}],staticClass:"pb-2 tx-h6",attrs:{for:t.id},domProps:{innerHTML:t._s(t.label)}}),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],attrs:{id:t.id,cols:"30",rows:"6",placeholder:"Enter something..."},domProps:{value:t.value},on:{input:function(e){e.target.composing||(t.value=e.target.value)}}}),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isError,expression:"isError"}],staticClass:"text-danger pt-1",domProps:{innerHTML:t._s(t.error_msg||t.defaultErrorMsg)}})])}),[],!1,null,"6ff96d0a",null);e.default=component.exports},406:function(t,e,r){"use strict";r(393)},407:function(t,e,r){var n=r(38)((function(i){return i[1]}));n.push([t.i,".input-email[data-v-1a6de94a]{display:flex;flex-direction:column}.input-email input[data-v-1a6de94a]{box-shadow:0 0 3.65161px rgba(0,0,0,.25);border-radius:4.56452px}",""]),n.locals={},t.exports=n},408:function(t,e,r){var content=r(433);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(39).default)("58b3480d",content,!0,{sourceMap:!1})},411:function(t,e,r){"use strict";r.r(e);var n={props:{options:{type:Array,default:[]}}},l=r(27),component=Object(l.a)(n,(function(){var t=this._self._c;return t("div",[t("v-select",{attrs:{options:this.options}})],1)}),[],!1,null,null,null);e.default=component.exports},412:function(t,e,r){"use strict";r.r(e);r(160);var n={props:{id:{type:String,default:function(){return""}},label:{default:"",type:String},value:{type:[String,Number],default:function(){return""}},isError:{type:Boolean,default:function(){return!1}},error_msg:{type:String,default:function(){return""}}},computed:{defaultErrorMsg:function(){return"default Error Msg"}}},l=(r(406),r(27)),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"input-email"},[e("label",{directives:[{name:"show",rawName:"v-show",value:t.label,expression:"label"}],staticClass:"pb-2 tx-h6",attrs:{for:t.id},domProps:{innerHTML:t._s(t.label)}}),t._v(" "),e("input",t._b({attrs:{type:"email",id:t.id},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}},"input",t.$attrs,!1)),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isError,expression:"isError"}],staticClass:"text-danger pt-1",domProps:{innerHTML:t._s(t.error_msg||t.defaultErrorMsg)}})])}),[],!1,null,"1a6de94a",null);e.default=component.exports},432:function(t,e,r){"use strict";r(408)},433:function(t,e,r){var n=r(38),l=r(101),o=r(434),d=n((function(i){return i[1]})),c=l(o);d.push([t.i,".page[data-v-38939f4d]{background-image:url("+c+");background-repeat:no-repeat;background-size:cover;background-position:50%}.page__main[data-v-38939f4d]{display:flex;justify-content:center;align-items:center;padding:60px 0}.page__left[data-v-38939f4d]{text-align:center;padding:30px;max-width:615px;width:50%}.page__left__title[data-v-38939f4d]{margin-bottom:25px}.page__left__title h4[data-v-38939f4d]{margin-bottom:12px;color:#207d92}.page__left__title .line[data-v-38939f4d]{width:90.5px;height:12px;background:#207d92;margin:auto}.page__left__content[data-v-38939f4d]{color:#727987;margin-bottom:25px}.page__right[data-v-38939f4d]{width:50%}.form[data-v-38939f4d]{color:#000;background-color:#fff;padding:45px 50px 40px;border-radius:5px}",""]),d.locals={},t.exports=d},434:function(t,e,r){t.exports=r.p+"img/home-touch-banner.b994b67.jpg"},443:function(t,e,r){"use strict";r.r(e);r(52);var n=r(398),l=r(411),o=r(412),d=r(399),c={components:{InputText:n.default,InputSelect:l.default,InputEmail:o.default,InputTextArea:d.default},data:function(){return{name:null,phone:null,email:null,textArea:null}}},f=(r(432),r(27)),component=Object(f.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"page"},[e("div",{staticClass:"container"},[e("div",{staticClass:"page__main"},[t._m(0),t._v(" "),e("div",{staticClass:"page__right"},[e("div",{staticClass:"form"},[e("div",{staticClass:"mb-5"},[e("InputText",{attrs:{label:"姓名<span class='require'>*</span>",id:"name",value:t.name}})],1),t._v(" "),e("div",{staticClass:"mb-5"},[e("InputText",{attrs:{label:"電話<span class='require'>*</span>",id:"phone",value:t.phone}})],1),t._v(" "),e("div",{staticClass:"mb-5"},[e("InputText",{attrs:{label:"信箱<span class='require'>*</span>",id:"email",value:t.email}})],1),t._v(" "),e("div",{staticClass:"mb-12"},[e("InputTextArea",{attrs:{label:"詢問內容<span class='require'>*</span>",id:"textArea",value:t.textArea}})],1),t._v(" "),t._m(1)])])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"page__left"},[e("div",{staticClass:"page__left__title"},[e("h4",{},[t._v("GET IN TOUCH")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),e("h6",{staticClass:"page__left__content"},[t._v("若您有任何需要我們服務的地方，請填寫以下表單表達您的意見，我們將會請專人盡快為您服務。")]),t._v(" "),e("button",{staticClass:"btn btn-primary"},[t._v("\n                    點我看更多\n                ")])])},function(){var t=this._self._c;return t("div",{},[t("button",{staticClass:"!block btn btn-primary mx-auto"},[this._v("\n                            送出\n                        ")])])}],!1,null,"38939f4d",null);e.default=component.exports}}]);