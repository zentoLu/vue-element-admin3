webpackJsonp([73],{Ndbe:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("Rk3H");var a={data:function(){return{list:null}},filters:{statusFilter:function(t){return{success:"success",pending:"danger"}[t]}},created:function(){this.fetchData()},methods:{fetchData:function(){var t,e=this;Object(s.a)({url:"/transaction/list",method:"get",params:t}).then(function(t){e.list=t.data.items.slice(0,8)})}}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-table",{staticStyle:{width:"100%","padding-top":"15px"},attrs:{data:t.list}},[n("el-table-column",{attrs:{label:"Order_No","min-width":"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n      "+t._s(e.row.order_no)+"\n    ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"Price",width:"195",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n      ¥"+t._s(t._f("toThousandslsFilter")(e.row.price))+"\n    ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"Status",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-tag",{attrs:{type:t._f("statusFilter")(e.row.status)}},[t._v(" "+t._s(e.row.status))])]}}])})],1)},staticRenderFns:[]},r=n("vSla")(a,l,!1,null,null,null);e.default=r.exports}});