webpackJsonp([0],{"18oL":function(t,e){},KPDB:function(t,e,n){t.exports=n.p+"static/img/@3x.aaf8f87.png"},Mrfe:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=n("VU/8")({name:"App"},a,!1,function(t){n("qi5d")},null,null).exports,r=n("/ocq"),o={name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}},mounted:function(){window.location.href="./home"}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),n("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),n("br"),t._v(" "),n("li",[n("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var v=n("VU/8")(o,c,!1,function(t){n("18oL")},"data-v-3a770ee0",null).exports,l=(n("y1s1"),n("OOjC")),_=n.n(l),u={name:"Home",data:function(){return{radio:window.devicePixelRatio,widthReal:window.innerWidth,fontSize:_()("html").css("font-size"),msg:"I am home page !"}},created:function(){document.write('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">')},mounted:function(){console.log(this.fontSize)}},d={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("div",{staticClass:"title"},[t._v("设备属性对比")]),t._v("\n  当前设备像素比为："),i("span",{staticClass:"f71"},[t._v(t._s(t.radio))]),t._v(" "),i("br"),t._v("\n  当前设备实际宽度："),i("span",{staticClass:"f71"},[t._v(t._s(t.widthReal)+"px")]),t._v(" "),i("br"),t._v("\n  当前设备宽度的实际物理像素点个数："+t._s(t.radio)+" * "+t._s(t.widthReal)+" = "),i("span",{staticClass:"f71"},[t._v(t._s(t.radio*t.widthReal))]),t._v(" "),i("br"),t._v(" "),i("hr"),t._v("\n  如下图片代码中的宽度："),i("span",{staticClass:"f71"},[t._v("10rem")]),t._v(" "),i("br"),t._v("\n  当前html的字号："),i("span",{staticClass:"f71"},[t._v(t._s(t.fontSize))]),t._v(" "),i("br"),t._v("\n  如下图片的实际宽度为：10rem * html的当前字号 = 10 * "+t._s(t.fontSize.replace("px",""))+" = "),i("span",{staticClass:"f71"},[t._v(t._s(10*t.fontSize.replace("px",""))+"px")]),t._v(" "),i("hr"),t._v("\n  1x、2x、3x倍图的尺寸是"),i("span",{staticClass:"f71"},[t._v("固定的")]),t._v("："),i("br"),t._v("\n  1x: "),i("span",{staticClass:"f71"},[t._v("375px")]),i("br"),t._v("\n  2x: "),i("span",{staticClass:"f71"},[t._v("750px")]),i("br"),t._v("\n  3x: "),i("span",{staticClass:"f71"},[t._v("1125px")]),i("br"),t._v(" "),i("hr"),t._v("\n  1x(1倍图)；实际像素：375 * 393\n  "),i("img",{attrs:{src:n("sBAI")}}),t._v(" "),i("br"),t._v(" "),i("hr"),t._v(" "),i("br"),t._v("\n  2x(2倍图)；实际像素：750 * 786\n  "),i("img",{attrs:{src:n("dto/")}}),t._v(" "),i("br"),t._v(" "),i("hr"),t._v(" "),i("br"),t._v("\n  3x(3倍图)；实际像素：1125 * 1179\n  "),i("img",{attrs:{src:n("KPDB")}}),t._v(" "),i("br"),t._v(" "),i("hr"),t._v(" "),i("br")])},staticRenderFns:[]};var h=n("VU/8")(u,d,!1,function(t){n("Mrfe")},"data-v-ded10c12",null).exports,m={name:"Viewport1",data:function(){return{radio:window.devicePixelRatio,widthReal:window.innerWidth,fontSize:_()("html").css("font-size"),msg:"I am home page !"}},created:function(){},mounted:function(){console.log(this.fontSize)}},f={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"viewport1"},[e("div",{staticClass:"title"},[this._v("\n    我是"),e("span",{staticClass:"red"},[this._v("不带有")]),this._v("meta标签的页面"),e("br"),this._v("\n\n    将网站内容全部展示。\n\n  ")])])}]};var p=n("VU/8")(m,f,!1,function(t){n("p9Kk")},"data-v-540a1d88",null).exports,w={name:"Viewport2",data:function(){return{radio:window.devicePixelRatio,widthReal:window.innerWidth,fontSize:_()("html").css("font-size"),msg:"I am home page !"}},created:function(){document.write('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">')},mounted:function(){console.log(this.fontSize)}},g={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"viewport2"},[e("div",{staticClass:"title"},[this._v("\n    我是"),e("span",{staticClass:"red"},[this._v("带有")]),this._v("meta标签的页面"),e("br"),this._v("\n\n    能展示多少就展示多少\n\n  ")])])}]};var b=n("VU/8")(w,g,!1,function(t){n("k+EQ")},"data-v-d53412e6",null).exports;i.a.use(r.a);var x=new r.a({mode:"history",base:"./",routes:[{path:"/",name:"HelloWorld",component:v},{path:"/home",name:"Home",component:h},{path:"/viewport1",name:"V1",component:p},{path:"/viewport2",name:"V2",component:b}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:x,components:{App:s},template:"<App/>"})},"dto/":function(t,e,n){t.exports=n.p+"static/img/@2x.4589db1.png"},"k+EQ":function(t,e){},p9Kk:function(t,e){},qi5d:function(t,e){},sBAI:function(t,e,n){t.exports=n.p+"static/img/@1x.def7efa.png"},y1s1:function(t,e){var n,i;n=document.documentElement,(i=function(){var t=document.documentElement.clientWidth||document.getBoundingClientRect().width;n.style.fontSize=t/10+"px",t=null})(),window.addEventListener("resize",function(){i()}),window.addEventListener("orientationchange",function(){i()})}},["NHnr"]);
//# sourceMappingURL=app.756db87420d44b0cbf14.js.map