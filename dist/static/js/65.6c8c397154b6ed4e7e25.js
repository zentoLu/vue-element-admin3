webpackJsonp([65],{hF2s:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cust-manage"},[a("h2",[t._v("客户跟进")]),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.dataListLoading,expression:"dataListLoading"}],staticStyle:{width:"100%"},attrs:{data:t.dataList,border:""}},[a("el-table-column",{attrs:{prop:"mobile","header-align":"center",align:"center",width:"120",label:"注册手机号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"companyName","header-align":"center",align:"center",label:"企业名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"legalName","header-align":"center",align:"center",label:"法人代表名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"requireAmount","header-align":"center",align:"center",width:"150","show-overflow-tooltip":!0,label:"需求金额（万元）"}}),t._v(" "),a("el-table-column",{attrs:{prop:"requireLimit","header-align":"center",align:"center",width:"150","show-overflow-tooltip":!0,label:"需求期限（月）"}}),t._v(" "),a("el-table-column",{attrs:{prop:"productLine","header-align":"center",align:"center",label:"客户来源"}}),t._v(" "),a("el-table-column",{attrs:{prop:"followPerson","header-align":"center",align:"center",width:"150",label:"跟进人"}}),t._v(" "),a("el-table-column",{attrs:{prop:"registerTime","header-align":"center",align:"center",width:"180",label:"注册时间"}})],1)],1)},staticRenderFns:[]},n=a("vSla")({data:function(){return{dataList:[],dataListLoading:!1}},created:function(){this.getDataList()},methods:{getDataList:function(){var t=this;this.dataListLoading=!0,this.$http({url:this.$http.adornUrl("/cust/getCustList"),method:"post",data:this.$http.adornParams({})}).then(function(e){var a=e.data;a&&200===a.code?(t.dataList=a.data.list,t.totalPage=a.data.totalCount):(t.dataList=[],t.totalPage=0),t.dataListLoading=!1})}}},l,!1,null,null,null);e.default=n.exports}});