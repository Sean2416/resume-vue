(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b1e812e"],{6623:function(e,t,n){},a02d:function(e,t,n){"use strict";var r=n("6623"),i=n.n(r);i.a},a6dc:function(e,t,n){"use strict";n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"f",(function(){return l})),n.d(t,"e",(function(){return s})),n.d(t,"a",(function(){return a})),n.d(t,"g",(function(){return c})),n.d(t,"b",(function(){return m}));var r=n("b775");function i(e){return Object(r["a"])({url:"/system/menu/list",method:"get",params:e})}function o(e){return Object(r["a"])({url:"/system/menu/"+e,method:"get"})}function l(){return Object(r["a"])({url:"/system/menu/treeselect",method:"get"})}function s(e){return Object(r["a"])({url:"/system/menu/roleMenuTreeselect/"+e,method:"get"})}function a(e){return Object(r["a"])({url:"/system/menu",method:"post",data:e})}function c(e){return Object(r["a"])({url:"/system/menu",method:"put",data:e})}function m(e){return Object(r["a"])({url:"/system/menu/"+e,method:"delete"})}},f794:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-form",{attrs:{inline:!0}},[n("el-form-item",{attrs:{label:"選單名稱"}},[n("el-input",{attrs:{placeholder:"請輸入選單名稱",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.menuName,callback:function(t){e.$set(e.queryParams,"menuName",t)},expression:"queryParams.menuName"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"狀態"}},[n("el-select",{attrs:{placeholder:"選單狀態",clearable:"",size:"small"},model:{value:e.queryParams.visible,callback:function(t){e.$set(e.queryParams,"visible",t)},expression:"queryParams.visible"}},e._l(e.visibleOptions,(function(e){return n("el-option",{key:e.dictValue,attrs:{label:e.dictLabel,value:e.dictValue}})})),1)],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜尋")]),e._v(" "),n("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:menu:add"],expression:"['system:menu:add']"}],attrs:{type:"primary",icon:"el-icon-plus",size:"mini"},on:{click:e.handleAdd}},[e._v("新增")])],1)],1),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.menuList,"row-key":"menuId","tree-props":{children:"children",hasChildren:"hasChildren"}}},[n("el-table-column",{attrs:{prop:"menuName",label:"選單名稱","show-overflow-tooltip":!0,width:"160"}}),e._v(" "),n("el-table-column",{attrs:{prop:"icon",label:"圖示",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(e){return[n("svg-icon",{attrs:{"icon-class":e.row.icon}})]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"orderNum",label:"排序",width:"60"}}),e._v(" "),n("el-table-column",{attrs:{prop:"perms",label:"許可權標識","show-overflow-tooltip":!0}}),e._v(" "),n("el-table-column",{attrs:{prop:"component",label:"元件路徑","show-overflow-tooltip":!0}}),e._v(" "),n("el-table-column",{attrs:{prop:"visible",label:"可見",formatter:e.visibleFormat,width:"80"}}),e._v(" "),n("el-table-column",{attrs:{label:"建立時間",align:"center",prop:"createTime"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(e.parseTime(t.row.createTime)))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:menu:edit"],expression:"['system:menu:edit']"}],attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(n){return e.handleUpdate(t.row)}}},[e._v("修改")]),e._v(" "),n("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:menu:add"],expression:"['system:menu:add']"}],attrs:{size:"mini",type:"text",icon:"el-icon-plus"},on:{click:function(n){return e.handleAdd(t.row)}}},[e._v("新增")]),e._v(" "),n("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:menu:remove"],expression:"['system:menu:remove']"}],attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(n){return e.handleDelete(t.row)}}},[e._v("刪除")])]}}])})],1),e._v(" "),n("el-dialog",{attrs:{title:e.title,visible:e.open,width:"600px"},on:{"update:visible":function(t){e.open=t}}},[n("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[n("el-row",[n("el-col",{attrs:{span:24}},[n("el-form-item",{attrs:{label:"上級選單"}},[n("treeselect",{attrs:{options:e.menuOptions,normalizer:e.normalizer,"show-count":!0,placeholder:"選擇上級選單"},model:{value:e.form.parentId,callback:function(t){e.$set(e.form,"parentId",t)},expression:"form.parentId"}})],1)],1),e._v(" "),n("el-col",{attrs:{span:24}},[n("el-form-item",{attrs:{label:"選單型別",prop:"menuType"}},[n("el-radio-group",{model:{value:e.form.menuType,callback:function(t){e.$set(e.form,"menuType",t)},expression:"form.menuType"}},[n("el-radio",{attrs:{label:"M"}},[e._v("目錄")]),e._v(" "),n("el-radio",{attrs:{label:"C"}},[e._v("選單")]),e._v(" "),n("el-radio",{attrs:{label:"F"}},[e._v("按鈕")])],1)],1)],1),e._v(" "),n("el-col",{attrs:{span:24}},["F"!=e.form.menuType?n("el-form-item",{attrs:{label:"選單圖示"}},[n("el-popover",{attrs:{placement:"bottom-start",width:"460",trigger:"click"},on:{show:function(t){return e.$refs["iconSelect"].reset()}}},[n("IconSelect",{ref:"iconSelect",on:{selected:e.selected}}),e._v(" "),n("el-input",{attrs:{slot:"reference",placeholder:"點選選擇圖示",readonly:""},slot:"reference",model:{value:e.form.icon,callback:function(t){e.$set(e.form,"icon",t)},expression:"form.icon"}},[e.form.icon?n("svg-icon",{staticClass:"el-input__icon",staticStyle:{height:"32px",width:"16px"},attrs:{slot:"prefix","icon-class":e.form.icon},slot:"prefix"}):n("i",{staticClass:"el-icon-search el-input__icon",attrs:{slot:"prefix"},slot:"prefix"})],1)],1)],1):e._e()],1),e._v(" "),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"選單名稱",prop:"menuName"}},[n("el-input",{attrs:{placeholder:"請輸入選單名稱"},model:{value:e.form.menuName,callback:function(t){e.$set(e.form,"menuName",t)},expression:"form.menuName"}})],1)],1),e._v(" "),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"顯示排序",prop:"orderNum"}},[n("el-input-number",{attrs:{"controls-position":"right",min:0},model:{value:e.form.orderNum,callback:function(t){e.$set(e.form,"orderNum",t)},expression:"form.orderNum"}})],1)],1),e._v(" "),n("el-col",{attrs:{span:12}},["F"!=e.form.menuType?n("el-form-item",{attrs:{label:"是否外鏈"}},[n("el-radio-group",{model:{value:e.form.isFrame,callback:function(t){e.$set(e.form,"isFrame",t)},expression:"form.isFrame"}},[n("el-radio",{attrs:{label:"0"}},[e._v("是")]),e._v(" "),n("el-radio",{attrs:{label:"1"}},[e._v("否")])],1)],1):e._e()],1),e._v(" "),n("el-col",{attrs:{span:12}},["F"!=e.form.menuType?n("el-form-item",{attrs:{label:"路由地址",prop:"path"}},[n("el-input",{attrs:{placeholder:"請輸入路由地址"},model:{value:e.form.path,callback:function(t){e.$set(e.form,"path",t)},expression:"form.path"}})],1):e._e()],1),e._v(" "),"C"==e.form.menuType?n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"元件路徑",prop:"component"}},[n("el-input",{attrs:{placeholder:"請輸入元件路徑"},model:{value:e.form.component,callback:function(t){e.$set(e.form,"component",t)},expression:"form.component"}})],1)],1):e._e(),e._v(" "),n("el-col",{attrs:{span:12}},["M"!=e.form.menuType?n("el-form-item",{attrs:{label:"許可權標識"}},[n("el-input",{attrs:{placeholder:"請許可權標識",maxlength:"50"},model:{value:e.form.perms,callback:function(t){e.$set(e.form,"perms",t)},expression:"form.perms"}})],1):e._e()],1),e._v(" "),n("el-col",{attrs:{span:24}},["F"!=e.form.menuType?n("el-form-item",{attrs:{label:"選單狀態"}},[n("el-radio-group",{model:{value:e.form.visible,callback:function(t){e.$set(e.form,"visible",t)},expression:"form.visible"}},e._l(e.visibleOptions,(function(t){return n("el-radio",{key:t.dictValue,attrs:{label:t.dictValue}},[e._v(e._s(t.dictLabel))])})),1)],1):e._e()],1)],1)],1),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("確 定")]),e._v(" "),n("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1)],1)},i=[],o=n("a6dc"),l=n("ca17"),s=n.n(l),a=(n("542c"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"icon-body"},[n("el-input",{staticStyle:{position:"relative"},attrs:{clearable:"",placeholder:"請輸入圖示名稱"},on:{clear:e.filterIcons},nativeOn:{input:function(t){return e.filterIcons(t)}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}},[n("i",{staticClass:"el-icon-search el-input__icon",attrs:{slot:"suffix"},slot:"suffix"})]),e._v(" "),n("div",{staticClass:"icon-list"},e._l(e.iconList,(function(t,r){return n("div",{key:r,on:{click:function(n){return e.selectedIcon(t)}}},[n("svg-icon",{staticStyle:{height:"30px",width:"16px"},attrs:{"icon-class":t}}),e._v(" "),n("span",[e._v(e._s(t))])],1)})),0)],1)}),c=[],m=(n("6762"),n("2fdb"),n("7f7f"),n("4917"),n("ac6a"),n("23f1")),u=function(e){return e.keys()},d=/\.\/(.*)\.svg/,f=u(m).map((function(e){return e.match(d)[1]})),p=f,h={name:"IconSelect",data:function(){return{name:"",iconList:p}},methods:{filterIcons:function(){var e=this;this.name?this.iconList=this.iconList.filter((function(t){return t.includes(e.name)})):this.iconList=p},selectedIcon:function(e){this.$emit("selected",e),document.body.click()},reset:function(){this.name="",this.iconList=p}}},v=h,b=(n("a02d"),n("2877")),_=Object(b["a"])(v,a,c,!1,null,"38e74ff8",null),y=_.exports,g={name:"Menu",components:{Treeselect:s.a,IconSelect:y},data:function(){return{loading:!0,menuList:[],menuOptions:[],title:"",open:!1,visibleOptions:[],queryParams:{menuName:void 0,visible:void 0},form:{},rules:{menuName:[{required:!0,message:"選單名稱不能為空",trigger:"blur"}],orderNum:[{required:!0,message:"選單順序不能為空",trigger:"blur"}],path:[{required:!0,message:"路由地址不能為空",trigger:"blur"}]}}},created:function(){var e=this;this.getList(),this.getDicts("sys_show_hide").then((function(t){e.visibleOptions=t.data}))},methods:{selected:function(e){this.form.icon=e},getList:function(){var e=this;this.loading=!0,Object(o["d"])(this.queryParams).then((function(t){e.menuList=e.handleTree(t.data,"menuId"),e.loading=!1}))},normalizer:function(e){return e.children&&!e.children.length&&delete e.children,{id:e.menuId,label:e.menuName,children:e.children}},getTreeselect:function(){var e=this;Object(o["d"])().then((function(t){e.menuOptions=[];var n={menuId:0,menuName:"主類目",children:[]};n.children=e.handleTree(t.data,"menuId"),e.menuOptions.push(n)}))},visibleFormat:function(e,t){return"F"==e.menuType?"":this.selectDictLabel(this.visibleOptions,e.visible)},cancel:function(){this.open=!1,this.reset()},reset:function(){this.form={menuId:void 0,parentId:0,menuName:void 0,icon:void 0,menuType:"M",orderNum:void 0,isFrame:"1",visible:"0"},this.resetForm("form")},handleQuery:function(){this.getList()},handleAdd:function(e){this.reset(),this.getTreeselect(),null!=e&&(this.form.parentId=e.menuId),this.open=!0,this.title="新增選單"},handleUpdate:function(e){var t=this;this.reset(),this.getTreeselect(),Object(o["c"])(e.menuId).then((function(e){t.form=e.data,t.open=!0,t.title="修改選單"}))},submitForm:function(){var e=this;this.$refs["form"].validate((function(t){t&&(void 0!=e.form.menuId?Object(o["g"])(e.form).then((function(t){200===t.code?(e.msgSuccess("修改成功"),e.open=!1,e.getList()):e.msgError(t.msg)})):Object(o["a"])(e.form).then((function(t){200===t.code?(e.msgSuccess("新增成功"),e.open=!1,e.getList()):e.msgError(t.msg)})))}))},handleDelete:function(e){var t=this;this.$confirm('是否確認刪除名稱為"'+e.menuName+'"的資料項?',"警告",{confirmButtonText:"確定",cancelButtonText:"取消",type:"warning"}).then((function(){return Object(o["b"])(e.menuId)})).then((function(){t.getList(),t.msgSuccess("刪除成功")})).catch((function(){}))}}},x=g,k=Object(b["a"])(x,r,i,!1,null,null,null);t["default"]=k.exports}}]);