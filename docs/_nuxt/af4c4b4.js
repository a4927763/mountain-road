(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{454:function(e,t,r){var content=r(464);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(53).default)("6e9503f1",content,!0,{sourceMap:!1})},463:function(e,t,r){"use strict";r(454)},464:function(e,t,r){var n=r(52)((function(i){return i[1]}));n.push([e.i,".input-text[data-v-6696eecc]{display:flex;flex-direction:column}.input-text input[data-v-6696eecc]{box-shadow:0 0 3.65161px rgba(0,0,0,.25);border-radius:5px}[data-v-6696eecc] .require{color:red}",""]),n.locals={},e.exports=n},471:function(e,t,r){"use strict";r.r(t);r(111);var n={props:{id:{type:String,default:function(){return""}},label:{default:"",type:String},value:{type:[String,Number],default:function(){return""}},placeholder:{default:"",type:String},isError:{type:Boolean,default:function(){return!1}},error_msg:{type:String,default:function(){return""}}},computed:{defaultErrorMsg:function(){return"default Error Msg"}}},o=(r(463),r(25)),component=Object(o.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"input-text"},[t("label",{directives:[{name:"show",rawName:"v-show",value:e.label,expression:"label"}],staticClass:"pb-2 tx-h6",attrs:{for:e.id},domProps:{innerHTML:e._s(e.label)}}),e._v(" "),t("input",e._b({attrs:{type:"text",id:e.id,placeholder:e.placeholder},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}},"input",e.$attrs,!1)),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.isError,expression:"isError"}],staticClass:"text-danger pt-1",domProps:{innerHTML:e._s(e.error_msg||e.defaultErrorMsg)}})])}),[],!1,null,"6696eecc",null);t.default=component.exports}}]);