webpackJsonp([0],{0:function(t,e,n){n("NHnr"),t.exports=n("cCWZ")},"6b1G":function(t,e){},AIkV:function(t,e){},F6VQ:function(t,e){},FhQ1:function(t,e){},HRsY:function(t,e){},Iad2:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("/5sW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",[e("router-view")],1)],1)},staticRenderFns:[]};var a=n("VU/8")({name:"App"},i,!1,function(t){n("n7fD")},null,null).exports,r=n("/ocq"),c=(n("v2ns"),n("7QTg")),o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"page5"},[n("h3",{staticClass:"logo"},[t._v("酷狗音乐"),n("img",{attrs:{src:t.logoSrc}})]),t._v(" "),n("p",[t._v("\n\t\t\t适用iOS 5.0及以上系统版本\n    ")]),t._v(" "),n("div",{staticClass:"button-set"},t._l(t.buttonSet,function(e){return n("img",{class:e.class,attrs:{src:e.src},on:{click:function(n){t._event(e.events)}}})})),t._v(" "),n("p",{staticClass:"notice"},[t._v("\n      我们致力于推动网络正版音乐的发展\n    ")]),t._v(" "),n("p",{staticClass:"notice"},[t._v("\n      相关版权合作请联系copyrights@kugou.com\n    ")]),t._v(" "),n("p",{staticClass:"links"},[n("router-link",{attrs:{to:"/home"}},[t._v("在线听歌")]),t._v(" "),n("span",{staticClass:"line"},[t._v("|")]),t._v(" "),n("router-link",{attrs:{to:"/server"}},[t._v("用户服务协议")]),t._v(" "),n("span",{staticClass:"line"},[t._v("|")]),t._v(" "),n("router-link",{attrs:{to:"/uninstall"}},[t._v("卸载说明")])],1),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"footer"},[e("p",[this._v("\n        粤ICP备09017694号-2\n      ")]),this._v(" "),e("p",[this._v("\n        公司名称：广州酷狗计算机科技有限公司\n      ")]),this._v(" "),e("p",[this._v("\n        公司地址：广州市天河区黄埔大道中315号羊城晚报创意产业园内自编号1-18\n      ")]),this._v(" "),e("p",[this._v("\n        公司电话：020-37529000\n      ")])])}]};var l=n("VU/8")({name:"EndPage",methods:{_event:function(t){"comeHome"===t&&this.$emit("come")}},props:["come"],data:function(){return{logoSrc:"./static/logo.png",buttonSet:[{class:"come-top",src:"./static/tt.png",events:"comeHome"},{class:"share",src:"./static/share.png",events:"share"}]}}},o,!1,function(t){n("ZKBp")},"data-v-03db6e74",null).exports;function u(t){return function(){var t=document.cookie,e=new Object;return t.replace(/(?:^|\s)([^;=]+)=([^;=]+);?/g,function(){for(var t=arguments.length,n=Array(t),s=0;s<t;s++)n[s]=arguments[s];console.log(n),e[n[2]]=unescape(n[3])}),e}().hasOwnProperty(t)}var d={name:"come",components:{swiper:c.swiper,swiperSlide:c.swiperSlide,EndPage:l},created:function(){var t,e;u("new")||(t="new",e="new",document.cookie=t+"="+escape(e))},computed:{swiper:function(){return this.$refs.mySwiper.swiper},items:function(){return[{class:{p1:!0,active:0==this.activeIndex},imgs:[{src:"./static/p1-1.png",class:"title"},{src:"./static/p1-4.png",class:"main"},{src:"./static/p1-2.jpg",class:"bottom-bg"}],links:[{src:"./static/p1-3.png",href:"https://itunes.apple.com/app/apple-store/id472208016?pt=624347&ct=%E9%85%B7%E7%8B%97mo&mt=8",class:"download"},{src:"./static/p1-5.png",href:"itms-services://?action=download-manifest&url=https://mo.kugou.com/download/html/kugou0.plist",class:"yydownload"}]},{class:{p2:!0,active:1==this.activeIndex},imgs:[{src:"./static/p2-1.png",class:"title"},{src:"./static/p2-2.png",class:"main"}]},{class:{p3:!0,active:2==this.activeIndex},imgs:[{src:"./static/p3-1.png",class:"title"},{src:"./static/p3-2.png",class:"main"}]},{class:{p4:!0,active:3==this.activeIndex},imgs:[{src:"./static/p4-1.png",class:"title"},{src:"./static/p4-2.png",class:"main"}]},{class:{p5:!0,active:4==this.activeIndex}}]}},methods:{slideToFirst:function(){this.swiper.slideTo(0)},slideNext:function(){console.log(this.swiper),this.swiper.slideNext()},jump:function(t){"download"===t?_hmt.push(["_trackEvent","IOS","iosdownload","ioskugou"]):"yydownload"===t&&_hmt.push(["_trackEvent","IOSyy","iosyydownload","iosyykugou"])}},data:function(){var t=this;return{activeIndex:0,options:{autoplay:!1,loop:!1,notNextTick:!0,roundLenghts:!0,direction:"vertical",on:{slideChangeTransitionEnd:function(){t.activeIndex=t.swiper.activeIndex}}}}}},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("swiper",{ref:"mySwiper",staticClass:"swiper",attrs:{options:t.options}},t._l(t.items,function(e,s){return n("swiper-slide",{key:s,staticClass:"swiper-slide",class:e.class},[t._l(e.imgs,function(t){return n("img",{key:t.src,class:t.class,attrs:{src:t.src}})}),t._v(" "),t._l(e.links,function(e){return n("a",{key:e.src,class:e.class,attrs:{href:e.href},on:{click:function(n){t.jump(e.class)}}},[n("img",{attrs:{src:e.src}})])}),t._v(" "),4!=s?n("div",{ref:"button",refInFor:!0,staticClass:"button-next",on:{click:t.slideNext}}):t._e(),t._v(" "),n("end-page",{directives:[{name:"show",rawName:"v-show",value:4===s,expression:"index===4"}],on:{come:t.slideToFirst}})],2)}))},staticRenderFns:[]};var p=n("VU/8")(d,v,!1,function(t){n("VOEw")},"data-v-d6512dc2",null).exports,m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"header"},[e("router-link",{staticClass:"icon-sousuo",attrs:{to:"/",tag:"i"}}),this._v(" "),this._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{staticClass:"header-title"},[e("span",{staticClass:"header-icon"}),this._v("宝宝摇睡曲")])}]};var h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"nav"},t._l(t.navs,function(e){return n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-item-links",attrs:{to:e.path,tag:"a"}},[t._v(t._s(e.title))])],1)}))},staticRenderFns:[]};var _={name:"home",components:{MHead:n("VU/8")({name:"",data:function(){return{}}},m,!1,function(t){n("Slb1")},"data-v-328c5118",null).exports,Tab:n("VU/8")({name:"tab",data:function(){return{navs:[{path:"/home",title:"新歌"},{path:"/rank",title:"排行"},{path:"/list",title:"歌单"},{path:"/singer",title:"歌手"}]}}},h,!1,function(t){n("AIkV")},"data-v-34b56ce8",null).exports},data:function(){return{}}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"m-head"},[e("m-head"),this._v(" "),e("tab"),this._v(" "),e("div",{staticClass:"seat"}),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var g=n("VU/8")(_,f,!1,function(t){n("HRsY")},"data-v-ceae9ad8",null).exports,w={render:function(){var t=this.$createElement;return(this._self._c||t)("section",[this._v("\r\n  rank\r\n")])},staticRenderFns:[]};var x=n("VU/8")({name:""},w,!1,function(t){n("l2sX")},"data-v-2fa07d0a",null).exports,k={render:function(){var t=this.$createElement;return(this._self._c||t)("section",[this._v("\n  recommend\n")])},staticRenderFns:[]};var C=n("VU/8")({name:""},k,!1,function(t){n("FhQ1")},"data-v-d860cf62",null).exports,E={render:function(){var t=this.$createElement;return(this._self._c||t)("section",[this._v("\n  search\n")])},staticRenderFns:[]};n("VU/8")({name:""},E,!1,function(t){n("ZZKc")},"data-v-3d061c45",null).exports;var b={render:function(){var t=this.$createElement;return(this._self._c||t)("section",[this._v("\r\n  rank\r\n")])},staticRenderFns:[]};var y=n("VU/8")({name:""},b,!1,function(t){n("F6VQ")},"data-v-7ca46708",null).exports,F={render:function(){var t=this.$createElement;return(this._self._c||t)("section",[this._v("\n  singer\n")])},staticRenderFns:[]};var S=n("VU/8")({name:""},F,!1,function(t){n("Iad2")},"data-v-5dc2eaed",null).exports,I={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"server-agrement"},[n("img",{staticClass:"top-tip",attrs:{src:t.topTip}}),t._v(" "),n("img",{staticClass:"logo",attrs:{src:t.logo}}),t._v(" "),n("h2",{staticClass:"title"},[t._v("酷狗用户服务协议")]),t._v(" "),n("img",{staticClass:"user-server",attrs:{src:t.userServer}}),t._v(" "),t._m(0),t._v(" "),n("p",{staticClass:"author"},[t._v("\n    酷狗公司\n  ")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("dl",[n("dt",[t._v("\n      1.特别提醒\n    ")]),t._v(" "),n("dd",[t._v("\n      1.1.在您开始阅读并决定是否接受《酷狗用户服务协议》（以下称“本协议”）之前，酷狗公司特别提醒您应留意本协议中 "),n("em",[t._v("加粗形式")]),t._v("的条款内容。\n    ")]),t._v(" "),n("dd",[t._v("\n      1.2.除非您已阅读并接受本协议所有条款，否则您无权使用本服务。您对本服务的登录、查看、下载、发布信息、使用等行为即视为您已阅读并同意受本协议的约束。\n    ")]),t._v(" "),n("dd",[n("em",[t._v("1.3.若您是18周岁以下的未成年人，在使用酷狗公司服务前，请您务必先取得您家长或法定监护人的书面同意，并在监护人在场的情况进行使用本协议所述的服务。")])]),t._v(" "),n("dd",[t._v("\n      1.4.本协议各条款的标题仅为方便检索使用，部分标题下的条款内容可能将作为独立的法律文件、相关业务规则（以下统称“单独协议”）供您阅读并遵守。\n    ")]),t._v(" "),n("dt",[t._v("\n        2.定义解释\n    ")]),t._v(" "),n("dd",[t._v("\n      2.1 本协议中的“酷狗公司”将包括但不限于酷狗公司和/或其关联企业。关联企业是指控制酷狗公司，或被酷狗公司所控制，或与酷狗公司共同受控制于同一实体的任何企业。控制是指直接或间接拥有酷狗公司百分之五十（50％）以上的股权、投票权或管理权，或通过协议控制酷狗公司管理权。\n    ")]),t._v(" "),n("dd",[t._v("\n      2.2.本协议中的“用户”指在阅读本协议后选择接受本协议全部条款的个人使用者。用户可通过注册、登录酷狗公司帐号或选择其他第三方登录的方式使用服务，但是否注册、登录酷狗公司帐号或选择其他第三方登录的方式不影响其作为本协议项下的用户身份。\n    ")]),t._v(" "),n("dd",[t._v("\n      2.3.本协议中的“服务”指软件、相关网站以及酷狗公司和/或其关联企业提供的其他服务。\n    ")]),t._v(" "),n("dd",[t._v("\n      2.4.本协议中的“软件”指酷狗公司提供的包括但不限于电脑客户端及移动客户端等，用户通过该电脑客户端及移动客户端等进行搜索、试听、下载及管理等。\n    ")]),t._v(" "),n("dd",[t._v("\n      2.5.本协议中的“信息内容”将可能包括但不限于任何在服务中及软件上的资料、文字、软件、音频、图片、视频、图表、广告以及其他资料等。\n    ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"footer"},[e("p",[this._v("\n\n          广州酷狗计算机科技有限公司 Copyright © 2004-2018 KuGou-Inc.All Rights Reserved\n\n    ")])])}]};var $=n("VU/8")({name:"ServerAgrement",data:function(){return{topTip:"./static/topTips.jpg",logo:"./static/logo-icon.jpg",userServer:"./static/userService.jpg"}}},I,!1,function(t){n("6b1G")},"data-v-0846fa24",null).exports,R={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("dl",[n("dt",[t._v("\n    安卓：\n  ")]),t._v(" "),n("dd",[n("ol",[n("li",[t._v("打开手机菜单中的“设置”选项;")]),t._v(" "),n("li",[t._v("选择“应用程序”;  ")]),t._v(" "),n("li",[t._v('选择“应用程序管理";"')]),t._v(" "),n("li",[t._v("在所列的所用应用程序中选择酷狗音乐；")]),t._v(" "),n("li",[t._v("点击删除按钮，然后点击确定，就能把酷狗音乐删除")])])]),t._v(" "),n("dt",[t._v("\n    iOS：\n  ")]),t._v(" "),n("dd",[n("ol",[n("li",[t._v("在手机桌面长按酷狗音乐的应用图标；")]),t._v(" "),n("li",[t._v("点击图标左上角的X，即可删除酷狗音乐")])])])])}]};var V=n("VU/8")({name:""},R,!1,function(t){n("pofP")},"data-v-71816be2",null).exports,A=n("v5o6");n.n(A).a.attach(document.body),s.a.use(r.a);var T=new r.a({linkActiveClass:"active",routes:[{path:"/",redirect:"/come"},{path:"/home",component:g,children:[{path:"/",component:C},{path:"/new",component:C},{path:"/rank",component:x},{path:"/list",component:y},{path:"/singer",component:S}]},{path:"/come",component:p,children:[{path:"/",component:C},{path:"/new",component:C},{path:"/rank",component:x},{path:"/list",component:y},{path:"/singer",component:S}]},{path:"/server",component:$},{path:"/uninstall",component:V}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:T,render:function(t){return t(a)}})},Slb1:function(t,e){},VOEw:function(t,e){},ZKBp:function(t,e){},ZZKc:function(t,e){},cCWZ:function(t,e){!function(t,e){"use strict";var n={};!function(){var s=e.querySelector('meta[name="viewport"]'),i=e.querySelector('meta[name="hotcss"]'),a=t.devicePixelRatio||1,r=540,c=0;if(a=a>=3?3:a>=2?2:1,i){var o=i.getAttribute("content");if(o){var l=o.match(/initial\-dpr=([\d\.]+)/);l&&(a=parseFloat(l[1]));var u=o.match(/max\-width=([\d\.]+)/);u&&(r=parseFloat(u[1]));var d=o.match(/design\-width=([\d\.]+)/);d&&(c=parseFloat(d[1]))}}e.documentElement.setAttribute("data-dpr",a),n.dpr=a,e.documentElement.setAttribute("max-width",r),n.maxWidth=r,c&&e.documentElement.setAttribute("design-width",c),n.designWidth=c;var v=1/a,p="width=device-width, initial-scale="+v+", minimum-scale="+v+", maximum-scale="+v+", user-scalable=no";s?s.setAttribute("content",p):((s=e.createElement("meta")).setAttribute("name","viewport"),s.setAttribute("content",p),e.head.appendChild(s))}(),n.px2rem=function(t,e){return e||(e=parseInt(n.designWidth,10)),320*parseInt(t,10)/e/20},n.rem2px=function(t,e){return e||(e=parseInt(n.designWidth,10)),20*t*e/320},n.mresize=function(){var s=e.documentElement.getBoundingClientRect().width||t.innerWidth;if(n.maxWidth&&s/n.dpr>n.maxWidth&&(s=n.maxWidth*n.dpr),!s)return!1;e.documentElement.style.fontSize=20*s/320+"px",n.callback&&n.callback()},n.mresize(),t.addEventListener("resize",function(){clearTimeout(n.tid),n.tid=setTimeout(n.mresize,33)},!1),t.addEventListener("load",n.mresize,!1),setTimeout(function(){n.mresize()},333),t.hotcss=n}(window,document)},l2sX:function(t,e){},n7fD:function(t,e){},pofP:function(t,e){},v2ns:function(t,e){}},[0]);
//# sourceMappingURL=app.d08cffbedaecbf0bfc11.js.map