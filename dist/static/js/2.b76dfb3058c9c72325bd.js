webpackJsonp([2],{"+x24":function(t,a,s){t.exports=s.p+"static/img/img01.73d54ae.png"},Ecex:function(t,a){},Efep:function(t,a,s){t.exports=s.p+"static/img/img03.50d78d8.gif"},O5je:function(t,a,s){t.exports=s.p+"static/img/img02.ce006ff.png"},"i+hD":function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=s("mvHQ"),e=s.n(i),c=s("Dd8w"),r=s.n(c),n={name:"Home",data:function(){return{isLoading:!1,allProducts:[],product:{},pagination:{},countProduct:6,currentPage:1,cart:[]}},components:{Cart:s("muQR").a},methods:{getAllProducts:function(){var t=this;t.isLoading=!0,t.$http.get("https://vue-course-api.hexschool.io/api/jasmjazz/products/all").then(function(a){t.allProducts=a.data.products.filter(function(t){return 1===t.is_enabled}),t.isLoading=!1})},getProducts:function(){var t="https://vue-course-api.hexschool.io/api/jasmjazz/products?page="+(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1),a=this;a.isLoading=!0,a.$http.get(t).then(function(t){a.pagination=t.data.pagination,a.isLoading=!1})},setPage:function(t){t<=0||t>this.totalPage||(this.currentPage=t)},getCart:function(){this.cart=JSON.parse(localStorage.getItem("cart"))||[]},addCart:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,s=this,i=-1;if(s.getCart(),s.cart.length>0&&s.cart.forEach(function(a,s){a.id===t.id&&(i=s)}),-1===i){var c=parseInt(t.price*a,10);s.$set(t,"qty",a),s.$set(t,"total",c),s.cart.push(t),s.$bus.$emit("message: push","已加入購物車")}else{var n=r()({},s.cart[i]);n.qty+a>10?s.$bus.$emit("message: push","同款糧食不得超過10組！","danger"):(n.qty+=a,s.$bus.$emit("message: push","已加入購物車")),n.total=parseInt(t.price*n.qty,10),s.cart.splice(i,1),s.cart.push(n)}localStorage.setItem("cart",e()(s.cart)),s.getCart()}},computed:{firstProduct:function(){return(this.currentPage-1)*this.countProduct},totalPage:function(){return Math.ceil(this.allProducts.length/this.countProduct)}},created:function(){this.getAllProducts(),this.getProducts(),this.getCart()}},o={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("loading",{attrs:{active:t.isLoading,loader:"dots"},on:{"update:active":function(a){t.isLoading=a}}}),t._v(" "),s("Cart"),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"container"},[s("div",{staticClass:"row"},t._l(t.allProducts.slice(t.firstProduct,t.firstProduct+t.countProduct),function(a){return s("div",{key:a.id,staticClass:"card-group col-md-6 col-lg-4 home-card"},[s("div",{staticClass:"card border-1",on:{click:function(s){return t.$router.push("/detail/"+a.id)}}},[s("div",{staticClass:"image",style:{backgroundImage:"url("+a.imageUrl+")"}}),t._v(" "),s("div",{staticClass:"card-body"},[0===a.category?s("h5",[s("span",{staticClass:"badge badge-dark float-right ml-2"},[t._v("主食")])]):1===a.category?s("h5",[s("span",{staticClass:"badge badge-warning float-right ml-2"},[t._v("副食")])]):s("h5",[s("span",{staticClass:"badge badge-info float-right ml-2"},[t._v("零食")])]),t._v(" "),s("h4",{staticClass:"card-title"},[s("a",{staticClass:"text-dark",attrs:{href:"#"}},[t._v(t._s(a.title))])]),t._v(" "),s("p",{staticClass:"card-text"},[t._v(t._s(a.description))])]),t._v(" "),s("h5",{staticClass:"text-right",staticStyle:{color:"#616161","font-weight":"bold","letter-spacing":"1px",padding:"0 15px 10px 0"}},[t._v("\n              NT "+t._s(t._f("currency")(a.price))+"\n          ")])])])}),0),t._v(" "),s("nav",{attrs:{"aria-label":"Page navigation example"}},[s("ul",{staticClass:"pagination justify-content-center"},t._l(t.totalPage,function(a){return s("li",{key:a,staticClass:"page-item",class:{active:t.currentPage===a},on:{click:function(s){return s.preventDefault(),t.setPage(a)}}},[s("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v(t._s(a))])])}),0)])])],1)},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container-fluid content"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12 col-xl-6 content-left"},[s("h2",{staticStyle:{color:"#ffffff"}},[t._v("\n          公告\n        ")]),t._v(" "),s("h5",{staticStyle:{color:"#ffc107"}},[s("i",{staticClass:"fas fa-exclamation-triangle"}),t._v("\n          165防詐騙宣導"),s("br"),t._v("\n          提醒您提高警覺，疑似詐騙請撥打165求證\n        ")]),t._v(" "),s("h5",{staticStyle:{color:"#f5f5f5"}},[t._v("\n          ※若需簽收單者，請於 LINE@ 或 FB 洽詢"),s("br"),t._v("\n          ※若需報稅者，請與我們聯繫\n        ")]),t._v(" "),s("h4",[s("span",{staticStyle:{color:"#ffffff"}},[t._v("逛逛下方物資")]),s("br"),t._v(" "),s("span",{staticStyle:{color:"red"}},[t._v("立即愛心捐糧")])])]),t._v(" "),s("div",{staticClass:"col-md-12 col-xl-6 content-right"},[s("div",{staticClass:"card border-0"},[s("div",{staticClass:"card-body"},[s("p",[t._v("全省有許多流浪貓狗園區面臨缺糧的問題，"),s("br"),t._v("\n              愛爸和愛媽給了流浪貓狗一個家，"),s("br"),t._v("\n              除了讓牠們免於受苦、受餓，"),s("br"),t._v("\n              也大幅減少了社會環境的問題。"),s("br"),t._v("\n              隨著收容的數量急遽上升，"),s("br"),t._v("\n              能力有限的愛爸愛媽需要你我的幫助。\n            ")]),t._v(" "),s("h4",{staticClass:"mt-4"},[t._v("『集食』給予最實質的幫助\n              "),s("i",{staticClass:"fas fa-paw"})])])])])])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"wrap"},[i("div",{staticClass:"container-fulid"},[i("div",{staticClass:"iframe"},[i("div",{staticClass:"embed-responsive embed-responsive-16by9"},[i("iframe",{staticClass:"embed-responsive-item",attrs:{src:"https://www.youtube.com/embed/l9itdKFvMz4?rel=0",allow:"autoplay; encrypted-media",allowfullscreen:""}})])]),t._v(" "),i("img",{staticClass:"img-fluid",attrs:{src:s("+x24"),alt:"Responsive image"}}),t._v(" "),i("img",{staticClass:"img-fluid",attrs:{src:s("Efep"),alt:"Responsive image"}}),t._v(" "),i("img",{staticClass:"img-fluid",attrs:{src:s("O5je"),alt:"Responsive image"}})]),t._v(" "),i("div",{staticClass:"container-fulid"},[i("div",{staticClass:"jumbotron"},[i("div",{staticClass:"container"},[i("h2",{staticClass:"display-4"},[t._v("流浪貓狗助糧平台\n          "),i("span",{staticClass:"badge badge-warning tag-2"},[t._v("宗旨")])]),t._v(" "),i("hr",{staticClass:"my-4 mb-5"}),t._v(" "),i("p",[t._v("1. 捐糧，不捐款。")]),t._v(" "),i("p",[t._v("2. 以全台灣急缺糧食的園區優先配送。")]),t._v(" "),i("p",[t._v("3. 物資皆由平台平均分配。")]),t._v(" "),i("p",[t._v("4. 助糧流程公開透明，讓愛直達園區。")]),t._v(" "),i("p",[t._v("5. 領養不棄養！")])])])])])}]};var l=s("VU/8")(n,o,!1,function(t){s("Ecex")},"data-v-7a42c290",null);a.default=l.exports}});
//# sourceMappingURL=2.b76dfb3058c9c72325bd.js.map