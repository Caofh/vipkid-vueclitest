webpackJsonp([2],{"+g8z":function(e,t){},"7x8j":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("IvJb"),a=n("N7LD"),r=n.n(a),o={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"activity-pc"},[this._v("\n  pc\n")])},staticRenderFns:[]};var s=n("C7Lr")({name:"App",data:function(){return{}},mounted:function(){}},o,!1,function(e){n("Ry9K")},"data-v-065e5c44",null).exports,c=n("rVsN"),l=n.n(c),u=n("lC5x"),d=n.n(u),p=n("J0Oq"),m=n.n(p),g=(n("y1s1"),n("tgrj")),f=n("qXJz"),v={name:"App",data:function(){return{loadingMark:!0,confirmLoading:!1,dialogMark:!1,name:"",phone:"",imgUrl:"",imgOriginMark:!1,imgOriginUrl:"",cropMark:!1,option:{img:"",size:1,full:!1,outputType:"png",canMove:!0,fixed:!0,fixedBox:!1,original:!1,canMoveBox:!0,autoCrop:!0,autoCropWidth:200,autoCropHeight:200,centerBox:!1,high:!0}}},mounted:function(){var e=this;return m()(d.a.mark(function t(){var n,i;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(n=localStorage.getItem("xuanku_challenge_phone"))){t.next=17;break}return e.phone=n,t.prev=3,t.next=6,Object(f.b)("phone="+n);case 6:i=t.sent,e.imgOriginMark=!0,e.imgOriginUrl=i.data[0].img_url||"",e.lazyImgLoading(e.imgOriginUrl,function(){e.loadingMark=!1}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(3),alert(t.t0.message||"网络错误，请刷新页面");case 15:t.next=18;break;case 17:e.$nextTick(function(){e.loadingMark=!1});case 18:"iPhone"==e.getDeviceInfo()?r()("#upFile").removeAttr("capture"):r()("#upFile").attr("capture","camera");case 20:case"end":return t.stop()}},t,e,[[3,12]])}))()},components:{VueCropper:g.VueCropper},methods:{getDeviceInfo:function(){var e="",t=navigator.appVersion,n=t.indexOf("("),i=t.indexOf(")"),a=t.substring(n+1,i).split(";");console.log(a);var r=a[0],o=a[2],s=/Android/.test(o);return"iPhone"==r?e=r:"Linux"==r?e=s?a[4].substring(0,9):o.substring(0,9):"iPad"==r&&(e=a[0]),e},lazyImgLoading:function(e,t){var n=new Image;n.src=e,n.onload=function(){t&&t()}},dialogConfirm:function(){var e=this;return m()(d.a.mark(function t(){var n;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.name&&e.phone){t.next=2;break}return t.abrupt("return");case 2:return n={name:e.name||"",phone:e.phone||"",imgUrl:e.imgUrl||""},t.prev=3,t.next=6,Object(f.a)(n);case 6:t.sent,e.loadingMark=!0,e.cropMark=!1,e.imgOriginMark=!0,e.imgOriginUrl=e.imgUrl,e.lazyImgLoading(e.imgUrl,function(){e.loadingMark=!1}),e.dialogMark=!1,localStorage.setItem("xuanku_challenge_phone",e.phone),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(3),alert(t.t0.message);case 19:case"end":return t.stop()}},t,e,[[3,16]])}))()},boxMove:function(e){console.log(e)},cropButton:function(){var e=this;this.getCropBase64().then(function(t){e.confirmLoading=!0;var n={image:t,path:"xuanku/challenge"};Object(f.e)(n).then(function(t){e.imgUrl=t.target_path||"",e.phone?e.submitUserInfo():e.dialogMark=!0,e.confirmLoading=!1}).catch(function(t){alert(t.message),e.confirmLoading=!1})})},submitUserInfo:function(){var e=this,t={phone:this.phone,imgUrl:this.imgUrl||""};Object(f.d)(t).then(function(t){e.loadingMark=!0,e.cropMark=!1,e.imgOriginMark=!0,e.imgOriginUrl=e.imgUrl,e.lazyImgLoading(e.imgUrl,function(){e.loadingMark=!1})}).catch(function(e){alert(e.message)})},changeFile:function(e){var t=this,n=e.target.files[0];this.imgToBase64(n).then(function(e){var n=e.target.result;t.option.img=n,t.cropMark=!0,t.$refs.imgUpload.value=""})},getCropBase64:function(){var e=this;return new l.a(function(t,n){e.$refs.cropper.getCropData(function(e){t(e)})})},imgToBase64:function(e){return new l.a(function(t,n){var i=new FileReader;i.readAsDataURL(e),i.onload=function(e){t(e)}})}}},h={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"activity-mobile"},[n("div",{attrs:{id:"crop"}},[e._m(0),e._v(" "),n("div",{staticClass:"cut"},[n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loadingMark,expression:"loadingMark"}],staticClass:"cut-son"},[!e.cropMark&&e.imgOriginMark?n("div",{staticClass:"abc-img"},[n("img",{attrs:{src:e.imgOriginUrl}})]):e.cropMark?e._e():n("div",{staticClass:"upload-icon"},[n("input",{ref:"imgUpload",attrs:{type:"file"},on:{change:function(t){e.changeFile(t)}}})]),e._v(" "),e.cropMark?n("vue-cropper",{ref:"cropper",attrs:{img:e.option.img,fixed:e.option.fixed,"output-size":e.option.size,"output-type":e.option.outputType,info:!0,full:e.option.full,"can-move":e.option.canMove,"can-move-box":e.option.canMoveBox,"fixed-box":e.option.fixedBox,original:e.option.original,"auto-crop":e.option.autoCrop,"auto-crop-width":e.option.autoCropWidth,"auto-crop-height":e.option.autoCropHeight,"center-box":e.option.centerBox,high:e.option.high},on:{cropMoving:e.boxMove}}):e._e()],1)])]),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("div",{staticClass:"btn-group abc-flex-x-center"},[n("div",{staticClass:"up-img"},[e._v("\n      上传图片\n      "),n("input",{ref:"imgUpload",attrs:{id:"upFile",type:"file",accept:"image/*",capture:"camera"},on:{change:function(t){e.changeFile(t)}}})]),e._v(" "),e.cropMark?n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.confirmLoading,expression:"confirmLoading"}],class:["confirm"],on:{click:e.cropButton}},[e._v("\n      确定\n    ")]):e._e()]),e._v(" "),e.dialogMark?n("div",{staticClass:"dialog"},[n("div",{staticClass:"base-body abc-flex-y-center"},[n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",placeholder:"姓名"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),e._v(" "),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{type:"text",placeholder:"电话号码"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}})]),e._v(" "),e._m(1),e._v(" "),n("div",{class:["abc-btn",{ok:e.name&&e.phone}],on:{click:e.dialogConfirm}},[e._v("确定")])])]):e._e()])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"crop-title"},[t("div",{staticClass:"logo abc-img"},[t("img",{attrs:{src:n("Kpe+")}})]),this._v(" "),t("div",{staticClass:"crop-title-text"},[this._v("-雪拼大挑战-")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tip"},[this._v("***电话与最终奖品发放有关"),t("br"),this._v("请填写真实号码")])}]};var b=n("C7Lr")(v,h,!1,function(e){n("Ukd8")},"data-v-1fd83f18",null).exports,x={name:"App",data:function(){return{currentView:null,resizeTimer:null}},created:function(){this.checkView(),this.setCurrentView()},components:{},methods:{checkView:function(){var e=this;this.resizeTimer=null,window.addEventListener("resize",function(){e.resizeTimer&&clearTimeout(e.resizeTimer),e.resizeTimer=setTimeout(function(){e.setCurrentView()},100)})},setCurrentView:function(){var e=document.documentElement.clientWidth;this.currentView=e<=750?b:s}},mounted:function(){}},k={render:function(){var e=this.$createElement;return(this._self._c||e)(this.currentView,{tag:"component"})},staticRenderFns:[]};var y=n("C7Lr")(x,k,!1,function(e){n("D2q1")},"data-v-b181fb12",null).exports,C=(n("+g8z"),n("ZLEe")),_=n.n(C),w={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"loading-fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"loading-mask",class:[e.customClass,{"is-fullscreen":e.fullscreen}],style:{backgroundColor:e.background||""}},[n("div",{staticClass:"loading-wrapper"},[n("div",{staticClass:"loading-svg"},[n("svg",{staticStyle:{"enable-background":"new 0 0 50 50"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32","xml:space":"preserve"}},[n("circle",{attrs:{cx:"16",cy:"3",r:"2.55739"}},[n("animate",{attrs:{attributeName:"r",values:"0;3;0;0",dur:"1s",repeatCount:"indefinite",begin:"0",keySplines:"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8",calcMode:"spline"}})]),e._v(" "),n("circle",{attrs:{transform:"rotate(45 16 16)",cx:"16",cy:"3",r:"2.6239"}},[n("animate",{attrs:{attributeName:"r",values:"0;3;0;0",dur:"1s",repeatCount:"indefinite",begin:"0.125s",keySplines:"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8",calcMode:"spline"}})]),e._v(" "),n("circle",{attrs:{transform:"rotate(90 16 16)",cx:"16",cy:"3",r:"1.55212"}},[n("animate",{attrs:{attributeName:"r",values:"0;3;0;0",dur:"1s",repeatCount:"indefinite",begin:"0.25s",keySplines:"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8",calcMode:"spline"}})]),e._v(" "),n("circle",{attrs:{transform:"rotate(135 16 16)",cx:"16",cy:"3",r:"0"}},[n("animate",{attrs:{attributeName:"r",values:"0;3;0;0",dur:"1s",repeatCount:"indefinite",begin:"0.375s",keySplines:"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8",calcMode:"spline"}})]),e._v(" "),n("circle",{attrs:{transform:"rotate(180 16 16)",cx:"16",cy:"3",r:"0"}},[n("animate",{attrs:{attributeName:"r",values:"0;3;0;0",dur:"1s",repeatCount:"indefinite",begin:"0.5s",keySplines:"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8",calcMode:"spline"}})]),e._v(" "),n("circle",{attrs:{transform:"rotate(225 16 16)",cx:"16",cy:"3",r:"0"}},[n("animate",{attrs:{attributeName:"r",values:"0;3;0;0",dur:"1s",repeatCount:"indefinite",begin:"0.625s",keySplines:"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8",calcMode:"spline"}})]),e._v(" "),n("circle",{attrs:{transform:"rotate(270 16 16)",cx:"16",cy:"3",r:"0.161172"}},[n("animate",{attrs:{attributeName:"r",values:"0;3;0;0",dur:"1s",repeatCount:"indefinite",begin:"0.75s",keySplines:"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8",calcMode:"spline"}})]),e._v(" "),n("circle",{attrs:{transform:"rotate(315 16 16)",cx:"16",cy:"3",r:"1.00457"}},[n("animate",{attrs:{attributeName:"r",values:"0;3;0;0",dur:"1s",repeatCount:"indefinite",begin:"0.875s",keySplines:"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8",calcMode:"spline"}})]),e._v(" "),n("circle",{attrs:{transform:"rotate(180 16 16)",cx:"16",cy:"3",r:"0"}},[n("animate",{attrs:{attributeName:"r",values:"0;3;0;0",dur:"1s",repeatCount:"indefinite",begin:"0.5s",keySplines:"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8",calcMode:"spline"}})])])]),e._v(" "),e.text?n("p",{staticClass:"loading-text"},[e._v(e._s(e.text))]):e._e()])])])},staticRenderFns:[]};var M=n("C7Lr")({name:"loading",data:function(){return{visible:!1,background:null,fullscreen:!0,text:"Loading...",customClass:""}},methods:{setText:function(e){this.text=e}}},w,!1,function(e){n("Dvi4")},"data-v-472e8668",null).exports,L=i.default.extend(M);function U(e,t){if(!e||!t)return!1;if(-1!==t.indexOf(" "))throw new Error("className should not contain space.");return e.classList?e.classList.contains(t):(" "+e.className+" ").indexOf(" "+t+" ")>-1}function O(e,t){if(e){for(var n=e.className,i=(t||"").split(" "),a=0,r=i.length;a<r;a++){var o=i[a];o&&(e.classList?e.classList.add(o):U(e,o)||(n+=" "+o))}e.classList||(e.className=n)}}function N(e,t){if(e&&t){for(var n=t.split(" "),i=" "+e.className+" ",a=0,r=n.length;a<r;a++){var o=n[a];o&&(e.classList?e.classList.remove(o):U(e,o)&&(i=i.replace(" "+o+" "," ")))}e.classList||(e.className=trim(i))}}function z(e,t){if(!e||!t)return null;"float"===(t=t.replace(/([\:\-\_]+(.))/g,function(e,t,n,i){return i?n.toUpperCase():n}).replace(/^moz([A-Z])/,"Moz$1"))&&(t="cssFloat");try{var n=document.defaultView.getComputedStyle(e,"");return e.style[t]||n?n[t]:null}catch(n){return e.style[t]}}var S={install:function(e){var t=function(t,i){if(i.value)e.nextTick(function(){i.modifiers.fullscreen?(t.originalPosition=z(document.body,"position"),t.originalOverflow=z(document.body,"overflow"),O(t.mask,"is-fullscreen"),n(document.body,t,i)):(N(t.mask,"is-fullscreen"),i.modifiers.body?(t.originalPosition=z(document.body,"position").left.forEach(function(e){var n="top"===e?"scrollTop":"scrollLeft";t.maskStyle[e]=t.getBoundingClientRect()[e]+document.body[n]+document.documentElement[n]-parseInt(z(document.body,"margin-"+e),10)+"px"}),["height","width"].forEach(function(e){t.maskStyle[e]=t.getBoundingClientRect()[e]+"px"}),n(document.body,t,i)):(t.originalPosition=z(t,"position"),n(t,t,i)))});else{t.domVisible=!1;var a=i.modifiers.fullscreen||i.modifiers.body?document.body:t;N(a,"loading-parent--relative"),N(a,"loading-parent--hidden"),t.instance.hiding=!1,t.instance.visible=!1,t.instance.hiding=!0}},n=function(t,n,i){n.domVisible||"none"===z(n,"display")||"hidden"===z(n,"visibility")||(_()(n.maskStyle).forEach(function(e){n.mask.style[e]=n.maskStyle[e]}),"absolute"!==n.originalPosition&&"fixed"!==n.originalPosition&&O(t,"loading-parent--relative"),i.modifiers.fullscreen&&i.modifiers.lock&&O(t,"loading-parent--hidden"),n.domVisible=!0,t.appendChild(n.mask),e.nextTick(function(){n.instance.visible=!0}),n.domInserted=!0)};e.directive("loading",{bind:function(e,n,i){var a=e.getAttribute("loading-text"),r=e.getAttribute("loading-spinner"),o=e.getAttribute("loading-background"),s=e.getAttribute("loading-custom-class"),c=i.context,l=new L({el:document.createElement("div"),data:{text:c&&c[a]||a,spinner:c&&c[r]||r,background:c&&c[o]||o,customClass:c&&c[s]||s,fullscreen:!!n.modifiers.fullscreen}});e.instance=l,e.mask=l.$el,e.maskStyle={},n.value&&t(e,n)},update:function(e,n){e.instance.setText(e.getAttribute("loading-text")),n.oldValue!==n.value&&t(e,n)},unbind:function(e,n){e.domInserted&&(e.mask&&e.mask.parentNode&&e.mask.parentNode.removeChild(e.mask),t(e,{value:!1,modifiers:n.modifiers}))}})}},E=S;i.default.use(E),i.default.config.productionTip=!1,new i.default({el:"#app",components:{App:y},template:"<App/>"})},D2q1:function(e,t){},Dvi4:function(e,t){},"Kpe+":function(e,t,n){e.exports=n.p+"static/img/logo.60d0806.png"},L8d8:function(e,t,n){"use strict";var i=n("rVsN"),a=n.n(i),r=n("aozt"),o=n.n(r);n("9k1S");t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"node",n={},i={baseURL:e,timeout:1e4};i.headers="node"===t?{"content-type":"application/json;charset=UTF-8"}:{"content-type":"application/x-www-form-urlencoded"};return(n=o.a.create(i)).interceptors.request.use(function(e){return e},function(e){return a.a.reject(e)}),n.interceptors.response.use(function(e){return e.data},function(e){var t=e;return a.a.reject(t)}),n},n.d(t,"b",function(){return s});var s=function(e){var t=new FormData;for(var n in e)t.append(n,e[n]);return t}},Ry9K:function(e,t){},Ukd8:function(e,t){},qXJz:function(e,t,n){"use strict";t.c=function(){return r.get("/xuanku/searchUser")},t.e=function(e){return a.post("/api/common/base64_change",e)},t.d=function(e){return r.post("/xuanku/updateUser",e)},t.a=function(e){return r.post("/xuanku/addUser",e)},t.b=function(e){return e?r.get("/xuanku/getChallengeList?"+e):r.get("/xuanku/getChallengeList")};var i=n("L8d8"),a=(Object(i.a)("https://tpdoc.cn"),Object(i.a)("https://tpdoc.cn","php")),r=Object(i.a)("http://tpdoc.cn:3001");Object(i.a)("http://apicloud.mob.com")},y1s1:function(e,t){var n,i;n=document.documentElement,(i=function(){var e=document.documentElement.clientWidth||document.getBoundingClientRect().width;n.style.fontSize=e/10+"px",e=null})(),window.addEventListener("resize",function(){i()}),window.addEventListener("orientationchange",function(){i()})}},["7x8j"]);
//# sourceMappingURL=xuankuActivity.db2eced03870fb0abac9.js.map