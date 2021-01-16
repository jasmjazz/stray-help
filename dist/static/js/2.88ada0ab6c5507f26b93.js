webpackJsonp([2],{"E/jL":function(t,a){},"i+hD":function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("mvHQ"),i=s.n(e),r=s("Dd8w"),c=s.n(r),n={name:"Home",data:function(){return{isLoading:!1,allProducts:[],product:{},pagination:{},countProduct:6,currentPage:1,cart:[]}},components:{Cart:s("muQR").a},methods:{getAllProducts:function(){var t="https://vue-course-api.hexschool.io/api/jasmjazz/products?page="+(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1),a=this;a.isLoading=!0,a.$http.get(t).then(function(t){a.allProducts=t.data.products.filter(function(t){return 1===t.is_enabled}),a.pagination=t.data.pagination,a.isLoading=!1})},setPage:function(t){t<=0||t>this.totalPage||(this.currentPage=t)},getCart:function(){this.cart=JSON.parse(localStorage.getItem("cart"))||[]},addCart:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,s=this,e=-1;if(s.getCart(),s.cart.length>0&&s.cart.forEach(function(a,s){a.id===t.id&&(e=s)}),-1===e){var r=parseInt(t.price*a,10);s.$set(t,"qty",a),s.$set(t,"total",r),s.cart.push(t),s.$bus.$emit("message: push","已加入購物車")}else{var n=c()({},s.cart[e]);n.qty+a>10?s.$bus.$emit("message: push","同款糧食不得超過10組！","danger"):(n.qty+=a,s.$bus.$emit("message: push","已加入購物車")),n.total=parseInt(t.price*n.qty,10),s.cart.splice(e,1),s.cart.push(n)}localStorage.setItem("cart",i()(s.cart)),s.getCart()}},computed:{firstProduct:function(){return(this.currentPage-1)*this.countProduct},totalPage:function(){return Math.ceil(this.allProducts.length/this.countProduct)}},created:function(){this.getAllProducts(),this.getCart()}},o={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("loading",{attrs:{active:t.isLoading,loader:"dots"},on:{"update:active":function(a){t.isLoading=a}}}),t._v(" "),s("Cart"),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"container"},[s("div",{staticClass:"row mt-5"},t._l(t.allProducts.slice(t.firstProduct,t.firstProduct+t.countProduct),function(a){return s("div",{key:a.id,staticClass:"card-group col-md-6 col-lg-4 mb-4"},[s("div",{staticClass:"card border-0 product-card",on:{click:function(s){return t.$router.push("/detail/"+a.id)}}},[s("div",{staticClass:"image",style:{backgroundImage:"url("+a.imageUrl+")"}}),t._v(" "),s("div",{staticClass:"card-body"},[0===a.category?s("h5",[s("span",{staticClass:"badge badge-dark float-right ml-2"},[t._v("主食")])]):1===a.category?s("h5",[s("span",{staticClass:"badge badge-warning float-right ml-2"},[t._v("副食")])]):s("h5",[s("span",{staticClass:"badge badge-info float-right ml-2"},[t._v("零食")])]),t._v(" "),s("h4",{staticClass:"card-title"},[s("a",{staticClass:"text-dark",attrs:{href:"#"}},[t._v(t._s(a.title))])]),t._v(" "),s("p",{staticClass:"card-text",staticStyle:{"font-size":"16px"}},[t._v(t._s(a.description))])]),t._v(" "),s("div",{staticClass:"card-footer d-flex",staticStyle:{"background-color":"#494949"}},[s("h5",{staticStyle:{color:"#ffffff","letter-spacing":"1px","padding-top":"4px"}},[t._v("\n              NT "+t._s(t._f("currency")(a.price))+"\n            ")]),t._v(" "),s("button",{staticClass:"btn btn-outline-light ml-auto",attrs:{type:"button"},on:{click:function(s){return s.stopPropagation(),t.addCart(a)}}},[t._v("\n              捐助糧食\n            ")])])])])}),0),t._v(" "),s("nav",{attrs:{"aria-label":"Page navigation example"}},[s("ul",{staticClass:"pagination justify-content-center"},t._l(t.totalPage,function(a){return s("li",{key:a,staticClass:"page-item",class:{active:t.currentPage===a},on:{click:function(s){return s.preventDefault(),t.setPage(a)}}},[s("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v(t._s(a))])])}),0)])]),t._v(" "),t._m(1),t._v(" "),t._m(2)],1)},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container-fluid content"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12 col-lg-12 col-xl-6 content-left"},[s("h2",{staticStyle:{color:"#ffffff"}},[t._v("\n          公告\n        ")]),t._v(" "),s("h5",{staticStyle:{color:"#ffc107"}},[s("i",{staticClass:"fas fa-exclamation-triangle"}),t._v("\n          165防詐騙宣導"),s("br"),t._v("\n          提醒您提高警覺，疑似詐騙請撥打165求證\n        ")]),t._v(" "),s("h5",{staticStyle:{color:"#f5f5f5"}},[t._v("\n          ※若需園區簽收單，請加入 LINE@ 或於 FB 粉絲團洽詢"),s("br"),t._v("\n          ※公司行號、個人慈愛捐助需要報稅者，請與我們聯繫\n        ")]),t._v(" "),s("h4",[s("span",{staticStyle:{color:"#ffffff"}},[t._v("逛逛下方物資")]),s("br"),t._v(" "),s("span",{staticStyle:{color:"red"}},[t._v("立即愛心捐糧")])])]),t._v(" "),s("div",{staticClass:"col-md-12 col-lg-12 col-xl-6 content-right"},[s("div",{staticClass:"card border-0"},[s("div",{staticClass:"card-body"},[s("p",[t._v("全省有許多流浪貓狗園區面臨缺糧的問題，"),s("br"),t._v("\n              愛爸和愛媽給了流浪貓狗一個家，"),s("br"),t._v("\n              除了讓牠們免於受苦、受餓，"),s("br"),t._v("\n              也大幅減少了社會環境的問題。"),s("br"),t._v("\n              隨著收容的數量急遽上升，"),s("br"),t._v("\n              能力有限的愛爸愛媽需要你我的幫助。\n            ")]),t._v(" "),s("h4",{staticClass:"mt-4"},[t._v("『集食』給予最實質的幫助\n              "),s("i",{staticClass:"fas fa-paw"})])])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container mt-5"},[s("div",{staticClass:"jumbotron"},[s("div",{staticClass:"container"},[s("h2",{staticClass:"display-4"},[t._v("流浪貓狗助糧平台\n          "),s("span",{staticClass:"badge badge-warning tag-2"},[t._v("宗旨")])]),t._v(" "),s("hr",{staticClass:"my-4"}),t._v(" "),s("p",[t._v("1. 以全台灣急缺糧食的園區優先配送。")]),t._v(" "),s("p",[t._v("2. 不分大小間、有無政府核可，因為浪浪無法選擇在哪裡生活。")]),t._v(" "),s("p",[t._v("3. 避免過度集中捐助，物資由平台平均分配。")]),t._v(" "),s("p",[t._v("4. 助糧流程公開透明，讓愛直達園區。")]),t._v(" "),s("p",[t._v("5. 領養不棄養！")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"container iframe mt-4"},[a("div",{staticClass:"embed-responsive embed-responsive-16by9"},[a("iframe",{staticClass:"embed-responsive-item",attrs:{src:"https://www.youtube.com/embed/l9itdKFvMz4?rel=0&autoplay=1&loop=1&playlist=l9itdKFvMz4",allow:"autoplay; encrypted-media",allowfullscreen:""}})])])}]};var l=s("VU/8")(n,o,!1,function(t){s("E/jL")},"data-v-e0ba7b82",null);a.default=l.exports}});
//# sourceMappingURL=2.88ada0ab6c5507f26b93.js.map