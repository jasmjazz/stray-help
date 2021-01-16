webpackJsonp([9],{TRs1:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=s("mvHQ"),e=s.n(i),n={name:"CheckCart",data:function(){return{isLoading:!1,cart:[],money:0}},components:{Alert:s("elsE").a},methods:{getCart:function(){var t=this;t.money=0,t.cart=JSON.parse(localStorage.getItem("cart"))||[],t.cart.length>0&&t.cart.forEach(function(a){t.money+=a.total})},editNum:function(t,a){var s=parseInt(t.qty+a,10);this.updateCart(t,s)},updateCart:function(t,a){var s=this,i=-1;s.getCart(),s.cart.length>0&&s.cart.forEach(function(a,s){a.id===t.id&&(i=s)}),a>=10?(s.cart[i].qty=10,s.$bus.$emit("message: push","同款糧食不得超過10組！","danger")):s.cart[i].qty=a<=1?1:a;var n=parseInt(s.cart[i].price*s.cart[i].qty,10);s.cart[i].total=n,localStorage.setItem("cart",e()(s.cart)),s.getCart()},delCart:function(t){console.log(t);var a=this;a.cart.forEach(function(s,i){s.id===t&&a.cart.splice(i,1)}),localStorage.setItem("cart",e()(a.cart)),a.getCart()},addCart:function(){var t=this,a=this;a.isLoading=!0,a.cart=JSON.parse(localStorage.getItem("cart"))||[],a.cart.forEach(function(s){var i={product_id:s.id,qty:s.qty};a.$http.post("https://vue-course-api.hexschool.io/api/jasmjazz/cart",{data:i}).then(function(s){s.data.success&&(a.isLoading=!1,t.$router.push("/userinfo"))})})}},created:function(){this.getCart()},mounted:function(){var t=window.outerHeight/2;window.scrollTo({top:t,behavior:"smooth"})}},r={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[s("Alert"),t._v(" "),s("loading",{attrs:{active:t.isLoading,loader:"dots"},on:{"update:active":function(a){t.isLoading=a}}}),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"row mt-4"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"card border-1"},[s("div",{staticClass:"card-body"},[t.cart.length>0?s("table",{staticClass:"table mt-4",staticStyle:{"font-size":"17px"}},[t._m(1),t._v(" "),s("tbody",t._l(t.cart,function(a){return s("tr",{key:a.id},[s("td",{staticClass:"align-middle"},[s("a",{staticClass:"icon",on:{click:function(s){return s.preventDefault(),t.delCart(a.id)}}},[s("i",{staticClass:"fas fa-trash",staticStyle:{"font-size":"20px"}})])]),t._v(" "),0===a.category?s("td",{staticClass:"align-middle"},[t._m(2,!0)]):1===a.category?s("td",{staticClass:"align-middle"},[t._m(3,!0)]):s("td",{staticClass:"align-middle"},[t._m(4,!0)]),t._v(" "),s("td",{staticClass:"align-middle"},[t._v("\n                  "+t._s(a.title)+"\n                ")]),t._v(" "),s("td",{staticClass:"align-middle text-right"},[t._v("\n                  "+t._s(t._f("currency")(a.price))+"\n                ")]),t._v(" "),s("td"),t._v(" "),s("td",{staticClass:"align-middle"},[s("i",{staticClass:"far fa-minus-square",staticStyle:{"font-size":"20px","vertical-align":"text-bottom"},on:{click:function(s){return t.editNum(a,-1)}}}),t._v(" "),s("span",{staticStyle:{"font-size":"18px","margin-left":"20px","margin-right":"20px"}},[t._v("\n                    "+t._s(a.qty)+"\n                  ")]),t._v(" "),s("i",{staticClass:"far fa-plus-square",staticStyle:{"font-size":"20px","vertical-align":"text-bottom"},on:{click:function(s){return t.editNum(a,1)}}})]),t._v(" "),s("td",{staticClass:"align-middle text-right"},[t._v("\n                  "+t._s(t._f("currency")(a.total))+"\n                ")])])}),0),t._v(" "),s("tfoot",[0!==t.money?s("tr",{staticStyle:{"font-weight":"bold"}},[s("td",{staticClass:"text-right",attrs:{colspan:"6"}},[t._v("總計")]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(t.money)))])]):t._e()])]):s("h3",{staticClass:"mt-4 mb-4",staticStyle:{"text-align":"center"}},[t._v("\n            還沒有選取糧食哦，快去看看吧！\n          ")])])])])]),t._v(" "),s("div",{staticClass:"row mt-4"},[t.cart.length>0?s("div",{staticClass:"col-12",staticStyle:{"text-align":"right"}},[s("router-link",{attrs:{to:{name:"Category"}}},[s("button",{staticClass:"btn btn-warning",staticStyle:{"letter-spacing":"2px","margin-right":"10px","font-weight":"bold","font-size":"18px"}},[t._v("\n          再逛逛\n        ")])]),t._v(" "),s("button",{staticClass:"btn btn-dark",staticStyle:{"letter-spacing":"2px","font-weight":"bold","font-size":"17px"},on:{click:t.addCart}},[t._v("\n        確定捐糧\n      ")])],1):s("div",{staticClass:"col-12",staticStyle:{"text-align":"right"}},[s("router-link",{attrs:{to:{name:"Category"}}},[s("button",{staticClass:"btn btn-warning",staticStyle:{"letter-spacing":"2px","margin-right":"10px","font-weight":"bold","font-size":"18px"}},[t._v("\n          去逛逛\n        ")])])],1)])],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row mt-4",staticStyle:{"font-size":"16px"}},[a("div",{staticClass:"col-4 col-sm",staticStyle:{"font-weight":"bold"}},[a("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[this._v("\n        1. 糧食明細\n      ")])]),this._v(" "),a("div",{staticClass:"col-4 col-sm"},[a("div",{staticClass:"alert alert-dark",attrs:{role:"alert"}},[this._v("\n        2. 填寫資料\n      ")])]),this._v(" "),a("div",{staticClass:"col-4 col-sm"},[a("div",{staticClass:"alert alert-dark",attrs:{role:"alert"}},[this._v("\n        3. 完成捐糧\n      ")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",[s("th",{attrs:{width:"10%"}}),t._v(" "),s("th",{attrs:{width:"15%"}},[t._v("種類")]),t._v(" "),s("th",{attrs:{width:"20%"}},[t._v("品名")]),t._v(" "),s("th",{attrs:{width:"12%"}},[t._v("價格")]),t._v(" "),s("th",{attrs:{width:"7%"}}),t._v(" "),s("th",{attrs:{width:"22%"}},[t._v("數量")]),t._v(" "),s("th",{attrs:{width:"14%"}},[t._v("小計")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h5",[a("span",{staticClass:"badge badge-dark"},[this._v("主食")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h5",[a("span",{staticClass:"badge badge-warning"},[this._v("副食")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h5",[a("span",{staticClass:"badge badge-info"},[this._v("零食")])])}]},c=s("VU/8")(n,r,!1,null,null,null);a.default=c.exports}});
//# sourceMappingURL=9.b4c5a4fdcbcfc38c09a7.js.map