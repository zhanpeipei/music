webpackJsonp([1],{0:function(t,e,s){s("NHnr"),t.exports=s("cCWZ")},"0gyt":function(t,e){},"1u83":function(t,e){},"2PxS":function(t,e){},"4cZ0":function(t,e){},"87AS":function(t,e){},"9fjN":function(t,e,s){t.exports=s.p+"static/img/lazy2.d898c17.png"},F6VQ:function(t,e){},FPIG:function(t,e){},Iad2:function(t,e){},LHQt:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("/5sW"),i={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"header"},[e("h2",{staticClass:"header-title"},[this._v("宝宝摇睡曲")])])}]};var a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"nav"},t._l(t.navs,function(e){return s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-item-links",attrs:{to:e.path,tag:"a"}},[t._v(t._s(e.title))])],1)}))},staticRenderFns:[]};var r={name:"mhead",components:{Headd:s("VU/8")({name:"headder",data:function(){return{}}},i,!1,function(t){s("hAdc")},"data-v-13d38498",null).exports,Tab:s("VU/8")({name:"tab",data:function(){return{navs:[{path:"/recommend",title:"推荐"},{path:"/rank",title:"排行"},{path:"/search",title:"搜索"}]}}},a,!1,function(t){s("S8Cu")},"data-v-63fea582",null).exports},data:function(){return{}}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"m-head"},[e("headd"),this._v(" "),e("tab")],1)},staticRenderFns:[]};var o={name:"App",components:{MHead:s("VU/8")(r,c,!1,function(t){s("imIe")},"data-v-559c2687",null).exports}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app",cloak:""},on:{touchmove:function(t){t.preventDefault()}}},[e("m-head",{staticClass:"app-top"}),this._v(" "),e("div",{staticClass:"app-content"},[e("keep-alive",[e("router-view")],1)],1)],1)},staticRenderFns:[]};var u=s("VU/8")(o,l,!1,function(t){s("0gyt")},null,null).exports,d=s("/ocq"),m=(s("v2ns"),s("7QTg")),p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"page5"},[s("div",{staticClass:"limit-width"},[s("h3",{staticClass:"logo"},[t._v("酷狗音乐"),s("img",{attrs:{src:t.logoSrc}})]),t._v(" "),s("p",[t._v("\n      适用iOS 5.0及以上系统版本\n    ")]),t._v(" "),s("div",{staticClass:"button-set"},t._l(t.buttonSet,function(e){return s("img",{class:e.class,attrs:{src:e.src},on:{click:function(s){t._event(e.events)}}})})),t._v(" "),s("p",{staticClass:"notice"},[t._v("\n      我们致力于推动网络正版音乐的发展\n    ")]),t._v(" "),s("p",{staticClass:"notice"},[t._v("\n      相关版权合作请联系copyrights@kugou.com\n    ")]),t._v(" "),s("p",{staticClass:"links"},[s("router-link",{attrs:{to:"/recommend"}},[t._v("在线听歌")]),t._v(" "),s("span",{staticClass:"line"},[t._v("|")]),t._v(" "),s("router-link",{attrs:{to:"welcome/server"}},[t._v("用户服务协议")]),t._v(" "),s("span",{staticClass:"line"},[t._v("|")]),t._v(" "),s("router-link",{attrs:{to:"welcome/uninstall"}},[t._v("卸载说明")])],1),t._v(" "),t._m(0)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"footer"},[e("p",[this._v("\n        粤ICP备09017694号-2\n      ")]),this._v(" "),e("p",[this._v("\n        公司名称：广州酷狗计算机科技有限公司\n      ")]),this._v(" "),e("p",[this._v("\n        公司地址：广州市天河区黄埔大道中315号羊城晚报创意产业园内自编号1-18\n      ")]),this._v(" "),e("p",[this._v("\n        公司电话：020-37529000\n      ")])])}]};var h=s("VU/8")({name:"EndPage",methods:{_event:function(t){"comeHome"===t&&this.$emit("come")}},props:["come"],data:function(){return{logoSrc:"./static/logo.png",buttonSet:[{class:"come-top",src:"./static/tt.png",events:"comeHome"},{class:"share",src:"./static/share.png",events:"share"}]}}},p,!1,function(t){s("hr6x")},"data-v-fc6d8c5e",null).exports;function v(t){return function(){var t=document.cookie,e=new Object;return t.replace(/(?:^|\s)([^;=]+)=([^;=]+);?/g,function(){for(var t=arguments.length,s=Array(t),n=0;n<t;n++)s[n]=arguments[n];e[s[2]]=unescape(s[3])}),e}().hasOwnProperty(t)}var f={name:"welcome",components:{swiper:m.swiper,swiperSlide:m.swiperSlide,EndPage:h},created:function(){},computed:{swiper:function(){return this.$refs.mySwiper.swiper},items:function(){return[{class:{p1:!0,active:0==this.activeIndex},imgs:[{src:"./static/p1-1.png",class:"title"},{src:"./static/p1-4.png",class:"main"}],links:[{src:"./static/p1-3.png",href:"https://itunes.apple.com/app/apple-store/id472208016?pt=624347&ct=%E9%85%B7%E7%8B%97mo&mt=8",class:"download"},{src:"./static/p1-5.png",href:"itms-services://?action=download-manifest&url=https://mo.kugou.com/download/html/kugou0.plist",class:"yydownload"}]},{class:{p2:!0,active:1==this.activeIndex},imgs:[{src:"./static/p2-1.png",class:"title"},{src:"./static/p2-2.png",class:"main"}]},{class:{p3:!0,active:2==this.activeIndex},imgs:[{src:"./static/p3-1.png",class:"title"},{src:"./static/p3-2.png",class:"main"}]},{class:{p4:!0,active:3==this.activeIndex},imgs:[{src:"./static/p4-1.png",class:"title"},{src:"./static/p4-2.png",class:"main"}]},{class:{p5:!0,active:4==this.activeIndex}}]}},methods:{slideToFirst:function(){this.swiper.slideTo(0)},isFrist:function(){var t,e;v("new")?this.$router.push("/recommend"):(t="new",e="new",document.cookie=t+"="+escape(e))},slideNext:function(){console.log(this.swiper),this.swiper.slideNext()},jump:function(t){"download"===t?_hmt.push(["_trackEvent","IOS","iosdownload","ioskugou"]):"yydownload"===t&&_hmt.push(["_trackEvent","IOSyy","iosyydownload","iosyykugou"])}},data:function(){var t=this;return{activeIndex:0,options:{autoplay:!1,loop:!1,notNextTick:!0,roundLenghts:!0,direction:"vertical",calculateHeight:!0,on:{slideChangeTransitionEnd:function(){t.activeIndex=t.swiper.activeIndex}}}}}},_={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("router-view"),t._v(" "),s("swiper",{ref:"mySwiper",staticClass:"swiper",attrs:{options:t.options}},t._l(t.items,function(e,n){return s("swiper-slide",{key:n,staticClass:"swiper-slide",class:e.class},[4!=n?s("div",{staticClass:"limit-width"},t._l(e.imgs,function(t){return s("img",{key:t.src,class:t.class,attrs:{src:t.src}})})):t._e(),t._v(" "),0===n?s("div",{staticClass:"bottom"},t._l(e.links,function(t){return s("div",{key:t.src,staticClass:"bottom-ops"},[s("a",{class:t.class,attrs:{href:t.href}},[s("img",{attrs:{src:t.src}})])])})):t._e(),t._v(" "),4!=n?s("div",{ref:"button",refInFor:!0,staticClass:"button-next",on:{click:t.slideNext}}):t._e(),t._v(" "),4===n?s("end-page",{on:{come:t.slideToFirst}}):t._e()],1)}))],1)},staticRenderFns:[]};var g=s("VU/8")(f,_,!1,function(t){s("2PxS")},"data-v-2416e2e5",null).exports,y=s("woOf"),C=s.n(y),w=s("//Fk"),x=s.n(w),S=s("hU7x"),k=s.n(S);function b(t){var e="";for(var s in t)if(t.hasOwnProperty(s)){var n=void 0===t[s]?"":t[s];e+="&"+s+"="+encodeURIComponent(n)}return e?e.substring(1):""}function E(t,e,s){return t+=t.indexOf("?")>0?"&"+b(e):"?"+b(e),new x.a(function(e,n){k()(t,s,function(t,s){t?n(t):e(s)})})}var H={g_tk:5381,format:"json",inCharset:"utf-8",outCharset:"utf-8",notice:0,_:1523799278964},L={param:"jsonpCallback"};var T={name:"scroll",computed:{maxScrollTop:function(){return this.pH-this.wH}},props:{on:{type:Boolean,default:!0}},data:function(){return{wH:0,pH:0,touchStart:0,change:0,curScroll:0}},mounted:function(){this._inits()},methods:{_inits:function(){var t=this;this.wH=window.innerHeight;var e=this.$refs.wrap,s=document.documentElement||document.body;e.addEventListener("touchstart",function(n){t.pH=Math.max(document.body.clientHeight,document.documentElement.clientHeight),t.pH=Math.max(document.body.clientHeight,document.documentElement.clientHeight),t.wH=window.innerHeight,t.on&&(s.scrollTop<=0||s.scrollTop>=t.maxScrollTop)&&(e.style.transition="",t.touchStart=n.touches[0].clientY,t.curScroll=Math.max(document.documentElement.scrollTop,document.body.scrollTop),console.log("touchstart:",t.maxScrollTop,t.curScroll));var i=function(){t.on&&((t.curScroll<=0||t.curScroll>=t.maxScrollTop)&&(e.style.transition="all .2s linear",e.style.transform="translateY(0)"),t.curScroll>t.maxScrollTop&&t.endEvent(),t.change=0,t.$emit("end"))};e.addEventListener("touchmove",function s(n){if(t.on){var a=n.touches[0].clientY-t.touchStart;console.log("touchmove:",a,t.curScroll<=0&&a>0,t.curScroll>=t.maxScrollTop&&a<0),console.log(t.curScroll,t.maxScrollTop),t.curScroll<=0&&a>0||t.curScroll>=t.maxScrollTop&&a<0?(t.curScroll<=0&&a>0?(a=Math.min(a,200),e.style.transform="translateY("+a+"px)"):t.curScroll>=t.maxScrollTop&&a<0&&(a=Math.max(a,-200),e.style.transform="translateY("+a+"px)"),t.change=a):(console.log("move移出"),e.removeEventListener("touchmove",s),e.removeEventListener("touchend",i))}}),e.addEventListener("touchend",i)})}}},z={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"wrap",staticClass:"wrap"},[this._t("default")],2)},staticRenderFns:[]};var U=s("VU/8")(T,z,!1,function(t){s("Sgvr")},"data-v-0c1641a2",null).exports,F={name:"rank",components:{Scroll:U},data:function(){return{topList:[{id:"",picUrl:"",topTitle:"",songList:[{singername:"",songname:""}]}]}},methods:{_getRank:function(){var t=this;E("https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg",C()({},H,{format:"jsonp",uin:0,plateform:"h5",needNewCode:1}),L).then(function(e){0===e.code&&(t.topList=e.data.topList)})}},created:function(){this._getRank()}},$={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("scroll",[s("ul",{key:"rank",staticClass:"rank"},t._l(t.topList,function(e){return s("li",{key:e.id,staticClass:"top-list"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.picUrl,expression:"item.picUrl"}],staticClass:"top-list-img"}),t._v(" "),s("h4",{staticClass:"top-list-title"},[t._v(" "+t._s(e.topTitle))]),t._v(" "),t._l(e.songList,function(e,n){return s("p",{key:n,staticClass:"top-list-song"},[t._v("\r\n      "+t._s(n+1)+"\r\n      "),s("span",[t._v(t._s(e.songname))]),t._v("\r\n      -"+t._s(e.singername)+"\r\n    ")])}),t._v(" "),s("i",{staticClass:"icon-qianjin"})],2)})),t._v(" "),s("router-view")],1)},staticRenderFns:[]};var R=s("VU/8")(F,$,!1,function(t){s("FPIG")},"data-v-3f75526a",null).exports,A={name:"scroll",computed:{maxScrollTop:function(){return this.pH-this.wH}},props:{on:{type:Boolean,default:!0}},data:function(){return{wH:0,pH:0,touchStart:0,change:0,curScroll:0}},mounted:function(){this._inits()},methods:{_inits:function(){var t=this;this.wH=window.innerHeight;var e=this.$refs.wrap,s=document.documentElement||document.body;e.addEventListener("touchstart",function(n){t.pH=Math.max(document.body.clientHeight,document.documentElement.clientHeight),t.pH=Math.max(document.body.clientHeight,document.documentElement.clientHeight),t.wH=window.innerHeight,t.on&&(s.scrollTop<=0||s.scrollTop>=t.maxScrollTop)&&(e.style.transition="",t.touchStart=n.touches[0].clientY,t.curScroll=Math.max(document.documentElement.scrollTop,document.body.scrollTop),console.log("touchstart:",t.maxScrollTop,t.curScroll));var i=function(){t.on&&((t.curScroll<=0||t.curScroll>=t.maxScrollTop)&&(e.style.transition="all .2s linear",e.style.transform="translateY(0)"),t.curScroll>t.maxScrollTop&&t.endEvent(),t.change=0,t.$emit("end"))};e.addEventListener("touchmove",function s(n){if(t.on){var a=n.touches[0].clientY-t.touchStart;console.log("touchmove:",a,t.curScroll<=0&&a>0,t.curScroll>=t.maxScrollTop&&a<0),console.log(t.curScroll,t.maxScrollTop),t.curScroll<=0&&a>0||t.curScroll>=t.maxScrollTop&&a<0?(t.curScroll<=0&&a>0?(a=Math.min(a,200),e.style.transform="translateY("+a+"px)"):t.curScroll>=t.maxScrollTop&&a<0&&(a=Math.max(a,-200),e.style.transform="translateY("+a+"px)"),t.change=a):(console.log("move移出"),e.removeEventListener("touchmove",s),e.removeEventListener("touchend",i))}}),e.addEventListener("touchend",i)})}}},I={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"wrap",staticClass:"wrap"},[this._t("default")],2)},staticRenderFns:[]};var q=s("VU/8")(A,I,!1,function(t){s("87AS")},"data-v-216ab162",null).exports;var V={name:"slide",components:{swiper:m.swiper,swiperSlide:m.swiperSlide},data:function(){return{loadingImg:"./static/lazy.png"}},props:{options:{type:Object,default:function(){return{pagination:{el:".swiper-pagination"},autoplay:!0,speed:300,loop:!0,notNextTick:!0,direction:"horizontal",autoHeight:!0,slidesOffsetBefore:0,slidesOffsetAfter:0,slidesPerView:1,spaceBetween:0,lazy:{loadPrevNext:!0}}}},items:{type:Array,default:function(){return[{id:"",linkUrl:"",picUrl:""}]}}}},j={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("swiper",{attrs:{options:t.options}},[t._l(t.items,function(e){return s("swiper-slide",{key:e.id,staticClass:"swiper-slide"},[s("div",{staticClass:"swiper-lazy-preloader"}),t._v(" "),s("a",{staticClass:"swiper-slide-link",attrs:{href:e.linkUrl}},[s("img",{staticClass:" swiper-lazy",attrs:{"data-src":e.picUrl}})])])}),t._v(" "),t.options.pagination?s("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}):t._e()],2)},staticRenderFns:[]};var N=s("VU/8")(V,j,!1,function(t){s("tP95")},"data-v-c1fb9498",null).exports,M={name:"list",filters:{around:function(t){return Math.round(t/1e3)/10+"万"}},props:{title:{type:String,default:""},items:{type:Array,default:function(){return[{accessnum:0,album_pic_mid:"",id:"",picUrl:"",pic_mid:"",songListAuthor:"",songListDesc:""}]}}}},P={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"panel"},[s("h3",{staticClass:"panel-title"},[t._v(t._s(t.title))]),t._v(" "),s("ul",{staticClass:"panel-list"},t._l(t.items,function(e){return s("li",{staticClass:"panel-list-item"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.picUrl,expression:"item.picUrl"}],staticClass:"list-item-bg"}),t._v(" "),s("span",{staticClass:"list-item-accessnum"},[s("i",{staticClass:"icon-erji"}),t._v(t._s(t._f("around")(e.accessnum)))]),t._v(" "),s("i",{staticClass:"list-item-play icon-play"}),t._v(" "),s("p",{staticClass:"list-item-des"},[t._v(t._s(e.songListDesc))]),t._v(" "),s("h4",{staticClass:"list-item-author"},[t._v(t._s(e.songListAuthor))])])}))])},staticRenderFns:[]};var O={name:"recommend",components:{Scroll:q,Slider:N,List:s("VU/8")(M,P,!1,function(t){s("4cZ0")},"data-v-cdceb9b2",null).exports},data:function(){return{sliders:[],songListTitle:"热门歌单",songListItems:[]}},created:function(){this._getRecommend()},methods:{_getRecommend:function(){var t=this;E("https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",C()({},H,{plateform:"h5",needNewCode:1,uin:0}),L).then(function(e){0===e.code&&(t.sliders=e.data.slider,t.songListItems=e.data.songList)})}}},W={render:function(){var t=this.$createElement,e=this._self._c||t;return e("scroll",[e("slider",{staticClass:"slider",attrs:{items:this.sliders}}),this._v(" "),e("list",{attrs:{items:this.songListItems,title:this.songListTitle}})],1)},staticRenderFns:[]};var Y=s("VU/8")(O,W,!1,function(t){s("Q8ht")},"data-v-21f34988",null).exports,Q={name:"hot-search",methods:{copy:function(t){this.$emit("copyHot",t)}},props:{hotkey:{type:Array,default:function(){return[{k:"",n:""}]}},special:{type:Object,default:function(){return{key:"",url:""}}}}},Z={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("dl",{staticClass:"hot-search"},[s("dt",{staticClass:"title"},[t._v("热门搜索")]),t._v(" "),s("dd",{staticClass:"special-key hot-keys"},[s("a",{attrs:{href:t.special.url}},[t._v(t._s(t.special.key))])]),t._v(" "),t._l(t.hotkey,function(e){return s("dd",{key:e.n,staticClass:"hot-keys",on:{click:function(s){t.copy(e.k)}}},[t._v("\n\t\t"+t._s(e.k)+"\n\t")])})],2)},staticRenderFns:[]};var B=s("VU/8")(Q,Z,!1,function(t){s("pEJN")},"data-v-1250dc0a",null).exports;var D={name:"history",methods:{deleteHistory:function(t){this.$emit("delete",t)},search:function(t){this.$emit("copy",t)}},props:{history:{type:Array,default:function(){return[]}}}},J={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"history"},t._l(t.history,function(e,n){return s("li",{staticClass:"history-item"},[s("i",{staticClass:"icon-lishijiluxianxing"}),t._v(" "),s("span",{on:{click:function(s){t.search(e)}}},[t._v(t._s(e))]),t._v(" "),s("i",{staticClass:"icon-shachu-xue",on:{click:function(e){t.deleteHistory(n)}}})])}))},staticRenderFns:[]};var G=s("VU/8")(D,J,!1,function(t){s("jqAU")},"data-v-9f523428",null).exports,K={name:"music-list",created:function(){},filters:{musicSrc:function(t){},photoSrc:function(t){return"https://y.gtimg.cn/music/photo_new/T002R68x68M000"+t+".jpg?max_age=2592000"}},computed:{imgSrc:function(){return"https://y.gtimg.cn/music/photo_new/T001R68x68M000"+this.musicList.zhida.singermid+".jpg?max_age=2592000"}},props:{musicList:{type:Object,default:function(){return{isAll:!1,zhida:{albumid:"",albumnum:"",albummid:"",albumname:"",singername:"",singermid:"",songnum:"",type:0},list:[{songname:"",songmid:"",singer:""}]}}}},data:function(){return{}}},X={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{ref:"list",staticClass:"songList"},[t.musicList.zhida.singermid?s("li",{staticClass:"singer-zhida song-list-item"},[t.musicList.zhida.singermid?s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imgSrc,expression:"imgSrc"}]}):t._e(),t._v(" "),s("h5",[t._v(t._s(t.musicList.zhida.singername))]),t._v(" "),s("p",[s("span",[t._v("单曲: "+t._s(t.musicList.zhida.songnum))]),t._v(" "),s("span",[t._v("专辑: "+t._s(t.musicList.zhida.albumnum))])])]):t.musicList.zhida.albumname?s("li",{staticClass:"singer-zhida song-list-item"},[t.musicList.zhida.albummid?s("img",{attrs:{src:t._f("photoSrc")(t.musicList.zhida.albummid)}}):t._e(),t._v(" "),s("h5",[t._v(t._s(t.musicList.zhida.albumname))]),t._v(" "),s("p",[t._v("\n\t\t\t"+t._s(t.musicList.zhida.singername)+"\n\t\t")])]):t._e(),t._v(" "),t._l(t.musicList.list,function(e,n){return s("li",{key:n,staticClass:"song-list-item"},[s("i",{staticClass:"icon-bofang"}),t._v(" "),s("h5",[t._v(t._s(e.songname))]),t._v(" "),s("p",[t._v(t._s(e.singer))])])}),t._v(" "),s("keep-alive",[t.musicList.isAll?s("li",{staticClass:"loaded song-list-item"},[t._v("已全部加载")]):s("li",{staticClass:"song-list-item loading"},[s("i",{staticClass:"icon-jiazai"})])])],2)},staticRenderFns:[]};var tt=s("VU/8")(K,X,!1,function(t){s("QNWU")},"data-v-7fc0767e",null).exports;var et=s("Zrlr"),st=s.n(et);var nt=function t(e){var s=e.songname,n=e.songmid,i=e.singer;st()(this,t),this.songname=s,this.songmid=n,this.singer=i};function it(t){return new nt({songname:t.songname,songmid:t.songmid,singer:(e=t.singer,s=new Array,e.forEach(function(t){s.push(t.name)}),s.join(" / "))});var e,s}var at={name:"search",components:{HotSearch:B,History:G,MusicList:tt,Scroll:U},computed:{musicList:function(){return{isAll:this.isAll,zhida:this.zhida,list:this.list}}},mounted:function(){},destroyed:function(){},data:function(){return{on:!0,search:"",test:{name:1},onfocus:!1,special:{key:"",url:""},hotkey:[],histories:[],isHistory:!0,p:1,isAll:!1,zhida:{},list:[],touchStart:0,touchChange:0,touchon:!0}},created:function(){this._getHotKey()},methods:{scroll:function(t){this._getMusicList()},copyHot:function(t){this.search=t,this.searching()},delete:function(){this.isAll=!1,this.list=[],this.zhida={}},deleteHistory:function(t){this.histories.splice(t,1)},empty:function(){this.search=""},cancle:function(){this.changeFocus(!1),this.isHistory=!0,this.search="",this.delete()},_getMusicList:function(){var t,e,s=this;(t=this.search,e=this.p,E("https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp",C()({},H,{format:"jsonp",uin:0,plateform:"h5",needNewCode:1,zhidaqu:1,catZhida:1,flag:1,perpage:20,w:t,t:0,ie:"utf-8",sem:1,aggr:0,n:20,p:e,remoteplace:"txt.mqq.all"}),L)).then(function(t){if(0===t.code){var e=t.data,n=e.zhida,i=e.song;i.list.forEach(function(t){s.list.push(it(t))}),s.zhida=C()({},s.zhida,n),s.isAll=!(i.totalnum-i.curnum*i.curpage>0)}s.p++,s.on=!0})},searching:function(){var t,e,s,n;""!=this.search&&(t=this.histories,e=this.search,s=0,n=t.indexOf(e),void 0!=s?n>-1?s<t.length?(t.splice(n,1),t.splice(s,0,e)):(t.splice(n,1),t.push(e)):s<t.length?t.splice(s,0,e):t.push(e):n>-1?(t.splice(n,1),t.push(e)):t.push(e),this.onfocus=!0,this.List=[],this.delete(),this.page=1,this.isHistory=!1,this._getMusicList())},_getHotKey:function(){var t=this;E("https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg",C()({},H,{uin:0,plateform:"h5",needNewCode:1}),L).then(function(e){if(0===e.code){var s=e.data.special_key,n=e.data.special_url;t.special=C()({},t.special,{key:s,url:n}),t.hotkey=e.data.hotkey.sort(function(){return Math.random()-.5}).splice(0,6)}})},changeFocus:function(t){this.onfocus=t}}},rt={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("scroll",{ref:"search",staticClass:"search",on:{end:t.scroll}},[s("div",{staticClass:"search-wrap"},[s("div",{staticClass:"search-form"},[s("div",{staticClass:"search-input"},[s("i",{staticClass:"icon-sousuo"}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],ref:"input",staticClass:"search-input-text",class:{focus:t.onfocus},attrs:{placeholder:"搜索歌曲，歌单，专辑",type:"text"},domProps:{value:t.search},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.searching(e):null},focus:function(e){t.changeFocus(!0)},input:function(e){e.target.composing||(t.search=e.target.value)}}}),t._v(" "),s("i",{directives:[{name:"show",rawName:"v-show",value:t.search,expression:"search"}],staticClass:"icon-empty",on:{click:t.empty}})]),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:t.onfocus,expression:"onfocus"}],staticClass:"delete",on:{click:t.cancle}},[t._v("取消")])]),t._v(" "),s("div",{ref:"searchform",staticClass:"list-panel"},[s("keep-alive",[t.onfocus?t.isHistory?s("history",{attrs:{history:t.histories},on:{copy:t.copyHot,delete:t.deleteHistory}}):s("music-list",{ref:"myMusicList",attrs:{musicList:t.musicList}}):s("hot-search",{ref:"lala",attrs:{special:t.special,hotkey:t.hotkey},on:{copyHot:t.copyHot}})],1)],1)]),t._v(" "),s("router-view")],1)},staticRenderFns:[]};var ct=s("VU/8")(at,rt,!1,function(t){s("alqZ")},"data-v-235be9a1",null).exports,ot={render:function(){var t=this.$createElement;return(this._self._c||t)("section",[this._v("\r\n  rank\r\n")])},staticRenderFns:[]};s("VU/8")({name:""},ot,!1,function(t){s("F6VQ")},"data-v-7ca46708",null).exports;var lt={render:function(){var t=this.$createElement;return(this._self._c||t)("section",[this._v("\n  singer\n")])},staticRenderFns:[]};s("VU/8")({name:""},lt,!1,function(t){s("Iad2")},"data-v-5dc2eaed",null).exports;var ut={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"server-agrement"},[s("img",{staticClass:"top-tip",attrs:{src:t.topTip}}),t._v(" "),s("img",{staticClass:"logo",attrs:{src:t.logo}}),t._v(" "),s("h2",{staticClass:"title"},[t._v("酷狗用户服务协议")]),t._v(" "),s("img",{staticClass:"user-server",attrs:{src:t.userServer}}),t._v(" "),t._m(0),t._v(" "),s("p",{staticClass:"author"},[t._v("\n    酷狗公司\n  ")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("dl",[s("dt",[t._v("\n      1.特别提醒\n    ")]),t._v(" "),s("dd",[t._v("\n      1.1.在您开始阅读并决定是否接受《酷狗用户服务协议》（以下称“本协议”）之前，酷狗公司特别提醒您应留意本协议中 "),s("em",[t._v("加粗形式")]),t._v("的条款内容。\n    ")]),t._v(" "),s("dd",[t._v("\n      1.2.除非您已阅读并接受本协议所有条款，否则您无权使用本服务。您对本服务的登录、查看、下载、发布信息、使用等行为即视为您已阅读并同意受本协议的约束。\n    ")]),t._v(" "),s("dd",[s("em",[t._v("1.3.若您是18周岁以下的未成年人，在使用酷狗公司服务前，请您务必先取得您家长或法定监护人的书面同意，并在监护人在场的情况进行使用本协议所述的服务。")])]),t._v(" "),s("dd",[t._v("\n      1.4.本协议各条款的标题仅为方便检索使用，部分标题下的条款内容可能将作为独立的法律文件、相关业务规则（以下统称“单独协议”）供您阅读并遵守。\n    ")]),t._v(" "),s("dt",[t._v("\n        2.定义解释\n    ")]),t._v(" "),s("dd",[t._v("\n      2.1 本协议中的“酷狗公司”将包括但不限于酷狗公司和/或其关联企业。关联企业是指控制酷狗公司，或被酷狗公司所控制，或与酷狗公司共同受控制于同一实体的任何企业。控制是指直接或间接拥有酷狗公司百分之五十（50％）以上的股权、投票权或管理权，或通过协议控制酷狗公司管理权。\n    ")]),t._v(" "),s("dd",[t._v("\n      2.2.本协议中的“用户”指在阅读本协议后选择接受本协议全部条款的个人使用者。用户可通过注册、登录酷狗公司帐号或选择其他第三方登录的方式使用服务，但是否注册、登录酷狗公司帐号或选择其他第三方登录的方式不影响其作为本协议项下的用户身份。\n    ")]),t._v(" "),s("dd",[t._v("\n      2.3.本协议中的“服务”指软件、相关网站以及酷狗公司和/或其关联企业提供的其他服务。\n    ")]),t._v(" "),s("dd",[t._v("\n      2.4.本协议中的“软件”指酷狗公司提供的包括但不限于电脑客户端及移动客户端等，用户通过该电脑客户端及移动客户端等进行搜索、试听、下载及管理等。\n    ")]),t._v(" "),s("dd",[t._v("\n      2.5.本协议中的“信息内容”将可能包括但不限于任何在服务中及软件上的资料、文字、软件、音频、图片、视频、图表、广告以及其他资料等。\n    ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"footer"},[e("p",[this._v("\n\n          广州酷狗计算机科技有限公司 Copyright © 2004-2018 KuGou-Inc.All Rights Reserved\n\n    ")])])}]};var dt=s("VU/8")({name:"ServerAgrement",data:function(){return{topTip:"./static/topTips.jpg",logo:"./static/logo-icon.jpg",userServer:"./static/userService.jpg"}}},ut,!1,function(t){s("rRpM")},"data-v-e7c07dc4",null).exports,mt={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("dl",[s("dt",[t._v("\n    安卓：\n  ")]),t._v(" "),s("dd",[s("ol",[s("li",[t._v("打开手机菜单中的“设置”选项;")]),t._v(" "),s("li",[t._v("选择“应用程序”;  ")]),t._v(" "),s("li",[t._v('选择“应用程序管理";"')]),t._v(" "),s("li",[t._v("在所列的所用应用程序中选择酷狗音乐；")]),t._v(" "),s("li",[t._v("点击删除按钮，然后点击确定，就能把酷狗音乐删除")])])]),t._v(" "),s("dt",[t._v("\n    iOS：\n  ")]),t._v(" "),s("dd",[s("ol",[s("li",[t._v("在手机桌面长按酷狗音乐的应用图标；")]),t._v(" "),s("li",[t._v("点击图标左上角的X，即可删除酷狗音乐")])])])])}]};var pt=s("VU/8")({name:""},mt,!1,function(t){s("1u83")},"data-v-0ba8b2c3",null).exports,ht=s("v5o6"),vt=s.n(ht),ft=s("lJzc"),_t=s.n(ft),gt={name:"music-detail",mounted:function(){},methods:{touch:function(){console.log(1)}}},yt={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"translate"}},[s("div",{ref:"music",staticClass:"music-detail",on:{touchstart:function(e){return e.stopPropagation(),t.touch(e)},touchmove:function(e){return e.stopPropagation(),t.touch(e)},touchend:function(e){return e.stopPropagation(),t.touch(e)}}},[s("header",{staticClass:"music-detail-header"},[s("img",{staticClass:"music-img",attrs:{src:"",alt:""}}),t._v(" "),s("div",{staticClass:"music-intr"},[s("h4",[t._v("想我这样的人")]),t._v(" "),s("p",[t._v("毛不易")])]),t._v(" "),s("i",{staticClass:"icon-play"})]),t._v(" "),s("main",{staticClass:"lyric"},[s("div",{staticClass:"wrap"},[s("p")])]),t._v(" "),s("footer",{staticClass:"music-control"},[s("p",{staticClass:"colect"},[s("i",{staticClass:"icon-xihuan"})]),t._v(" "),s("div",{staticClass:"music-time"},[s("span",{staticClass:"music-start"},[t._v("\n\t\t\t\t\t\t00:10\n\t\t\t\t\t")]),t._v(" "),s("div",{staticClass:"music-time-line"},[s("div",{staticClass:"bg-line"}),t._v(" "),s("div",{staticClass:"music-process"})]),t._v(" "),s("span",{staticClass:"music-end"},[t._v("00:10")])]),t._v(" "),s("a",{staticClass:"download",attrs:{href:""}},[t._v("下载")])]),t._v(" "),s("div",{staticClass:"bg-blur"}),t._v(" "),s("div",{staticClass:"bg-mask"})])])},staticRenderFns:[]};var Ct=s("VU/8")(gt,yt,!1,function(t){s("LHQt")},"data-v-72edee7a",null).exports,wt={name:"rank-detail",components:{Scroll:U}},xt={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"translate"}},[s("div",{staticClass:"rank-detail",on:{touchstart:function(t){t.stopPropagation(),t.preventDefault()},touchend:function(t){t.stopPropagation(),t.preventDefault()},touchmove:function(t){if(t.stopPropagation(),t.preventDefault(),t.target!==t.currentTarget)return null}}},[s("div",{staticClass:"rank-title"},[s("div",{staticClass:"rank-intro"},[s("div",{staticClass:"rank-intro-img"},[s("img",{attrs:{src:"",alt:""}})]),t._v(" "),s("div",{staticClass:"rank-intro-detail"},[s("h3",{staticClass:"rank-name"},[t._v("巅峰吧")]),t._v(" "),s("p",{staticClass:"rank-day"},[t._v("第14回")]),t._v(" "),s("p",{staticClass:"rank-update"},[t._v("2013更新")])])]),t._v(" "),s("div",{staticClass:"rank-play-all"},[s("div",{staticClass:"ran-play-all-btn"},[s("a",{attrs:{href:""}},[t._v("播放全部")])])])]),t._v(" "),s("div",{staticClass:"panel"},[s("scroll",{staticClass:"rank-music-list"},[s("h4",[t._v("排行榜 公222首是")]),t._v(" "),s("ul",[s("li",{staticClass:"list-item"},[s("span",[t._v("1")]),t._v(" "),s("h5",[t._v("buwen")]),t._v(" "),s("p",[t._v("lalayuedui")])])])]),t._v(">\r\n\t\t")],1)])])},staticRenderFns:[]};var St=s("VU/8")(wt,xt,!1,function(t){s("rHX8")},"data-v-7f480310",null).exports;vt.a.attach(document.body),n.a.use(d.a),n.a.use(_t.a,{loading:s("9fjN"),preLoad:1});var kt=new d.a({linkActiveClass:"active",routes:[{path:"/",redirect:"/welcome"},{path:"/recommend",component:Y},{path:"/welcome",component:g,children:[{path:"server",component:dt},{path:"uninstall",component:pt}]},{path:"/recommend",component:Y},{path:"/rank",component:R,children:[{path:"1",component:St}]},{path:"/search",component:ct,children:[{path:"1",component:Ct}]}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:kt,render:function(t){return t(u)}})},Q8ht:function(t,e){},QNWU:function(t,e){},S8Cu:function(t,e){},Sgvr:function(t,e){},alqZ:function(t,e){},cCWZ:function(t,e){!function(t,e){"use strict";var s={};!function(){var n=e.querySelector('meta[name="viewport"]'),i=e.querySelector('meta[name="hotcss"]'),a=t.devicePixelRatio||1,r=540,c=0;if(a=a>=3?3:a>=2?2:1,i){var o=i.getAttribute("content");if(o){var l=o.match(/initial\-dpr=([\d\.]+)/);l&&(a=parseFloat(l[1]));var u=o.match(/max\-width=([\d\.]+)/);u&&(r=parseFloat(u[1]));var d=o.match(/design\-width=([\d\.]+)/);d&&(c=parseFloat(d[1]))}}e.documentElement.setAttribute("data-dpr",a),s.dpr=a,e.documentElement.setAttribute("max-width",r),s.maxWidth=r,c&&e.documentElement.setAttribute("design-width",c),s.designWidth=c;var m=1/a,p="width=device-width, initial-scale="+m+", minimum-scale="+m+", maximum-scale="+m+", user-scalable=no";n?n.setAttribute("content",p):((n=e.createElement("meta")).setAttribute("name","viewport"),n.setAttribute("content",p),e.head.appendChild(n))}(),s.px2rem=function(t,e){return e||(e=parseInt(s.designWidth,10)),320*parseInt(t,10)/e/20},s.rem2px=function(t,e){return e||(e=parseInt(s.designWidth,10)),20*t*e/320},s.mresize=function(){var n=e.documentElement.getBoundingClientRect().width||t.innerWidth;if(s.maxWidth&&n/s.dpr>s.maxWidth&&(n=s.maxWidth*s.dpr),!n)return!1;e.documentElement.style.fontSize=20*n/320+"px",s.callback&&s.callback()},s.mresize(),t.addEventListener("resize",function(){clearTimeout(s.tid),s.tid=setTimeout(s.mresize,33)},!1),t.addEventListener("load",s.mresize,!1),setTimeout(function(){s.mresize()},333),t.hotcss=s}(window,document)},hAdc:function(t,e){},hr6x:function(t,e){},imIe:function(t,e){},jqAU:function(t,e){},pEJN:function(t,e){},rHX8:function(t,e){},rRpM:function(t,e){},tP95:function(t,e){},v2ns:function(t,e){}},[0]);
//# sourceMappingURL=app.5c8d54a4fd61fd74ec64.js.map