webpackJsonp([17,62],{"4k+D":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("a3Yh"),i=a.n(n),o=(a("MrK1"),a("YDu6")),l=a("OYy5"),r=a("dVeB"),s=a("3cXf"),d=a.n(s),c={unparam:function(t,e){if(t)return e=e||{},t.replace(/\/$/,"").replace(/([^?=&]+)=([^&#]*)/g,function(t,a,n){e[a]=decodeURIComponent(n)}),e},serialize:function(t){var e,a=[];for(var n in t)a.push(n+"="+t[n]);return(e=a.join("&"))?"?"+e:e},formatDate:function(t,e,a){t?"number"==typeof t?t=new Date(t):"string"==typeof t&&(t=new Date(/(\d{4})\D?(\d{2})\D?(\d{2})/.exec(t).splice(1).join("/"))):t=new Date;var n,i,o,l,r,s,d="";if("string"==typeof e)if("datetime"===(e=e.toLowerCase()))l=t.getHours(),r=t.getMinutes(),s=t.getSeconds(),d=" "+(l>9?l:"0"+l)+":"+(r>9?r:"0"+r)+":"+(s>9?s:"0"+s);else if(/\d(y|m|d)$/i.test(e)){var c=e.substr(0,e.length-1);switch(e.substr(-1)){case"y":t.setFullYear(t.getFullYear()+ +c);break;case"m":t.setMonth(t.getMonth()+ +c);break;case"d":t.setDate(t.getDate()+ +c)}}else a=a||e;return void 0===a&&(a="/"),n=t.getFullYear(),i=t.getMonth()+1,o=t.getDate(),n+a+(i>9?i:"0"+i)+a+(o>9?o:"0"+o)+d},dateToNow:function(t){var e=new Date(t),a=(new Date).getTime()-e.getTime();return a<0?"":a/1e3<60?"刚刚":a/6e4<60?parseInt(a/6e4)+"分钟前":a/36e5<24?parseInt(a/36e5)+"小时前":a/864e5<31?parseInt(a/864e5)+"天前":a/2592e6<12?parseInt(a/2592e6)+"月前":parseInt(a/31536e6)+"年前"},formatMoney:function(t,e){void 0===t&&(t=0);var a=Number(t).toFixed(2).toString().split(".");return a[0].replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")+"."+a[1]+(e?" "+e:"")},formatFloat:function(t,e){"number"!=typeof e&&(e=2);var a=Math.pow(10,e);return(t*a/a).toFixed(e)},formatFloat0:function(t,e){var a=this.formatFloat(t,e);return Number(a)},floatCal:function(t,e,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"round";if(NaN===+t||NaN===+e||!0!==/^[\+\-\*\/]$/.test(a))throw"Illegal arguments";var o=Math.pow(10,n);t*=o,e*=o;var l=0;return"+"===a&&(l=t+e),"-"===a&&(l=t-e),"*"===a&&(l=t*e/o),"/"===a&&(l=t/e*o),i&&Math[i]&&(l=Math[i](l)),l/o},formatName:function(t){return(t=t?String(t):"").replace(/^(\d{3})\d{4}(\d{4})$/,"$1****$2").replace(/^(.{3})[^@]*(@.+)$/,"$1****$2")},storage:{set:function(t,e){if(t=t.replace(/\//g,"_"),void 0!==e)try{localStorage.setItem(t,d()(e))}catch(t){return!1}},get:function(t){return t=t.replace(/\//g,"_"),JSON.parse(localStorage.getItem(t))},remove:function(t){t=t.replace(/\//g,"_"),localStorage.removeItem(t)},clear:function(){localStorage.clear()}},session:{set:function(t,e){if(t=t.replace(/\//g,"_"),void 0!==e){var a=d()(e)||"";try{sessionStorage.setItem(t,a)}catch(t){return!1}}},get:function(t){return t=t.replace(/\//g,"_"),JSON.parse(sessionStorage.getItem(t))},remove:function(t){t=t.replace(/\//g,"_"),sessionStorage.removeItem(t)},clear:function(){sessionStorage.clear()}},cookie:{set:function(t,e,a,n,i,o){null===e&&(e=""),"number"==typeof a&&(a=new Date(+new Date+864e5*a)),document.cookie=t+"="+escape(e)+(a?"; expires="+a.toUTCString():"")+(n?"; path="+n:"; path=/")+(i?"; domain="+i:"")+(o?"; secure":"")},get:function(t){var e=document.cookie.match(new RegExp("(^| )"+t+"=([^;]*)(;|$)"));return null!==e?unescape(e[2]):null},remove:function(t){this.get(t)&&this.set(t,"",-365)}},base64:{encode:function(t){return window.btoa(encodeURIComponent(escape("string"!=typeof t?"":t)))},decode:function(t){return unescape(decodeURIComponent(window.atob("string"!=typeof t?"":t)))}}};o.default.component(r.Option.name,r.Option),o.default.component(r.DatePicker.name,r.DatePicker);var p={data:function(){var t;return t={dataList:[],pageIndex:1,pageSize:10,totalPage:0,agentLevels:[],dataListLoading:!1,followupVisible:!1,dataListSelections:[],pickerOptions2:{shortcuts:[{text:"最近一周",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-6048e5),t.$emit("pick",[a,e])}},{text:"最近一个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-2592e6),t.$emit("pick",[a,e])}},{text:"最近三个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-7776e6),t.$emit("pick",[a,e])}}]},options:[{value:"kisline",label:"KIS产品线"},{value:"zhjline",label:"ZHJ产品线"},{value:"jdyline",label:"JDY产品线"},{value:"KIS代理商",label:"KIS代理商"},{value:"PC端产品需求登记",label:"PC端产品需求登记"},{value:"移动端产品需求登记",label:"移动端产品需求登记"}],loanstate:[{state:-4,name:"已发起贷款申请"},{state:-3,name:"已录入申贷资料"},{state:0,name:"已同意数据授权"},{state:1,name:"完成申请"},{state:11,name:"客户资料补充中"},{state:13,name:"贷款逾期"},{state:12,name:"贷款机构受理中"},{state:2,name:"贷款机构申请中"},{state:4,name:"准入拒绝"},{state:3,name:"审批通过"},{state:9,name:"审批拒绝"},{state:7,name:"贷款已完结"},{state:5,name:"贷款已发放"},{state:6,name:"贷款还款中"},{state:98,name:"已完成征信授权"},{state:99,name:"贷款机构申请未完成"},{state:97,name:"待支用"},{state:15,name:"已签署服务费合同"},{state:16,name:"已收取服务费"}],defaultvalue:"",defaultstate:"",dataForm:{mobile:"",companyName:"",legalName:"",startDate:"",state:"",productLine:"",endDate:""}},i()(t,"pickerOptions2",{shortcuts:[{text:"最近一周",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-6048e5),t.$emit("pick",[a,e])}},{text:"最近一个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-2592e6),t.$emit("pick",[a,e])}},{text:"最近三个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-7776e6),t.$emit("pick",[a,e])}}]}),i()(t,"startDate",""),i()(t,"value7",""),t},components:{Followup:l.default},created:function(){this.getDataList(),this.getLevelOptions()},methods:{getLevelOptions:function(){var t=this;this.$http({url:this.$http.adornUrl("/biz/info/allproduct"),method:"post"}).then(function(e){var a=e.data;a&&200===a.code&&a.data?t.agentLevels=a.data:t.agentLevels=[]})},getDataList:function(){var t=this;this.dataListLoading=!0,console.log(this.dataForm.date);var e=this.dataForm.date||[];this.$http({url:this.$http.adornUrl("/biz/order/list"),method:"post",data:this.$http.adornData({page:this.pageIndex,limit:this.pageSize,mobile:this.dataForm.mobile,companyName:this.dataForm.companyName,legalName:this.dataForm.legalName,startDate:e[0]?c.formatDate(e[0],"-"):null,state:this.dataForm.state,productLine:this.dataForm.productLine,endDate:e[1]?c.formatDate(e[1],"-"):null})}).then(function(e){var a=e.data;a&&200===a.code?(t.dataList=a.data.list,t.totalPage=a.data.totalCount):(t.dataList=[],t.totalPage=0),t.dataListLoading=!1}).catch(function(e){e.data;t.dataList=[],t.dataListLoading=!1})},sizeChangeHandle:function(t){this.pageSize=t,this.pageIndex=1},currentChangeHandle:function(t){this.pageIndex=t,this.getDataList()},selectionChangeHandle:function(t){this.dataListSelections=t},checkDetail:function(t){console.log(t,t.row.id),this.$router.push({name:"order-detail",query:t.row.id})},addOrUpdateHandle:function(t){var e=this;this.addOrUpdateVisible=!0,this.$nextTick(function(){e.$refs.addOrUpdate.init(t)})},followupHandle:function(t,e){var a=this;this.followupVisible=!0,this.$nextTick(function(){a.$refs.followup.init(t,e)})},deleteHandle:function(t){var e=this,a=t?[t]:this.dataListSelections.map(function(t){return t.id});this.$confirm("确定对[id="+a.join(",")+"]进行["+(t?"删除":"批量删除")+"]操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$http({url:e.$http.adornUrl("/sys/user/delete"),method:"post",data:e.$http.adornData(a,!1)}).then(function(t){var a=t.data;a&&200===a.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.getDataList()}}):e.$message.error(a.msg)})}).catch(function(){})}}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mod-order"},[a("el-form",{attrs:{inline:!0,model:t.dataForm}},[a("div",[a("table",[a("tr",[a("td",[a("el-form-item",{staticClass:"em-label",attrs:{label:"注册手机号"}},[a("el-input",{attrs:{clearable:""},model:{value:t.dataForm.mobile,callback:function(e){t.$set(t.dataForm,"mobile",e)},expression:"dataForm.mobile"}})],1)],1),t._v(" "),a("td",[a("el-form-item",{attrs:{label:"企业名称"}},[a("el-input",{attrs:{clearable:""},model:{value:t.dataForm.companyName,callback:function(e){t.$set(t.dataForm,"companyName",e)},expression:"dataForm.companyName"}})],1)],1),t._v(" "),a("td",[a("el-form-item",{staticClass:"em-label",attrs:{label:"法人代表姓名"}},[a("el-input",{attrs:{clearable:""},model:{value:t.dataForm.legalName,callback:function(e){t.$set(t.dataForm,"legalName",e)},expression:"dataForm.legalName"}})],1)],1)]),t._v(" "),a("tr",[a("td",[a("el-form-item",{staticClass:"em-label",attrs:{label:"时间"}},[a("el-date-picker",{attrs:{type:"daterange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":t.pickerOptions2},model:{value:t.dataForm.date,callback:function(e){t.$set(t.dataForm,"date",e)},expression:"dataForm.date"}})],1)],1),t._v(" "),a("td",[a("el-form-item",{attrs:{label:"客户来源",prop:"typeId"}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:t.dataForm.productLine,callback:function(e){t.$set(t.dataForm,"productLine",e)},expression:"dataForm.productLine"}},t._l(t.agentLevels,function(t,e){return a("el-option",{key:e,attrs:{label:t,value:t}})}))],1)],1),t._v(" "),a("td",[a("el-form-item",{staticClass:"em-label",attrs:{label:"已录入申贷资料",prop:"typeId"}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:t.dataForm.state,callback:function(e){t.$set(t.dataForm,"state",e)},expression:"dataForm.state"}},t._l(t.loanstate,function(t){return a("el-option",{key:t.state,attrs:{label:t.name,value:t.state}})}))],1)],1)])])]),t._v(" "),a("div"),t._v(" "),a("div",[a("el-form-item",[a("el-button",{on:{click:function(e){t.getDataList()}}},[t._v("查询")])],1)],1)]),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.dataListLoading,expression:"dataListLoading"}],staticStyle:{width:"100%"},attrs:{data:t.dataList,border:""}},[a("el-table-column",{attrs:{prop:"mobile","header-align":"center",align:"center",label:"注册手机号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"companyName","header-align":"center",align:"center",label:"企业名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"legalName","header-align":"center",align:"center",label:"法人代表名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"loanAmount","header-align":"center",align:"center",width:"180",label:"贷款金额（万元）"}}),t._v(" "),a("el-table-column",{attrs:{prop:"loanLimit","header-align":"center",align:"center",width:"180",label:"贷款期限（月）"}}),t._v(" "),a("el-table-column",{attrs:{prop:"productLine","header-align":"center",align:"center",label:"客户来源"}}),t._v(" "),a("el-table-column",{attrs:{prop:"state","header-align":"center",align:"center",label:"贷款状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[-4===e.row.state?a("p",{attrs:{size:"small",type:"danger"}},[t._v("已发起贷款申请")]):t._e(),t._v(" "),99===e.row.state?a("p",{attrs:{size:"small",type:"danger"}},[t._v(" 贷款机构申请未完成")]):t._e(),t._v(" "),-3===e.row.state?a("p",{attrs:{size:"small",type:"danger"}},[t._v("已录入申贷资料")]):t._e(),t._v(" "),0===e.row.state?a("p",{attrs:{size:"small",type:"danger"}},[t._v("已同意数据授权")]):t._e(),t._v(" "),1===e.row.state?a("p",{attrs:{size:"small",type:"danger"}},[t._v("已完成申请")]):t._e(),t._v(" "),2===e.row.state?a("p",{attrs:{size:"small",type:"danger"}},[t._v("贷款机构审批中")]):t._e(),t._v(" "),3===e.row.state?a("p",{attrs:{size:"small",type:"danger"}},[t._v("贷款机构审批通过")]):t._e(),t._v(" "),6===e.row.state?a("p",{attrs:{size:"small",type:"danger"}},[t._v("贷款还款中")]):t._e(),t._v(" "),4===e.row.state?a("p",{attrs:{size:"small",type:"danger"}},[t._v("准入拒绝")]):t._e(),t._v(" "),7===e.row.state?a("p",{attrs:{size:"small",type:"danger"}},[t._v("贷款已完结")]):t._e(),t._v(" "),11===e.row.state?a("p",{attrs:{size:"small",type:"danger"}},[t._v("客户资料补充中")]):t._e(),t._v(" "),98===e.row.state?a("p",{attrs:{size:"small",type:"danger"}},[t._v("已完成征信授权")]):t._e(),t._v(" "),97===e.row.state?a("p",{attrs:{size:"small",type:"danger"}},[t._v("待支用")]):t._e(),t._v(" "),5===e.row.state?a("p",{attrs:{size:"small",type:"danger"}},[t._v("贷款已发放")]):t._e(),t._v(" "),9===e.row.state?a("p",{attrs:{size:"small",type:"danger"}},[t._v("审批拒绝")]):t._e(),t._v(" "),12===e.row.state?a("p",{attrs:{size:"small",type:"danger"}},[t._v("贷款机构受理中")]):t._e(),t._v(" "),8===e.row.state?a("p",{attrs:{size:"small",type:"danger"}},[t._v("客户放弃")]):t._e(),t._v(" "),15===e.row.state?a("p",{attrs:{size:"small",type:"danger"}},[t._v("已签署服务费合同")]):t._e(),t._v(" "),16===e.row.state?a("p",{attrs:{size:"small",type:"danger"}},[t._v("已收取服务费")]):t._e(),t._v(" "),13===e.row.state?a("p",{attrs:{size:"small",type:"danger"}},[t._v("贷款机构申请未完成")]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"followPerson","header-align":"center",align:"center",label:"跟进人"}}),t._v(" "),a("el-table-column",{attrs:{prop:"applyDate","header-align":"center",align:"center",label:"申请时间"}}),t._v(" "),a("el-table-column",{attrs:{fixed:"right","header-align":"center",align:"center",width:"150",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.checkDetail(e)}}},[t._v("查看详情")]),t._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.followupHandle(e.row.bizInfoId,e.row.id)}}},[t._v("跟进")])]}}])})],1),t._v(" "),a("el-pagination",{attrs:{"current-page":t.pageIndex,"page-sizes":[10],"page-size":t.pageSize,total:t.totalPage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.sizeChangeHandle,"current-change":t.currentChangeHandle}}),t._v(" "),t.followupVisible?a("followup",{ref:"followup"}):t._e()],1)},staticRenderFns:[]};var u=a("vSla")(p,m,!1,function(t){a("xfRO")},null,null);e.default=u.exports},JhHb:function(t,e,a){a("SAFe");var n=a("AKd3").Object;t.exports=function(t,e,a){return n.defineProperty(t,e,a)}},OYy5:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("4Xi4");var n=a("DtDh"),i=a("E4LH"),o={data:function(){return{dataForm:{id:"",bizCustId:"",bizInfoId:"",entName:"",entCreditCode:"",entLegalOptName:"",entLegalOptMobile:"",payTypeDictId:""},dataRule:{entName:[{required:!0,message:"企业名称不能为空",trigger:"blur"}],entCreditCode:[{required:!0,message:"统一社会信用代码不能为空",trigger:"blur"}],entLegalOptName:[{required:!0,message:"法定代表人姓名不能为空",trigger:"blur"}],entLegalOptMobile:[{required:!0,message:"手机号码不能为空",trigger:"blur"},{validator:function(t,e,a){Object(i.b)(e)?a():a(new Error("手机号格式错误"))},trigger:"blur"}],payTypeDictId:[{required:!0,message:"还款方式不能为空",trigger:"blur"}]},dataPostLoading:!1,followupVisible:!1,addLogVisible:!1,bizId:"",applyId:"",entName:"",entCreditCode:"",entLegalOptName:"",entLegalOptMobile:"",wantLoanAmt:"",wantLoanLimt:"",payTypeDictId:"",dataListLoading:!1,dataInfoList:[],fpss:[],callTypes:[],dataLogListLoading:!1,dataLogList:[],payTypeDics:[],pageIndex:1,pageSize:10,totalPage:0}},components:{Add:n.default},created:function(){var t=this;this.$http({url:this.$http.adornUrl("/biz/info/allpaytypes"),method:"get",params:this.$http.adornParams()}).then(function(e){var a=e.data;a&&200===a.code&&a.data&&(t.payTypeDics=a.data)})},methods:{init:function(t,e){this.followupVisible=!0,this.bizId=t,this.applyId=e,this.getFpsOptions(),this.getCallTypeOptions(),this.getLogDetailDataInfo(),this.getDataInfo(),this.getLogDataInfo()},valueMoneyFormat:function(t,e){return(t.wantLoanAmt||0)/1e6},valueFollowUpStatusFormat:function(t,e){var a=t.bizCurrFollowUpStatusDictId,n="未定义";return this.fpss.forEach(function(t){t.id===a&&(n=t.value)}),n},valueFollowUpCallFormat:function(t,e){var a=t.followUpCallDictId,n="未定义";return this.callTypes.forEach(function(t){t.id===a&&(n=t.value)}),n},getFpsOptions:function(){var t=this;this.$http({url:this.$http.adornUrl("/biz/info/allfps"),method:"post"}).then(function(e){var a=e.data;a&&200===a.code&&a.data?t.fpss=a.data:t.fpss=[]})},getCallTypeOptions:function(){var t=this;this.$http({url:this.$http.adornUrl("/biz/info/allcalltypes"),method:"get",params:this.$http.adornParams()}).then(function(e){var a=e.data;a&&200===a.code&&a.data&&(t.callTypes=a.data)})},getLogDataInfo:function(){var t=this;this.$http({url:this.$http.adornUrl("/biz/infofuplog/listApply/"+this.bizId+"/"+this.applyId),method:"get",data:this.$http.adornParams()}).then(function(e){var a=e.data;a&&200===a.code&&a.data?t.dataLogList=a.data:t.dataLogList=[]})},getLogDetailDataInfo:function(){var t=this;this.dataLogListLoading=!0,this.$http({url:this.$http.adornUrl("/biz/infodetail/info"),method:"post",data:this.$http.adornData({bizInfoId:this.bizId})}).then(function(e){var a=e.data;a&&200===a.code&&a.data&&(t.dataForm=a.data,t.dataForm.wantLoanAmt=(t.dataForm.wantLoanAmt||0)/1e6),t.dataLogListLoading=!1})},getDataInfo:function(){var t=this;this.dataListLoading=!0,this.$http({url:this.$http.adornUrl("/biz/order/getApply"),method:"post",data:this.$http.adornParams({applyId:this.applyId,bizInfoId:this.bizId})}).then(function(e){var a=e.data;a&&200===a.code&&a.data?t.dataInfoList=a.data.list:t.dataInfoList=[],t.dataListLoading=!1})},okHandle:function(){var t=this;this.dataPostLoading=!0,this.$http({url:this.$http.adornUrl("/biz/infodetail/"+(this.dataForm.id?"update":"save")),method:"post",data:this.$http.adornParams({id:this.dataForm.id||void 0,bizInfoId:this.bizId,wantLoanAmt:1e6*(this.dataForm.wantLoanAmt||0),wantLoanLimt:this.dataForm.wantLoanLimt,payTypeDictId:this.dataForm.payTypeDictId,entName:this.dataForm.entName,entCreditCode:this.dataForm.entCreditCode,entLegalOptName:this.dataForm.entLegalOptName,entLegalOptMobile:this.dataForm.entLegalOptMobile})}).then(function(e){var a=e.data;a&&200===a.code?t.$message.success("保存成功"):t.$message.error(a.msg),t.dataPostLoading=!1})},translateHandle:function(){var t=this;this.dataForm.bizCustId?this.$message.error("已经是平台用户，不能再转"):this.$refs.dataForm.validate(function(e){e&&(t.dataPostLoading=!0,t.$http({url:t.$http.adornUrl("/biz/infodetail/traslate"),method:"post",data:t.$http.adornParams({id:t.dataForm.id||void 0,bizInfoId:t.bizId,wantLoanAmt:1e6*(t.dataForm.wantLoanAmt||0),wantLoanLimt:t.dataForm.wantLoanLimt,payTypeDictId:t.dataForm.payTypeDictId,entName:t.dataForm.entName,entCreditCode:t.dataForm.entCreditCode,entLegalOptName:t.dataForm.entLegalOptName,entLegalOptMobile:t.dataForm.entLegalOptMobile})}).then(function(e){var a=e.data;a&&200===a.code?t.$message.success("保存成功"):t.$message.error("转化失败"),t.dataPostLoading=!1}))})},addHandle:function(){var t=this;this.addLogVisible=!0;var e=this.bizId,a=this.applyId;this.$nextTick(function(){t.$refs.add.init(e,a)})}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.dataPostLoading,expression:"dataPostLoading"}],staticClass:"mod-order-followup",staticStyle:{position:"relative","z-index":"2000"}},[a("el-dialog",{attrs:{title:"订单跟进","close-on-click-modal":!1,visible:t.followupVisible},on:{"update:visible":function(e){t.followupVisible=e}}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.dataListLoading,expression:"dataListLoading"}],staticStyle:{width:"100%"},attrs:{data:t.dataInfoList,border:""}},[a("el-table-column",{attrs:{prop:"mobile","header-align":"center",align:"center",label:"注册人手机号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"companyName","header-align":"center",align:"center",width:"110",label:"企业名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"legalName","header-align":"center",align:"center",width:"150","show-overflow-tooltip":!0,label:"法人代表姓名"}}),t._v(" "),a("el-table-column",{attrs:{prop:"loanAmount","header-align":"center",align:"center",width:"100","show-overflow-tooltip":!0,label:"需求金额（万元）"}}),t._v(" "),a("el-table-column",{attrs:{prop:"loanLimit","header-align":"center",align:"center",width:"100",label:"需求期限（月）"}}),t._v(" "),a("el-table-column",{attrs:{prop:"productLine","header-align":"center",align:"center",width:"150",label:"客户来源"}}),t._v(" "),a("el-table-column",{attrs:{prop:"followPerson","header-align":"center",align:"center",width:"100",label:"跟进人"}}),t._v(" "),a("el-table-column",{attrs:{prop:"applyDate","header-align":"center",align:"center",width:"180",label:"申貸时间"}}),t._v(" "),a("el-table-column",{attrs:{prop:"linkApply","header-align":"center",align:"center",width:"180",label:"关联申请单"}})],1),t._v(" "),a("el-form",{attrs:{inline:!0}},[a("el-form-item",[a("div",[t._v("  ")])])],1),t._v(" "),a("el-form",{attrs:{inline:!0}},[a("el-form-item",[a("h5",[t._v("跟进记录")])])],1),t._v(" "),a("el-form",{attrs:{inline:!0}},[a("el-form-item",[t.isAuth("biz:infofuplog:save")?a("el-button",{attrs:{type:"success"},on:{click:function(e){t.addHandle()}}},[t._v("新增")]):t._e()],1)],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.dataLogListLoading,expression:"dataLogListLoading"}],staticStyle:{width:"100%"},attrs:{data:t.dataLogList,border:""}},[a("el-table-column",{attrs:{prop:"followUperName","header-align":"center",align:"center",label:"跟进人"}}),t._v(" "),a("el-table-column",{attrs:{prop:"followUpCallDictId","header-align":"center",align:"center",label:"电话接通情况",formatter:t.valueFollowUpCallFormat}}),t._v(" "),a("el-table-column",{attrs:{prop:"followUpCallDesp","header-align":"center",align:"center",width:"150","show-overflow-tooltip":!0,label:"详细描述"}}),t._v(" "),a("el-table-column",{attrs:{prop:"createdTime","header-align":"center",align:"center",width:"180",label:"创建时间"}})],1),t._v(" "),a("el-form",{attrs:{inline:!0}},[a("el-form-item",[a("div",[t._v("  ")])])],1)],1),t._v(" "),t.addLogVisible?a("add",{ref:"add",on:{refreshDataList:t.getLogDataInfo}}):t._e()],1)},staticRenderFns:[]},r=a("vSla")(o,l,!1,null,null,null);e.default=r.exports},SAFe:function(t,e,a){var n=a("FITv");n(n.S+n.F*!a("sjnA"),"Object",{defineProperty:a("lIiZ").f})},a3Yh:function(t,e,a){"use strict";e.__esModule=!0;var n,i=a("liLe"),o=(n=i)&&n.__esModule?n:{default:n};e.default=function(t,e,a){return e in t?(0,o.default)(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}},liLe:function(t,e,a){t.exports={default:a("JhHb"),__esModule:!0}},vzY9:function(t,e,a){(t.exports=a("BkJT")(!1)).push([t.i,"\n.mod-order .el-date-editor .el-range-separator {\n  margin: 0 5px;\n  padding: 0;\n}\n.em-label .el-form-item__label {\n  display: inline-block;\n  width: 8em;\n}\n.mod-order-followup {\n  position: relative;\n  z-index: 2000;\n}\n.v-modal {\n  z-index: 1999 !important;\n}\n",""])},xfRO:function(t,e,a){var n=a("vzY9");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("8bSs")("75bb3d38",n,!0)}});