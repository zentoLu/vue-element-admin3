webpackJsonp([61],{"C+ej":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"云存储配置","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},[a("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"120px"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.dataFormSubmit()}}},[a("el-form-item",{attrs:{size:"mini",label:"存储类型"}},[a("el-radio-group",{model:{value:e.dataForm.type,callback:function(t){e.$set(e.dataForm,"type",t)},expression:"dataForm.type"}},[a("el-radio",{attrs:{label:1}},[e._v("七牛")]),e._v(" "),a("el-radio",{attrs:{label:2}},[e._v("阿里云")]),e._v(" "),a("el-radio",{attrs:{label:3}},[e._v("腾讯云")]),e._v(" "),a("el-radio",{attrs:{label:4}},[e._v("fastdfs")])],1)],1),e._v(" "),1===e.dataForm.type?[a("el-form-item",{attrs:{size:"mini"}},[a("a",{attrs:{href:"http://www.renren.io/open/qiniu.html",target:"_blank"}},[e._v("免费申请(七牛)10GB储存空间")])]),e._v(" "),a("el-form-item",{attrs:{label:"域名"}},[a("el-input",{attrs:{placeholder:"七牛绑定的域名"},model:{value:e.dataForm.qiniuDomain,callback:function(t){e.$set(e.dataForm,"qiniuDomain",t)},expression:"dataForm.qiniuDomain"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"路径前缀"}},[a("el-input",{attrs:{placeholder:"不设置默认为空"},model:{value:e.dataForm.qiniuPrefix,callback:function(t){e.$set(e.dataForm,"qiniuPrefix",t)},expression:"dataForm.qiniuPrefix"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"AccessKey"}},[a("el-input",{attrs:{placeholder:"七牛AccessKey"},model:{value:e.dataForm.qiniuAccessKey,callback:function(t){e.$set(e.dataForm,"qiniuAccessKey",t)},expression:"dataForm.qiniuAccessKey"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"SecretKey"}},[a("el-input",{attrs:{placeholder:"七牛SecretKey"},model:{value:e.dataForm.qiniuSecretKey,callback:function(t){e.$set(e.dataForm,"qiniuSecretKey",t)},expression:"dataForm.qiniuSecretKey"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"空间名"}},[a("el-input",{attrs:{placeholder:"七牛存储空间名"},model:{value:e.dataForm.qiniuBucketName,callback:function(t){e.$set(e.dataForm,"qiniuBucketName",t)},expression:"dataForm.qiniuBucketName"}})],1)]:2===e.dataForm.type?[a("el-form-item",{attrs:{label:"域名"}},[a("el-input",{attrs:{placeholder:"阿里云绑定的域名"},model:{value:e.dataForm.aliyunDomain,callback:function(t){e.$set(e.dataForm,"aliyunDomain",t)},expression:"dataForm.aliyunDomain"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"路径前缀"}},[a("el-input",{attrs:{placeholder:"不设置默认为空"},model:{value:e.dataForm.aliyunPrefix,callback:function(t){e.$set(e.dataForm,"aliyunPrefix",t)},expression:"dataForm.aliyunPrefix"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"EndPoint"}},[a("el-input",{attrs:{placeholder:"阿里云EndPoint"},model:{value:e.dataForm.aliyunEndPoint,callback:function(t){e.$set(e.dataForm,"aliyunEndPoint",t)},expression:"dataForm.aliyunEndPoint"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"AccessKeyId"}},[a("el-input",{attrs:{placeholder:"阿里云AccessKeyId"},model:{value:e.dataForm.aliyunAccessKeyId,callback:function(t){e.$set(e.dataForm,"aliyunAccessKeyId",t)},expression:"dataForm.aliyunAccessKeyId"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"AccessKeySecret"}},[a("el-input",{attrs:{placeholder:"阿里云AccessKeySecret"},model:{value:e.dataForm.aliyunAccessKeySecret,callback:function(t){e.$set(e.dataForm,"aliyunAccessKeySecret",t)},expression:"dataForm.aliyunAccessKeySecret"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"BucketName"}},[a("el-input",{attrs:{placeholder:"阿里云BucketName"},model:{value:e.dataForm.aliyunBucketName,callback:function(t){e.$set(e.dataForm,"aliyunBucketName",t)},expression:"dataForm.aliyunBucketName"}})],1)]:3===e.dataForm.type?[a("el-form-item",{attrs:{label:"域名"}},[a("el-input",{attrs:{placeholder:"腾讯云绑定的域名"},model:{value:e.dataForm.qcloudDomain,callback:function(t){e.$set(e.dataForm,"qcloudDomain",t)},expression:"dataForm.qcloudDomain"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"路径前缀"}},[a("el-input",{attrs:{placeholder:"不设置默认为空"},model:{value:e.dataForm.qcloudPrefix,callback:function(t){e.$set(e.dataForm,"qcloudPrefix",t)},expression:"dataForm.qcloudPrefix"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"AppId"}},[a("el-input",{attrs:{placeholder:"腾讯云AppId"},model:{value:e.dataForm.qcloudAppId,callback:function(t){e.$set(e.dataForm,"qcloudAppId",t)},expression:"dataForm.qcloudAppId"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"SecretId"}},[a("el-input",{attrs:{placeholder:"腾讯云SecretId"},model:{value:e.dataForm.qcloudSecretId,callback:function(t){e.$set(e.dataForm,"qcloudSecretId",t)},expression:"dataForm.qcloudSecretId"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"SecretKey"}},[a("el-input",{attrs:{placeholder:"腾讯云SecretKey"},model:{value:e.dataForm.qcloudSecretKey,callback:function(t){e.$set(e.dataForm,"qcloudSecretKey",t)},expression:"dataForm.qcloudSecretKey"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"BucketName"}},[a("el-input",{attrs:{placeholder:"腾讯云BucketName"},model:{value:e.dataForm.qcloudBucketName,callback:function(t){e.$set(e.dataForm,"qcloudBucketName",t)},expression:"dataForm.qcloudBucketName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Bucket所属地区"}},[a("el-input",{attrs:{placeholder:"如：sh（可选值 ，华南：gz 华北：tj 华东：sh）"},model:{value:e.dataForm.qcloudRegion,callback:function(t){e.$set(e.dataForm,"qcloudRegion",t)},expression:"dataForm.qcloudRegion"}})],1)]:4===e.dataForm.type?[a("el-form-item",{attrs:{label:"域名"}},[a("el-input",{attrs:{placeholder:"fastdfs"},model:{value:e.dataForm.fastdfsUrl,callback:function(t){e.$set(e.dataForm,"fastdfsUrl",t)},expression:"dataForm.fastdfsUrl"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"超时时间"}},[a("el-input",{attrs:{placeholder:"不设置默认为3000"},model:{value:e.dataForm.connectTimeout,callback:function(t){e.$set(e.dataForm,"connectTimeout",t)},expression:"dataForm.connectTimeout"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"连接超时时间"}},[a("el-input",{attrs:{placeholder:"不设置默认为3000"},model:{value:e.dataForm.networkTimeout,callback:function(t){e.$set(e.dataForm,"networkTimeout",t)},expression:"dataForm.networkTimeout"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"字符集"}},[a("el-input",{attrs:{placeholder:"默认utf-8"},model:{value:e.dataForm.charset,callback:function(t){e.$set(e.dataForm,"charset",t)},expression:"dataForm.charset"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"tracker端口"}},[a("el-input",{attrs:{placeholder:"tracker端口"},model:{value:e.dataForm.trackerHttpPort,callback:function(t){e.$set(e.dataForm,"trackerHttpPort",t)},expression:"dataForm.trackerHttpPort"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"tracker地址"}},[a("el-input",{attrs:{placeholder:"tracker地址"},model:{value:e.dataForm.trackerServer,callback:function(t){e.$set(e.dataForm,"trackerServer",t)},expression:"dataForm.trackerServer"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"是否开启token"}},[a("el-input",{attrs:{placeholder:"0?1"},model:{value:e.dataForm.antiStealToken,callback:function(t){e.$set(e.dataForm,"antiStealToken",t)},expression:"dataForm.antiStealToken"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"token"}},[a("el-input",{attrs:{placeholder:"token"},model:{value:e.dataForm.secretKey,callback:function(t){e.$set(e.dataForm,"secretKey",t)},expression:"dataForm.secretKey"}})],1)]:e._e()],2),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},staticRenderFns:[]},r=a("vSla")({data:function(){return{visible:!1,dataForm:{},dataRule:{}}},methods:{init:function(e){var t=this;this.visible=!0,this.$http({url:this.$http.adornUrl("/sys/oss/config"),method:"get",params:this.$http.adornParams()}).then(function(e){var a=e.data;t.dataForm=a&&200===a.code?a.data:[]})},dataFormSubmit:function(){var e=this;this.$refs.dataForm.validate(function(t){t&&e.$http({url:e.$http.adornUrl("/sys/oss/saveConfig"),method:"post",data:e.$http.adornData(e.dataForm)}).then(function(t){var a=t.data;a&&200===a.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.visible=!1}}):e.$message.error(a.msg)})})}}},l,!1,null,null,null);t.default=r.exports}});