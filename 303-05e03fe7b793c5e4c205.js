(window.webpackJsonp=window.webpackJsonp||[]).push([[303],{2799:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));a(0);var n=a(276),r=a(959);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o={};function d(e){var t=e.components,a=m(e,["components"]);return Object(n.mdx)("wrapper",c({},o,a,{components:t,mdxType:"MDXLayout"}),Object(n.mdx)(r.a,{mdxType:"Badge"}),Object(n.mdx)("h1",{id:"about-terra-avatar"},"About terra-avatar"),Object(n.mdx)("p",null,"The ",Object(n.mdx)("inlineCode",{parentName:"p"},"terra-avatar")," package contains three components: ",Object(n.mdx)("inlineCode",{parentName:"p"},"Avatar"),", ",Object(n.mdx)("inlineCode",{parentName:"p"},"Facility"),", and ",Object(n.mdx)("inlineCode",{parentName:"p"},"SharedUser"),". View their respective documentation tabs for information on accepted props and examples."),Object(n.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Install with ",Object(n.mdx)("a",c({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(n.mdx)("ul",{parentName:"li"},Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("inlineCode",{parentName:"li"},"npm install terra-avatar"))))),Object(n.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(n.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(n.mdx)("table",null,Object(n.mdx)("thead",{parentName:"table"},Object(n.mdx)("tr",{parentName:"thead"},Object(n.mdx)("th",c({parentName:"tr"},{align:null}),"Peer Dependency"),Object(n.mdx)("th",c({parentName:"tr"},{align:null}),"Version"))),Object(n.mdx)("tbody",{parentName:"table"},Object(n.mdx)("tr",{parentName:"tbody"},Object(n.mdx)("td",c({parentName:"tr"},{align:null}),"react"),Object(n.mdx)("td",c({parentName:"tr"},{align:null}),"^16.8.5")),Object(n.mdx)("tr",{parentName:"tbody"},Object(n.mdx)("td",c({parentName:"tr"},{align:null}),"react-dom"),Object(n.mdx)("td",c({parentName:"tr"},{align:null}),"^16.8.5")))),Object(n.mdx)("h2",{id:"usage"},"Usage"),Object(n.mdx)("pre",{className:"language-jsx"},Object(n.mdx)("code",c({parentName:"pre"},{className:"language-jsx"}),Object(n.mdx)("span",c({parentName:"code"},{className:"token keyword module"}),"import")," ",Object(n.mdx)("span",c({parentName:"code"},{className:"token maybe-class-name"}),"Avatar"),Object(n.mdx)("span",c({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.mdx)("span",c({parentName:"code"},{className:"token punctuation"}),"{")," ",Object(n.mdx)("span",c({parentName:"code"},{className:"token maybe-class-name"}),"Facility"),Object(n.mdx)("span",c({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.mdx)("span",c({parentName:"code"},{className:"token maybe-class-name"}),"SharedUser")," ",Object(n.mdx)("span",c({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(n.mdx)("span",c({parentName:"code"},{className:"token keyword module"}),"from")," ",Object(n.mdx)("span",c({parentName:"code"},{className:"token string"}),"'terra-avatar'"),Object(n.mdx)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n")),Object(n.mdx)("h2",{id:"component-features"},"Component Features"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("a",c({parentName:"li"},{href:"https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support"}),"Cross-Browser Support")),Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("a",c({parentName:"li"},{href:"https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support"}),"Mobile Support"))),Object(n.mdx)("p",null,Object(n.mdx)("a",c({parentName:"p"},{href:"https://github.com/cerner/terra-core/tree/master/packages/terra-avatar"}),"View component source code")))}d.isMDXComponent=!0},851:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a(0)),r=o(a(2)),c=o(a(4)),m=o(a(852));function o(e){return e&&e.__esModule?e:{default:e}}var d=c.default.bind(m.default),p={name:r.default.string.isRequired,url:r.default.string,version:r.default.string.isRequired},s=function(e){var t=e.name,a=e.url,r=e.version;return n.default.createElement("div",{className:d("badge-container")},n.default.createElement("a",{className:d("badge"),href:a||"https://www.npmjs.org/package/".concat(t,"/v/").concat(r)},n.default.createElement("span",{className:d("badge-name")},a?"package":"npm"),n.default.createElement("span",{className:d("badge-version")},"v".concat(r))))};s.propTypes=p;var l=s;t.default=l},852:function(e,t,a){e.exports={badge:"NpmBadge-module__badge___3p041","badge-container":"NpmBadge-module__badge-container___2W9ft","badge-name":"NpmBadge-module__badge-name___2TNAy","badge-version":"NpmBadge-module__badge-version___3bRIz"}},959:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(0),r=a.n(n),c=a(851),m=a.n(c),o=function(e){var t=e.url;return r.a.createElement(m.a,{name:"terra-avatar",version:"2.33.0",url:t})}}}]);
//# sourceMappingURL=303-05e03fe7b793c5e4c205.js.map