webpackJsonp([1],{"+rkr":function(e,t,n){"use strict";var a=n("mtWM"),r=n.n(a),s={name:"UserBalance",data:function(){return{username:"",balance:0}},created:function(){this.username=this.$route.params.username;let e=this;r.a.get("http://localhost:8000/user/balance/"+this.username).then(t=>{e.balance=t.data.balance}).catch(e=>{alert("ERROR Servidor")})}},u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"UserBalance"}},[n("h2",[e._v(e._s(e.username))]),e._v(" "),n("h2",[e._v("Tu saldo es: "),n("span",[e._v("  "+e._s(e.balance)+" COP ")])])])},staticRenderFns:[]};var i=n("VU/8")(s,u,!1,function(e){n("yaH1")},null,null);t.a=i.exports},"1O/e":function(e,t){},M93x:function(e,t,n){"use strict";var a={name:"App",components:{},data:function(){return{is_auth:localStorage.getItem("isAuth")||!1}},methods:{init:function(){if("user"!=this.$route.name){let e=localStorage.getItem("current_username");this.$router.push({name:"user",params:{username:e}})}},getBalance:function(){if("user_balance"!=this.$route.name){let e=localStorage.getItem("current_username");this.$router.push({name:"user_balance",params:{username:e}})}}},beforeCreate:function(){localStorage.setItem("current_username","camilo24"),localStorage.setItem("isAuth",!0),this.$router.push({name:"user",params:{username:"camilo24"}})}},r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"header"},[n("h1",[e._v("Banco UN")]),e._v(" "),n("nav",[e.is_auth?n("button",{on:{click:e.init}},[e._v(" Inicio ")]):e._e(),e._v(" "),e.is_auth?n("button",{on:{click:e.getBalance}},[e._v(" Saldo ")]):e._e(),e._v(" "),e.is_auth?n("button",[e._v(" Transacción ")]):e._e(),e._v(" "),e.is_auth?n("button",[e._v("Cerrar Sesión")]):e._e()])]),e._v(" "),n("div",{staticClass:"main-component"},[n("router-view")],1),e._v(" "),e._m(0)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"footer"},[t("h2",[this._v("Misión TIC 2022")])])}]};var s=n("VU/8")(a,r,!1,function(e){n("1O/e")},null,null);t.a=s.exports},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),r=n("M93x"),s=n("/ocq"),u=n("cHtD");a.a.use(s.a),a.a.config.productionTip=!1,new a.a({router:u.a,el:"#app",components:{App:r.a},template:"<App/>"})},Wewo:function(e,t){},cHtD:function(e,t,n){"use strict";(function(e){var a=n("/ocq"),r=n("jyJz"),s=n("+rkr"),u=n("M93x");const i=new a.a({mode:"history",base:e,routes:[{path:"/",name:"root",component:u.a},{path:"/user/:username",name:"user",component:r.a},{path:"/user/balance/:username",name:"user_balance",component:s.a}]});t.a=i}).call(t,"/")},jyJz:function(e,t,n){"use strict";var a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"User"}},[t("h2",[this._v("Hola  "),t("span",[this._v(" "+this._s(this.username)+", ")]),this._v("  ¡Bienvenido!")])])},staticRenderFns:[]};var r=n("VU/8")({name:"User",data:function(){return{username:"none"}},created:function(){this.username=this.$route.params.username}},a,!1,function(e){n("Wewo")},null,null);t.a=r.exports},yaH1:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.2d79fc30d3ecabbc1a6f.js.map