(function(e){function t(t){for(var a,c,i=t[0],o=t[1],l=t[2],d=0,f=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&f.push(n[c][0]),n[c]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);u&&u(t);while(f.length)f.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],a=!0,i=1;i<s.length;i++){var o=s[i];0!==n[o]&&(a=!1)}a&&(r.splice(t--,1),e=c(c.s=s[0]))}return e}var a={},n={app:0},r=[];function c(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.m=e,c.c=a,c.d=function(e,t,s){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(s,a,function(t){return e[t]}.bind(null,a));return s},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=o;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("cd49")},3022:function(e,t,s){"use strict";var a=s("ceb8"),n=s.n(a);n.a},4678:function(e,t,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=r(e);return s(t)}function r(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=r,e.exports=n,n.id="4678"},"5c0b":function(e,t,s){"use strict";var a=s("9c0c"),n=s.n(a);n.a},6002:function(e,t,s){"use strict";var a=s("615e"),n=s.n(a);n.a},"615e":function(e,t,s){},"9c0c":function(e,t,s){},c450:function(e,t,s){},cd49:function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),n=s("a65d"),r=s.n(n),c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"background-root"},[s("div",{class:["background",{"background-fast":1===e.smoothBackground,"background-smooth":2===e.smoothBackground}],style:{"background-color":e.background}})]),s("div",{staticClass:"contents"},[s("div",{staticClass:"greeting"},[s("h1",[e._v("Hi, I'm Eric Rabil")]),s("discord-status"),s("social-things")],1)])])},i=[],o=s("d4ec"),l=s("bee2"),u=s("2caf"),d=s("262e"),f=s("9ab4"),b=s("60a3"),p=s("5140"),j=s.n(p),h=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"social-tray"},[s("social-link",{attrs:{link:"https://github.com/EricRabil",icon:"github"}}),s("social-link",{attrs:{link:"https://twitter.com/ericrabil",icon:"twitter"}}),s("social-link",{attrs:{link:"https://instagram.com/ericrabil",icon:"instagram"}}),s("social-link",{attrs:{link:"https://old.reddit.com/u/ericrabil",icon:"reddit"}}),s("social-link",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:"eric#1111",expression:"'eric#1111'",modifiers:{bottom:!0}}],attrs:{icon:"discord"},on:{click:e.copy}})],1)},m=[],v=(s("96cf"),s("1da1")),g=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("a",e._g({staticClass:"fa-wrap",attrs:{href:e.link,"aria-label":e.icon}},e.$listeners),[s("font-awesome-icon",{attrs:{icon:["fab",e.icon]}})],1)},k=[],y=function(e){Object(d["a"])(s,e);var t=Object(u["a"])(s);function s(){return Object(o["a"])(this,s),t.apply(this,arguments)}return s}(b["c"]);Object(f["a"])([Object(b["b"])()],y.prototype,"link",void 0),Object(f["a"])([Object(b["b"])()],y.prototype,"icon",void 0),y=Object(f["a"])([b["a"]],y);var O=y,w=O,_=(s("3022"),s("2877")),x=Object(_["a"])(w,g,k,!1,null,null,null),C=x.exports,I=function(e){Object(d["a"])(s,e);var t=Object(u["a"])(s);function s(){return Object(o["a"])(this,s),t.apply(this,arguments)}return Object(l["a"])(s,[{key:"copy",value:function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$copyText("eric#1111");case 2:this.$toasted.show("I copied my Discord to the clipboard 💕",{className:"toast"}).goAway(2e3);case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),s}(b["c"]);I=Object(f["a"])([Object(b["a"])({components:{SocialLink:C}})],I);var z,S=I,E=S,L=(s("d241"),Object(_["a"])(E,h,m,!1,null,null,null)),T=L.exports;(function(e){e[e["INIT"]=0]="INIT",e[e["PRELOAD"]=1]="PRELOAD",e[e["ROLLING"]=2]="ROLLING"})(z||(z={}));var $=function(e){Object(d["a"])(s,e);var t=Object(u["a"])(s);function s(){var e;return Object(o["a"])(this,s),e=t.apply(this,arguments),e.smoothBackground=z.PRELOAD,e}return Object(l["a"])(s,[{key:"mounted",value:function(){var e=this;this.$watch("background",(function(t){switch(e.smoothBackground){case z.INIT:e.smoothBackground=z.PRELOAD;break;case z.PRELOAD:e.smoothBackground=z.ROLLING;break}})),this.$el.classList.remove("from-ssr")}},{key:"stops",get:function(){return j()({stops:10,inputFormat:"hex",colorArray:[this.background,"#000000"]})}},{key:"background",get:function(){return this.$store.state.backgroundColor}}]),s}(b["c"]);$=Object(f["a"])([Object(b["a"])({components:{SocialThings:T}})],$);var A=$,P=A,D=(s("5c0b"),Object(_["a"])(P,c,i,!1,null,null,null)),N=D.exports,R=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.presences.length>0?s("div",{staticClass:"status-holder"},e._l(e.presences,(function(t,a){return s("div",{key:a,staticClass:"presence-root"},["Spotify"===t.name?s("spotify-presence",{attrs:{presence:t,assets:e.spotifyAssets}}):"Visual Studio Code"===t.name?s("code-presence",{attrs:{presence:t}}):e._e()],1)})),0):e._e()},B=[],M=(s("4160"),s("a630"),s("d3b7"),s("25f0"),s("3ca3"),s("159b"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"presence spotify-presence"},[s("span",{staticClass:"presence-cta"},[e._v("Listening to Spotify")]),s("div",{staticClass:"presence-detail"},[e.artwork?s("img",{ref:"artHolder",staticClass:"detail-asset",attrs:{src:e.artwork,alt:"Album Artwork"}}):e._e(),s("div",{staticClass:"detail-text"},[s("span",{staticClass:"detail-major"},[e._v(" "+e._s(e.song)+" ")]),s("span",{staticClass:"detail-minor"},[e._v(" by "+e._s(e.artist)+" ")]),e.album?s("span",{staticClass:"detail-minor"},[e._v(" on "+e._s(e.album)+" ")]):e._e()])])])}),G=[],J=(s("ac1f"),s("1276"),s("3835")),W=function(e){Object(d["a"])(s,e);var t=Object(u["a"])(s);function s(){var e;return Object(o["a"])(this,s),e=t.apply(this,arguments),e.index=0,e}return Object(l["a"])(s,[{key:"mounted",value:function(){this.roll()}},{key:"roll",value:function(){this.$store.commit("setBackground",this.next()),this.interval=setTimeout(this.roll,15e3)}},{key:"next",value:function(){if(!this.palette)return null;if(0===this.palette.length)return null;var e=this.palette[this.index];return this.index+=1,this.index>=this.palette.length&&(this.index=0),e}},{key:"artwork",get:function(){return this.presence&&this.presence.data?this.presence.data.artwork:null}},{key:"palette",get:function(){return this.presence&&this.presence.data?this.presence.data.palette:[]}},{key:"tag",get:function(){var e=this.presence.assets||{},t=e.largeImage;if(!t)return null;var s=t.split(":"),a=Object(J["a"])(s,2),n=a[0],r=a[1];return"spotify"!==n?null:r}},{key:"album",get:function(){return this.presence.assets&&this.presence.assets.largeText||null}},{key:"artist",get:function(){return this.presence.state}},{key:"song",get:function(){return this.presence.details}}]),s}(b["c"]);Object(f["a"])([Object(b["b"])()],W.prototype,"presence",void 0),W=Object(f["a"])([b["a"]],W);var q=W,F=q,H=Object(_["a"])(F,M,G,!1,null,null,null),U=H.exports,V=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"presence code-presence"},[s("span",{staticClass:"presence-cta"},[e._v(" Coding ")]),s("div",{staticClass:"presence-detail"},[s("img",{staticClass:"detail-asset",attrs:{src:e.largeImage,alt:"Visual Studio Code Icon"}}),s("div",{staticClass:"detail-text"},[s("span",{staticClass:"detail-major"},[e._v(" "+e._s(e.task)+" ")]),e.workspace?s("span",{staticClass:"detail-minor"},[e._v(" "+e._s(e.workspace)+" ")]):e._e(),s("span",{staticClass:"detail-minor"},[e._v(" in "+e._s(e.appName)+" ")]),e.time?s("span",{staticClass:"detail-muted"},[e._v(e._s(e.time)+" elapsed")]):e._e()])])])},K=[],Q=(s("99af"),s("c1df")),X=s.n(Q),Y=function(e,t){return"https://cdn.discordapp.com/app-assets/".concat(e,"/").concat(t,".png")},Z=function(e){Object(d["a"])(s,e);var t=Object(u["a"])(s);function s(){var e;return Object(o["a"])(this,s),e=t.apply(this,arguments),e.time=null,e}return Object(l["a"])(s,[{key:"mounted",value:function(){var e=this;setInterval((function(){e.updateTime()}),1e3),this.updateTime()}},{key:"updateTime",value:function(){if(this.start){var e=X()(this.start);this.time=X()(X()().diff(e)).format("mm:ss")}}},{key:"start",get:function(){return this.presence.timestamps?this.presence.timestamps.start:null}},{key:"appName",get:function(){return this.assets&&this.assets.smallText?this.assets.smallText:null}},{key:"task",get:function(){return this.presence.details?this.presence.details:this.assets&&this.assets.largeText?this.assets.largeText:null}},{key:"workspace",get:function(){return this.presence.state||null}},{key:"largeImage",get:function(){return this.assets&&this.assets.largeImage&&this.presence.applicationID?Y(this.presence.applicationID,this.assets.largeImage):null}},{key:"smallImage",get:function(){return this.assets&&this.assets.smallImage&&this.presence.applicationID?Y(this.presence.applicationID,this.assets.smallImage):null}},{key:"assets",get:function(){return this.presence.assets?this.presence.assets:null}}]),s}(b["c"]);Object(f["a"])([Object(b["b"])()],Z.prototype,"presence",void 0),Z=Object(f["a"])([b["a"]],Z);var ee=Z,te=ee,se=Object(_["a"])(te,V,K,!1,null,null,null),ae=se.exports,ne="wss://api.ericrabil.com/presence/",re=function(e){Object(d["a"])(s,e);var t=Object(u["a"])(s);function s(){var e;return Object(o["a"])(this,s),e=t.apply(this,arguments),e.presences=[],e.spotifyAssets={},e.socket=null,e.observing=!1,e}return Object(l["a"])(s,[{key:"created",value:function(){this.respawnSocket()}},{key:"respawnSocket",value:function(){var e=this;this.socket=new WebSocket(ne),this.socket.addEventListener("message",(function(t){var s=t.data,a=JSON.parse(s),n=a.activities,r=a.spotifyAssets;e.presences=n,e.spotifyAssets=r})),this.socket.addEventListener("close",(function(){return setTimeout((function(){return e.respawnSocket()}),5e3)}))}},{key:"mounted",value:function(){var e=this;this.$watch("presences",(function(t){if(!e.observing){var s=function(){if(e.$el&&e.$el.children){var t=Array.from(e.$el.children);t.sort((function(e,t){return t.clientWidth-e.clientWidth})),t.forEach((function(e,t){e.style.order=t.toString(),e.classList.toggle("no-margin",1===t)}))}},a=new MutationObserver((function(e){s()}));s(),a.observe(e.$el,{childList:!0,subtree:!0,characterData:!0}),e.observing=!0}}))}}]),s}(b["c"]);re=Object(f["a"])([Object(b["a"])({components:{SpotifyPresence:U,CodePresence:ae}})],re);var ce=re,ie=ce,oe=(s("6002"),Object(_["a"])(ie,R,B,!1,null,null,null)),le=oe.exports,ue=s("2f62");a["a"].use(ue["a"]);var de=new ue["a"].Store({state:{backgroundColor:"#ff0000"},mutations:{setBackground:function(e,t){a["a"].set(e,"backgroundColor",t||"#ff0000")}},actions:{},modules:{}}),fe=s("ecee"),be=s("f2d1"),pe=s("ad3d"),je=s("e37d"),he=s("4eb5"),me=s.n(he);fe["c"].add(be["b"],be["e"],be["c"],be["d"],be["a"]),a["a"].component("font-awesome-icon",pe["a"]),a["a"].use(je["a"]),a["a"].use(r.a),me.a.config.autoSetContainer=!0,a["a"].use(me.a),a["a"].config.productionTip=!1,a["a"].component("discord-status",le),new a["a"]({store:de,render:function(e){return e(N)},mounted:function(){return document.dispatchEvent(new Event("x-app-rendered"))}}).$mount("#app")},ceb8:function(e,t,s){},d241:function(e,t,s){"use strict";var a=s("c450"),n=s.n(a);n.a}});
//# sourceMappingURL=app.181ca20e.js.map