webpackJsonp([5],{"9ZNG":function(t,a){},ydoF:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("mvHQ"),i=s.n(e),c=s("Dd8w"),r=s.n(c),n=s("elsE"),o=s("muQR"),l={data:function(){return{isLoading:!1,productId:"",product:{},loadingItem:!1,cart:[],num:1}},components:{Alert:n.a,Cart:o.a},methods:{getProduct:function(){var t=this;t.productId=t.$route.params.id;var a="https://vue-course-api.hexschool.io/api/jasmjazz/product/"+t.productId;t.isLoading=!0,t.$http.get(a).then(function(a){t.product=a.data.product,t.isLoading=!1})},getCart:function(){this.cart=JSON.parse(localStorage.getItem("cart"))||[]},addCart:function(t,a){var s=this,e=-1;if(s.getCart(),s.cart.length>0&&s.cart.forEach(function(a,s){a.id===t.id&&(e=s)}),-1===e){var c=parseInt(t.price*a,10);s.$set(t,"qty",a),s.$set(t,"total",c),s.cart.push(t),s.$bus.$emit("message: push","已加入購物車")}else{var n=r()({},s.cart[e]);n.qty+a>10?s.$bus.$emit("message: push","同款糧食不得超過10組！","danger"):(n.qty+=a,s.$bus.$emit("message: push","已加入購物車")),n.total=parseInt(t.price*n.qty,10),s.cart.splice(e,1),s.cart.push(n)}localStorage.setItem("cart",i()(s.cart)),s.getCart()}},created:function(){this.getProduct(),this.getCart()}},d={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[s("loading",{attrs:{active:t.isLoading,loader:"dots"},on:{"update:active":function(a){t.isLoading=a}}}),t._v(" "),s("Alert"),t._v(" "),s("Cart"),t._v(" "),s("div",{staticClass:"row mt-4"},[s("div",{staticClass:"col-12"},[s("ul",{staticClass:"nav",staticStyle:{"font-size":"18px"}},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[s("span",{staticClass:"choose"},[t._v("首頁")])])],1),t._v(" "),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/category"}},[s("span",{staticClass:"choose"},[t._v("種類")])])],1),t._v(" "),t._m(0)])])]),t._v(" "),s("div",{staticClass:"row mt-2 no-gutters"},[s("div",{staticClass:"col-md-6 col-sm-12 mt-3"},[s("figure",{staticClass:"figure"},[s("img",{staticClass:"figure-img img-fluid rounded",attrs:{src:t.product.imageUrl,alt:"..."}})])]),t._v(" "),s("div",{staticClass:"col-md-6 col-sm-12 detail-card"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"card border-1"},[s("div",{staticClass:"card-body"},[s("h4",{staticClass:"mt-2"},[0===t.product.category?s("span",{staticClass:"badge badge-dark"},[t._v("主食")]):1===t.product.category?s("span",{staticClass:"badge badge-warning"},[t._v("副食")]):s("span",{staticClass:"badge badge-info"},[t._v("零食")])]),t._v(" "),s("h3",{staticClass:"mt-4",staticStyle:{"font-weight":"bold"}},[t._v(t._s(t.product.title))]),t._v(" "),s("p",{staticClass:"mt-3",staticStyle:{"padding-top":"12px"}},[t._v("\n                "+t._s(t.product.description))]),t._v(" "),s("p",[t._v("\n                成分｜ "+t._s(t.product.content))]),t._v(" "),s("h4",{staticClass:"card-title price"},[t._v("\n                NT "+t._s(t._f("currency")(t.product.price))+"\n              ")]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.num,expression:"num"}],staticClass:"form-control mt-4",on:{change:function(a){var s=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.num=a.target.multiple?s:s[0]}}},t._l(10,function(a){return s("option",{key:a,domProps:{value:a}},[t._v("\n                  "+t._s(a)+"\n                ")])}),0),t._v(" "),s("div",{staticClass:"d-flex mt-5 pb-3"},[t._m(1),t._v(" "),s("button",{staticClass:"btn btn-dark ml-auto",attrs:{type:"button"},on:{click:function(a){return t.addCart(t.product,t.num)}}},[t.loadingItem?s("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),t._v(" "),s("span",{staticStyle:{"font-size":"16px","letter-spacing":"1px"}},[t._v("捐助糧食")])])])])])])])])])],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("li",{staticClass:"nav-item",staticStyle:{"font-weight":"bolder"}},[a("span",{staticClass:"nav-link active",staticStyle:{color:"#f57f17"}},[this._v("詳細")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h6",{staticClass:"mt-2",staticStyle:{"letter-spacing":"1px","padding-top":"10px"}},[a("i",{staticClass:"fas fa-star"}),this._v("\n                  一份糧食，一份希望\n                ")])}]};var u=s("VU/8")(l,d,!1,function(t){s("9ZNG")},"data-v-3bc8882b",null);a.default=u.exports}});
//# sourceMappingURL=5.13f275283726ab48e293.js.map