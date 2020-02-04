(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{2366:function(e,t,a){"use strict";a.r(t),t.default="# Terra i18n Upgrade Guide\n\n## Changes from 3.0 to 4.0\n\nThe terra-i18n `aggregate-translations` pre-build tool has been removed from this package.\n\nAlong with this, the post-install script which wrote default intl and translation loaders has been removed.\n\nTo upgrade, use the [`aggregate-translations` pre-build tool](https://github.com/cerner/terra-aggregate-translations#--terra-aggregate-translations) to generate `intlLoaders` and `translationLoaders` files needed for internationalizing terra components instead of relying on the `intlLoaders` and `translationLoaders` files being generated by the terra-i18n postinstall step.\n\nIf you require translations in your Jest tests, you can create a `jestglobalsetup.js` file for your app to call the aggregate-translations pre-build tool.\n\nAdd the following code to `jestglobalsetup.js`:\n\n```js\nconst aggregateTranslations = require('terra-aggregate-translations');\n\nmodule.exports = () => {\n  aggregateTranslations();\n};\n```\n\nIn your app's jest config file, add the following:\n\n```js\nglobalSetup: './jestglobalsetup.js',\n// This allows jest to resolve files from the generated aggregated-translations in addition to node_modules\nmoduleDirectories: [\n  'aggregated-translations',\n  'node_modules',\n],\n```\n\nAlternatively, you can use [terra-enzyme-intl](https://github.com/cerner/terra-enzyme-intl), which will make aggregating translations for Jest tests unnecessary. The [terra-enzyme-intl](https://github.com/cerner/terra-enzyme-intl) package will use the translation keys for the translation strings instead of the actual translations. If you want to test the actual translation string values, we recommend testing translations with a tool like webdriver.io.\n\n## Changes from 2.0 to 3.0\n\n### Changes to CSS Custom Properties\n\nThe following transitive dependency had breaking changes. See its upgrade guide for more information.\n* terra-doc-template\n"},2864:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),o=l(a(841)),r=l(a(2366));function l(e){return e&&e.__esModule?e:{default:e}}var c=function(){return n.default.createElement(o.default,{packageName:"terra-i18n",srcPath:"https://github.com/cerner/terra-core/tree/master/packages/terra-i18n",readme:r.default})};t.default=c},839:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),o=l(a(4)),r=l(a(840));function l(e){return e&&e.__esModule?e:{default:e}}var c=o.default.bind(r.default),s=function(e){var t=e.packageName,a=e.packageUrl,o=e.packageVersion;return o?n.default.createElement("div",{className:c("badge-container")},n.default.createElement("a",{className:c("badge"),href:a||"https://www.npmjs.org/package/".concat(t,"/v/").concat(o)},n.default.createElement("span",{className:c("badge-name")},a?"package":"npm"),n.default.createElement("span",{className:c("badge-version")},"v".concat(o)))):n.default.createElement("a",{href:"https://www.npmjs.org/package/".concat(t)},n.default.createElement("img",{src:"https://badgen.net/npm/v/".concat(t),alt:"NPM version"}))};t.default=s},840:function(e,t,a){e.exports={badge:"NpmBadge-module__badge___1Cu7Z","badge-container":"NpmBadge-module__badge-container___2zgQi","badge-name":"NpmBadge-module__badge-name___17OzL","badge-version":"NpmBadge-module__badge-version___2Vkei"}},841:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(a(0)),o=u(a(2)),r=u(a(848)),l=u(a(847)),c=u(a(4)),s=u(a(839)),i=u(a(842)),d=u(a(845));function u(e){return e&&e.__esModule?e:{default:e}}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var f=c.default.bind(d.default),g={children:o.default.node,packageName:o.default.string,packageUrl:o.default.string,packageVersion:o.default.string,readme:o.default.string,srcPath:o.default.string,examples:o.default.arrayOf(o.default.shape({title:o.default.string,description:o.default.node,example:o.default.element,source:o.default.string})),propsTables:o.default.arrayOf(o.default.shape({componentSrc:o.default.string,componentName:o.default.string,componentProps:o.default.string,propsResolution:o.default.string}))},h=function(e){var t,a=e.packageName,o=e.packageVersion,c=e.packageUrl,d=e.readme,u=e.srcPath,g=e.examples,h=e.propsTables,_=e.children,b=m(e,["packageName","packageVersion","packageUrl","readme","srcPath","examples","propsTables","children"]),y=g;h&&(t=h);for(var v=0,E=0;E<y.length;E+=1)y[E].id=v,v+=1;if(t)for(var k=0;k<t.length;k+=1)t[k].id=v,v+=1;var x,w=f(["doc-template",b.className]);if(y.length>0){var T=y.length>1?"Examples":"Example";x=n.default.createElement("h1",{className:f("examples-header")},T)}var j=n.default.createElement(s.default,{packageName:a,packageUrl:c,packageVersion:o});return n.default.createElement("div",p({},b,{className:w}),n.default.createElement("div",{className:f("doc-card")},a&&j,d&&n.default.createElement(l.default,{src:d}),u&&n.default.createElement("a",{href:u},"View component source code")),x,y.map((function(e){return n.default.createElement(i.default,{title:e.title,example:e.example,exampleSrc:e.source,description:e.description,key:e.id})})),n.default.createElement("div",{className:f("doc-card")},h[0]&&h[0].componentProps?t.map((function(e){return n.default.createElement("div",{className:f("props-table-markdown"),key:e.id},n.default.createElement("h2",null,e.componentName," Props"),n.default.createElement(l.default,{src:e.componentProps}))})):t.map((function(e){return n.default.createElement(r.default,{src:e.componentSrc,componentName:e.componentName,key:e.id,propsResolution:e.propsResolution})}))),_&&n.default.createElement("div",{className:f("doc-card")},_))};h.propTypes=g,h.defaultProps={packageName:"",packageUrl:"",packageVersion:"",readme:"",srcPath:"",examples:[],propsTables:[]};var _=h;t.default=_},842:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(a(0)),o=d(a(2)),r=d(a(849)),l=d(a(850)),c=d(a(4)),s=d(a(843)),i=d(a(844));function d(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}function f(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}r.default.registerLanguage("jsx",l.default);var b=c.default.bind(s.default),y={example:o.default.element,exampleSrc:o.default.string,title:o.default.string,description:o.default.node,children:o.default.element},v={example:void 0,exampleSrc:void 0,title:void 0,description:void 0,children:void 0},E=function(e){function t(e){var a,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(a=!(o=g(t).call(this,e))||"object"!==u(o)&&"function"!=typeof o?h(n):o).state={isExpanded:!1,isBackgroundTransparent:!1},a.handleBgToggle=a.handleBgToggle.bind(h(a)),a.handleCodeToggle=a.handleCodeToggle.bind(h(a)),a}var a,o,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,e),a=t,(o=[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,t=e.title,a=e.example,o=e.exampleSrc,l=e.children,c=e.description,s=m(e,["title","example","exampleSrc","children","description"]),d=this.state,u=d.isExpanded,f={};return d.isBackgroundTransparent&&(f={backgroundColor:"rgba(0, 0, 0, 0)"}),n.default.createElement("div",p({},s,{className:b("template",s.className)}),t&&n.default.createElement("div",{className:b("header")},n.default.createElement("h2",{className:b("title")},t)),n.default.createElement("div",{className:b("content"),style:f},c&&n.default.createElement("div",{className:b("description")},c),a,l),o&&n.default.createElement("div",{className:b("footer")},n.default.createElement("div",{className:b("button-container")},n.default.createElement("button",{type:"button",className:b("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),n.default.createElement("button",{type:"button",className:b("code-toggle"),onClick:this.handleCodeToggle},n.default.createElement("span",{className:b("chevron-left")}),n.default.createElement("span",null,"Code"),n.default.createElement("span",{className:b("chevron-right")}))),n.default.createElement("div",{className:b("code",{"is-expanded":u}),"aria-hidden":!u},u?n.default.createElement(r.default,{language:"jsx",style:i.default,customStyle:{margin:"0",borderRadius:"0"}},o):void 0)))}}])&&f(a.prototype,o),l&&f(a,l),t}(n.default.Component);E.propTypes=y,E.defaultProps=v;var k=E;t.default=k},843:function(e,t,a){e.exports={template:"ExampleTemplate-module__template___MEAKz",header:"ExampleTemplate-module__header___13zqD",content:"ExampleTemplate-module__content___1Zdto",description:"ExampleTemplate-module__description___pnaPA",footer:"ExampleTemplate-module__footer___2jmFy","button-container":"ExampleTemplate-module__button-container___2JIjW",code:"ExampleTemplate-module__code___1u1x4","is-expanded":"ExampleTemplate-module__is-expanded___2fXEU","bg-toggle":"ExampleTemplate-module__bg-toggle___1rE0y","code-toggle":"ExampleTemplate-module__code-toggle___1B459","chevron-left":"ExampleTemplate-module__chevron-left___2hjZu","chevron-right":"ExampleTemplate-module__chevron-right___fnHrn",title:"ExampleTemplate-module__title___1qQfE"}},844:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="#D8DEE9",o="#B2B2B2",r="#c5a5c5",l="#5a9bcf",c="#8dc891",s="#d7deea",i="#FAC863",d={'code[class*="language-"]':{color:"#f8f8f2",background:"none",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#fff",background:"rgb(40, 44, 52)",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"rgb(40, 44, 52)",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},"plain-text":{color:"#ffffff"},"attr-name":{color:r},comment:{color:o},"block-comment":{color:o},prolog:{color:o},doctype:{color:o},cdata:{color:o},property:{color:l},number:{color:l},"function-name":{color:l},constant:{color:l},symbol:{color:l},deleted:{color:l},boolean:{color:"#ff8b50"},tag:{color:"#fc929e"},string:{color:c},punctuation:{color:"#88C6BE"},selector:{color:n},char:{color:n},builtin:{color:n},inserted:{color:n},function:{color:"#79b6f2"},operator:{color:s},entity:{color:s,cursor:"help"},url:{color:s},".language-css .token.string":{color:s},".style .token.string":{color:s},variable:{color:s},"attr-value":{color:c},keyword:{color:r},"at-rule":{color:i},"class-name":{color:i},important:{fontWeight:400},bold:{fontWeight:700},italic:{fontStyle:"italic"},".namespace":{opacity:.7}};t.default=d},845:function(e,t,a){e.exports={"examples-header":"DocTemplate-module__examples-header___P3qFL","doc-template":"DocTemplate-module__doc-template___JSxEJ","doc-card":"DocTemplate-module__doc-card___2jEVe","props-table-markdown":"DocTemplate-module__props-table-markdown___1926W"}}}]);
//# sourceMappingURL=175-97c9970a43db528d2185.js.map