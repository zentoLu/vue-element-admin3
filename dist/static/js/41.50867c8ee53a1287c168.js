webpackJsonp([41,52],{INS3:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("E4LH"),s={data:function(){var t=this;return{visible:!1,roleList:[],dataForm:{id:0,username:"",realname:"",password:"",comfirmPassword:"",salt:"",email:"",mobile:"",roleIdList:[],status:1},dataRule:{username:[{required:!0,message:"登录用户名不能为空",trigger:"blur"},{validator:function(e,a,r){t.dataForm.id&&r(),t.$http({url:t.$http.adornUrl("/sys/user/exist"),method:"post",data:t.$http.adornData({username:a})}).then(function(t){var e=t.data;e&&200===e.code&&e.data?r(new Error("登录用户名已经存在")):r()})},trigger:"blur"}],realname:[{required:!0,message:"姓名不能为空",trigger:"blur"},{validator:function(e,a,r){t.dataForm.id&&r(),t.$http({url:t.$http.adornUrl("/sys/user/exist"),method:"post",data:t.$http.adornData({realname:a})}).then(function(t){var e=t.data;e&&200===e.code&&e.data?r(new Error("用户名已经存在")):r()})},trigger:"blur"}],password:[{required:!0,message:"密码为空",trigger:"blur"},{validator:function(e,a,r){t.dataForm.id||/\S/.test(a)?r():r(new Error("密码不能为空"))},trigger:"blur"}],comfirmPassword:[{required:!0,message:"确认密码不能为空",trigger:"blur"},{validator:function(e,a,r){t.dataForm.id||/\S/.test(a)?t.dataForm.password!==a?r(new Error("确认密码与密码输入不一致")):r():r(new Error("确认密码不能为空"))},trigger:"blur"}],email:[{required:!0,message:"邮箱不能为空",trigger:"blur"},{validator:function(t,e,a){Object(r.a)(e)?a():a(new Error("邮箱格式错误"))},trigger:"blur"}],mobile:[{required:!0,message:"手机号不能为空",trigger:"blur"},{validator:function(t,e,a){Object(r.b)(e)?a():a(new Error("手机号格式错误"))},trigger:"blur"}]}}},methods:{init:function(t){var e=this;this.dataForm.id=t||0,this.$http({url:this.$http.adornUrl("/sys/role/select"),method:"get",params:this.$http.adornParams()}).then(function(t){var a=t.data;e.roleList=a&&200===a.code?a.data:[]}).then(function(){e.visible=!0,e.$nextTick(function(){e.$refs.dataForm.resetFields()})}).then(function(){e.dataForm.id&&e.$http({url:e.$http.adornUrl("/sys/user/info/"+e.dataForm.id),method:"get",params:e.$http.adornParams()}).then(function(t){var a=t.data;a&&200===a.code&&(e.dataForm.username=a.data.username,e.dataForm.realname=a.data.realname,e.dataForm.salt=a.data.salt,e.dataForm.email=a.data.email,e.dataForm.mobile=a.data.mobile,e.dataForm.roleIdList=a.data.roleIdList,e.dataForm.status=a.data.status)})})},userExist:function(t,e){var a=this;this.$http({url:this.$http.adornUrl("/sys/user/exist"),method:"post",data:this.$http.adornData({username:t,realname:e})}).then(function(t){var e=t.data;if(e&&200===e.code)return!!e.data;a.$message.error(e.msg)})},dataFormSubmit:function(){var t=this;this.$refs.dataForm.validate(function(e){e&&t.$http({url:t.$http.adornUrl("/sys/user/"+(t.dataForm.id?"update":"save")),method:"post",data:t.$http.adornData({id:t.dataForm.id||void 0,username:t.dataForm.username,realname:t.dataForm.realname,password:t.dataForm.password,salt:t.dataForm.salt,email:t.dataForm.email,mobile:t.dataForm.mobile,status:t.dataForm.status,roleIdList:t.dataForm.roleIdList})}).then(function(e){var a=e.data;a&&200===a.code?t.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){t.visible=!1,t.$emit("refreshDataList")}}):t.$message.error(a.msg)})})}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:t.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:t.visible},on:{"update:visible":function(e){t.visible=e}}},[a("el-form",{ref:"dataForm",attrs:{model:t.dataForm,rules:t.dataRule,"label-width":"100px"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.dataFormSubmit()}}},[a("el-form-item",{attrs:{label:"登录用户名",prop:"username"}},[a("el-input",{attrs:{placeholder:"登录帐号",disabled:t.dataForm.id>0},model:{value:t.dataForm.username,callback:function(e){t.$set(t.dataForm,"username",e)},expression:"dataForm.username"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"姓名",prop:"realname"}},[a("el-input",{attrs:{placeholder:"姓名",disabled:t.dataForm.id>0},model:{value:t.dataForm.realname,callback:function(e){t.$set(t.dataForm,"realname",e)},expression:"dataForm.realname"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"密码",prop:"password"}},[a("el-input",{attrs:{type:"password",placeholder:"密码"},model:{value:t.dataForm.password,callback:function(e){t.$set(t.dataForm,"password",e)},expression:"dataForm.password"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"确认密码",prop:"comfirmPassword"}},[a("el-input",{attrs:{type:"password",placeholder:"确认密码"},model:{value:t.dataForm.comfirmPassword,callback:function(e){t.$set(t.dataForm,"comfirmPassword",e)},expression:"dataForm.comfirmPassword"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[a("el-input",{attrs:{placeholder:"邮箱",disabled:t.dataForm.id>0},model:{value:t.dataForm.email,callback:function(e){t.$set(t.dataForm,"email",e)},expression:"dataForm.email"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"手机号",prop:"mobile"}},[a("el-input",{attrs:{placeholder:"手机号",disabled:t.dataForm.id>0},model:{value:t.dataForm.mobile,callback:function(e){t.$set(t.dataForm,"mobile",e)},expression:"dataForm.mobile"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"角色",size:"mini",prop:"roleIdList"}},[a("el-checkbox-group",{model:{value:t.dataForm.roleIdList,callback:function(e){t.$set(t.dataForm,"roleIdList",e)},expression:"dataForm.roleIdList"}},t._l(t.roleList,function(e){return a("el-checkbox",{key:e.roleId,attrs:{label:e.id}},[t._v(t._s(e.roleName))])}))],1),t._v(" "),a("el-form-item",{attrs:{label:"状态",size:"mini",prop:"status"}},[a("el-radio-group",{model:{value:t.dataForm.status,callback:function(e){t.$set(t.dataForm,"status",e)},expression:"dataForm.status"}},[a("el-radio",{attrs:{label:0}},[t._v("禁用")]),t._v(" "),a("el-radio",{attrs:{label:1}},[t._v("正常")])],1)],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.visible=!1}}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dataFormSubmit()}}},[t._v("确定")])],1)],1)},staticRenderFns:[]},o=a("vSla")(s,l,!1,null,null,null);e.default=o.exports},JnAV:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={data:function(){return{dataForm:{userName:"",realName:""},dataList:[],pageIndex:1,pageSize:10,totalPage:0,dataListLoading:!1,dataListSelections:[],addOrUpdateVisible:!1}},components:{AddOrUpdate:a("INS3").default},created:function(){this.getDataList()},activated:function(){this.getDataList()},methods:{getDataList:function(){var t=this;this.dataListLoading=!0,this.$http({url:this.$http.adornUrl("/sys/user/list"),method:"post",data:this.$http.adornData({page:this.pageIndex,limit:this.pageSize,username:this.dataForm.userName,realname:this.dataForm.realName})}).then(function(e){var a=e.data;a&&200===a.code?(t.dataList=a.data.list,t.totalPage=a.data.totalCount):(t.dataList=[],t.totalPage=0),t.dataListLoading=!1})},typeIndex:function(t){return t+(this.pageIndex-1)*this.pageSize+1},sizeChangeHandle:function(t){this.pageSize=t,this.pageIndex=1,this.getDataList()},currentChangeHandle:function(t){this.pageIndex=t,this.getDataList()},selectionChangeHandle:function(t){this.dataListSelections=t},addOrUpdateHandle:function(t){var e=this;this.addOrUpdateVisible=!0,this.$nextTick(function(){e.$refs.addOrUpdate.init(t)})},deleteHandle:function(t){var e=this,a=t?[t]:this.dataListSelections.map(function(t){return t.id});this.$confirm("确定进行["+(t?"删除":"批量删除")+"]操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$http({url:e.$http.adornUrl("/sys/user/delete"),method:"post",data:e.$http.adornData(a,!1)}).then(function(t){var a=t.data;a&&200===a.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.getDataList()}}):e.$message.error(a.msg)})}).catch(function(){})}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mod-user"},[a("el-form",{attrs:{inline:!0,model:t.dataForm},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.getDataList()}}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"登录用户名",clearable:""},model:{value:t.dataForm.userName,callback:function(e){t.$set(t.dataForm,"userName",e)},expression:"dataForm.userName"}})],1),t._v(" "),a("el-form-item",[a("el-input",{attrs:{placeholder:"姓名",clearable:""},model:{value:t.dataForm.realName,callback:function(e){t.$set(t.dataForm,"realName",e)},expression:"dataForm.realName"}})],1),t._v(" "),a("el-form-item",[a("el-button",{on:{click:function(e){t.getDataList()}}},[t._v("查询")]),t._v(" "),t.isAuth("sys:user:save")?a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.addOrUpdateHandle()}}},[t._v("新增")]):t._e(),t._v(" "),t.isAuth("sys:user:delete")?a("el-button",{attrs:{type:"danger",disabled:t.dataListSelections.length<=0},on:{click:function(e){t.deleteHandle()}}},[t._v("批量删除")]):t._e()],1)],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.dataListLoading,expression:"dataListLoading"}],staticStyle:{width:"100%"},attrs:{data:t.dataList,border:""},on:{"selection-change":t.selectionChangeHandle}},[a("el-table-column",{attrs:{type:"selection","header-align":"center",align:"center",width:"50"}}),t._v(" "),a("el-table-column",{attrs:{type:"index",index:t.typeIndex,label:"序号",width:"80",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"username","header-align":"center",align:"center",label:"登录名"}}),t._v(" "),a("el-table-column",{attrs:{prop:"realname","header-align":"center",align:"center",label:"姓名"}}),t._v(" "),a("el-table-column",{attrs:{prop:"email","header-align":"center",align:"center",label:"邮箱"}}),t._v(" "),a("el-table-column",{attrs:{prop:"mobile","header-align":"center",align:"center",label:"手机号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"status","header-align":"center",align:"center",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[0===e.row.status?a("el-tag",{attrs:{size:"small",type:"danger"}},[t._v("禁用")]):a("el-tag",{attrs:{size:"small"}},[t._v("正常")])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"createdTime","header-align":"center",align:"center",width:"180",label:"创建时间"}}),t._v(" "),a("el-table-column",{attrs:{fixed:"right","header-align":"center",align:"center",width:"150",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.isAuth("sys:user:update")?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.addOrUpdateHandle(e.row.id)}}},[t._v("修改")]):t._e(),t._v(" "),t.isAuth("sys:user:delete")?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.deleteHandle(e.row.id)}}},[t._v("删除")]):t._e()]}}])})],1),t._v(" "),a("el-pagination",{attrs:{"current-page":t.pageIndex,"page-sizes":[10,20,50,100],"page-size":t.pageSize,total:t.totalPage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.sizeChangeHandle,"current-change":t.currentChangeHandle}}),t._v(" "),t.addOrUpdateVisible?a("add-or-update",{ref:"addOrUpdate",on:{refreshDataList:t.getDataList}}):t._e()],1)},staticRenderFns:[]},l=a("vSla")(r,s,!1,null,null,null);e.default=l.exports}});