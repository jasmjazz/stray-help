webpackJsonp([12],{ExzF:function(e,n){},NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t("Dd8w"),a=t.n(i),r=t("fZjL"),l=t.n(r),o=t("7+uW"),u=t("mtWM"),c=t.n(u),d=t("DWlv"),s=t.n(d),h=t("ZZvs"),f=t.n(h),p=(t("SYh3"),t("K3J8"),t("7t+N")),_=t.n(p),m=t("sUu7"),b=t("wGWZ"),g=t("SjS3"),v=t.n(g),x=t("TXmL"),w={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var j=t("VU/8")({name:"App"},w,!1,function(e){t("ExzF")},null,null).exports,O=t("/ocq"),y=O.a.prototype.push;O.a.prototype.push=function(e){return y.call(this,e).catch(function(e){return e})},o.a.use(O.a);var q=new O.a({routes:[{path:"*",redirect:"/login"},{path:"",component:function(){return t.e(1).then(t.bind(null,"i0mD"))},children:[{path:"/",name:"Home",component:function(){return Promise.all([t.e(0),t.e(2)]).then(t.bind(null,"i+hD"))}},{path:"category",name:"Category",component:function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,"rqy2"))}},{path:"detail/:id",name:"Detail",component:function(){return Promise.all([t.e(0),t.e(3)]).then(t.bind(null,"ydoF"))}},{path:"checkcart",name:"CheckCart",component:function(){return Promise.all([t.e(0),t.e(9)]).then(t.bind(null,"TRs1"))}},{path:"userinfo",name:"UserInfo",component:function(){return t.e(7).then(t.bind(null,"v/cg"))}},{path:"ordercheck/:orderId",name:"OrderCheck",component:function(){return t.e(8).then(t.bind(null,"RKbS"))}}]},{path:"/login",name:"Login",component:function(){return t.e(6).then(t.bind(null,"lmfZ"))}},{path:"/admin",name:"Dashboard",component:function(){return Promise.all([t.e(0),t.e(10)]).then(t.bind(null,"WT/Y"))},children:[{path:"products",name:"Products",component:function(){return t.e(5).then(t.bind(null,"19h9"))},meta:{requiresAuth:!0}}]}]});o.a.prototype.$bus=new o.a;o.a.config.productionTip=!1,o.a.use(s.a,c.a),c.a.defaults.withCredentials=!0,o.a.use(x.a),window.$=_.a,o.a.component("Loading",f.a),o.a.component("ValidationObserver",m.a),o.a.component("ValidationProvider",m.b),Object(m.e)("zh_TW",v.a),o.a.filter("currency",function(e){return"$"+Number(e).toFixed(0).replace(/./g,function(e,n,t){return n&&"."!==e&&(t.length-n)%3==0?(", "+e).replace(/\s/g,""):e})}),l()(b).forEach(function(e){Object(m.d)(e,b[e])}),Object(m.c)({classes:{valid:"valid",invalid:"invalid"}}),Object(m.d)("required",a()({},b.required,{message:"此欄位不可為空"})),Object(m.d)("email",a()({},b.email,{message:"Email 格式不正確"})),Object(m.d)("phone",{validate:function(e){return/^09[0-9]{8}$/.test(e)},message:"請輸入正確號碼"});var P=new x.a({locale:"zhTW"});new o.a({i18n:P,el:"#app",components:{App:j},template:"<App/>",router:q}),q.beforeEach(function(e,n,t){if(e.meta.requiresAuth){c.a.post("https://vue-course-api.hexschool.io/api/user/check").then(function(e){e.data.success?t():t({path:"/login"})})}else t()})},SYh3:function(e,n){},SjS3:function(e,n){e.exports={code:"zh_TW",messages:{alpha:"{_field_} 須以英文組成",alpha_dash:"{_field_} 須以英數、斜線及底線組成",alpha_num:"{_field_} 須以英數組成",alpha_spaces:"{_field_} 須以英文及空格組成",between:"{_field_} 須介於 {min} 至 {max}之間",confirmed:" {_field_} 不一致",digits:"{_field_} 須為 {length} 位數字",dimensions:"{_field_} 圖片尺寸不正確。須為 {width} x {height} 像素",email:"{_field_} 須為有效的電子信箱",excluded:"{_field_} 的選項無效",ext:"{_field_} 須為有效的檔案",image:"{_field_} 須為圖片",oneOf:"{_field_} 的選項無效",integer:"{_field_} 須為整數",length:"{_field_} 的長度須為 {length}",max:"{_field_} 不能大於 {length} 個字元",max_value:"{_field_} 不得大於 {max}",mimes:"{_field_} 須為有效的檔案類型",min:"{_field_} 不能小於 {length} 個字元",min_value:"{_field_} 不得小於 {min}",numeric:"{_field_} 須為數字",regex:"{_field_} 的格式錯誤",required:"{_field_} 為必填",required_if:"{_field_} 為必填",size:"{_field_} 的檔案須小於 {size}KB",double:"{_field_}字段必須為有效的小數"}}}},["NHnr"]);
//# sourceMappingURL=app.3a9e801d84c8a3880cfe.js.map