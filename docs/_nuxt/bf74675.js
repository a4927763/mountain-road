(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{391:function(t,e,r){var content=r(395);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(39).default)("c8ad7140",content,!0,{sourceMap:!1})},394:function(t,e,r){"use strict";r(391)},395:function(t,e,r){var n=r(38)((function(i){return i[1]}));n.push([t.i,".input-text[data-v-cfab308e]{display:flex;flex-direction:column}.input-text input[data-v-cfab308e]{box-shadow:0 0 3.65161px rgba(0,0,0,.25);border-radius:4.56452px}[data-v-cfab308e] .require{color:red}",""]),n.locals={},t.exports=n},398:function(t,e,r){"use strict";r.r(e);r(160);var n={props:{id:{type:String,default:function(){return""}},label:{default:"",type:String},value:{type:[String,Number],default:function(){return""}},isError:{type:Boolean,default:function(){return!1}},error_msg:{type:String,default:function(){return""}}},computed:{defaultErrorMsg:function(){return"default Error Msg"}}},o=(r(394),r(27)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"input-text"},[e("label",{directives:[{name:"show",rawName:"v-show",value:t.label,expression:"label"}],staticClass:"pb-2 tx-h6",attrs:{for:t.id},domProps:{innerHTML:t._s(t.label)}}),t._v(" "),e("input",t._b({attrs:{type:"text",id:t.id},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}},"input",t.$attrs,!1)),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isError,expression:"isError"}],staticClass:"text-danger pt-1",domProps:{innerHTML:t._s(t.error_msg||t.defaultErrorMsg)}})])}),[],!1,null,"cfab308e",null);e.default=component.exports}}]);