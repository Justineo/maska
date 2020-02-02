!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Maska",[],t):"object"==typeof exports?exports.Maska=t():e.Maska=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e,t,n){var r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return a(t).length>1?function(e){var t=a(e).sort((function(e,t){return e.length-t.length}));return function(e,n,r){for(var a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],u=0;u<t.length;){var i=t[u];u++;var s=t[u];if(!(s&&o(e,s,r,!0).length>i.length))return o(e,i,r,a)}return""}}(t)(e,t,n,r):o(e,t,n,r)}function a(e){try{return JSON.parse(e)}catch(t){return[e]}}function o(e,t,n){for(var r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=0,o=0,i="",s="";a<t.length&&o<e.length;){var c=t[a],l=e[o],f=n[c];if(f&&f.pattern)f.pattern.test(l)&&(i+=u(l,f),a++),o++;else if(f&&f.repeat){var p=n[t[a-1]];p&&!p.pattern.test(l)?a++:a--}else f&&f.escape&&(c=t[++a]),r&&(i+=c),l===c&&o++,a++}for(;r&&a<t.length;){var d=t[a];if(n[d]){s="";break}s+=d,a++}return i+s}function u(e,t){return t.uppercase?e.toLocaleUpperCase():t.lowercase?e.toLocaleLowerCase():e}n.r(t);var i={"#":{pattern:/[0-9]/},X:{pattern:/[0-9a-zA-Z]/},S:{pattern:/[a-zA-Z]/},A:{pattern:/[a-zA-Z]/,uppercase:!0},a:{pattern:/[a-zA-Z]/,lowercase:!0},"!":{escape:!0},"*":{repeat:!0}};function s(e){return e instanceof HTMLInputElement?e:e.querySelector("input")||e}function c(e){return"[object String]"===Object.prototype.toString.call(e)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var v=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),!t)throw new Error("Maska: no element for mask");if(n.tokens)for(var r in n.tokens)n.tokens[r]=f({},n.tokens[r]),n.tokens[r].pattern&&c(n.tokens[r].pattern)&&(n.tokens[r].pattern=new RegExp(n.tokens[r].pattern));this._opts={mask:n.mask,tokens:f({},i,{},n.tokens)},this._el=c(t)?document.querySelectorAll(t):t.length?t:[t],this.init()}var t,n,a;return t=e,(n=[{key:"init",value:function(){for(var e=this,t=0;t<this._el.length;t++){var n=s(this._el[t]);!this._opts.mask||n.dataset.mask&&n.dataset.mask===this._opts.mask||(n.dataset.mask=this._opts.mask),this.updateValue(n),n.dataset.maskInited||(n.dataset.maskInited=!0,n.addEventListener("input",(function(t){return e.updateValue(t.target)})))}}},{key:"destroy",value:function(){for(var e=this,t=0;t<this._el.length;t++){var n=s(this._el[t]);n.removeEventListener("input",(function(t){return e.updateValue(t.target)})),delete n.dataset.mask,delete n.dataset.maskInited}}},{key:"updateValue",value:function(e){if(e.value&&e.dataset.mask){var t,n,a=e.selectionEnd,o=e.value,u=o[a-1];e.value=r(e.value,e.dataset.mask,this._opts.tokens),function(e,t,n){for(;t<e.value.length&&e.value.charAt(t-1)!==n;)t++;e===document.activeElement&&(e.setSelectionRange(t,t),setTimeout((function(){e.setSelectionRange(t,t)}),0))}(e,a,u),e.value!==o&&e.dispatchEvent((t="input",(n=document.createEvent("Event")).initEvent(t,!0,!0),n))}}}])&&d(t.prototype,n),a&&d(t,a),e}();function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){var t={};return e.mask?(t.mask=Array.isArray(e.mask)?JSON.stringify(e.mask):e.mask,t.tokens=e.tokens?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.tokens):{}):t.mask=Array.isArray(e)?JSON.stringify(e):e,t}function k(e,t){if(t.value)return t.value&&function(e){return!(c(e.value)&&e.value===e.oldValue||Array.isArray(e.value)&&JSON.stringify(e.value)===JSON.stringify(e.oldValue)||e.value&&e.value.mask&&e.oldValue&&e.oldValue.mask&&e.value.mask===e.oldValue.mask)}(t)?new v(e,m(t.value)):void 0}function g(e){e.directive("maska",k)}function O(e,t){return new v(e,t)}n.d(t,"create",(function(){return O})),n.d(t,"mask",(function(){return r})),n.d(t,"maska",(function(){return k})),n.d(t,"tokens",(function(){return i})),"undefined"!=typeof window&&window.Vue&&window.Vue.use(g);t.default=g}])}));