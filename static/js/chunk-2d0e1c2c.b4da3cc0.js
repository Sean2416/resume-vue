(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e1c2c"],{"7c8b":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-card",[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("店家資料")]),e._v(" "),a("el-button",{staticStyle:{float:"right","margin-right":"10px"},attrs:{type:"primary",plain:"",icon:"el-icon-map-location"},on:{click:function(t){return e.showOnMap()}}})],1),e._v(" "),a("el-form",{staticClass:"showInfo"},[a("el-form-item",{attrs:{label:"帳號"}},[a("el-input",{attrs:{readonly:""},model:{value:e.storeData.username,callback:function(t){e.$set(e.storeData,"username",t)},expression:"storeData.username"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"店家名稱"}},[a("el-input",{attrs:{readonly:""},model:{value:e.storeData.name,callback:function(t){e.$set(e.storeData,"name",t)},expression:"storeData.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"店家類型"}},[a("el-input",{attrs:{readonly:""},model:{value:e.storeData.storeTypeLabel,callback:function(t){e.$set(e.storeData,"storeTypeLabel",t)},expression:"storeData.storeTypeLabel"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"統編"}},[a("el-input",{attrs:{readonly:""},model:{value:e.storeData.businessNo,callback:function(t){e.$set(e.storeData,"businessNo",t)},expression:"storeData.businessNo"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商家地址"}},[a("el-input",{attrs:{readonly:""},model:{value:e.storeData.address,callback:function(t){e.$set(e.storeData,"address",t)},expression:"storeData.address"}})],1)],1)],1)],1)},r=[],o=a("1157"),l=a.n(o),n=a("4214"),i={name:"StoreInfo",props:{storeData:{type:Object,required:!0}},data:function(){return{storeType:n.storeType}},methods:{},watch:{storeData:{deep:!0,immediate:!0,handler:function(e){var t=this,a=l.a.grep(t.storeType,(function(e){return e.value==t.storeData.type}));a.length>0&&(t.storeData.storeTypeLabel=a[0].label)}}}},c=i,u=a("2877"),p=Object(u["a"])(c,s,r,!1,null,null,null);t["default"]=p.exports}}]);