(window.textWebpackJsonp=window.textWebpackJsonp||[]).push([[196],{390:function(e,r,t){var o=t(622);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,t(161).default)("e7906548",o,!0,{})},391:function(e,r,t){var o=t(632);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,t(161).default)("5ba6a5c3",o,!0,{})},392:function(e,r,t){var o=t(634);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,t(161).default)("ed017fbc",o,!0,{})},616:function(e,r,t){"use strict";var o=t(377),n=t(386);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function s(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,r,t){return r&&s(e.prototype,r),t&&s(e,t),e}function c(e,r){return!r||"object"!==i(r)&&"function"!=typeof r?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):r}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&p(e,r)}function p(e,r){return(p=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}
/*
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */var f=function(e){function r(){return a(this,r),c(this,d(r).apply(this,arguments))}return u(r,e),l(r,[{key:"name",get:function(){return"strong"}}]),r}(n.b),m=function(e){function r(){return a(this,r),c(this,d(r).apply(this,arguments))}return u(r,e),l(r,[{key:"name",get:function(){return"em"}}]),r}(n.m),b=function(e){function r(){return a(this,r),c(this,d(r).apply(this,arguments))}return u(r,e),l(r,[{key:"schema",get:function(){return{parseDOM:[{tag:"s"},{tag:"del"},{tag:"strike"},{style:"text-decoration",getAttrs:function(e){return"line-through"===e}}],toDOM:function(){return["s",0]},toMarkdown:{open:"~~",close:"~~",mixable:!0,expelEnclosingWhitespace:!0}}}}]),r}(n.r),h=["image/png","image/jpeg","image/gif","image/x-xbitmap","image/bmp","image/svg+xml"],y=function(e,r){var t=e.split("#")[1];if(void 0!==t){var o=t.split("&");if(void 0!==o)for(var n=0;n<o.length;n++){var i=o[n].split("=");if(decodeURIComponent(i[0])===r)return decodeURIComponent(i[1])}}},g={name:"ImageView",props:["node","updateAttrs","view"],data:function(){return{imageLoaded:!1,loaded:!1,failed:!1}},computed:{mimeIcon:function(){var e=y(this.src,"mimetype");return e?{backgroundImage:"url("+window.OC.MimeType.getIconUrl(e)+")"}:{}},isSupportedImage:function(){var e=y(this.src,"mimetype");return void 0===e||-1!==h.indexOf(e)},internalLinkOrImage:function(){var e=y(this.src,"fileId");return e?OC.generateUrl("/f/"+e):this.src},src:{get:function(){return this.node.attrs.src},set:function(e){this.updateAttrs({src:e})}},alt:{get:function(){return this.node.attrs.alt?this.node.attrs.alt:""},set:function(e){this.updateAttrs({alt:e})}},t:function(){return function(e,r){return window.t(e,r)}}},beforeMount:function(){var e=this;if(!this.isSupportedImage)return this.failed=!0,this.imageLoaded=!1,void(this.loaded=!0);var r=new Image;r.src=this.node.attrs.src,r.onload=function(){e.imageLoaded=!0},r.onerror=function(){e.failed=!0,e.imageLoaded=!1,e.loaded=!0}},methods:{updateAlt:function(){this.alt=this.$refs.altInput.value},onLoaded:function(){this.loaded=!0}}},v=(t(621),t(34)),j=Object(v.a)(g,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"image",class:{"icon-loading":!e.loaded},attrs:{"data-src":e.src}},[e.imageLoaded&&e.isSupportedImage?t("div",[t("transition",{attrs:{name:"fade"}},[t("img",{directives:[{name:"show",rawName:"v-show",value:e.loaded,expression:"loaded"}],staticClass:"image__main",attrs:{src:e.src},on:{load:e.onLoaded}})]),e._v(" "),t("transition",{attrs:{name:"fade"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.loaded,expression:"loaded"}],staticClass:"image__caption"},[t("input",{ref:"altInput",attrs:{type:"text"},domProps:{value:e.alt},on:{keyup:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.updateAlt()}}})])])],1):t("div",{staticClass:"image__placeholder"},[t("transition",{attrs:{name:"fade"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.loaded,expression:"loaded"}],staticClass:"image__main"},[t("div",{staticClass:"icon-image",style:e.mimeIcon}),e._v(" "),t("p",[t("a",{attrs:{href:e.internalLinkOrImage,target:"_blank"}},[e._v(e._s(e.isSupportedImage?e.t("text","Show image"):e.t("text","Show file")))])])])]),t("transition",{attrs:{name:"fade"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.loaded,expression:"loaded"}],staticClass:"image__caption"},[t("input",{ref:"altInput",attrs:{type:"text"},domProps:{value:e.alt},on:{keyup:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.updateAlt()}}})])])],1)])}),[],!1,null,"2ac49a8a",null).exports;function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function k(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function P(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function O(e,r){return!r||"object"!==x(r)&&"function"!=typeof r?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):r}function M(e,r,t){return(M="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,r,t){var o=function(e,r){for(;!Object.prototype.hasOwnProperty.call(e,r)&&null!==(e=_(e)););return e}(e,r);if(o){var n=Object.getOwnPropertyDescriptor(o,r);return n.get?n.get.call(t):n.value}})(e,r,t||e)}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,r){return(S=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}
/*
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */var E=function(e){function r(){return function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,r),O(this,_(r).apply(this,arguments))}var t,o,n;return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&S(e,r)}(r,e),t=r,(o=[{key:"view",get:function(){return j}},{key:"schema",get:function(){return function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?w(Object(t),!0).forEach((function(r){k(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},M(_(r.prototype),"schema",this),{selectable:!1})}}])&&P(t.prototype,o),n&&P(t,n),r}(n.l),z=t(401);function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function q(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function I(e,r){return!r||"object"!==C(r)&&"function"!=typeof r?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):r}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e,r){return(A=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}
/*
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */var D=function(e){function r(){return function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,r),I(this,R(r).apply(this,arguments))}var t,o,n;return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&A(e,r)}(r,e),t=r,(o=[{key:"keys",value:function(){var e=this;return{Tab:function(r){return Object(z.c)("\t")(r,e.editor.view.dispatch,e.editor.view),!0}}}},{key:"name",get:function(){return"doc"}},{key:"schema",get:function(){return{content:"block"}}}])&&q(t.prototype,o),n&&q(t,n),r}(o.g),N=t(403);function T(e){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function L(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function U(e,r){return!r||"object"!==T(r)&&"function"!=typeof r?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):r}function $(e){return($=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function W(e,r){return(W=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}
/*
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */var F=0,J=1,B=function(e){function r(){return function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,r),U(this,$(r).apply(this,arguments))}var t,n,i;return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&W(e,r)}(r,e),t=r,(n=[{key:"commands",value:function(e){var r=e.type,t=e.schema;return{bullet_list_item:function(){return function(e,o,n){return Object(z.q)(t.nodes.bullet_list,r)(e,o,n)}},todo_item:function(){return function(e,r,t){var o=e.schema,n=e.selection,i=n.$from,a=n.$to,s=i.blockRange(a),l=e.tr;if(!s)return!1;var c=Object(N.findParentNode)((function(e){return e.type===o.nodes.list_item}))(n);l.setNodeMarkup(c.pos,o.nodes.list_item,{type:c.node.attrs.type===J?F:J}),r&&r(l)}}}}},{key:"defaultOptions",get:function(){return{nested:!0}}},{key:"schema",get:function(){return{attrs:{done:{default:!1},type:{default:F}},draggable:!0,content:"paragraph block*",toDOM:function(e){if(e.attrs.type===F)return["li",0];var r={type:"checkbox",class:"checkbox"};return e.attrs.done&&(r.checked=!0),["li",["input",r],["label",{class:"checkbox-label"},["div",{class:"checkbox-wrapper"},0]]]},parseDOM:[{priority:100,tag:"li",getAttrs:function(e){var r=e.querySelector("input[type=checkbox]");return{done:r&&r.checked,type:r?J:F}}}],toMarkdown:function(e,r){r.attrs.type===J&&e.write("[".concat(r.attrs.done?"x":" ","] ")),e.renderContent(r)}}}},{key:"plugins",get:function(){return[new o.h({props:{handleClick:function(e,r,t){var o=e.state,n=o.schema,i=o.selection,a=i.$from,s=i.$to;if(!a.blockRange(s))return!1;var l=Object(N.findParentNode)((function(e){return e.type===n.nodes.list_item}))(i),c="label"===t.target.tagName.toLowerCase();if(l.node.attrs.type===J&&c){var d=o.tr;d.setNodeMarkup(l.pos,n.nodes.list_item,{done:!l.node.attrs.done,type:J}),e.dispatch(d)}}}})]}}])&&L(t.prototype,n),i&&L(t,i),r}(n.o),V=t(623),G=t.n(V),H=t(679),K=t.n(H),Q=t(680);function X(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var t=[],o=!0,n=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(t.push(a.value),!r||t.length!==r);o=!0);}catch(e){n=!0,i=e}finally{try{o||null==s.return||s.return()}finally{if(n)throw i}}return t}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function Y(e){return function(e){if(Array.isArray(e)){for(var r=0,t=new Array(e.length);r<e.length;r++)t[r]=e[r];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function Z(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function ee(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?Z(Object(t),!0).forEach((function(r){re(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Z(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function re(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}
/*
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */t.d(r,"d",(function(){return ne})),t.d(r,"a",(function(){return oe})),t.d(r,"b",(function(){return ae})),t.d(r,"e",(function(){return se})),t.d(r,"c",(function(){return te}));var te=function(e){var r,o,n,i;return regeneratorRuntime.async((function(a){for(;;)switch(a.prev=a.next){case 0:r=[e],o={},n=0;case 3:if(!(n<r.length)){a.next=17;break}return a.prev=4,a.next=7,regeneratorRuntime.awrap(t(627)("./"+r[n]));case 7:i=a.sent,o[r[n]]=i.default,a.next=14;break;case 11:return a.prev=11,a.t0=a.catch(4),a.abrupt("return",void 0);case 14:n++,a.next=3;break;case 17:if(0!==Object.keys(o).length||o.constructor!==Object){a.next=19;break}return a.abrupt("return",void 0);case 19:return a.abrupt("return",{languages:o});case 20:case"end":return a.stop()}}),null,null,[[4,11]])},oe=function(e){var r=e.content,t=e.onInit,i=e.onUpdate,a=e.extensions,s=e.enableRichEditing,l=e.languages,c=[];return c=s?[new n.i,new n.d,new f,new m,new b,new n.h,new n.k,new n.c,new n.p,new n.a,new n.e,new B,new n.n,new E,new n.q({emptyNodeClass:"is-empty",emptyNodeText:"Add notes, lists or links …",showOnlyWhenEditable:!0})]:[new D,new o.j,new n.f(ee({},l))],a=a||[],new o.a({content:r,onInit:t,onUpdate:i,extensions:[].concat(Y(c),[new n.j]).concat(a),useBuiltInExtensions:s})},ne=G()("commonmark",{html:!1,breaks:!1}).enable("strikethrough").use(K.a,{enable:!0,labelAfter:!0}),ie=function(e){this.message=e},ae=function(e,r){var t=Object.entries(e).filter((function(e){return X(e,2)[1].toMarkdown})).reduce((function(e,r){var t=X(r,2);return ee({},e,re({},t[0],t[1].toMarkdown))}),{}),o=Object.entries(r).filter((function(e){return X(e,2)[1].toMarkdown})).reduce((function(e,r){var t=X(r,2);return ee({},e,re({},t[0],t[1].toMarkdown))}),{});return{serializer:new Q.a(ee({},Q.b.nodes,{},t),ee({},Q.b.marks,{},o)),serialize:function(e,r){return this.serializer.serialize(e,ee({},r,{tightLists:!0})).split("\\[").join("[").split("\\]").join("]")}}},se=function(e){var r=e.getJSON();if(1!==r.content.length||void 0===r.content[0].content||1!==r.content[0].content.length){if("code_block"===r.content[0].type&&void 0===r.content[0].content)return"";throw new ie("Failed to serialize document to plain text")}var t=r.content[0].content[0];if("text"!==t.type)throw new ie("Failed to serialize document to plain text");return t.text}},621:function(e,r,t){"use strict";var o=t(390);t.n(o).a},622:function(e,r,t){(e.exports=t(160)(!1)).push([e.i,".image[data-v-2ac49a8a]{margin:0;padding:0}.image__caption[data-v-2ac49a8a]{text-align:center;color:var(--color-text-lighter)}.image__caption input[type='text'][data-v-2ac49a8a]{width:100%;border:none;text-align:center}.icon-image[data-v-2ac49a8a]{margin-top:10px;height:32px;padding:20px;background-size:contain}.image__loading[data-v-2ac49a8a]{height:100px}.image__placeholder .image__main[data-v-2ac49a8a]{background-color:var(--color-background-dark);text-align:center;padding:20px;border-radius:var(--border-radius)}.image__placeholder .image__main .icon-image[data-v-2ac49a8a]{opacity:0.7}.fade-enter-active[data-v-2ac49a8a]{transition:opacity .3s ease-in-out}.fade-enter-to[data-v-2ac49a8a]{opacity:1}.fade-enter[data-v-2ac49a8a]{opacity:0}\n",""])},627:function(e,r,t){var o={"./1c":[431,2],"./1c.js":[431,2],"./abnf":[432,3],"./abnf.js":[432,3],"./accesslog":[433,4],"./accesslog.js":[433,4],"./actionscript":[434,5],"./actionscript.js":[434,5],"./ada":[435,6],"./ada.js":[435,6],"./angelscript":[436,7],"./angelscript.js":[436,7],"./apache":[437,8],"./apache.js":[437,8],"./applescript":[438,9],"./applescript.js":[438,9],"./arcade":[439,10],"./arcade.js":[439,10],"./arduino":[440,11],"./arduino.js":[440,11],"./armasm":[441,12],"./armasm.js":[441,12],"./asciidoc":[442,13],"./asciidoc.js":[442,13],"./aspectj":[443,14],"./aspectj.js":[443,14],"./autohotkey":[444,15],"./autohotkey.js":[444,15],"./autoit":[445,16],"./autoit.js":[445,16],"./avrasm":[446,17],"./avrasm.js":[446,17],"./awk":[447,18],"./awk.js":[447,18],"./axapta":[448,19],"./axapta.js":[448,19],"./bash":[449,20],"./bash.js":[449,20],"./basic":[450,21],"./basic.js":[450,21],"./bnf":[451,22],"./bnf.js":[451,22],"./brainfuck":[452,23],"./brainfuck.js":[452,23],"./cal":[453,24],"./cal.js":[453,24],"./capnproto":[454,25],"./capnproto.js":[454,25],"./ceylon":[455,26],"./ceylon.js":[455,26],"./clean":[456,27],"./clean.js":[456,27],"./clojure":[458,28],"./clojure-repl":[457,29],"./clojure-repl.js":[457,29],"./clojure.js":[458,28],"./cmake":[459,30],"./cmake.js":[459,30],"./coffeescript":[460,31],"./coffeescript.js":[460,31],"./coq":[461,32],"./coq.js":[461,32],"./cos":[462,33],"./cos.js":[462,33],"./cpp":[463,34],"./cpp.js":[463,34],"./crmsh":[464,35],"./crmsh.js":[464,35],"./crystal":[465,36],"./crystal.js":[465,36],"./cs":[466,37],"./cs.js":[466,37],"./csp":[467,38],"./csp.js":[467,38],"./css":[468,39],"./css.js":[468,39],"./d":[469,40],"./d.js":[469,40],"./dart":[470,41],"./dart.js":[470,41],"./delphi":[471,42],"./delphi.js":[471,42],"./diff":[472,43],"./diff.js":[472,43],"./django":[473,44],"./django.js":[473,44],"./dns":[474,45],"./dns.js":[474,45],"./dockerfile":[475,46],"./dockerfile.js":[475,46],"./dos":[476,47],"./dos.js":[476,47],"./dsconfig":[477,48],"./dsconfig.js":[477,48],"./dts":[478,49],"./dts.js":[478,49],"./dust":[479,50],"./dust.js":[479,50],"./ebnf":[480,51],"./ebnf.js":[480,51],"./elixir":[481,52],"./elixir.js":[481,52],"./elm":[482,53],"./elm.js":[482,53],"./erb":[483,54],"./erb.js":[483,54],"./erlang":[485,55],"./erlang-repl":[484,56],"./erlang-repl.js":[484,56],"./erlang.js":[485,55],"./excel":[486,57],"./excel.js":[486,57],"./fix":[487,58],"./fix.js":[487,58],"./flix":[488,59],"./flix.js":[488,59],"./fortran":[489,60],"./fortran.js":[489,60],"./fsharp":[490,61],"./fsharp.js":[490,61],"./gams":[491,62],"./gams.js":[491,62],"./gauss":[492,63],"./gauss.js":[492,63],"./gcode":[493,64],"./gcode.js":[493,64],"./gherkin":[494,65],"./gherkin.js":[494,65],"./glsl":[495,66],"./glsl.js":[495,66],"./gml":[496,67],"./gml.js":[496,67],"./go":[497,68],"./go.js":[497,68],"./golo":[498,69],"./golo.js":[498,69],"./gradle":[499,70],"./gradle.js":[499,70],"./groovy":[500,71],"./groovy.js":[500,71],"./haml":[501,72],"./haml.js":[501,72],"./handlebars":[502,73],"./handlebars.js":[502,73],"./haskell":[503,74],"./haskell.js":[503,74],"./haxe":[504,75],"./haxe.js":[504,75],"./hsp":[505,76],"./hsp.js":[505,76],"./htmlbars":[506,77],"./htmlbars.js":[506,77],"./http":[507,78],"./http.js":[507,78],"./hy":[508,79],"./hy.js":[508,79],"./inform7":[509,80],"./inform7.js":[509,80],"./ini":[510,81],"./ini.js":[510,81],"./irpf90":[511,82],"./irpf90.js":[511,82],"./isbl":[512,83],"./isbl.js":[512,83],"./java":[513,84],"./java.js":[513,84],"./javascript":[514,85],"./javascript.js":[514,85],"./jboss-cli":[515,86],"./jboss-cli.js":[515,86],"./json":[516,87],"./json.js":[516,87],"./julia":[518,88],"./julia-repl":[517,89],"./julia-repl.js":[517,89],"./julia.js":[518,88],"./kotlin":[519,90],"./kotlin.js":[519,90],"./lasso":[520,91],"./lasso.js":[520,91],"./ldif":[521,92],"./ldif.js":[521,92],"./leaf":[522,93],"./leaf.js":[522,93],"./less":[523,94],"./less.js":[523,94],"./lisp":[524,95],"./lisp.js":[524,95],"./livecodeserver":[525,96],"./livecodeserver.js":[525,96],"./livescript":[526,97],"./livescript.js":[526,97],"./llvm":[527,98],"./llvm.js":[527,98],"./lsl":[528,99],"./lsl.js":[528,99],"./lua":[529,100],"./lua.js":[529,100],"./makefile":[530,101],"./makefile.js":[530,101],"./markdown":[531,102],"./markdown.js":[531,102],"./mathematica":[532,103],"./mathematica.js":[532,103],"./matlab":[533,104],"./matlab.js":[533,104],"./maxima":[534,105],"./maxima.js":[534,105],"./mel":[535,106],"./mel.js":[535,106],"./mercury":[536,107],"./mercury.js":[536,107],"./mipsasm":[537,108],"./mipsasm.js":[537,108],"./mizar":[538,109],"./mizar.js":[538,109],"./mojolicious":[539,110],"./mojolicious.js":[539,110],"./monkey":[540,111],"./monkey.js":[540,111],"./moonscript":[541,112],"./moonscript.js":[541,112],"./n1ql":[542,113],"./n1ql.js":[542,113],"./nginx":[543,114],"./nginx.js":[543,114],"./nimrod":[544,115],"./nimrod.js":[544,115],"./nix":[545,116],"./nix.js":[545,116],"./nsis":[546,117],"./nsis.js":[546,117],"./objectivec":[547,118],"./objectivec.js":[547,118],"./ocaml":[548,119],"./ocaml.js":[548,119],"./openscad":[549,120],"./openscad.js":[549,120],"./oxygene":[550,121],"./oxygene.js":[550,121],"./parser3":[551,122],"./parser3.js":[551,122],"./perl":[552,123],"./perl.js":[552,123],"./pf":[553,124],"./pf.js":[553,124],"./pgsql":[554,125],"./pgsql.js":[554,125],"./php":[555,126],"./php.js":[555,126],"./plaintext":[556,127],"./plaintext.js":[556,127],"./pony":[557,128],"./pony.js":[557,128],"./powershell":[558,129],"./powershell.js":[558,129],"./processing":[559,130],"./processing.js":[559,130],"./profile":[560,131],"./profile.js":[560,131],"./prolog":[561,132],"./prolog.js":[561,132],"./properties":[562,133],"./properties.js":[562,133],"./protobuf":[563,134],"./protobuf.js":[563,134],"./puppet":[564,135],"./puppet.js":[564,135],"./purebasic":[565,136],"./purebasic.js":[565,136],"./python":[566,137],"./python.js":[566,137],"./q":[567,138],"./q.js":[567,138],"./qml":[568,139],"./qml.js":[568,139],"./r":[569,140],"./r.js":[569,140],"./reasonml":[570,141],"./reasonml.js":[570,141],"./rib":[571,142],"./rib.js":[571,142],"./roboconf":[572,143],"./roboconf.js":[572,143],"./routeros":[573,144],"./routeros.js":[573,144],"./rsl":[574,145],"./rsl.js":[574,145],"./ruby":[575,146],"./ruby.js":[575,146],"./ruleslanguage":[576,147],"./ruleslanguage.js":[576,147],"./rust":[577,148],"./rust.js":[577,148],"./sas":[578,149],"./sas.js":[578,149],"./scala":[579,150],"./scala.js":[579,150],"./scheme":[580,151],"./scheme.js":[580,151],"./scilab":[581,152],"./scilab.js":[581,152],"./scss":[582,153],"./scss.js":[582,153],"./shell":[583,154],"./shell.js":[583,154],"./smali":[584,155],"./smali.js":[584,155],"./smalltalk":[585,156],"./smalltalk.js":[585,156],"./sml":[586,157],"./sml.js":[586,157],"./sqf":[587,158],"./sqf.js":[587,158],"./sql":[588,159],"./sql.js":[588,159],"./stan":[589,160],"./stan.js":[589,160],"./stata":[590,161],"./stata.js":[590,161],"./step21":[591,162],"./step21.js":[591,162],"./stylus":[592,163],"./stylus.js":[592,163],"./subunit":[593,164],"./subunit.js":[593,164],"./swift":[594,165],"./swift.js":[594,165],"./taggerscript":[595,166],"./taggerscript.js":[595,166],"./tap":[596,167],"./tap.js":[596,167],"./tcl":[597,168],"./tcl.js":[597,168],"./tex":[598,169],"./tex.js":[598,169],"./thrift":[599,170],"./thrift.js":[599,170],"./tp":[600,171],"./tp.js":[600,171],"./twig":[601,172],"./twig.js":[601,172],"./typescript":[602,173],"./typescript.js":[602,173],"./vala":[603,174],"./vala.js":[603,174],"./vbnet":[604,175],"./vbnet.js":[604,175],"./vbscript":[606,176],"./vbscript-html":[605,177],"./vbscript-html.js":[605,177],"./vbscript.js":[606,176],"./verilog":[607,178],"./verilog.js":[607,178],"./vhdl":[608,179],"./vhdl.js":[608,179],"./vim":[609,180],"./vim.js":[609,180],"./x86asm":[610,181],"./x86asm.js":[610,181],"./xl":[611,182],"./xl.js":[611,182],"./xml":[612,183],"./xml.js":[612,183],"./xquery":[613,184],"./xquery.js":[613,184],"./yaml":[614,185],"./yaml.js":[614,185],"./zephir":[615,186],"./zephir.js":[615,186]};function n(e){if(!t.o(o,e))return Promise.resolve().then((function(){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}));var r=o[e],n=r[0];return t.e(r[1]).then((function(){return t.t(n,7)}))}n.keys=function(){return Object.keys(o)},n.id=627,e.exports=n},631:function(e,r,t){"use strict";var o=t(391);t.n(o).a},632:function(e,r,t){(e.exports=t(160)(!1)).push([e.i,'#read-only-editor{overflow:scroll}#read-only-editor div.ProseMirror{margin-top:44px;height:100%;position:relative;word-wrap:break-word;white-space:pre-wrap;-webkit-font-variant-ligatures:none;font-variant-ligatures:none;padding:4px 8px 200px 14px;line-height:150%;font-size:14px;outline:none}#read-only-editor div.ProseMirror[contenteditable=true],#read-only-editor div.ProseMirror[contenteditable=false]{border:none !important;width:100%;background-color:transparent;color:var(--color-main-text);opacity:1;-webkit-user-select:text;user-select:text;font-size:14px}#read-only-editor div.ProseMirror li label.checkbox-label{width:100%;display:flex;margin-top:10px;margin-bottom:1em}#read-only-editor div.ProseMirror li label.checkbox-label:before{position:relative;top:2px}#read-only-editor div.ProseMirror li label.checkbox-label div.checkbox-wrapper{margin-bottom:-1em}#read-only-editor div.ProseMirror li label.checkbox-label div.checkbox-wrapper>p{margin-top:-1px;margin-bottom:0;padding-bottom:10px}#read-only-editor div.ProseMirror p:first-child,#read-only-editor div.ProseMirror h1:first-child,#read-only-editor div.ProseMirror h2:first-child,#read-only-editor div.ProseMirror h3:first-child,#read-only-editor div.ProseMirror h4:first-child,#read-only-editor div.ProseMirror h5:first-child,#read-only-editor div.ProseMirror h6:first-child{margin-top:10px}#read-only-editor div.ProseMirror a{color:var(--color-primary-element);text-decoration:underline;padding:.5em 0}#read-only-editor div.ProseMirror p{margin-bottom:1em;line-height:150%}#read-only-editor div.ProseMirror em{font-style:italic}#read-only-editor div.ProseMirror h1,#read-only-editor div.ProseMirror h2,#read-only-editor div.ProseMirror h3,#read-only-editor div.ProseMirror h4,#read-only-editor div.ProseMirror h5,#read-only-editor div.ProseMirror h6{font-weight:600;line-height:120%;margin-top:24px;margin-bottom:12px;color:var(--color-main-text)}#read-only-editor div.ProseMirror h1{font-size:36px;margin-top:48px}#read-only-editor div.ProseMirror h2{font-size:28px;margin-top:48px}#read-only-editor div.ProseMirror h3{font-size:24px}#read-only-editor div.ProseMirror h4{font-size:21px}#read-only-editor div.ProseMirror h5{font-size:17px}#read-only-editor div.ProseMirror h6{font-size:14px}#read-only-editor div.ProseMirror img{cursor:default;max-width:100%}#read-only-editor div.ProseMirror hr{padding:2px 0;border:none;margin:1em 0;width:100%}#read-only-editor div.ProseMirror hr:after{content:"";display:block;height:1px;background-color:var(--color-border-dark);line-height:2px}#read-only-editor div.ProseMirror pre{white-space:pre-wrap;background-color:var(--color-background-dark);border-radius:var(--border-radius);padding:1em 1.3em;margin-bottom:1em}#read-only-editor div.ProseMirror p code{background-color:var(--color-background-dark);border-radius:var(--border-radius);padding:.1em .3em}#read-only-editor div.ProseMirror li{position:relative}#read-only-editor div.ProseMirror ul,#read-only-editor div.ProseMirror ol{padding-left:10px;margin-left:10px}#read-only-editor div.ProseMirror ul li{list-style-type:disc}#read-only-editor div.ProseMirror ul>li>ul>li{list-style-type:circle}#read-only-editor div.ProseMirror ul>li>ul>li ul li{list-style-type:square}#read-only-editor div.ProseMirror blockquote{padding-left:1em;border-left:4px solid var(--color-primary-element);color:var(--color-text-maxcontrast);margin-left:0;margin-right:0}#read-only-editor .ProseMirror-focused .ProseMirror-gapcursor{display:block}#read-only-editor .editor__content p.is-empty:first-child::before{content:attr(data-empty-text);float:left;color:var(--color-text-maxcontrast);pointer-events:none;height:0}.thumbnailContainer #read-only-editor{width:100%}.thumbnailContainer #read-only-editor .ProseMirror{height:auto;margin:0 0 0 0;padding:0}\n',""])},633:function(e,r,t){"use strict";var o=t(392);t.n(o).a},634:function(e,r,t){(e.exports=t(160)(!1)).push([e.i,'div.ProseMirror{margin-top:44px;height:100%;position:relative;word-wrap:break-word;white-space:pre-wrap;-webkit-font-variant-ligatures:none;font-variant-ligatures:none;padding:4px 8px 200px 14px;line-height:150%;font-size:14px;outline:none}div.ProseMirror[contenteditable=true],div.ProseMirror[contenteditable=false]{border:none !important;width:100%;background-color:transparent;color:var(--color-main-text);opacity:1;-webkit-user-select:text;user-select:text;font-size:14px}div.ProseMirror li label.checkbox-label{width:100%;display:flex;margin-top:10px;margin-bottom:1em}div.ProseMirror li label.checkbox-label:before{position:relative;top:2px}div.ProseMirror li label.checkbox-label div.checkbox-wrapper{margin-bottom:-1em}div.ProseMirror li label.checkbox-label div.checkbox-wrapper>p{margin-top:-1px;margin-bottom:0;padding-bottom:10px}div.ProseMirror p:first-child,div.ProseMirror h1:first-child,div.ProseMirror h2:first-child,div.ProseMirror h3:first-child,div.ProseMirror h4:first-child,div.ProseMirror h5:first-child,div.ProseMirror h6:first-child{margin-top:10px}div.ProseMirror a{color:var(--color-primary-element);text-decoration:underline;padding:.5em 0}div.ProseMirror p{margin-bottom:1em;line-height:150%}div.ProseMirror em{font-style:italic}div.ProseMirror h1,div.ProseMirror h2,div.ProseMirror h3,div.ProseMirror h4,div.ProseMirror h5,div.ProseMirror h6{font-weight:600;line-height:120%;margin-top:24px;margin-bottom:12px;color:var(--color-main-text)}div.ProseMirror h1{font-size:36px;margin-top:48px}div.ProseMirror h2{font-size:28px;margin-top:48px}div.ProseMirror h3{font-size:24px}div.ProseMirror h4{font-size:21px}div.ProseMirror h5{font-size:17px}div.ProseMirror h6{font-size:14px}div.ProseMirror img{cursor:default;max-width:100%}div.ProseMirror hr{padding:2px 0;border:none;margin:1em 0;width:100%}div.ProseMirror hr:after{content:"";display:block;height:1px;background-color:var(--color-border-dark);line-height:2px}div.ProseMirror pre{white-space:pre-wrap;background-color:var(--color-background-dark);border-radius:var(--border-radius);padding:1em 1.3em;margin-bottom:1em}div.ProseMirror p code{background-color:var(--color-background-dark);border-radius:var(--border-radius);padding:.1em .3em}div.ProseMirror li{position:relative}div.ProseMirror ul,div.ProseMirror ol{padding-left:10px;margin-left:10px}div.ProseMirror ul li{list-style-type:disc}div.ProseMirror ul>li>ul>li{list-style-type:circle}div.ProseMirror ul>li>ul>li ul li{list-style-type:square}div.ProseMirror blockquote{padding-left:1em;border-left:4px solid var(--color-primary-element);color:var(--color-text-maxcontrast);margin-left:0;margin-right:0}.ProseMirror-focused .ProseMirror-gapcursor{display:block}.editor__content p.is-empty:first-child::before{content:attr(data-empty-text);float:left;color:var(--color-text-maxcontrast);pointer-events:none;height:0}\n',""])},831:function(e,r,t){"use strict";t.r(r);var o=t(377),n=t(617),i=t.n(n),a=t(616),s={name:"ReadOnlyEditor",components:{EditorContent:o.b},props:{content:{type:String,required:!0},isRichEditor:{type:Boolean,default:!0}},data:function(){return{editor:null}},mounted:function(){this.editor=Object(a.a)({content:this.isRichEditor?a.d.render(this.content):"<pre>"+i()(this.content)+"</pre>",enableRichEditing:this.isRichEditor}),this.editor.setOptions({editable:!1})},beforeDestroy:function(){this.editor.destroy()}},l=(t(631),t(633),t(34)),c=Object(l.a)(s,(function(){var e=this.$createElement,r=this._self._c||e;return this.editor?r("EditorContent",{attrs:{id:"read-only-editor",editor:this.editor}}):this._e()}),[],!1,null,null,null);r.default=c.exports}}]);
//# sourceMappingURL=preview.js.map?v=e5af1e70609685425676