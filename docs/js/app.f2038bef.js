(function(e){function t(t){for(var n,r,i=t[0],c=t[1],l=t[2],p=0,d=[];p<i.length;p++)r=i[p],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,i=1;i<a.length;i++){var c=a[i];0!==s[c]&&(n=!1)}n&&(o.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},s={app:0},o=[];function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"0359":function(e,t,a){"use strict";var n=a("3ca6"),s=a.n(n);s.a},"03c5":function(e,t,a){},1:function(e,t){},"3ca6":function(e,t,a){},"815e":function(e,t,a){"use strict";var n=a("f5ca"),s=a.n(n);s.a},a21b:function(e,t,a){"use strict";var n=a("ae71"),s=a.n(n);s.a},a840:function(e,t,a){"use strict";var n=a("03c5"),s=a.n(n);s.a},ae71:function(e,t,a){},bcda:function(e,t,a){},c898:function(e,t,a){},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n,s=a("2b0e"),o=a("750b"),r=a("ecee"),i=a("ad3d"),c=a("c074"),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",{staticClass:"flex justify-center content-center my-20",attrs:{id:"app"}},[a("div",{staticClass:"flex flex-wrap container px-2"},[a("VideoPlayer",{staticClass:"px-2 w-full md:w-full lg:w-4/6"}),a("PlayList",{staticClass:"w-full md:w-full lg:w-2/6"})],1)])},u=[],p=(a("a4d3"),a("e01a"),a("d3b7"),Symbol()),d=function(e){return Object(o["g"])(p,e)},f=function(){return Object(o["d"])(p)},y=function(e){return{playList:function(){return e.playList},tileIndex:function(){return e.tileIndex},autoPlay:function(){return e.autoPlay},currentPlayingVideo:function(){return e.currentPlayingVideo}}},g=function(e){return{playList:function(){return e.playList}}},m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"playlist rounded overflow-hidden"},[e._m(0),a("PlayListMeta",{attrs:{progress:e.progress,lessonsWatched:e.state.lessonsWatched,numberOfLessons:e.state.numberOfLessons,autoPlayEnabled:e.autoPlayEnabled},on:{onChange:e.setAutoPlay}}),a("ul",{staticClass:"playlist-tile-container"},e._l(e.state.playList,(function(t,n){return a("li",{key:t.id},[a("Tile",{attrs:{video:t,tileIndex:n,nowPlaying:t.id===e.nowPlaying,upNext:e.tileIndex+1===n},on:{onSelected:e.selectVideo}})],1)})),0)],1)},v=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"playlist-playing-banner flex flex-row items-center px-2 py-4"},[n("img",{staticClass:"w-20 mr-3",attrs:{src:a("cf05"),alt:"Vue logo"}}),n("p",{staticClass:"text-xl"},[e._v("Build a responsive video player with Tailwind and Vue 3 composition api")])])}],h=(a("4de4"),a("a630"),a("3ca3"),a("ddb0"),a("96cf"),a("1da1")),b=(a("99af"),a("13d5"),a("4ec9"),a("ade3")),x=a("2909"),w=a("2f62"),_=a("7b79"),P=a("c2be"),O=a("fb10"),j=[{id:1,title:"Ocean feeding frenzy",author:"Super Mario",duration:2e5,sources:[{src:"https://vjs.zencdn.net/v/oceans.mp4",type:"video/mp4"}],watched:!1},{id:2,title:"Big buck bunny short film",author:"Super Mario",duration:3e5,sources:[{src:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",type:"video/mp4"}],watched:!1},{id:3,title:"Elephants dream short film",author:"Super Mario",duration:4e5,sources:[{src:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",type:"video/mp4"}],watched:!1},{id:4,title:"Chromecast commercial: For bigger blazes",author:"Super Mario",duration:6e5,sources:[{src:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",type:"video/mp4"}],watched:!1},{id:5,title:"Chromecast commercial: For bigger escapes",author:"Super Mario",duration:5e5,sources:[{src:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",type:"video/mp4"}],watched:!1},{id:6,title:"Chromecast commercial: For bigger fun",author:"Super Mario",duration:2e5,sources:[{src:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",type:"video/mp4"}],watched:!1},{id:7,title:"Chromecast commercial: For bigger joy rides",author:"Super Mario",duration:7e5,sources:[{src:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",type:"video/mp4"}],watched:!1}],C=function(e,t){return new Promise((function(t,a){e?t(j):a({message:"Error"})}))};s["a"].use(w["a"]);var L="set_playlist",S="set_auto_play",V="set_tile_index",k="video_finished_playing",I="set_current_playing_video",M=new w["a"].Store({state:{tileIndex:0,autoPlay:!1,playList:new Map,currentPlayingVideo:null},getters:{playList:function(e){return Array.from(e.playList.values())}},actions:{getPlayList:function(e){return Object(h["a"])(regeneratorRuntime.mark((function t(){var a,n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,t.next=3,C(!0,1e3);case 3:n=t.sent,s=n.reduce((function(e,t,a){return e.set(a+1,t),e}),new Map),_["a"]((function(e){s.has(e)&&N(s,e)}),E("watchedVideos")),a(L,s),a(I,s.get(1)),a(S,"true"===localStorage.getItem("autoPlay"));case 9:case"end":return t.stop()}}),t)})))()},selectVideo:function(e,t){var a=e.commit,n=e.state,s=t.id,o=t.index;if(!n.playList.has(s))throw"The video you are trying to view does not exists in this play list.";a(V,o),a(I,n.playList.get(s))}},mutations:(n={},Object(b["a"])(n,V,(function(e,t){s["a"].set(e,"tileIndex",t)})),Object(b["a"])(n,L,(function(e,t){s["a"].set(e,"playList",t)})),Object(b["a"])(n,I,(function(e,t){s["a"].set(e,"currentPlayingVideo",t)})),Object(b["a"])(n,k,(function(e,t){if(!e.playList.has(t))throw"Invalid video id passed in.";N(e.playList,t),localStorage.setItem("watchedVideos",JSON.stringify([].concat(Object(x["a"])(E("watchedVideos")),[t])))})),Object(b["a"])(n,S,(function(e,t){s["a"].set(e,"autoPlay",t),localStorage.setItem("autoPlay",String(t))})),n)});function N(e,t){e.set(t,P["a"](O["a"]("watched"),!0,e.get(t)))}function E(e){var t=localStorage.getItem(e);return t?JSON.parse(t):[]}var B=function(e,t){var a=t._c;return a("div",{class:{"now-playing":t.props.nowPlaying}},[t.props.nowPlaying?a("span",{staticClass:"text-xs uppercase pl-2 pt-3"},[t._v("Now playing")]):t._e(),t.props.upNext?a("span",{staticClass:"text-xs uppercase pl-2 pt-3"},[t._v("Up next")]):t._e(),a("a",{staticClass:"flex flex-row items-center p-4 leading-tight",class:{"pt-0":!!t.props.nowPlaying||!!t.props.upNext},attrs:{href:"#"},on:{click:function(e){return t.listeners.onSelected(t.props.video.id,t.props.tileIndex)}}},[a("span",{staticClass:"pr-3 py-2"},[t._v(t._s(t.props.tileIndex+1))]),a("div",[t.props.video.watched?a("font-awesome-icon",{staticClass:"mr-3 p-1 checkmark rounded-full",attrs:{icon:"check"}}):a("div",{staticClass:"text-sm pr-3 py-2"},[a("font-awesome-icon",{attrs:{icon:"play"}})],1)],1),a("div",[a("p",{staticClass:"py-2"},[t._v(t._s(t.props.video.title))]),a("span",{staticClass:"text-xs"},[t._v("3:01 - "+t._s(t.props.video.author))])])]),a("hr")])},F=[],T=(a("a840"),a("2877")),A={},W=Object(T["a"])(A,B,F,!0,null,"6eb3132c",null),$=W.exports,J=function(e,t){var a=t._c;return a("div",{staticClass:"playlist-meta flex flex-row flex-wrap justify-between pb-2"},[a("div",{staticClass:"flex flex-1 items-center text-xs"},[a("span",{staticClass:"pl-4 pr-3"},[t._v(t._s(t.props.lessonsWatched))]),a("div",{staticClass:"playlist-meta-progress-bar flex-1 rounded-full overflow-hidden"},[a("div",{staticClass:"playlist-meta-progress-bar-filled",style:{width:t.props.progress+"%"}})]),a("span",{staticClass:"pl-3 pr-3"},[t._v(t._s(t.props.numberOfLessons)+" videos")])]),a("div",{staticClass:"text-xs flex flex-row items-center"},[a("span",{staticClass:"pr-2"},[t._v("Autoplay")]),a("div",{staticClass:"pr-4 auto-play"},[a("label",{staticClass:"switch"},[a("input",{attrs:{type:"checkbox"},domProps:{checked:t.props.autoPlayEnabled},on:{change:t.listeners.onChange}}),a("span",{staticClass:"slider round"})])])])])},z=[],R=(a("d10e"),{}),D=Object(T["a"])(R,J,z,!0,null,null,null),U=D.exports,q=function(e,t){var a=t._c;return a("div",{staticClass:"flex justify-center"},[t.props.previousVideo?a("a",{staticClass:"showPreviousSlide",attrs:{href:"#"},on:{click:t.listeners.onShowPreviousSlide}},[t._v("< "+t._s(t.props.previousVideo.title))]):t._e(),t.props.nextVideo?a("a",{staticClass:"showNextSlide",attrs:{href:"#"},on:{click:t.listeners.onShowNextSlide}},[t._v(t._s(t.props.nextVideo.title)+" > ")]):t._e()])},G=[],H=(a("0359"),{}),K=Object(T["a"])(H,q,G,!0,null,"4fd22e87",null),Q=K.exports,X=function(e,t){var a=t._c;return a("div",{staticClass:"play-progress"},[a("span",{staticClass:"play-progress-watched"},[t._v(t._s(t.props.watchedItems))]),a("span",{staticClass:"play-progress-bar"}),a("span",{staticClass:"play-progress-list"},[t._v(t._s(t.props.playListLength))])])},Y=[],Z={},ee=Object(T["a"])(Z,X,Y,!0,null,null,null),te=ee.exports,ae=Object(o["c"])({components:{Tile:$,PlayListMeta:U,PlayListProgressBar:te},setup:function(){var e=f(),t=y(e.state),a=g(e.getters),n=Object(o["h"])({playList:[],lessonsWatched:0,numberOfLessons:0});return Object(o["e"])(Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.dispatch("getPlayList");case 2:n.playList=a.playList(),s(n),e.subscribe((function(e,t){e.type===k&&(n.playList=Array.from(t.playList.values()),s(n))}));case 5:case"end":return t.stop()}}),t)})))),{state:n,tileIndex:Object(o["a"])((function(){return t.tileIndex()})),autoPlayEnabled:Object(o["a"])((function(){return t.autoPlay()})),nowPlaying:Object(o["a"])((function(){return t.currentPlayingVideo().id})),progress:Object(o["a"])((function(){return n.lessonsWatched/n.numberOfLessons*100})),setAutoPlay:function(t){return e.commit(S,t.target.checked)},selectVideo:function(t,a){return e.dispatch("selectVideo",{id:t,index:a})}};function s(e){e.lessonsWatched=e.playList.filter((function(e){return e.watched})).length,e.numberOfLessons=e.playList.length}}}),ne=ae,se=(a("815e"),Object(T["a"])(ne,m,v,!1,null,"51e2e394",null)),oe=se.exports,re=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("video",{staticClass:"video-js",attrs:{id:"video",controls:""}}),a("TileNavigator",{attrs:{nextVideo:e.nextVideo,previousVideo:e.previousVideo},on:{onShowNextSlide:e.showNextVideo,onShowPreviousSlide:e.showPreviousVideo}})],1)},ie=[],ce=a("0495"),le=a("bf69"),ue=a("08a9"),pe=a("f0e2"),de=(a("fda2"),Object(o["c"])({components:{TileNavigator:Q},setup:function(){var e,t=f(),a=y(t.state),n=g(t.getters);return Object(o["e"])((function(){e=Object(pe["a"])("video",{controls:!0,preload:"auto"}),e.on("ended",r),e.ready(s(e)),t.subscribe(i(e))})),Object(o["f"])((function(){return!!e&&e.dispose()})),{nextVideo:Object(o["a"])((function(){return n.playList()[a.tileIndex()+1]})),previousVideo:Object(o["a"])((function(){return n.playList()[a.tileIndex()-1]})),showPreviousVideo:function(){n.playList().length&&!ce["a"](a.tileIndex(),0)&&l(!0)},showNextVideo:c};function s(e){return function(){var t=a.currentPlayingVideo().sources;t&&e.src(t)}}function r(){t.commit(k,a.currentPlayingVideo().id),a.autoPlay()&&c()}function i(e){return function(t,a){t.type===I&&("true"===localStorage.getItem("autoPlay")&&e.autoplay("play"),e.src(a.currentPlayingVideo.sources))}}function c(){n.playList().length&&!le["a"](a.tileIndex(),n.playList().length-1)&&l()}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],s=e?a.tileIndex()-1:a.tileIndex()+1,o=ue["a"]("id",n.playList()[s]);t.commit(V,s),t.commit(I,a.playList().get(o))}}})),fe=de,ye=(a("a21b"),Object(T["a"])(fe,re,ie,!1,null,"07bddabe",null)),ge=ye.exports,me=Object(o["c"])({name:"App",components:{PlayList:oe,VideoPlayer:ge},setup:function(e,t){var a=t.root.$store;d(a)}}),ve=me,he=Object(T["a"])(ve,l,u,!1,null,null,null),be=he.exports;a("c898");r["c"].add(c["b"],c["a"]),s["a"].config.productionTip=!1,s["a"].use(o["b"]),s["a"].component("font-awesome-icon",i["a"]),new s["a"]({store:M,render:function(e){return e(be)}}).$mount("#app")},cf05:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"},d10e:function(e,t,a){"use strict";var n=a("bcda"),s=a.n(n);s.a},f5ca:function(e,t,a){}});
//# sourceMappingURL=app.f2038bef.js.map