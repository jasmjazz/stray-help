webpackJsonp([7],{QTVG:function(t,a){},TRs1:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=s("mvHQ"),e=s.n(i),r={name:"CheckCart",data:function(){return{isLoading:!1,cart:[],money:0}},components:{Alert:s("elsE").a},methods:{getCart:function(){var t=this;t.money=0,t.cart=JSON.parse(localStorage.getItem("cart"))||[],t.cart.length>0&&t.cart.forEach(function(a){t.money+=a.total})},editNum:function(t,a){var s=parseInt(t.qty+a,10);this.updateCart(t,s)},updateCart:function(t,a){var s=this,i=-1;s.getCart(),s.cart.length>0&&s.cart.forEach(function(a,s){a.id===t.id&&(i=s)}),a>=10?(s.cart[i].qty=10,s.$bus.$emit("message: push","同款糧食不得超過10組！","danger")):s.cart[i].qty=a<=1?1:a;var r=parseInt(s.cart[i].price*s.cart[i].qty,10);s.cart[i].total=r,localStorage.setItem("cart",e()(s.cart)),s.getCart()},delCart:function(t){var a=this;a.cart.forEach(function(s,i){s.id===t&&a.cart.splice(i,1)}),localStorage.setItem("cart",e()(a.cart)),a.getCart()},addCart:function(){var t=this,a=this;a.isLoading=!0,a.cart=JSON.parse(localStorage.getItem("cart"))||[],a.cart.forEach(function(s){var i={product_id:s.id,qty:s.qty};a.$http.post("https://vue-course-api.hexschool.io/api/jasmjazz/cart",{data:i}).then(function(s){s.data.success&&(a.isLoading=!1,t.$router.push("/userinfo"))})})}},created:function(){this.getCart()},mounted:function(){var t=window.outerHeight/2;window.scrollTo({top:t,behavior:"smooth"})}},c={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[s("Alert"),t._v(" "),s("loading",{attrs:{active:t.isLoading,loader:"dots"},on:{"update:active":function(a){t.isLoading=a}}}),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"card border-1"},[s("div",{staticClass:"card-body checkcart"},[0===t.cart.length?s("h4",{staticClass:"text-center",staticStyle:{padding:"50px"}},[t._v("還沒有選擇糧食哦，去逛逛吧！")]):s("ul",[t._l(t.cart,function(a){return s("li",{key:a.id},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-2 p-0"},[s("a",{staticClass:"icon",on:{click:function(s){return s.preventDefault(),t.delCart(a.id)}}},[s("i",{staticClass:"fas fa-trash trash",staticStyle:{"font-size":"18px"}})])]),t._v(" "),s("div",{staticClass:"col-7 p-0"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-md-6"},[s("p",[t._v(t._s(a.title))])]),t._v(" "),s("div",{staticClass:"col-12 col-md-6"},[s("i",{staticClass:"far fa-minus-square",staticStyle:{"font-size":"20px","vertical-align":"text-bottom"},on:{click:function(s){return t.editNum(a,-1)}}}),t._v(" "),s("span",{staticStyle:{"font-size":"18px","margin-left":"15px","margin-right":"15px"}},[t._v("\n                    "+t._s(a.qty)+"\n                  ")]),t._v(" "),s("i",{staticClass:"far fa-plus-square",staticStyle:{"font-size":"20px","vertical-align":"text-bottom"},on:{click:function(s){return t.editNum(a,1)}}})])])]),t._v(" "),s("div",{staticClass:"col-3 p-0 text-right"},[s("p",{staticStyle:{"padding-right":"15px"}},[t._v("\n                NT "+t._s(t._f("currency")(a.price))+"\n              ")])])]),t._v(" "),s("hr")])}),t._v(" "),t.cart.length>0?s("p",{staticClass:"text-right",staticStyle:{"font-weight":"bold","font-size":"18px"}},[t._v("\n          總計 NT "+t._s(t._f("currency")(t.money))+"\n        ")]):t._e()],2)])]),t._v(" "),s("div",{staticClass:"row mt-4"},[t.cart.length>0?s("div",{staticClass:"col-12",staticStyle:{"text-align":"right"}},[s("router-link",{attrs:{to:{name:"Category"}}},[s("button",{staticClass:"btn btn-warning",staticStyle:{"letter-spacing":"2px","margin-right":"10px","font-weight":"bold","font-size":"18px"}},[t._v("\n          再逛逛\n        ")])]),t._v(" "),s("button",{staticClass:"btn btn-dark",staticStyle:{"letter-spacing":"2px","font-weight":"bold","font-size":"17px"},on:{click:t.addCart}},[t._v("\n        確定捐糧\n      ")])],1):s("div",{staticClass:"col-12",staticStyle:{"text-align":"right"}},[s("router-link",{attrs:{to:{name:"Category"}}},[s("button",{staticClass:"btn btn-warning",staticStyle:{"letter-spacing":"2px","margin-right":"10px","font-weight":"bold","font-size":"18px"}},[t._v("\n          去逛逛\n        ")])])],1)])],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row mt-4",staticStyle:{"font-size":"16px"}},[a("div",{staticClass:"col-md-4 col-sm-12",staticStyle:{"font-weight":"bold"}},[a("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[this._v("\n        1. 糧食明細\n      ")])]),this._v(" "),a("div",{staticClass:"col-md-4 col-sm-12"},[a("div",{staticClass:"alert alert-dark",attrs:{role:"alert"}},[this._v("\n        2. 填寫資料\n      ")])]),this._v(" "),a("div",{staticClass:"col-md-4 col-sm-12"},[a("div",{staticClass:"alert alert-dark",attrs:{role:"alert"}},[this._v("\n        3. 完成捐糧\n      ")])])])}]};var n=s("VU/8")(r,c,!1,function(t){s("QTVG")},"data-v-1fc2621d",null);a.default=n.exports}});
//# sourceMappingURL=7.9d1061b0a8f963c00cc1.js.map