webpackJsonp([1],{0:function(t,e,s){s("NHnr"),t.exports=s("cCWZ")},"2Ul+":function(t,e){},"6b1G":function(t,e){},BZ5W:function(t,e){},F6VQ:function(t,e){},Iad2:function(t,e){},IeLw:function(t,e){},"Il+d":function(t,e){},JzD1:function(t,e){},KcEw:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("/5sW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",[e("router-view")],1)],1)},staticRenderFns:[]};var a=s("VU/8")({name:"App"},n,!1,function(t){s("JzD1")},null,null).exports,r=s("/ocq"),c=(s("v2ns"),s("7QTg")),o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"page5"},[s("div",{staticClass:"limit-width"},[s("h3",{staticClass:"logo"},[t._v("酷狗音乐"),s("img",{attrs:{src:t.logoSrc}})]),t._v(" "),s("p",[t._v("\n      适用iOS 5.0及以上系统版本\n    ")]),t._v(" "),s("div",{staticClass:"button-set"},t._l(t.buttonSet,function(e){return s("img",{class:e.class,attrs:{src:e.src},on:{click:function(s){t._event(e.events)}}})})),t._v(" "),s("p",{staticClass:"notice"},[t._v("\n      我们致力于推动网络正版音乐的发展\n    ")]),t._v(" "),s("p",{staticClass:"notice"},[t._v("\n      相关版权合作请联系copyrights@kugou.com\n    ")]),t._v(" "),s("p",{staticClass:"links"},[s("router-link",{attrs:{to:"/home"}},[t._v("在线听歌")]),t._v(" "),s("span",{staticClass:"line"},[t._v("|")]),t._v(" "),s("router-link",{attrs:{to:"/server"}},[t._v("用户服务协议")]),t._v(" "),s("span",{staticClass:"line"},[t._v("|")]),t._v(" "),s("router-link",{attrs:{to:"/uninstall"}},[t._v("卸载说明")])],1),t._v(" "),t._m(0)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"footer"},[e("p",[this._v("\n        粤ICP备09017694号-2\n      ")]),this._v(" "),e("p",[this._v("\n        公司名称：广州酷狗计算机科技有限公司\n      ")]),this._v(" "),e("p",[this._v("\n        公司地址：广州市天河区黄埔大道中315号羊城晚报创意产业园内自编号1-18\n      ")]),this._v(" "),e("p",[this._v("\n        公司电话：020-37529000\n      ")])])}]};var l=s("VU/8")({name:"EndPage",methods:{_event:function(t){"comeHome"===t&&this.$emit("come")}},props:["come"],data:function(){return{logoSrc:"./static/logo.png",buttonSet:[{class:"come-top",src:"./static/tt.png",events:"comeHome"},{class:"share",src:"./static/share.png",events:"share"}]}}},o,!1,function(t){s("W52o")},"data-v-70281f4e",null).exports;function u(t){return function(){var t=document.cookie,e=new Object;return t.replace(/(?:^|\s)([^;=]+)=([^;=]+);?/g,function(){for(var t=arguments.length,s=Array(t),i=0;i<t;i++)s[i]=arguments[i];e[s[2]]=unescape(s[3])}),e}().hasOwnProperty(t)}var d={name:"come",components:{swiper:c.swiper,swiperSlide:c.swiperSlide,EndPage:l},created:function(){this.isFrist()},computed:{swiper:function(){return this.$refs.mySwiper.swiper},items:function(){return[{class:{p1:!0,active:0==this.activeIndex},imgs:[{src:"./static/p1-1.png",class:"title"},{src:"./static/p1-4.png",class:"main"}],links:[{src:"./static/p1-3.png",href:"https://itunes.apple.com/app/apple-store/id472208016?pt=624347&ct=%E9%85%B7%E7%8B%97mo&mt=8",class:"download"},{src:"./static/p1-5.png",href:"itms-services://?action=download-manifest&url=https://mo.kugou.com/download/html/kugou0.plist",class:"yydownload"}]},{class:{p2:!0,active:1==this.activeIndex},imgs:[{src:"./static/p2-1.png",class:"title"},{src:"./static/p2-2.png",class:"main"}]},{class:{p3:!0,active:2==this.activeIndex},imgs:[{src:"./static/p3-1.png",class:"title"},{src:"./static/p3-2.png",class:"main"}]},{class:{p4:!0,active:3==this.activeIndex},imgs:[{src:"./static/p4-1.png",class:"title"},{src:"./static/p4-2.png",class:"main"}]},{class:{p5:!0,active:4==this.activeIndex}}]}},methods:{slideToFirst:function(){this.swiper.slideTo(0)},isFrist:function(){var t,e;u("new")?this.$router.push("/home"):(t="new",e="new",document.cookie=t+"="+escape(e))},slideNext:function(){console.log(this.swiper),this.swiper.slideNext()},jump:function(t){"download"===t?_hmt.push(["_trackEvent","IOS","iosdownload","ioskugou"]):"yydownload"===t&&_hmt.push(["_trackEvent","IOSyy","iosyydownload","iosyykugou"])}},data:function(){var t=this;return{activeIndex:0,options:{autoplay:!1,loop:!1,notNextTick:!0,roundLenghts:!0,direction:"vertical",calculateHeight:!0,on:{slideChangeTransitionEnd:function(){t.activeIndex=t.swiper.activeIndex}}}}}},p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("swiper",{ref:"mySwiper",staticClass:"swiper",attrs:{options:t.options}},t._l(t.items,function(e,i){return s("swiper-slide",{key:i,staticClass:"swiper-slide",class:e.class},[4!=i?s("div",{staticClass:"limit-width"},[t._l(e.imgs,function(t){return s("img",{key:t.src,class:t.class,attrs:{src:t.src}})}),t._v(" "),t._l(e.links,function(t){return s("a",{key:t.src,class:t.class,attrs:{href:t.href}},[s("img",{attrs:{src:t.src}})])})],2):t._e(),t._v(" "),4!=i?s("div",{ref:"button",refInFor:!0,staticClass:"button-next",on:{click:t.slideNext}}):t._e(),t._v(" "),4===i?s("end-page",{on:{come:t.slideToFirst}}):t._e()],1)}))},staticRenderFns:[]};var h=s("VU/8")(d,p,!1,function(t){s("kDZA")},"data-v-4b245381",null).exports,m={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"header"},[e("h2",{staticClass:"header-title"},[this._v("宝宝摇睡曲")])])}]};var v=s("VU/8")({name:"",data:function(){return{}}},m,!1,function(t){s("lMkc")},"data-v-a3d40680",null).exports,f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"nav"},t._l(t.navs,function(e){return s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-item-links",attrs:{to:e.path,tag:"a"}},[t._v(t._s(e.title))])],1)}))},staticRenderFns:[]};var _=s("VU/8")({name:"tab",data:function(){return{navs:[{path:"/home",title:"推荐"},{path:"/rank",title:"排行"},{path:"/search",title:"搜索"}]}}},f,!1,function(t){s("Z4ul")},"data-v-07bd3fe4",null).exports,g=s("hU7x"),y=s.n(g),C={name:"home",components:{MHead:v,Tab:_},created:function(){},data:function(){return{}}},w={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"m-head"},[e("m-head"),this._v(" "),e("tab"),this._v(" "),e("div",{staticClass:"seat"}),this._v(" "),e("keep-alive",[e("router-view")],1)],1)},staticRenderFns:[]};var k=s("VU/8")(C,w,!1,function(t){s("vMag")},"data-v-5b327220",null).exports,x=s("woOf"),L=s.n(x),b=s("//Fk"),E=s.n(b);function z(t){var e="";for(var s in t)if(t.hasOwnProperty(s)){var i=void 0===t[s]?"":t[s];e+="&"+s+"="+encodeURIComponent(i)}return e?e.substring(1):""}function S(t,e,s){return t+=t.indexOf("?")>0?"&"+z(e):"?"+z(e),new E.a(function(e,i){y()(t,s,function(t,s){t?i(t):e(s)})})}var F={g_tk:5381,format:"json",inCharset:"utf-8",outCharset:"utf-8",notice:0,_:1523799278964},U={param:"jsonpCallback"};var $={name:"rank",data:function(){return{topList:[{id:"",picUrl:"",topTitle:"",songList:[{singername:"",songname:""}]}]}},methods:{_getRank:function(){var t=this;S("https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg",L()({},F,{format:"jsonp",uin:0,plateform:"h5",needNewCode:1}),U).then(function(e){0===e.code&&(t.topList=e.data.topList),console.log(t.topList)})}},created:function(){this._getRank()}},R={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"rank"},t._l(t.topList,function(e){return s("li",{key:e.id,staticClass:"top-list"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.picUrl,expression:"item.picUrl"}],staticClass:"top-list-img"}),t._v(" "),s("h4",{staticClass:"top-list-title"},[t._v(" "+t._s(e.topTitle))]),t._v(" "),t._l(e.songList,function(e,i){return s("p",{key:i,staticClass:"top-list-song"},[t._v("\r\n      "+t._s(i)+"\r\n      "),s("span",[t._v(t._s(e.songname))]),t._v("\r\n      -"+t._s(e.singername)+"\r\n    ")])}),t._v(" "),s("i",{staticClass:"icon-qianjin"})],2)}))},staticRenderFns:[]};var A=s("VU/8")($,R,!1,function(t){s("Il+d")},"data-v-47336c82",null).exports;var I={name:"slide",components:{swiper:c.swiper,swiperSlide:c.swiperSlide},data:function(){return{loadingImg:"./static/lazy.png"}},props:{options:{type:Object,default:function(){return{pagination:{el:".swiper-pagination"},autoplay:!0,speed:300,loop:!0,notNextTick:!0,direction:"horizontal",autoHeight:!0,slidesOffsetBefore:0,slidesOffsetAfter:0,slidesPerView:1,spaceBetween:0,lazy:{loadPrevNext:!0}}}},items:{type:Array,default:function(){return[{id:"",linkUrl:"",picUrl:""}]}}}},H={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("swiper",{staticClass:"wrap",attrs:{options:t.options}},[t._l(t.items,function(e){return s("swiper-slide",{key:e.id,staticClass:"swiper-slide"},[s("div",{staticClass:"swiper-lazy-preloader"}),t._v(" "),s("a",{staticClass:"swiper-slide-link",attrs:{href:e.linkUrl}},[s("img",{staticClass:" swiper-lazy",attrs:{"data-src":e.picUrl}})])])}),t._v(" "),t.options.pagination?s("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}):t._e()],2)},staticRenderFns:[]};var T=s("VU/8")(I,H,!1,function(t){s("2Ul+")},"data-v-4cec8dba",null).exports,j={name:"list",filters:{around:function(t){return Math.round(t/1e3)/10+"万"}},props:{title:{type:String,default:""},items:{type:Array,default:function(){return[{accessnum:0,album_pic_mid:"",id:"",picUrl:"",pic_mid:"",songListAuthor:"",songListDesc:""}]}}}},q={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"panel"},[s("h3",{staticClass:"panel-title"},[t._v(t._s(t.title))]),t._v(" "),s("ul",{staticClass:"panel-list"},t._l(t.items,function(e){return s("li",{staticClass:"panel-list-item"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.picUrl,expression:"item.picUrl"}],staticClass:"list-item-bg"}),t._v(" "),s("span",{staticClass:"list-item-accessnum"},[s("i",{staticClass:"icon-erji"}),t._v(t._s(t._f("around")(e.accessnum)))]),t._v(" "),s("i",{staticClass:"list-item-play icon-play"}),t._v(" "),s("p",{staticClass:"list-item-des"},[t._v(t._s(e.songListDesc))]),t._v(" "),s("h4",{staticClass:"list-item-author"},[t._v(t._s(e.songListAuthor))])])}))])},staticRenderFns:[]};var V={name:"recommend",components:{Slider:T,List:s("VU/8")(j,q,!1,function(t){s("IeLw")},null,null).exports},data:function(){return{sliders:[],songListTitle:"热门歌单",songListItems:[]}},created:function(){this._getRecommend()},methods:{_getRecommend:function(){var t=this;S("https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",L()({},F,{plateform:"h5",needNewCode:1,uin:0}),U).then(function(e){0===e.code&&(t.sliders=e.data.slider,t.songListItems=e.data.songList)})}}},N={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("slider",{staticClass:"slider",attrs:{items:this.sliders}}),this._v(" "),e("list",{attrs:{items:this.songListItems,title:this.songListTitle}})],1)},staticRenderFns:[]};var O=s("VU/8")(V,N,!1,function(t){s("kvO6")},null,null).exports,W={name:"hot-search",methods:{copy:function(t){this.$emit("copyHot",t)}},props:{hotkey:{type:Array,default:function(){return[{k:"",n:""}]}},special:{type:Object,default:function(){return{key:"",url:""}}}}},Z={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("dl",{staticClass:"hot-search"},[s("dt",{staticClass:"title"},[t._v("热门搜索")]),t._v(" "),s("dd",{staticClass:"special-key hot-keys"},[s("a",{attrs:{href:t.special.url}},[t._v(t._s(t.special.key))])]),t._v(" "),t._l(t.hotkey,function(e){return s("dd",{key:e.n,staticClass:"hot-keys",on:{click:function(s){t.copy(e.k)}}},[t._v("\n\t\t"+t._s(e.k)+"\n\t")])})],2)},staticRenderFns:[]};var P=s("VU/8")(W,Z,!1,function(t){s("BZ5W")},"data-v-dcb22774",null).exports;var M={name:"history",methods:{deleteHistory:function(t){this.$emit("delete",t)}},props:{history:{type:Array,default:function(){return[]}}}},B={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"history"},t._l(t.history,function(e,i){return s("li",{staticClass:"history-item"},[s("i",{staticClass:"icon-lishijiluxianxing"}),t._v(" "),s("span",[t._v(t._s(e))]),t._v(" "),s("i",{staticClass:"icon-shachu-xue",on:{click:function(e){t.deleteHistory(i)}}})])}))},staticRenderFns:[]};var D=s("VU/8")(M,B,!1,function(t){s("KcEw")},"data-v-639532c8",null).exports,K={name:"search-list",created:function(){},filters:{musicSrc:function(t){return"https://y.gtimg.cn/music/photo_new/T001R68x68M000"+t+".jpg?max_age=2592000"},toString:function(t){return t.join(" / ")},photoSrc:function(t){return"https://y.gtimg.cn/music/photo_new/T002R68x68M000"+t+".jpg?max_age=2592000"}},props:{searchList:{type:Object,default:function(){return{isAll:!1,zhida:{albumid:"",albumnum:"",albummid:"",albumname:"",singername:"",singermid:"",songnum:"",type:0},list:[{songname:"",songmid:"",singer:[]}]}}}},data:function(){return{}}},J={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{ref:"list",staticClass:"songList"},[2==t.searchList.zhida.type?s("li",{staticClass:"singer-zhida song-list-item"},[t.searchList.zhida.singermid?s("img",{attrs:{src:t._f("musicSrc")(t.searchList.zhida.singermid)}}):t._e(),t._v(" "),s("h5",[t._v(t._s(t.searchList.zhida.singername))]),t._v(" "),s("p",[s("span",[t._v("单曲: "+t._s(t.searchList.zhida.songnum))]),t._v(" "),s("span",[t._v("专辑: "+t._s(t.searchList.zhida.albumnum))])])]):s("li",{staticClass:"singer-zhida song-list-item"},[t.searchList.zhida.albummid?s("img",{attrs:{src:t._f("photoSrc")(t.searchList.zhida.albummid)}}):t._e(),t._v(" "),s("h5",[t._v(t._s(t.searchList.zhida.albumname))]),t._v(" "),s("p",[t._v("\n\t\t\t"+t._s(t.searchList.zhida.singername)+"\n\t\t")])]),t._v(" "),t._l(t.searchList.list,function(e){return s("li",{key:e.songmid,staticClass:"song-list-item"},[s("i",{staticClass:"icon-bofang"}),t._v(" "),s("h5",[t._v(t._s(e.songname))]),t._v(" "),s("p",[t._v(t._s(t._f("toString")(e.singer)))])])}),t._v(" "),s("keep-alive",[t.searchList.isAll?s("li",{staticClass:"loaded song-list-item"},[t._v("已全部加载")]):s("li",{staticClass:"song-list-item loading"},[s("i",{staticClass:"icon-jiazai"})])])],2)},staticRenderFns:[]};var G={name:"search",components:{HotSearch:P,History:D,SearchList:s("VU/8")(K,J,!1,function(t){s("sZym")},null,null).exports},data:function(){return{on:!0,search:"",onfocus:!1,special:{key:"",url:""},hotkey:[],histories:[],isHistory:!0,p:1,songList:[],searchList:{isAll:!1,zhida:{},list:{}}}},created:function(){this._getHotKey()},methods:{copyHot:function(t){this.search=t,this.$refs.input.focus()},scroll:function(){var t=this;if(this.on&&this.$refs.search.scrollHeight-this.$refs.search.scrollTop<=this.$refs.search.clientHeight){this._getSearchList(),this.on=!1;var e=setTimeout(function(){t.on=!0,clearTimeout(e)},3e3)}},deleteHistory:function(t){this.histories.splice(t,1)},delete:function(){},empty:function(){this.search=""},cancle:function(){this.changeFocus(!1),this.isHistory=!0,this.search="",this.searchList={isAll:!1,zhida:{},list:{}}},_getSearchList:function(){var t,e,s=this;(t=this.search,e=this.p,S("https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp",L()({},F,{format:"jsonp",uin:0,plateform:"h5",needNewCode:1,zhidaqu:1,catZhida:1,flag:1,perpage:20,w:t,t:0,ie:"utf-8",sem:1,aggr:0,n:20,p:e,remoteplace:"txt.mqq.all"}),U)).then(function(t){if(0===t.code){var e=t.data.zhida,i=t.data.song,n=i.list,a=!(i.totalnum-i.curnum*i.curpage>0),r=new Array;n.forEach(function(t){var e=new Object;e.songname=t.songname,e.songmid=t.songmid,e.singer=new Array,t.singer.forEach(function(t){e.singer.push(t.name)}),r.push(e)}),s.searchList.list.length?(s.songList=s.songList.concat(r),s.searchList=L()({},s.searchList,{zhida:e,isAll:a,list:s.songList})):(s.songList=r,s.searchList=L()({},s.searchList,{zhida:e,isAll:a,list:s.songList})),s.p++}})},searching:function(){var t,e,s,i;""!=this.search&&(t=this.histories,e=this.search,s=0,i=t.indexOf(e),void 0!=s?i>-1?s<t.length?(t.splice(i,1),t.splice(s,0,e)):(t.splice(i,1),t.push(e)):s<t.length?t.splice(s,0,e):t.push(e):i>-1?(t.splice(i,1),t.push(e)):t.push(e),this.songList=[],this.searchList={isAll:!1,zhida:{},list:{}},this.isHistory=!1,this.p=1,this._getSearchList())},_getHotKey:function(){var t=this;S("https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg",L()({},F,{uin:0,plateform:"h5",needNewCode:1}),U).then(function(e){if(0===e.code){var s=e.data.special_key,i=e.data.special_url;t.special={key:s,url:i},t.hotkey=e.data.hotkey.sort(function(){return Math.random-.5}).splice(0,6)}})},changeFocus:function(t){this.onfocus=t}}},Q={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{ref:"search",staticClass:"search",on:{scroll:t.scroll}},[s("div",{staticClass:"search-form"},[s("div",{staticClass:"search-input"},[s("i",{staticClass:"icon-sousuo"}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],ref:"input",staticClass:"search-input-text",class:{focus:t.onfocus},attrs:{placeholder:"搜索歌曲，歌单，专辑",type:"text"},domProps:{value:t.search},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.searching(e):null},focus:function(e){t.changeFocus(!0)},input:function(e){e.target.composing||(t.search=e.target.value)}}}),t._v(" "),s("i",{directives:[{name:"show",rawName:"v-show",value:t.search,expression:"search"}],staticClass:"icon-empty",on:{click:t.empty}})]),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:t.onfocus,expression:"onfocus"}],staticClass:"delete",on:{click:t.cancle}},[t._v("取消")])]),t._v(" "),s("keep-alive",[t.onfocus?t.isHistory?s("history",{attrs:{history:t.histories},on:{delete:t.deleteHistory}}):s("search-list",{attrs:{searchList:t.searchList}}):s("hot-search",{attrs:{special:t.special,hotkey:t.hotkey},on:{copyHot:t.copyHot}})],1)],1)},staticRenderFns:[]};var X=s("VU/8")(G,Q,!1,function(t){s("egRZ")},"data-v-608939e0",null).exports,Y={render:function(){var t=this.$createElement;return(this._self._c||t)("section",[this._v("\r\n  rank\r\n")])},staticRenderFns:[]};s("VU/8")({name:""},Y,!1,function(t){s("F6VQ")},"data-v-7ca46708",null).exports;var tt={render:function(){var t=this.$createElement;return(this._self._c||t)("section",[this._v("\n  singer\n")])},staticRenderFns:[]};s("VU/8")({name:""},tt,!1,function(t){s("Iad2")},"data-v-5dc2eaed",null).exports;var et={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"server-agrement"},[s("img",{staticClass:"top-tip",attrs:{src:t.topTip}}),t._v(" "),s("img",{staticClass:"logo",attrs:{src:t.logo}}),t._v(" "),s("h2",{staticClass:"title"},[t._v("酷狗用户服务协议")]),t._v(" "),s("img",{staticClass:"user-server",attrs:{src:t.userServer}}),t._v(" "),t._m(0),t._v(" "),s("p",{staticClass:"author"},[t._v("\n    酷狗公司\n  ")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("dl",[s("dt",[t._v("\n      1.特别提醒\n    ")]),t._v(" "),s("dd",[t._v("\n      1.1.在您开始阅读并决定是否接受《酷狗用户服务协议》（以下称“本协议”）之前，酷狗公司特别提醒您应留意本协议中 "),s("em",[t._v("加粗形式")]),t._v("的条款内容。\n    ")]),t._v(" "),s("dd",[t._v("\n      1.2.除非您已阅读并接受本协议所有条款，否则您无权使用本服务。您对本服务的登录、查看、下载、发布信息、使用等行为即视为您已阅读并同意受本协议的约束。\n    ")]),t._v(" "),s("dd",[s("em",[t._v("1.3.若您是18周岁以下的未成年人，在使用酷狗公司服务前，请您务必先取得您家长或法定监护人的书面同意，并在监护人在场的情况进行使用本协议所述的服务。")])]),t._v(" "),s("dd",[t._v("\n      1.4.本协议各条款的标题仅为方便检索使用，部分标题下的条款内容可能将作为独立的法律文件、相关业务规则（以下统称“单独协议”）供您阅读并遵守。\n    ")]),t._v(" "),s("dt",[t._v("\n        2.定义解释\n    ")]),t._v(" "),s("dd",[t._v("\n      2.1 本协议中的“酷狗公司”将包括但不限于酷狗公司和/或其关联企业。关联企业是指控制酷狗公司，或被酷狗公司所控制，或与酷狗公司共同受控制于同一实体的任何企业。控制是指直接或间接拥有酷狗公司百分之五十（50％）以上的股权、投票权或管理权，或通过协议控制酷狗公司管理权。\n    ")]),t._v(" "),s("dd",[t._v("\n      2.2.本协议中的“用户”指在阅读本协议后选择接受本协议全部条款的个人使用者。用户可通过注册、登录酷狗公司帐号或选择其他第三方登录的方式使用服务，但是否注册、登录酷狗公司帐号或选择其他第三方登录的方式不影响其作为本协议项下的用户身份。\n    ")]),t._v(" "),s("dd",[t._v("\n      2.3.本协议中的“服务”指软件、相关网站以及酷狗公司和/或其关联企业提供的其他服务。\n    ")]),t._v(" "),s("dd",[t._v("\n      2.4.本协议中的“软件”指酷狗公司提供的包括但不限于电脑客户端及移动客户端等，用户通过该电脑客户端及移动客户端等进行搜索、试听、下载及管理等。\n    ")]),t._v(" "),s("dd",[t._v("\n      2.5.本协议中的“信息内容”将可能包括但不限于任何在服务中及软件上的资料、文字、软件、音频、图片、视频、图表、广告以及其他资料等。\n    ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"footer"},[e("p",[this._v("\n\n          广州酷狗计算机科技有限公司 Copyright © 2004-2018 KuGou-Inc.All Rights Reserved\n\n    ")])])}]};var st=s("VU/8")({name:"ServerAgrement",data:function(){return{topTip:"./static/topTips.jpg",logo:"./static/logo-icon.jpg",userServer:"./static/userService.jpg"}}},et,!1,function(t){s("6b1G")},"data-v-0846fa24",null).exports,it={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("dl",[s("dt",[t._v("\n    安卓：\n  ")]),t._v(" "),s("dd",[s("ol",[s("li",[t._v("打开手机菜单中的“设置”选项;")]),t._v(" "),s("li",[t._v("选择“应用程序”;  ")]),t._v(" "),s("li",[t._v('选择“应用程序管理";"')]),t._v(" "),s("li",[t._v("在所列的所用应用程序中选择酷狗音乐；")]),t._v(" "),s("li",[t._v("点击删除按钮，然后点击确定，就能把酷狗音乐删除")])])]),t._v(" "),s("dt",[t._v("\n    iOS：\n  ")]),t._v(" "),s("dd",[s("ol",[s("li",[t._v("在手机桌面长按酷狗音乐的应用图标；")]),t._v(" "),s("li",[t._v("点击图标左上角的X，即可删除酷狗音乐")])])])])}]};var nt=s("VU/8")({name:""},it,!1,function(t){s("pofP")},"data-v-71816be2",null).exports,at=s("v5o6"),rt=s.n(at),ct=s("lJzc"),ot=s.n(ct);rt.a.attach(document.body),i.a.use(r.a),i.a.use(ot.a,{loading:s("NlnS"),preLoad:1});var lt=new r.a({linkActiveClass:"active",routes:[{path:"/",redirect:"/come"},{path:"/home",component:k,children:[{path:"/",component:O},{path:"/recommend",component:O},{path:"/rank",component:A},{path:"/search",component:X}]},{path:"/come",component:h,children:[{path:"/",component:O},{path:"/recommend",component:O},{path:"/rank",component:A},{path:"/search",component:X}]},{path:"/server",component:st},{path:"/uninstall",component:nt}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:lt,render:function(t){return t(a)}})},NlnS:function(t,e,s){t.exports=s.p+"static/img/lazy.0dcc05e.png"},W52o:function(t,e){},Z4ul:function(t,e){},cCWZ:function(t,e){!function(t,e){"use strict";var s={};!function(){var i=e.querySelector('meta[name="viewport"]'),n=e.querySelector('meta[name="hotcss"]'),a=t.devicePixelRatio||1,r=540,c=0;if(a=a>=3?3:a>=2?2:1,n){var o=n.getAttribute("content");if(o){var l=o.match(/initial\-dpr=([\d\.]+)/);l&&(a=parseFloat(l[1]));var u=o.match(/max\-width=([\d\.]+)/);u&&(r=parseFloat(u[1]));var d=o.match(/design\-width=([\d\.]+)/);d&&(c=parseFloat(d[1]))}}e.documentElement.setAttribute("data-dpr",a),s.dpr=a,e.documentElement.setAttribute("max-width",r),s.maxWidth=r,c&&e.documentElement.setAttribute("design-width",c),s.designWidth=c;var p=1/a,h="width=device-width, initial-scale="+p+", minimum-scale="+p+", maximum-scale="+p+", user-scalable=no";i?i.setAttribute("content",h):((i=e.createElement("meta")).setAttribute("name","viewport"),i.setAttribute("content",h),e.head.appendChild(i))}(),s.px2rem=function(t,e){return e||(e=parseInt(s.designWidth,10)),320*parseInt(t,10)/e/20},s.rem2px=function(t,e){return e||(e=parseInt(s.designWidth,10)),20*t*e/320},s.mresize=function(){var i=e.documentElement.getBoundingClientRect().width||t.innerWidth;if(s.maxWidth&&i/s.dpr>s.maxWidth&&(i=s.maxWidth*s.dpr),!i)return!1;e.documentElement.style.fontSize=20*i/320+"px",s.callback&&s.callback()},s.mresize(),t.addEventListener("resize",function(){clearTimeout(s.tid),s.tid=setTimeout(s.mresize,33)},!1),t.addEventListener("load",s.mresize,!1),setTimeout(function(){s.mresize()},333),t.hotcss=s}(window,document)},egRZ:function(t,e){},kDZA:function(t,e){},kvO6:function(t,e){},lMkc:function(t,e){},pofP:function(t,e){},sZym:function(t,e){},v2ns:function(t,e){},vMag:function(t,e){}},[0]);
//# sourceMappingURL=app.6f90dbbd7a69d3f32a36.js.map