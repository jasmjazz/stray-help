webpackJsonp([0],{Fbiu:function(t,a){},elsE:function(t,a,s){"use strict";var e={data:function(){return{messages:[]}},methods:{updateMessage:function(t,a){var s=Math.floor(new Date/1e3);this.messages.push({message:t,status:a,timestamp:s}),this.removeMessageWithTiming(s)},removeMessageWithTiming:function(t){var a=this;setTimeout(function(){a.messages.forEach(function(s,e){s.timestamp===t&&a.messages.splice(e,1)})},1400)}},created:function(){var t=this;t.$bus.$on("message: push",function(a){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";t.updateMessage(a,s)})}},i={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"message-alert"},t._l(t.messages,function(a,e){return s("div",{key:e,staticClass:"alert",class:"alert-"+a.status},[s("span"),t._v(t._s(a.message)+"\n  ")])}),0)},staticRenderFns:[]};var n=s("VU/8")(e,i,!1,function(t){s("Fbiu")},null,null);a.a=n.exports},muQR:function(t,a,s){"use strict";var e=s("mvHQ"),i=s.n(e),n={data:function(){return{cart:[],money:0}},methods:{getCart:function(){var t=this;t.money=0,t.cart=JSON.parse(localStorage.getItem("cart"))||[],t.cart.length>0&&t.cart.forEach(function(a){t.money+=a.total})},checkcart:function(){this.getCart(),$("#cartModal").modal("show")},delCart:function(t){var a=this;a.cart.forEach(function(s,e){s.id===t&&a.cart.splice(e,1)}),localStorage.setItem("cart",i()(a.cart)),a.$bus.$emit("message: push","已刪除糧食"),a.getCart()},cartList:function(){var t=this;setInterval(function(){t.getCart()},1e3)}},created:function(){this.getCart()},mounted:function(){this.cartList()}},l={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"cart"},[s("div",{staticClass:"icon",on:{click:t.checkcart}},[s("div",{staticClass:"num"},[s("span",[t._v(t._s(t.cart.length))])]),t._v(" "),s("i",{staticClass:"fas fa-shopping-bag"})])]),t._v(" "),0===t.cart.length?s("div",{staticClass:"modal fade",attrs:{id:"cartModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"modal-footer"},[s("router-link",{staticClass:"nav-link",attrs:{to:{name:"Category"}}},[s("button",{staticClass:"btn btn-dark btn-block",staticStyle:{"letter-spacing":"1px"},attrs:{type:"button","data-dismiss":"modal"}},[t._v("\n              去逛逛\n            ")])])],1)])])]):s("div",{staticClass:"modal fade",attrs:{id:"cartModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[t._m(2),t._v(" "),s("div",{staticClass:"modal-body"},[s("table",{staticClass:"table cart-table",staticStyle:{width:"100%"}},[t._m(3),t._v(" "),s("tbody",t._l(t.cart,function(a){return s("tr",{key:a.id},[s("td",{staticClass:"align-middle"},[s("a",{staticClass:"icon",on:{click:function(s){return s.preventDefault(),t.delCart(a.id)}}},[s("i",{staticClass:"fas fa-trash",staticStyle:{"font-size":"20px"}})])]),t._v(" "),0===a.category?s("td",{staticClass:"align-middle s-no"},[t._m(4,!0)]):1===a.category?s("td",{staticClass:"align-middle s-no"},[t._m(5,!0)]):s("td",{staticClass:"align-middle s-no"},[t._m(6,!0)]),t._v(" "),s("td",{staticClass:"align-middle"},[t._v("\n                  "+t._s(a.title)+"\n                ")]),t._v(" "),s("td",{staticClass:"align-middle text-right"},[t._v("\n                  "+t._s(t._f("currency")(a.price))+"\n                ")]),t._v(" "),s("td",{staticClass:"s-no"}),t._v(" "),s("td",{staticClass:"align-middle",staticStyle:{"padding-left":"23px"}},[t._v("\n                  "+t._s(a.qty)+"\n                ")]),t._v(" "),s("td",{staticClass:"align-middle text-right s-no"},[t._v("\n                  "+t._s(t._f("currency")(a.total))+"\n                ")])])}),0),t._v(" "),s("tfoot",[s("tr",{staticStyle:{"font-weight":"bold"}},[s("td",{staticClass:"text-right s-no",attrs:{colspan:"6"}},[t._v("總計")]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(t.money)))])])])])]),t._v(" "),s("div",{staticClass:"modal-footer"},[s("router-link",{staticClass:"nav-link",attrs:{to:{name:"CheckCart"}}},[s("button",{staticClass:"btn btn-dark",staticStyle:{"letter-spacing":"2px"},attrs:{type:"button","data-dismiss":"modal"}},[t._v("\n              捐糧去\n            ")])])],1)])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"modal-header"},[a("h4",{staticClass:"modal-title",staticStyle:{"margin-left":"42%","font-weight":"bold","letter-spacing":"1px"},attrs:{id:"exampleModalLabel"}},[this._v("\n            糧食車\n          ")]),this._v(" "),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"modal-body",staticStyle:{"text-align":"center"}},[a("h4",[this._v("還沒有選取糧食哦！")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"modal-header"},[a("h4",{staticClass:"modal-title",staticStyle:{"margin-left":"45%","font-weight":"bold","letter-spacing":"1px"},attrs:{id:"exampleModalLabel"}},[this._v("\n            糧食車\n          ")]),this._v(" "),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",[s("th",{attrs:{width:"10%"}}),t._v(" "),s("th",{staticClass:"s-no",attrs:{width:"15%"}},[t._v("種類")]),t._v(" "),s("th",{attrs:{width:"20%"}},[t._v("品名")]),t._v(" "),s("th",{attrs:{width:"12%"}},[t._v("價格")]),t._v(" "),s("th",{staticClass:"s-no",attrs:{width:"9%"}}),t._v(" "),s("th",{attrs:{width:"20%"}},[t._v("數量")]),t._v(" "),s("th",{staticClass:"s-no",attrs:{width:"14%"}},[t._v("小計")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h5",[a("span",{staticClass:"badge badge-dark"},[this._v("主食")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h5",[a("span",{staticClass:"badge badge-warning"},[this._v("副食")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h5",[a("span",{staticClass:"badge badge-info"},[this._v("零食")])])}]},r=s("VU/8")(n,l,!1,null,null,null);a.a=r.exports},mvHQ:function(t,a,s){t.exports={default:s("qkKv"),__esModule:!0}},qkKv:function(t,a,s){var e=s("FeBl"),i=e.JSON||(e.JSON={stringify:JSON.stringify});t.exports=function(t){return i.stringify.apply(i,arguments)}}});
//# sourceMappingURL=0.b1b0c1075720968b707e.js.map