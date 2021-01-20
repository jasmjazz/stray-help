webpackJsonp([4],{"19h9":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("woOf"),i=a.n(s),o=a("Dd8w"),r=a.n(o),l={data:function(){return{products:[],tempProduct:{},isNew:!1,isLoading:!1,status:{fileUploading:!1},pagination:{}}},components:{Pagination:a("cMGX").a},methods:{select:function(){switch(this.tempProduct.category){case 0:this.tempProduct.unit=0;break;case 1:this.tempProduct.unit=1;break;default:this.tempProduct.unit=2}},getProducts:function(){var t="https://vue-course-api.hexschool.io/api/jasmjazz/admin/products?page="+(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1),e=this;e.isLoading=!0,e.$http.get(t).then(function(t){console.log(t.data),e.isLoading=!1,e.products=t.data.products,e.pagination=t.data.pagination})},openModal:function(t,e){t?(this.tempProduct={},this.$set(this.tempProduct,"category",0),this.$set(this.tempProduct,"unit",0),this.isNew=!0):(this.tempProduct=r()({},e),this.isNew=!1),$("#updateModal").modal("show")},uploadFile:function(){var t=this,e=t.$refs.files.files[0],a=new FormData;a.append("file-to-upload",e);t.status.fileUploading=!0,t.$http.post("https://vue-course-api.hexschool.io/api/jasmjazz/admin/upload",a,{headers:{"Content-Type":"multipart/form-data"}}).then(function(e){console.log(e.data),e.data.success?(t.status.fileUploading=!1,t.$set(t.tempProduct,"imageUrl",e.data.imageUrl)):(t.status.fileUploading=!1,t.$bus.$emit("message: push",e.data.message,"danger"),t.$refs.files.value="")})},updateProduct:function(){var t=this,e="https://vue-course-api.hexschool.io/api/jasmjazz/admin/product",a=this,s="post";a.isNew||(e="https://vue-course-api.hexschool.io/api/jasmjazz/admin/product/"+a.tempProduct.id,s="put"),a.$http[s](e,{data:a.tempProduct}).then(function(e){e.data.success?($("#updateModal").modal("hide"),t.$bus.$emit("message: push",e.data.message),a.getProducts(),a.isLoading=!1):($("#updateModal").modal("hide"),t.$bus.$emit("message: push",e.data.message,"danger"),a.getProducts(),a.isLoading=!1)})},delModal:function(t){this.tempProduct=i()({},t),$("#deleteModal").modal("show")},deleteProduct:function(){var t=this,e="https://vue-course-api.hexschool.io/api/jasmjazz/admin/product/"+t.tempProduct.id;t.$http.delete(e).then(function(e){console.log(e.data),e.data.success?($("#deleteModal").modal("hide"),t.getProducts()):($("#deleteModal").modal("hide"),t.getProducts(),console.log("刪除失敗"))})}},created:function(){this.getProducts()}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loading",{attrs:{active:t.isLoading,loader:"dots"},on:{"update:active":function(e){t.isLoading=e}}}),t._v(" "),a("div",{staticClass:"text-right mt-4"},[a("button",{staticClass:"btn btn-primary",staticStyle:{"font-size":"16px","letter-spacing":"1px"},on:{click:function(e){return t.openModal(!0)}}},[t._v("建立糧食")])]),t._v(" "),a("table",{staticClass:"table mt-4"},[t._m(0),t._v(" "),a("tbody",t._l(t.products,function(e){return a("tr",{key:e.id},[a("td",[a("a",{staticClass:"icon",on:{click:function(a){return a.preventDefault(),t.delModal(e)}}},[a("i",{staticClass:"fas fa-trash",staticStyle:{"font-size":"25px"}})])]),0===e.category?a("td",[t._m(1,!0)]):1===e.category?a("td",[t._m(2,!0)]):a("td",[t._m(3,!0)]),t._v(" "),a("td",[t._v(t._s(e.title))]),t._v(" "),a("td",[t._v(t._s(e.description))]),t._v(" "),e.price?a("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(e.price)))]):a("td"),t._v(" "),a("td"),t._v(" "),a("td",[e.is_enabled?a("h5",[a("span",{staticClass:"badge badge-success"},[t._v("是")])]):a("h5",[a("span",{staticClass:"badge badge-primary"},[t._v("否")])])]),t._v(" "),a("td",[a("a",{staticClass:"icon",on:{click:function(a){return a.preventDefault(),t.openModal(!1,e)}}},[a("i",{staticClass:"far fa-edit",staticStyle:{"font-size":"25px"}})])])])}),0)]),t._v(" "),a("Pagination",{attrs:{pages:t.pagination},on:{changePage:t.getProducts}}),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"updateModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[a("div",{staticClass:"modal-header bg-dark text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t.isNew?a("span",[t._v("新增糧食")]):a("span",[t._v("修改糧食")])]),t._v(" "),t._m(4)]),t._v(" "),a("div",{staticClass:"modal-body"},[a("form",{staticClass:"row"},[a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"image"}},[t._v("輸入圖片網址")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.imageUrl,expression:"tempProduct.imageUrl"}],staticClass:"form-control",attrs:{type:"text",id:"image",placeholder:"請輸入圖片連結"},domProps:{value:t.tempProduct.imageUrl},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"imageUrl",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"customFile"}},[t._v("請上傳圖片\n                  "),t.status.fileUploading?a("i",{staticClass:"fas fa-spinner fa-pulse"}):t._e()]),t._v(" "),a("input",{ref:"files",staticClass:"form-control",attrs:{type:"file",id:"customFile"},on:{change:t.uploadFile}})]),t._v(" "),a("img",{staticClass:"img-fluid",attrs:{img:"https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80",src:t.tempProduct.imageUrl}})]),t._v(" "),a("div",{staticClass:"col-sm-8"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("品名")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.title,expression:"tempProduct.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"請輸入糧食名稱"},domProps:{value:t.tempProduct.title},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"title",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"category"}},[t._v("分類")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.category,expression:"tempProduct.category"}],staticClass:"form-control",on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.tempProduct,"category",e.target.multiple?a:a[0])},t.select]}},[a("option",{domProps:{value:0}},[t._v("主食")]),t._v(" "),a("option",{domProps:{value:1}},[t._v("副食")]),t._v(" "),a("option",{domProps:{value:2}},[t._v("零食")])])])]),t._v(" "),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"price"}},[t._v("價格")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.price,expression:"tempProduct.price"}],staticClass:"form-control",attrs:{type:"number",id:"price",placeholder:"請輸入糧食價格"},domProps:{value:t.tempProduct.price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"price",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"unit"}},[t._v("單位")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.unit,expression:"tempProduct.unit"}],staticClass:"form-control",attrs:{disabled:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.tempProduct,"unit",e.target.multiple?a:a[0])}}},[a("option",{domProps:{value:0}},[t._v("包")]),t._v(" "),a("option",{domProps:{value:1}},[t._v("罐")]),t._v(" "),a("option",{domProps:{value:2}},[t._v("袋")])])])]),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"description"}},[t._v("描述")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.description,expression:"tempProduct.description"}],staticClass:"form-control",attrs:{type:"text",id:"description",placeholder:"請輸入糧食描述"},domProps:{value:t.tempProduct.description},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"description",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"content"}},[t._v("成分")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.content,expression:"tempProduct.content"}],staticClass:"form-control",attrs:{type:"text",id:"content",placeholder:"請輸入糧食成分"},domProps:{value:t.tempProduct.content},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"content",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group",staticStyle:{"margin-top":"25px"}},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.is_enabled,expression:"tempProduct.is_enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox","true-value":1,"false-value":0,id:"is_enabled"},domProps:{checked:Array.isArray(t.tempProduct.is_enabled)?t._i(t.tempProduct.is_enabled,null)>-1:t._q(t.tempProduct.is_enabled,1)},on:{change:function(e){var a=t.tempProduct.is_enabled,s=e.target,i=s.checked?1:0;if(Array.isArray(a)){var o=t._i(a,null);s.checked?o<0&&t.$set(t.tempProduct,"is_enabled",a.concat([null])):o>-1&&t.$set(t.tempProduct,"is_enabled",a.slice(0,o).concat(a.slice(o+1)))}else t.$set(t.tempProduct,"is_enabled",i)}}}),t._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v("\n                    是否啟用\n                  ")])])])])])]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-danger",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),t._v(" "),a("button",{staticClass:"btn btn-outline-success",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.updateProduct(e)}}},[t._v("確認")])])])])]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"deleteModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(5),t._v(" "),a("div",{staticClass:"modal-body"},[t._v("\n          是否刪除 "),a("strong",{staticClass:"text-danger"},[t._v(t._s(t.tempProduct.title))]),t._v(" 商品？\n        ")]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),t._v(" "),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.deleteProduct}},[t._v("確認刪除")])])])])])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{width:"6%"}}),t._v(" "),a("th",{attrs:{width:"8%"}},[t._v("分類")]),t._v(" "),a("th",{attrs:{width:"14%"}},[t._v("品名")]),t._v(" "),a("th",{attrs:{width:"42%"}},[t._v("糧食描述")]),t._v(" "),a("th",{attrs:{width:"10%"}},[t._v("價格")]),t._v(" "),a("th",{attrs:{width:"3%"}}),t._v(" "),a("th",{attrs:{width:"8%"}},[t._v("啟用")]),t._v(" "),a("th",{attrs:{width:"10%"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",[e("span",{staticClass:"badge badge-dark"},[this._v("主食")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",[e("span",{staticClass:"badge badge-warning"},[this._v("副食")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",[e("span",{staticClass:"badge badge-info"},[this._v("零食")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header bg-danger text-white"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[e("span",[this._v("刪除糧食（刪除後將無法恢復）")])]),this._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])}]};var c=a("VU/8")(l,n,!1,function(t){a("OOfQ")},"data-v-3ceb0df8",null);e.default=c.exports},OOfQ:function(t,e){},cMGX:function(t,e,a){"use strict";var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination justify-content-center"},[a("li",{staticClass:"page-item",class:{disabled:!t.pages.has_pre}},[a("a",{staticClass:"page-link",attrs:{"aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.clickPage(t.pages.current_page-1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._v(" "),t._l(t.pages.total_pages,function(e){return a("li",{key:e,staticClass:"page-item",class:{active:t.pages.current_page===e}},[a("a",{staticClass:"page-link",on:{click:function(a){return a.preventDefault(),t.clickPage(e)}}},[t._v(t._s(e))])])}),t._v(" "),a("li",{staticClass:"page-item",class:{disabled:!t.pages.has_next}},[a("a",{staticClass:"page-link",attrs:{"aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.clickPage(t.pages.current_page+1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])])},staticRenderFns:[]},i=a("VU/8")({name:"Pagination",props:["pages"],methods:{clickPage:function(t){this.$emit("changePage",t)}}},s,!1,null,null,null);e.a=i.exports}});
//# sourceMappingURL=4.4273e1b039c35a6bb1c6.js.map