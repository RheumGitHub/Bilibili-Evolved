!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["feeds/filter"]=t():e["feeds/filter"]=t()}(self,(function(){return function(){var e,t,n={151:function(e,t,n){"use strict";n.r(t),n.d(t,{hasBlockedPattern:function(){return s}});const i=(e,t)=>!(!e||!t)&&(e.startsWith("/")&&e.endsWith("/")?new RegExp(e.slice(1,e.length-1)).test(t):t.includes(e)),s=(e,t)=>{const n=e.match(/(.+) up:([^ ]+)/);return n?i(n[1],t.text)&&i(n[2],t.username):i(e,t.text)}},420:function(e,t,n){var i=n(645)((function(e){return e[1]}));i.push([e.id,'body.enable-feeds-filter:not(.disable-feeds-filter):not(.by-type).feeds-filter-block-repost .bili-dyn-list__item[data-type="1"],\nbody.enable-feeds-filter:not(.disable-feeds-filter):not(.by-type).feeds-filter-block-repost .feed-card .card[data-type="1"] {\n  display: none !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter):not(.by-type).feeds-filter-block-textWithImages .bili-dyn-list__item[data-type="2"],\nbody.enable-feeds-filter:not(.disable-feeds-filter):not(.by-type).feeds-filter-block-textWithImages .feed-card .card[data-type="2"] {\n  display: none !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter):not(.by-type).feeds-filter-block-text .bili-dyn-list__item[data-type="4"],\nbody.enable-feeds-filter:not(.disable-feeds-filter):not(.by-type).feeds-filter-block-text .feed-card .card[data-type="4"] {\n  display: none !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter):not(.by-type).feeds-filter-block-video .bili-dyn-list__item[data-type="8"],\nbody.enable-feeds-filter:not(.disable-feeds-filter):not(.by-type).feeds-filter-block-video .feed-card .card[data-type="8"] {\n  display: none !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter):not(.by-type).feeds-filter-block-miniVideo .bili-dyn-list__item[data-type="16"],\nbody.enable-feeds-filter:not(.disable-feeds-filter):not(.by-type).feeds-filter-block-miniVideo .feed-card .card[data-type="16"] {\n  display: none !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter):not(.by-type).feeds-filter-block-column .bili-dyn-list__item[data-type="64"],\nbody.enable-feeds-filter:not(.disable-feeds-filter):not(.by-type).feeds-filter-block-column .feed-card .card[data-type="64"] {\n  display: none !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter):not(.by-type).feeds-filter-block-audio .bili-dyn-list__item[data-type="256"],\nbody.enable-feeds-filter:not(.disable-feeds-filter):not(.by-type).feeds-filter-block-audio .feed-card .card[data-type="256"] {\n  display: none !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter):not(.by-type).feeds-filter-block-bangumi .bili-dyn-list__item[data-type="512"],\nbody.enable-feeds-filter:not(.disable-feeds-filter):not(.by-type).feeds-filter-block-bangumi .feed-card .card[data-type="512"] {\n  display: none !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter):not(.by-type).feeds-filter-block-liveRecord .bili-dyn-list__item[data-type="2047"],\nbody.enable-feeds-filter:not(.disable-feeds-filter):not(.by-type).feeds-filter-block-liveRecord .feed-card .card[data-type="2047"] {\n  display: none !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter):not(.by-type).feeds-filter-block-share .bili-dyn-list__item[data-type="2048"],\nbody.enable-feeds-filter:not(.disable-feeds-filter):not(.by-type).feeds-filter-block-share .feed-card .card[data-type="2048"] {\n  display: none !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter):not(.by-type).feeds-filter-block-self-repost .bili-dyn-list__item[data-self-repost],\nbody.enable-feeds-filter:not(.disable-feeds-filter):not(.by-type).feeds-filter-block-self-repost .feed-card .card[data-self-repost] {\n  display: none !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter) .left-panel .scroll-content > *,\nbody.enable-feeds-filter:not(.disable-feeds-filter) .right-panel .scroll-content > * {\n  margin: 0 !important;\n  margin-bottom: 8px !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter) .left-panel > :not(:last-child) {\n  margin: 0 !important;\n  margin-bottom: 8px !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter) .left-panel .user-panel.f-left {\n  float: none !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter) .bili-dyn-home--member main section,\nbody.enable-feeds-filter:not(.disable-feeds-filter) .bili-dyn-home--member aside section {\n  margin-bottom: 0 !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter) .bili-dyn-home--member main section > *,\nbody.enable-feeds-filter:not(.disable-feeds-filter) .bili-dyn-home--member aside section > * {\n  margin-bottom: 8px !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter).feeds-filter-side-block-profile .left-panel .user-wrapper,\nbody.enable-feeds-filter:not(.disable-feeds-filter).feeds-filter-side-block-profile .bili-dyn-my-info {\n  display: none !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter).feeds-filter-side-block-following-tags .left-panel .tag-panel,\nbody.enable-feeds-filter:not(.disable-feeds-filter).feeds-filter-side-block-following-tags .right-panel .dyn-topic-panel,\nbody.enable-feeds-filter:not(.disable-feeds-filter).feeds-filter-side-block-following-tags .right-panel .new-topic-panel,\nbody.enable-feeds-filter:not(.disable-feeds-filter).feeds-filter-side-block-following-tags section .topic-panel {\n  display: none !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter).feeds-filter-side-block-notice .right-panel .notice-panel,\nbody.enable-feeds-filter:not(.disable-feeds-filter).feeds-filter-side-block-notice .bili-dyn-banner {\n  display: none !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter).feeds-filter-side-block-live .left-panel .live-panel,\nbody.enable-feeds-filter:not(.disable-feeds-filter).feeds-filter-side-block-live .bili-dyn-live-users {\n  display: none !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter).feeds-filter-side-block-trending-tags .right-panel .tag-panel,\nbody.enable-feeds-filter:not(.disable-feeds-filter).feeds-filter-side-block-trending-tags .topic-panel {\n  display: none !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter).feeds-filter-side-block-most-viewed .bili-dyn-up-list,\nbody.enable-feeds-filter:not(.disable-feeds-filter).feeds-filter-side-block-most-viewed .card-list .most-viewed-panel {\n  display: none !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter).feeds-filter-side-block-compose .bili-dyn-publishing {\n  display: none !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter) .bili-dyn-list__item.pattern-block,\nbody.enable-feeds-filter:not(.disable-feeds-filter) .feed-card .card.pattern-block {\n  display: none !important;\n}\nbody.disable-feeds-filter .feeds-filter-section {\n  display: none;\n}\n.feeds-filter {\n  background-color: white;\n  font-size: 12px;\n  width: 100%;\n  padding: 12px 16px;\n  border-radius: 4px;\n  box-sizing: border-box;\n  display: none;\n  flex-direction: column;\n  max-height: 80vh;\n  overflow: auto;\n  scrollbar-width: none !important;\n  overscroll-behavior: contain;\n}\n.feeds-filter::-webkit-scrollbar {\n  height: 0 !important;\n  width: 0 !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter) .feeds-filter {\n  display: flex;\n}\n.feeds-filter, .feeds-filter * {\n  transition: 0.2s ease-out;\n  transition-property: border-color, color, background-color;\n}\nbody.dark .feeds-filter {\n  color: #eee;\n  background-color: #444;\n}\n.feeds-filter .feeds-filter-header {\n  cursor: pointer;\n  margin-bottom: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.feeds-filter .feeds-filter-header h1 {\n  font-weight: normal;\n  font-size: 14px;\n  margin: 0;\n}\n.feeds-filter.collapse .feeds-filter-header {\n  margin-bottom: 0;\n}\n.feeds-filter.collapse .feeds-filter-header .be-icon {\n  transform: rotate(180deg);\n}\n.feeds-filter.collapse > :not(.feeds-filter-header) {\n  display: none;\n}\n.feeds-filter h2 {\n  font-weight: bold;\n  font-size: 13px;\n  margin: 0;\n  margin-bottom: 8px;\n}\n.feeds-filter .filter-type-switch {\n  flex: 0 0 49%;\n}\n.feeds-filter .filter-side-card-switch {\n  flex: 0 0 100%;\n}\n.feeds-filter .filter-types {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  margin-bottom: 18px;\n}\nbody.by-type .feeds-filter h2:nth-of-type(1),\nbody.by-type .feeds-filter .filter-types {\n  display: none;\n}\n.feeds-filter .filter-patterns:not(:empty) {\n  margin-bottom: 4px;\n}\n.feeds-filter .filter-patterns .pattern {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 4px 6px;\n  border-radius: 4px;\n  font-size: 12px;\n  border: 1px solid rgba(136, 136, 136, 0.2666666667);\n}\n.feeds-filter .filter-patterns .pattern:not(:last-child) {\n  margin-bottom: 4px;\n}\n.feeds-filter .filter-patterns .pattern .be-icon {\n  cursor: pointer;\n}\n.feeds-filter .add-pattern {\n  display: flex;\n  align-items: center;\n  margin-bottom: 18px;\n}\n.feeds-filter .add-pattern input {\n  font-size: 12px;\n}\n.feeds-filter .add-pattern .be-button {\n  margin-left: 6px;\n  padding: 4px 6px;\n}',""]),e.exports=i},866:function(e,t,n){var i=n(645)((function(e){return e[1]}));i.push([e.id,".feeds-filter-switch:not(:last-child) {\n  margin-bottom: 4px;\n}\n.feeds-filter-switch label {\n  cursor: pointer;\n  margin: 0;\n  padding: 4px 6px;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border: 1px solid rgba(136, 136, 136, 0.2666666667);\n}\n.feeds-filter-switch label .name {\n  font-size: 12px;\n}\n.feeds-filter-switch label .disabled {\n  color: var(--theme-color) !important;\n}\n.feeds-filter-switch label:hover {\n  background-color: rgba(136, 136, 136, 0.1333333333);\n}\n.feeds-filter-switch label input {\n  display: none;\n}\n.feeds-filter-switch label .be-icon.disabled {\n  display: none;\n}\n.feeds-filter-switch label.disabled .be-icon {\n  display: none;\n}\n.feeds-filter-switch label.disabled .be-icon.disabled {\n  display: block;\n}",""]),e.exports=i},645:function(e){"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,n,i){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var s={};if(i)for(var r=0;r<this.length;r++){
// eslint-disable-next-line prefer-destructuring
var l=this[r][0];null!=l&&(s[l]=!0)}for(var a=0;a<e.length;a++){var o=[].concat(e[a]);i&&s[o[0]]||(n&&(o[2]?o[2]="".concat(n," and ").concat(o[2]):o[2]=n),t.push(o))}},t}},379:function(e,t,n){"use strict";var i,s=function(){return void 0===i&&(
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// @see https://github.com/webpack-contrib/style-loader/issues/177
i=Boolean(window&&document&&document.all&&!window.atob)),i},r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),l=[];function a(e){for(var t=-1,n=0;n<l.length;n++)if(l[n].identifier===e){t=n;break}return t}function o(e,t){for(var n={},i=[],s=0;s<e.length;s++){var r=e[s],o=t.base?r[0]+t.base:r[0],d=n[o]||0,f="".concat(o," ").concat(d);n[o]=d+1;var c=a(f),p={css:r[1],media:r[2],sourceMap:r[3]};-1!==c?(l[c].references++,l[c].updater(p)):l.push({identifier:f,updater:m(p,t),references:1}),i.push(f)}return i}function d(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var s=n.nc;s&&(i.nonce=s)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var l=r(e.insert||"head");if(!l)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");l.appendChild(t)}return t}var f,c=(f=[],function(e,t){return f[e]=t,f.filter(Boolean).join("\n")});function p(e,t,n,i){var s=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=c(t,s);else{var r=document.createTextNode(s),l=e.childNodes;l[t]&&e.removeChild(l[t]),l.length?e.insertBefore(r,l[t]):e.appendChild(r)}}function b(e,t,n){var i=n.css,s=n.media,r=n.sourceMap;if(s?e.setAttribute("media",s):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var u=null,y=0;function m(e,t){var n,i,s;if(t.singleton){var r=y++;n=u||(u=d(t)),i=p.bind(null,n,r,!1),s=p.bind(null,n,r,!0)}else n=d(t),i=b.bind(null,n,t),s=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else s()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=s());var n=o(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var s=a(n[i]);l[s].references--}for(var r=o(e,t),d=0;d<n.length;d++){var f=a(n[d]);0===l[f].references&&(l[f].updater(),l.splice(f,1))}n=r}}}},188:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return _}});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"feeds-filter",class:{collapse:e.collapse}},[n("div",{staticClass:"feeds-filter-header",on:{click:function(t){e.collapse=!e.collapse}}},[n("h1",[e._v("动态过滤")]),e._v(" "),n("VIcon",{attrs:{icon:"mdi-chevron-up"}})],1),e._v(" "),n("h2",[e._v("类型")]),e._v(" "),n("div",{staticClass:"filter-types"},e._l(e.allTypes,(function(e){var t=e[0],i=e[1];return n("FilterTypeSwitch",{key:i.id,attrs:{name:t,type:i}})})),1),e._v(" "),n("h2",[e._v("关键词")]),e._v(" "),n("div",{staticClass:"filter-patterns"},e._l(e.patterns,(function(t){return n("div",{key:t,staticClass:"pattern"},[e._v("\n      "+e._s(t)+"\n      "),n("VIcon",{attrs:{title:"删除",icon:"mdi-trash-can-outline",size:16},nativeOn:{click:function(n){return e.deletePattern(t)}}})],1)})),0),e._v(" "),n("div",{staticClass:"add-pattern"},[n("TextBox",{attrs:{placeholder:"支持正则表达式 /^xxx$/",type:"text"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addPattern(e.newPattern)}},model:{value:e.newPattern,callback:function(t){e.newPattern=t},expression:"newPattern"}}),e._v(" "),n("VButton",{attrs:{type:"transparent"},nativeOn:{click:function(t){return e.addPattern(e.newPattern)}}},[n("VIcon",{attrs:{title:"添加",icon:"mdi-plus",size:18}})],1)],1),e._v(" "),n("h2",[e._v("板块")]),e._v(" "),n("div",{staticClass:"filter-side-card"},e._l(Object.entries(e.allSideCards),(function(t){var i=t[0],s=t[1];return n("div",{key:i,staticClass:"filter-side-card-switch feeds-filter-switch",on:{click:function(t){return e.toggleBlockSide(i)}}},[n("label",{class:{disabled:e.sideDisabled(i)}},[n("span",{staticClass:"name",class:{disabled:e.sideDisabled(i)}},[e._v(e._s(s.displayName))]),e._v(" "),n("VIcon",{staticClass:"disabled",attrs:{size:16,icon:"mdi-cancel"}}),e._v(" "),n("VIcon",{attrs:{size:16,icon:"mdi-check"}})],1)])})),0)])};i._withStripped=!0;var s=n(986),r=n(200),l=coreApis.observer,a=n(648),o=n(151);const d=(0,s.getComponentSettings)("feedsFilter").options,f={0:{className:"profile",displayName:"个人资料"},1:{className:"following-tags",displayName:"话题"},2:{className:"notice",displayName:"公告栏"},3:{className:"live",displayName:"正在直播"},5:{className:"most-viewed",displayName:"关注栏"},6:{className:"compose",displayName:"发布动态"}};let c;const p="feeds-filter-side-block-";var b=Vue.extend({components:{FilterTypeSwitch:()=>Promise.resolve().then(n.bind(n,179)),VIcon:a.VIcon,TextBox:a.TextBox,VButton:a.VButton},data:()=>({allTypes:[],patterns:[...d.patterns],newPattern:"",allSideCards:f,blockSideCards:[...d.sideCards],collapse:!0}),watch:{patterns(){d.patterns=this.patterns,c&&c.cards.forEach((e=>this.updateCard(lodash.clone(e))))}},async mounted(){this.updateBlockSide();const e=await(0,r.select)(".feed-card .tab-bar, .bili-dyn-list-tabs__list");if(!e)return void console.error("tabBar not found");const{forEachFeedsCard:t,feedsCardTypes:i}=await Promise.resolve().then(n.t.bind(n,799,23));document.body.classList.add("enable-feeds-filter");if(this.allTypes=Object.entries(i).concat(Object.entries({"self-repost":{id:-1,name:"自转发"}})).filter((e=>{let[,t]=e;return t.id<=2048})).map((e=>{let[t,n]=e;return[t,lodash.clone(n)]})),c=await t({added:e=>{this.updateCard(lodash.clone(e))}}),"v1"===c.managerType){const t=e.querySelector(".tab:nth-child(1) .tab-text");(0,l.attributes)(t,(()=>{document.body.classList.toggle("by-type",!t.classList.contains("selected"))}))}if("v2"===c.managerType){const t=e.children[0];if(!t)return;(0,l.attributes)(t,(()=>{document.body.classList.toggle("by-type",!t.classList.contains("active"))}))}},methods:{updateCard(e){d.patterns.some((t=>(0,o.hasBlockedPattern)(t,e)))?e.element.classList.add("pattern-block"):e.element.classList.remove("pattern-block")},deletePattern(e){const t=d.patterns.indexOf(e);-1!==t&&this.patterns.splice(t,1)},addPattern(e){e&&!this.patterns.includes(e)&&this.patterns.push(e),this.newPattern=""},updateBlockSide(){Object.entries(f).forEach((e=>{let[t,n]=e;const i=p+n.className;document.body.classList[this.blockSideCards.includes(t)?"add":"remove"](i)}))},toggleBlockSide(e){const t=this.blockSideCards.indexOf(e),n=f[e];-1!==t?(this.blockSideCards.splice(t,1),document.body.classList.remove(p+n.className)):(this.blockSideCards.push(e),document.body.classList.add(p+n.className)),d.sideCards=this.blockSideCards},sideDisabled(e){return this.blockSideCards.includes(e)}}}),u=b,y=n(379),m=n.n(y),h=n(420),v=n.n(h),g={insert:"head",singleton:!1},x=(m()(v(),g),v().locals,(0,n(900).Z)(u,i,[],!1,null,null,null));x.options.__file="registry/lib/components/feeds/filter/FeedsFilterCard.vue";var _=x.exports},179:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"filter-type-switch feeds-filter-switch"},[n("label",{class:{disabled:e.disabled}},[n("span",{staticClass:"name",class:{disabled:e.disabled}},[e._v(e._s(e.type.name))]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.disabled,expression:"disabled"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.disabled)?e._i(e.disabled,null)>-1:e.disabled},on:{change:function(t){var n=e.disabled,i=t.target,s=!!i.checked;if(Array.isArray(n)){var r=e._i(n,null);i.checked?r<0&&(e.disabled=n.concat([null])):r>-1&&(e.disabled=n.slice(0,r).concat(n.slice(r+1)))}else e.disabled=s}}}),e._v(" "),e.disabled?n("VIcon",{staticClass:"disabled",attrs:{size:16,icon:"mdi-cancel"}}):n("VIcon",{attrs:{size:16,icon:"mdi-check"}})],1)])};i._withStripped=!0;var s=n(986),r=n(648);const{options:l}=(0,s.getComponentSettings)("feedsFilter");var a=Vue.extend({components:{VIcon:r.VIcon},props:{name:{type:String,required:!0},type:{type:Object,required:!0}},data(){const e=this.type.id>=0?"types":"specialTypes";return{disabled:l[e].includes(this.type.id),optionKey:e}},watch:{disabled(e){this.setFilter(e)}},created(){this.setFilter(this.disabled,!1)},methods:{setFilter(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(document.body.classList[e?"add":"remove"](`feeds-filter-block-${this.name}`),t)if(e)l[this.optionKey].push(this.type.id);else{const e=l[this.optionKey].indexOf(this.type.id);-1!==e&&l[this.optionKey].splice(e,1)}}}}),o=a,d=n(379),f=n.n(d),c=n(866),p=n.n(c),b={insert:"head",singleton:!1},u=(f()(p(),b),p().locals,(0,n(900).Z)(o,i,[],!1,null,null,null));u.options.__file="registry/lib/components/feeds/filter/FilterTypeSwitch.vue";var y=u.exports},900:function(e,t,n){"use strict";function i(e,t,n,i,s,r,l,a){var o,d="function"==typeof e?e.options:e;if(t&&(d.render=t,d.staticRenderFns=n,d._compiled=!0),i&&(d.functional=!0),r&&(d._scopeId="data-v-"+r),l?(o=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),s&&s.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(l)},d._ssrRegister=o):s&&(o=a?function(){s.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:s),o)if(d.functional){d._injectStyles=o;var f=d.render;d.render=function(e,t){return o.call(t),f(e,t)}}else{var c=d.beforeCreate;d.beforeCreate=c?[].concat(c,o):[o]}return{exports:e,options:d}}n.d(t,{Z:function(){return i}})},799:function(e){"use strict";e.exports=coreApis.componentApis.feeds.api},986:function(e){"use strict";e.exports=coreApis.settings},200:function(e){"use strict";e.exports=coreApis.spinQuery},648:function(e){"use strict";e.exports=coreApis.ui},605:function(e){"use strict";e.exports=coreApis.utils}},i={};function s(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={id:e,exports:{}};return n[e](r,r.exports,s),r.exports}s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,{a:t}),t},t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},s.t=function(n,i){if(1&i&&(n=this(n)),8&i)return n;if("object"==typeof n&&n){if(4&i&&n.__esModule)return n;if(16&i&&"function"==typeof n.then)return n}var r=Object.create(null);s.r(r);var l={};e=e||[null,t({}),t([]),t(t)];for(var a=2&i&&n;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((function(e){l[e]=function(){return n[e]}}));return l.default=function(){return n},s.d(r,l),r},s.d=function(e,t){for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return function(){"use strict";s.d(r,{component:function(){return i}});var e=s(799);const t=[{username:"title",text:"epTitle"},{username:"upName",text:["title","dynamic"]},{username:["username","repostUsername"],text:["text","repostText"]}],n={name:"feeds.contentFilters.patterns",displayName:"动态关键词过滤",setup:e=>{let{addData:n}=e;n("feeds.contentFilters",(async e=>{const{getComponentSettings:n}=await Promise.resolve().then(s.t.bind(s,986,23)),{hasBlockedPattern:i}=await Promise.resolve().then(s.bind(s,151));e.push({filter:e=>{const{patterns:s}=n("feedsFilter").options;return e.filter((e=>{const n=t.find((t=>Object.values(t).every((t=>Array.isArray(t)?t.some((t=>t in e)):t in e)))),r=Object.fromEntries(Object.entries(n).map((t=>{let[n,i]=t;return Array.isArray(i)?[n,i.map((t=>e[t]??"")).join("\n").trim()]:[n,e[i].trim()]})));return s.every((e=>!i(e,r)))}))}})}))}},i={name:"feedsFilter",displayName:"动态过滤器",description:{"zh-CN":"按照类型或者关键词过滤动态首页的内容, 也可以移除动态页的一些侧边卡片."},entry:async()=>{const{select:t}=await Promise.resolve().then(s.t.bind(s,200,23));let n;if("v2"===e.feedsCardsManager.managerType){const e=await t(".bili-dyn-home--member aside.left"),i=document.createElement("section");i.classList.add("feeds-filter-section"),e.insertAdjacentElement("afterbegin",i),n=i}else n=await t(".home-container .left-panel");if(null===n)return;const i=await Promise.resolve().then(s.bind(s,188)),{mountVueComponent:r}=await Promise.resolve().then(s.t.bind(s,605,23));n.insertAdjacentElement("afterbegin",r(i).$el)},tags:[componentsTags.feeds],options:{types:{defaultValue:[],displayName:"过滤动态类型",hidden:!0},patterns:{defaultValue:[],displayName:"过滤关键词",hidden:!0},sideCards:{defaultValue:[],displayName:"过滤侧边栏",hidden:!0},specialTypes:{defaultValue:[],displayName:"过滤特殊动态类型",hidden:!0}},reload:()=>document.body.classList.remove("disable-feeds-filter"),unload:()=>document.body.classList.add("disable-feeds-filter"),urlInclude:[/^https:\/\/t\.bilibili\.com\/$/],plugin:n,commitHash:"d9216833aeb36f122cbca41ef899a163c07f7a88",coreVersion:"2.2.0"}}(),r=r.component}()}));