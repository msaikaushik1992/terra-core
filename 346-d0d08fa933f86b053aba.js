(window.webpackJsonp=window.webpackJsonp||[]).push([[346],{2783:function(e,n,t){"use strict";t.r(n),n.default="### diff\n```diff\nIndex: languages/ini.js\n===================================================================\n--- languages/ini.js    (revision 199)\n+++ languages/ini.js    (revision 200)\n@@ -1,8 +1,7 @@\n hljs.LANGUAGES.ini =\n {\n   case_insensitive: true,\n-  defaultMode:\n-  {\n+  defaultMode: {\n     contains: ['comment', 'title', 'setting'],\n     illegal: '[^\\\\s]'\n   },\n\n*** /path/to/original timestamp\n--- /path/to/new      timestamp\n***************\n*** 1,3 ****\n--- 1,9 ----\n+ This is an important\n+ notice! It should\n+ therefore be located at\n+ the beginning of this\n+ document!\n\n! compress the size of the\n! changes.\n\n  It is important to spell\n```"},3241:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=o(t(0)),r=o(t(847)),i=o(t(2783));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(){return a.default.createElement(r.default,{src:i.default})};n.default=l},847:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=c(t(0)),r=c(t(2)),i=c(t(4)),o=c(t(940)),l=c(t(941));t(942),t(943),t(944);var s=c(t(884));function c(e){return e&&e.__esModule?e:{default:e}}function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){f(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function f(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var g=i.default.bind(s.default),p=Object.keys(l.default.languages).filter((function(e){return!["extend","insertBefore","DFS"].includes(e)}));o.default.setOptions({headerIds:!1,highlight:function(e,n){return p.includes(n)?l.default.highlight(e,l.default.languages[n],n):null},langPrefix:"codeblock language-"});var h=new o.default.Renderer;h.heading=function(e,n){var t=e.toLowerCase().replace(/[^\w]+/g,"-");return"<h".concat(n,">")+'<a name="'.concat(t,'" class="anchor" aria-hidden="true" href="#').concat(t,'">')+'<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="is-bidi octicon octicon-link"><path d="M10.5 26.3a16 16 0 0 1 .9-5.3L8 17.6a6.73 6.73 0 0 1-2-4.8A6.41 6.41 0 0 1 8 8a6.76 6.76 0 0 1 9.6 0l9 9a6.88 6.88 0 0 1 0 9.6 6.27 6.27 0 0 1-3.4 1.8 2.65 2.65 0 0 0 .5.6l4.1 4.1a11.36 11.36 0 0 0 3.1-2.3 12.8 12.8 0 0 0 0-18.1l-9-9a12.63 12.63 0 0 0-9-3.7 12.63 12.63 0 0 0-9 3.7A12.1 12.1 0 0 0 0 12.8a12.63 12.63 0 0 0 3.7 9l7 7a21.05 21.05 0 0 1-.2-2.5zm27-4.6a16 16 0 0 1-.9 5.3l3.4 3.4a6.79 6.79 0 1 1-9.6 9.6l-9-9a6.88 6.88 0 0 1 0-9.6 6.27 6.27 0 0 1 3.4-1.8 2.65 2.65 0 0 0-.5-.6l-4-4a11.36 11.36 0 0 0-3.1 2.3 12.8 12.8 0 0 0 0 18.1l9 9a12.73 12.73 0 0 0 18-18l-7-7a8 8 0 0 1 .3 2.3z"/></svg></a>'+"".concat(e)+"</h".concat(n,">")};var b={src:r.default.string,baseUrl:r.default.string,hasHeadingAnchors:r.default.bool},v=function(e){return a.default.createElement("div",{dir:"ltr",className:g(["markdown"]),dangerouslySetInnerHTML:{__html:(0,o.default)(e.src,d({},e.baseUrl&&{baseUrl:e.baseUrl},{},e.hasHeadingAnchors&&{renderer:h}))}})};v.propTypes=b,v.defaultProps={src:""};var w=v;n.default=w},884:function(e,n,t){e.exports={markdown:"Markdown__markdown___3KTyB"}}}]);
//# sourceMappingURL=346-d0d08fa933f86b053aba.js.map