webpackJsonp([6],{foz6:function(t,s){},lmfZ:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a={name:"Login",data:function(){return{user:{username:"",password:""}}},methods:{signin:function(){var t=this;this.$http.post("https://vue-course-api.hexschool.io/admin/signin",t.user).then(function(s){if(s.data.success){var e=s.data.token,a=s.data.expired;document.cookie="hexToken="+e+"; expires="+new Date(a)+";",t.$router.push("/admin/products")}})}}},r={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"box box6"},[e("div",{staticClass:"content"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("form",{staticClass:"form-signin",on:{submit:function(s){return s.preventDefault(),t.signin(s)}}},[t._m(0),t._v(" "),e("label",{staticClass:"sr-only",attrs:{for:"inputEmail"}},[t._v("Email address")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.username,expression:"user.username"}],staticClass:"form-control",attrs:{type:"email",id:"inputEmail",placeholder:"Email address",required:"",autofocus:""},domProps:{value:t.user.username},on:{input:function(s){s.target.composing||t.$set(t.user,"username",s.target.value)}}}),t._v(" "),e("label",{staticClass:"sr-only",attrs:{for:"inputPassword"}},[t._v("Password")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"Password",required:""},domProps:{value:t.user.password},on:{input:function(s){s.target.composing||t.$set(t.user,"password",s.target.value)}}}),t._v(" "),e("button",{staticClass:"btn btn-lg btn-block mt-5",attrs:{type:"submit"}},[t._v("Sign In")]),t._v(" "),e("p",{staticClass:"mt-2"},[e("router-link",{staticClass:"back-home",attrs:{to:"/"}},[e("i",{staticClass:"fas fa-arrow-circle-left",staticStyle:{"margin-right":"5px"}}),t._v("Home\n            ")])],1),t._v(" "),e("p",{staticClass:"mt-5 mb-3 text-muted"},[t._v("© 2021 Stray Help")])])])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{staticClass:"mb-4"},[s("i",{staticClass:"fas fa-paw",staticStyle:{"margin-right":"5px"}}),this._v("\n            Admin Login\n          ")])}]};var i=e("VU/8")(a,r,!1,function(t){e("foz6")},"data-v-2668c7c0",null);s.default=i.exports}});
//# sourceMappingURL=6.8bf588ef90dbea394c70.js.map