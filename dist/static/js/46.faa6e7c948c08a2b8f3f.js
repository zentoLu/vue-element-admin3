webpackJsonp([46],{AfCo:function(e,a){e.exports=[{FCODE:11e4,FNAME:"北京市"},{FCODE:12e4,FNAME:"天津市"},{FCODE:13e4,FNAME:"河北省"},{FCODE:14e4,FNAME:"山西省"},{FCODE:15e4,FNAME:"内蒙古自治区"},{FCODE:21e4,FNAME:"辽宁省"},{FCODE:22e4,FNAME:"吉林省"},{FCODE:23e4,FNAME:"黑龙江省"},{FCODE:31e4,FNAME:"上海市"},{FCODE:32e4,FNAME:"江苏省"},{FCODE:33e4,FNAME:"浙江省"},{FCODE:34e4,FNAME:"安徽省"},{FCODE:35e4,FNAME:"福建省"},{FCODE:36e4,FNAME:"江西省"},{FCODE:37e4,FNAME:"山东省"},{FCODE:41e4,FNAME:"河南省"},{FCODE:42e4,FNAME:"湖北省"},{FCODE:43e4,FNAME:"湖南省"},{FCODE:44e4,FNAME:"广东省"},{FCODE:45e4,FNAME:"广西壮族自治区"},{FCODE:46e4,FNAME:"海南省"},{FCODE:5e5,FNAME:"重庆市"},{FCODE:51e4,FNAME:"四川省"},{FCODE:52e4,FNAME:"贵州省"},{FCODE:53e4,FNAME:"云南省"},{FCODE:54e4,FNAME:"西藏自治区"},{FCODE:61e4,FNAME:"陕西省"},{FCODE:62e4,FNAME:"甘肃省"},{FCODE:63e4,FNAME:"青海省"},{FCODE:64e4,FNAME:"宁夏回族自治区"},{FCODE:65e4,FNAME:"新疆维吾尔自治区"},{FCODE:71e4,FNAME:"台湾省"},{FCODE:81e4,FNAME:"香港特别行政区"},{FCODE:82e4,FNAME:"澳门特别行政区"}]},JKxE:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=t("HzJ8"),n=t.n(r),o=t("E4LH"),i=t("AfCo"),l={data:function(){var e=this;return{visible:!1,signYearList:[],dataForm:{id:0,agentEntName:"",agentAccount:"",name:"",mobile:"",currYear:(new Date).getFullYear(),nextYear:(new Date).getFullYear()+1,signYears:[],province:""},dataRule:{agentEntName:[{required:!0,message:"代理商名称不能为空",trigger:"blur"}],agentAccount:[{required:!0,message:"代理商账号不能为空",trigger:"blur"},{validator:function(a,t,r){e.dataForm.id&&r(),e.$http({url:e.$http.adornUrl("/profit/agent/exist/"+t),method:"get",params:e.$http.adornParams()}).then(function(e){var a=e.data;a&&200===a.code&&a.data?r(new Error("代理商已经存在")):r()})},trigger:"blur"}],name:[{required:!0,message:"联系人姓名不能为空",trigger:"blur"}],mobile:[{required:!0,message:"联系方式不能为空",trigger:"blur"},{validator:function(e,a,t){Object(o.b)(a)?t():t(new Error("手机号格式错误"))},trigger:"blur"}]}}},methods:{containsValue:function(e,a){if(e&&e.length>0)for(var t=0;t<e.length;t++){if(e[t]===a)return!0}return!1},init:function(e){var a=this;this.dataForm.id=e||0,this.$http({url:this.$http.adornUrl("/profit/agent/signyears/"+this.dataForm.id),method:"get",params:this.$http.adornParams()}).then(function(e){var t=e.data;a.signYearList=t&&200===t.code?t.data:[]}).then(function(){a.visible=!0,a.$nextTick(function(){a.$refs.dataForm.resetFields()})}).then(function(){a.dataForm.id&&a.$http({url:a.$http.adornUrl("/profit/agent/info/"+a.dataForm.id),method:"get",params:a.$http.adornParams()}).then(function(e){var t=e.data;if(t&&200===t.code&&(a.dataForm.agentEntName=t.data.agentEntName,a.dataForm.agentAccount=t.data.agentAccount,a.dataForm.name=t.data.name,a.dataForm.mobile=t.data.mobile,a.dataForm.currYear=t.data.currYear,a.dataForm.signYears=t.data.signYears,t.data.province)){var r=!0,o=!1,l=void 0;try{for(var s,d=n()(i);!(r=(s=d.next()).done);r=!0){var m=s.value;m.FCODE==t.data.province&&(a.dataForm.province=m.FNAME)}}catch(e){o=!0,l=e}finally{try{!r&&d.return&&d.return()}finally{if(o)throw l}}}})})},querySearchAsync:function(e,a){var t=[],r=!0,o=!1,l=void 0;try{for(var s,d=n()(i);!(r=(s=d.next()).done);r=!0){var m=s.value;-1!==m.FNAME.indexOf(e)&&t.push({value:m.FNAME,province:m.FCODE})}}catch(e){o=!0,l=e}finally{try{!r&&d.return&&d.return()}finally{if(o)throw l}}a(t)},handleSelect:function(e){this.dataForm.provice=e.FCODE},dataFormSubmit:function(){var e=this;this.$refs.dataForm.validate(function(a){a&&e.$http({url:e.$http.adornUrl("/profit/agent/"+(e.dataForm.id?"update":"save")),method:"post",data:e.$http.adornData({id:e.dataForm.id||void 0,agentEntName:e.dataForm.agentEntName,agentAccount:e.dataForm.agentAccount,name:e.dataForm.name,mobile:e.dataForm.mobile,provice:e.dataForm.provice,signYears:e.dataForm.signYears})}).then(function(a){var t=a.data;t&&200===t.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.visible=!1,e.$emit("refreshDataList")}}):e.$message.error(t.msg)})})}}},s={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("el-dialog",{attrs:{title:e.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(a){e.visible=a}}},[t("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"100px"},nativeOn:{keyup:function(a){if(!("button"in a)&&e._k(a.keyCode,"enter",13,a.key))return null;e.dataFormSubmit()}}},[t("el-form-item",{attrs:{label:"代理商名称",prop:"agentEntName"}},[t("el-input",{attrs:{placeholder:"代理商名称",disabled:e.dataForm.id>0},model:{value:e.dataForm.agentEntName,callback:function(a){e.$set(e.dataForm,"agentEntName",a)},expression:"dataForm.agentEntName"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"代理商账号",prop:"agentAccount"}},[t("el-input",{attrs:{placeholder:"代理商账号",disabled:e.dataForm.id>0},model:{value:e.dataForm.agentAccount,callback:function(a){e.$set(e.dataForm,"agentAccount",a)},expression:"dataForm.agentAccount"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"联系人姓名",prop:"name"}},[t("el-input",{attrs:{placeholder:"联系人姓名"},model:{value:e.dataForm.name,callback:function(a){e.$set(e.dataForm,"name",a)},expression:"dataForm.name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"联系方式",prop:"mobile"}},[t("el-input",{attrs:{placeholder:"联系方式"},model:{value:e.dataForm.mobile,callback:function(a){e.$set(e.dataForm,"mobile",a)},expression:"dataForm.mobile"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"所在区域",prop:"province"}},[t("el-autocomplete",{staticStyle:{width:"100%"},attrs:{"fetch-suggestions":e.querySearchAsync,placeholder:"请输入所在区域"},on:{select:e.handleSelect},model:{value:e.dataForm.province,callback:function(a){e.$set(e.dataForm,"province",a)},expression:"dataForm.province"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"合同有效期",size:"mini",prop:"signYears"}},[t("el-checkbox-group",{model:{value:e.dataForm.signYears,callback:function(a){e.$set(e.dataForm,"signYears",a)},expression:"dataForm.signYears"}},e._l(e.signYearList,function(a){return t("el-checkbox",{key:a,attrs:{label:a,disabled:e.containsValue(e.dataForm.signYears,a)}},[e._v(e._s(a))])}))],1)],1),e._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(a){e.visible=!1}}},[e._v("取消")]),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:function(a){e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},staticRenderFns:[]},d=t("vSla")(l,s,!1,null,null,null);a.default=d.exports}});