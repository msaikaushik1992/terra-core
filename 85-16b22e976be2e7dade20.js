(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{1002:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a(0)),r=o(a(20));function o(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var s=function(e){var t=l({},e);return n.default.createElement(r.default,t,n.default.createElement("path",{d:"M31.1 31.4a1.51 1.51 0 11-2.1 2.1l-6.1-6.1a3 3 0 01-.5-.7.31.31 0 00-.1-.2c0-.1-.1-.3-.1-.4V15.3a1.69 1.69 0 011.5-1.8 1.69 1.69 0 011.5 1.8v10.3zm14.3-4.8a21.26 21.26 0 01-4.6 13.3A21.42 21.42 0 1120.9 5.4V2a2 2 0 012-2h2a2 2 0 012 2v3.4a18.63 18.63 0 013.4.7 24.25 24.25 0 016.4 3.3l2.2-2.2a2.05 2.05 0 012.9 0l1.4 1.4a2.05 2.05 0 010 2.9l-2.1 2.1a22 22 0 014.3 13zm-3 0A18.34 18.34 0 0029.5 9a20.32 20.32 0 00-5.5-.8A18.4 18.4 0 1038.4 38a18.16 18.16 0 004-11.4z"}))};s.displayName="IconDue",s.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"};var i=s;t.default=i},1592:function(e,t,a){e.exports=a.p+"87ec563ff16c288f58b0747d553762d6.jpg"},2597:function(e,t,a){"use strict";a.r(t),t.default='# Terra Status\n\nThe status component provides a customizable color indictor to signify a specific condition.\n\n## Getting Started\n\n- Install with [npmjs](https://www.npmjs.com):\n  - `npm install terra-status`\n\n\x3c!-- AUTO-GENERATED-CONTENT:START Peer Dependencies --\x3e\n## Peer Dependencies\n\nThis component requires the following peer dependencies be installed in your app for the component to properly function.\n\n| Peer Dependency | Version |\n|-|-|\n| react | ^16.8.5 |\n| react-dom | ^16.8.5 |\n\n\n\n\x3c!-- AUTO-GENERATED-CONTENT:END --\x3e\n\n## Usage\n\n```jsx\nimport React from \'react\';\nimport Status from \'terra-status\';\n\n<Status className="high-status"><div>Hello</div></Status>\n<Status className="good-status"><div>Hello</div></Status>\n<Status className="blue-status"><div>Hello</div></Status>\n```\n\n```css\n:root {\n  --my-app-status-attention-color: red;\n  --my-app-status-success-color: #00ff00;\n  --my-app-status-info-color: rgb(0,0,255);\n}\n\n.attention {\n  border-left-color: var(--my-app-status-attention-color, red);\n}\n\n.success {\n  border-left-color: var(--my-app-status-success-color, #00ff00);\n}\n\n.info {\n  border-left-color: var(--my-app-status-info-color, rgb(0,0,255));\n}\n```\n\n## Component Features\n* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)\n* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)\n* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)\n'},2598:function(e){e.exports=JSON.parse('{"name":"terra-status","main":"lib/Status.js","version":"4.24.0","description":"The status component provides a customizable color indictor to signify a specific condition.","repository":{"type":"git","url":"git+https://github.com/cerner/terra-core.git"},"keywords":["Cerner","Terra","terra-status","Status","UI"],"author":"Cerner Corporation","license":"Apache-2.0","bugs":{"url":"https://github.com/cerner/terra-core/issues"},"homepage":"https://github.com/cerner/terra-core#readme","scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","precompile":"rm -rf lib","test":"npm run jest && npm run wdio","jest":"jest --config ../../jestconfig.js","wdio":"cd ../.. && npx wdio ./packages/$npm_package_name/wdio.conf.js"},"peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5"},"dependencies":{"classnames":"^2.2.5","prop-types":"^15.5.8","terra-arrange":"^3.28.0","terra-doc-template":"^2.23.0","terra-icon":"^3.26.0","terra-visually-hidden-text":"^2.22.0"}}')},2599:function(e,t){e.exports='<table style="display: table; margin-bottom: 1.25rem"><thead><tr style="line-height: 1.5"><th style="width: 10%">Prop Name</th><th style="width: 25%">Type</th><th style="width: 10%">Is Required</th><th style="width: 10%">Default Value</th><th style="width: 45%">Description</th></tr></thead><tbody><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">children</td><td style="padding-bottom: 1.8rem">node</td><td style="color: #d53700; padding-bottom: 1.8rem">required</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">Child node. Component to display next to the status indicator.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">visuallyHiddenText</td><td style="padding-bottom: 1.8rem">string</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">Visually hidden text used to convey the meaning of the status indicator to screen readers.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">colorClass</td><td style="padding-bottom: 1.8rem">string</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">Sets an author defined class, to control the colors of the status indicator.<img src="https://badgen.net/badge//IMPORTANT/blue?icon=github" alt="IMPORTANT">\nAdding <code style="white-space: pre-wrap">var(--my-app...</code> CSS variables is required for proper re-themeability when creating custom color styles <em>(see included examples)</em>.</td></tr></tbody></table>'},2600:function(e,t,a){"use strict";a.r(t),t.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\nimport VisuallyHiddenText from 'terra-visually-hidden-text';\nimport styles from './Status.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst propTypes = {\n  /**\n   * Child node. Component to display next to the status indicator.\n   */\n  children: PropTypes.node.isRequired,\n  /**\n   * Visually hidden text used to convey the meaning of the status indicator to screen readers.\n   */\n  visuallyHiddenText: PropTypes.string,\n  /**\n   * Sets an author defined class, to control the colors of the status indicator.\n   *\n   * ![IMPORTANT](https://badgen.net/badge//IMPORTANT/blue?icon=github)\n   * Adding `var(--my-app...` CSS variables is required for proper re-themeability when creating custom color styles _(see included examples)_.\n   */\n  colorClass: PropTypes.string,\n};\n\nconst Status = ({\n  children,\n  visuallyHiddenText,\n  colorClass,\n  ...customProps\n}) => {\n  if ((process.env.NODE_ENV !== 'production') && (!visuallyHiddenText)) {\n  // eslint-disable-next-line no-console\n    console.warn('\\'visuallyHiddenText\\' should be added to convey the meaning of the status indicator for screen readers accessibility. This prop will be required in the next major version bump of terra-status.');\n  }\n\n  return (\n    <div {...customProps} className={cx('status', colorClass, customProps.className)}>\n      {visuallyHiddenText && <VisuallyHiddenText text={visuallyHiddenText} />}\n      {children}\n    </div>\n  );\n};\n\nStatus.propTypes = propTypes;\n\nexport default Status;\n"},2601:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(a(0)),r=s(a(924)),o=s(a(4)),l=s(a(925));function s(e){return e&&e.__esModule?e:{default:e}}var i=o.default.bind(l.default),c=n.default.createElement("div",{className:i("text-wrapper")},"Sample text"),d=function(){return n.default.createElement("div",null,n.default.createElement(r.default,{colorClass:i(["success"]),visuallyHiddenText:"Status Success"},c))};t.default=d},2602:function(e,t,a){"use strict";a.r(t),t.default="import React from 'react';\nimport Status from 'terra-status';\nimport classNames from 'classnames/bind';\nimport styles from './colors.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst simpleText = <div className={cx('text-wrapper')}>Sample text</div>;\n\nconst StatusDefault = () => (\n  <div>\n    <Status colorClass={cx(['success'])} visuallyHiddenText=\"Status Success\">{simpleText}</Status>\n  </div>\n);\n\nexport default StatusDefault;\n"},2603:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(0)),r=i(a(924)),o=i(a(1592)),l=i(a(4)),s=i(a(925));function i(e){return e&&e.__esModule?e:{default:e}}var c=l.default.bind(s.default),d=n.default.createElement("img",{className:c("image-wrapper"),height:"150",width:"150",src:o.default,alt:"placeholder"}),u=function(){return n.default.createElement(r.default,{colorClass:c(["attention"]),visuallyHiddenText:"Status Attention"},d)};t.default=u},2604:function(e,t,a){"use strict";a.r(t),t.default="import React from 'react';\nimport Status from 'terra-status';\nimport placeholderPic150x150 from 'terra-status/lib/terra-dev-site/doc/example/150x150.jpg';\nimport classNames from 'classnames/bind';\nimport styles from './colors.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst image = <img className={cx('image-wrapper')} height=\"150\" width=\"150\" src={placeholderPic150x150} alt=\"placeholder\" />;\n\nconst StatusImage = () => (\n  <Status colorClass={cx(['attention'])} visuallyHiddenText=\"Status Attention\">{image}</Status>\n);\n\nexport default StatusImage;\n"},2605:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(0)),r=i(a(1002)),o=i(a(924)),l=i(a(4)),s=i(a(925));function i(e){return e&&e.__esModule?e:{default:e}}var c=l.default.bind(s.default),d=n.default.createElement(r.default,{height:"60",width:"60"}),u=function(){return n.default.createElement(o.default,{colorClass:c(["info"]),visuallyHiddenText:"Status Info"},d)};t.default=u},2606:function(e,t,a){"use strict";a.r(t),t.default="import React from 'react';\nimport IconDue from 'terra-icon/lib/icon/IconDue';\nimport Status from 'terra-status';\nimport classNames from 'classnames/bind';\nimport styles from './colors.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst icon = <IconDue height=\"60\" width=\"60\" />;\n\nconst StatusIcon = () => (\n  <Status colorClass={cx(['info'])} visuallyHiddenText=\"Status Info\">{icon}</Status>\n);\n\nexport default StatusIcon;\n"},2607:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(a(0)),r=c(a(180)),o=c(a(924)),l=c(a(1592)),s=c(a(4)),i=c(a(925));function c(e){return e&&e.__esModule?e:{default:e}}var d=s.default.bind(i.default),u=n.default.createElement("img",{className:d("image-wrapper"),height:"150",width:"150",src:l.default,alt:"placeholder"}),p=n.default.createElement("div",{className:d("text-wrapper")},"Sample text"),m=function(){return n.default.createElement("div",null,n.default.createElement(o.default,{colorClass:d(["attention"]),visuallyHiddenText:"Status Attention"},n.default.createElement(r.default,{fitStart:u,fill:p,alignFill:"center"})))};t.default=m},2608:function(e,t,a){"use strict";a.r(t),t.default="import React from 'react';\nimport Arrange from 'terra-arrange';\nimport Status from 'terra-status';\nimport placeholderPic150x150 from 'terra-status/lib/terra-dev-site/doc/example/150x150.jpg';\nimport classNames from 'classnames/bind';\nimport styles from './colors.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst image = <img className={cx('image-wrapper')} height=\"150\" width=\"150\" src={placeholderPic150x150} alt=\"placeholder\" />;\nconst simpleText = <div className={cx('text-wrapper')}>Sample text</div>;\n\nconst StatusArrange = () => (\n  <div>\n    <Status colorClass={cx(['attention'])} visuallyHiddenText=\"Status Attention\">\n      <Arrange fitStart={image} fill={simpleText} alignFill=\"center\" />\n    </Status>\n  </div>\n);\n\nexport default StatusArrange;\n"},2913:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=h(a(0)),r=h(a(841)),o=h(a(2597)),l=a(2598),s=h(a(2599)),i=h(a(2600)),c=h(a(2601)),d=h(a(2602)),u=h(a(2603)),p=h(a(2604)),m=h(a(2605)),f=h(a(2606)),g=h(a(2607)),b=h(a(2608));function h(e){return e&&e.__esModule?e:{default:e}}var y=function(){return n.default.createElement(r.default,{packageName:l.name,packageVersion:l.version,readme:o.default,srcPath:"https://github.com/cerner/terra-core/tree/master/packages/".concat(l.name),examples:[{title:"Status with text",example:n.default.createElement(c.default,null),source:d.default},{title:"Status with Image",example:n.default.createElement(u.default,null),source:p.default},{title:"Status with Icon",example:n.default.createElement(m.default,null),source:f.default},{title:"Status with Arrange",example:n.default.createElement(g.default,null),source:b.default}],propsTables:[{componentName:"Status",componentSrc:i.default,componentProps:s.default}]})};t.default=y},839:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),r=l(a(4)),o=l(a(840));function l(e){return e&&e.__esModule?e:{default:e}}var s=r.default.bind(o.default),i=function(e){var t=e.packageName,a=e.packageUrl,r=e.packageVersion;return r?n.default.createElement("div",{className:s("badge-container")},n.default.createElement("a",{className:s("badge"),href:a||"https://www.npmjs.org/package/".concat(t,"/v/").concat(r)},n.default.createElement("span",{className:s("badge-name")},a?"package":"npm"),n.default.createElement("span",{className:s("badge-version")},"v".concat(r)))):n.default.createElement("a",{href:"https://www.npmjs.org/package/".concat(t)},n.default.createElement("img",{src:"https://badgen.net/npm/v/".concat(t),alt:"NPM version"}))};t.default=i},840:function(e,t,a){e.exports={badge:"NpmBadge-module__badge___1Cu7Z","badge-container":"NpmBadge-module__badge-container___2zgQi","badge-name":"NpmBadge-module__badge-name___17OzL","badge-version":"NpmBadge-module__badge-version___2Vkei"}},841:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(a(0)),r=u(a(2)),o=u(a(848)),l=u(a(847)),s=u(a(4)),i=u(a(839)),c=u(a(842)),d=u(a(845));function u(e){return e&&e.__esModule?e:{default:e}}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var f=s.default.bind(d.default),g={children:r.default.node,packageName:r.default.string,packageUrl:r.default.string,packageVersion:r.default.string,readme:r.default.string,srcPath:r.default.string,examples:r.default.arrayOf(r.default.shape({title:r.default.string,description:r.default.node,example:r.default.element,source:r.default.string})),propsTables:r.default.arrayOf(r.default.shape({componentSrc:r.default.string,componentName:r.default.string,componentProps:r.default.string,propsResolution:r.default.string}))},b=function(e){var t,a=e.packageName,r=e.packageVersion,s=e.packageUrl,d=e.readme,u=e.srcPath,g=e.examples,b=e.propsTables,h=e.children,y=m(e,["packageName","packageVersion","packageUrl","readme","srcPath","examples","propsTables","children"]),v=g;b&&(t=b);for(var _=0,x=0;x<v.length;x+=1)v[x].id=_,_+=1;if(t)for(var S=0;S<t.length;S+=1)t[S].id=_,_+=1;var w,T=f(["doc-template",y.className]);if(v.length>0){var E=v.length>1?"Examples":"Example";w=n.default.createElement("h1",{className:f("examples-header")},E)}var N=n.default.createElement(i.default,{packageName:a,packageUrl:s,packageVersion:r});return n.default.createElement("div",p({},y,{className:T}),n.default.createElement("div",{className:f("doc-card")},a&&N,d&&n.default.createElement(l.default,{src:d}),u&&n.default.createElement("a",{href:u},"View component source code")),w,v.map((function(e){return n.default.createElement(c.default,{title:e.title,example:e.example,exampleSrc:e.source,description:e.description,key:e.id})})),n.default.createElement("div",{className:f("doc-card")},b[0]&&b[0].componentProps?t.map((function(e){return n.default.createElement("div",{className:f("props-table-markdown"),key:e.id},n.default.createElement("h2",null,e.componentName," Props"),n.default.createElement(l.default,{src:e.componentProps}))})):t.map((function(e){return n.default.createElement(o.default,{src:e.componentSrc,componentName:e.componentName,key:e.id,propsResolution:e.propsResolution})}))),h&&n.default.createElement("div",{className:f("doc-card")},h))};b.propTypes=g,b.defaultProps={packageName:"",packageUrl:"",packageVersion:"",readme:"",srcPath:"",examples:[],propsTables:[]};var h=b;t.default=h},842:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(a(0)),r=d(a(2)),o=d(a(849)),l=d(a(850)),s=d(a(4)),i=d(a(843)),c=d(a(844));function d(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function f(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}o.default.registerLanguage("jsx",l.default);var y=s.default.bind(i.default),v={example:r.default.element,exampleSrc:r.default.string,title:r.default.string,description:r.default.node,children:r.default.element},_={example:void 0,exampleSrc:void 0,title:void 0,description:void 0,children:void 0},x=function(e){function t(e){var a,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(a=!(r=g(t).call(this,e))||"object"!==u(r)&&"function"!=typeof r?b(n):r).state={isExpanded:!1,isBackgroundTransparent:!1},a.handleBgToggle=a.handleBgToggle.bind(b(a)),a.handleCodeToggle=a.handleCodeToggle.bind(b(a)),a}var a,r,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),a=t,(r=[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,t=e.title,a=e.example,r=e.exampleSrc,l=e.children,s=e.description,i=m(e,["title","example","exampleSrc","children","description"]),d=this.state,u=d.isExpanded,f={};return d.isBackgroundTransparent&&(f={backgroundColor:"rgba(0, 0, 0, 0)"}),n.default.createElement("div",p({},i,{className:y("template",i.className)}),t&&n.default.createElement("div",{className:y("header")},n.default.createElement("h2",{className:y("title")},t)),n.default.createElement("div",{className:y("content"),style:f},s&&n.default.createElement("div",{className:y("description")},s),a,l),r&&n.default.createElement("div",{className:y("footer")},n.default.createElement("div",{className:y("button-container")},n.default.createElement("button",{type:"button",className:y("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),n.default.createElement("button",{type:"button",className:y("code-toggle"),onClick:this.handleCodeToggle},n.default.createElement("span",{className:y("chevron-left")}),n.default.createElement("span",null,"Code"),n.default.createElement("span",{className:y("chevron-right")}))),n.default.createElement("div",{className:y("code",{"is-expanded":u}),"aria-hidden":!u},u?n.default.createElement(o.default,{language:"jsx",style:c.default,customStyle:{margin:"0",borderRadius:"0"}},r):void 0)))}}])&&f(a.prototype,r),l&&f(a,l),t}(n.default.Component);x.propTypes=v,x.defaultProps=_;var S=x;t.default=S},843:function(e,t,a){e.exports={template:"ExampleTemplate-module__template___MEAKz",header:"ExampleTemplate-module__header___13zqD",content:"ExampleTemplate-module__content___1Zdto",description:"ExampleTemplate-module__description___pnaPA",footer:"ExampleTemplate-module__footer___2jmFy","button-container":"ExampleTemplate-module__button-container___2JIjW",code:"ExampleTemplate-module__code___1u1x4","is-expanded":"ExampleTemplate-module__is-expanded___2fXEU","bg-toggle":"ExampleTemplate-module__bg-toggle___1rE0y","code-toggle":"ExampleTemplate-module__code-toggle___1B459","chevron-left":"ExampleTemplate-module__chevron-left___2hjZu","chevron-right":"ExampleTemplate-module__chevron-right___fnHrn",title:"ExampleTemplate-module__title___1qQfE"}},844:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="#D8DEE9",r="#B2B2B2",o="#c5a5c5",l="#5a9bcf",s="#8dc891",i="#d7deea",c="#FAC863",d={'code[class*="language-"]':{color:"#f8f8f2",background:"none",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#fff",background:"rgb(40, 44, 52)",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"rgb(40, 44, 52)",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},"plain-text":{color:"#ffffff"},"attr-name":{color:o},comment:{color:r},"block-comment":{color:r},prolog:{color:r},doctype:{color:r},cdata:{color:r},property:{color:l},number:{color:l},"function-name":{color:l},constant:{color:l},symbol:{color:l},deleted:{color:l},boolean:{color:"#ff8b50"},tag:{color:"#fc929e"},string:{color:s},punctuation:{color:"#88C6BE"},selector:{color:n},char:{color:n},builtin:{color:n},inserted:{color:n},function:{color:"#79b6f2"},operator:{color:i},entity:{color:i,cursor:"help"},url:{color:i},".language-css .token.string":{color:i},".style .token.string":{color:i},variable:{color:i},"attr-value":{color:s},keyword:{color:o},"at-rule":{color:c},"class-name":{color:c},important:{fontWeight:400},bold:{fontWeight:700},italic:{fontStyle:"italic"},".namespace":{opacity:.7}};t.default=d},845:function(e,t,a){e.exports={"examples-header":"DocTemplate-module__examples-header___P3qFL","doc-template":"DocTemplate-module__doc-template___JSxEJ","doc-card":"DocTemplate-module__doc-card___2jEVe","props-table-markdown":"DocTemplate-module__props-table-markdown___1926W"}},924:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(0)),r=i(a(2)),o=i(a(4)),l=i(a(134)),s=i(a(950));function i(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=o.default.bind(s.default),p={children:r.default.node.isRequired,visuallyHiddenText:r.default.string,colorClass:r.default.string},m=function(e){var t=e.children,a=e.visuallyHiddenText,r=e.colorClass,o=d(e,["children","visuallyHiddenText","colorClass"]);return n.default.createElement("div",c({},o,{className:u("status",r,o.className)}),a&&n.default.createElement(l.default,{text:a}),t)};m.propTypes=p;var f=m;t.default=f},925:function(e,t,a){e.exports={attention:"colors-module__attention___wKQkX",success:"colors-module__success___1iPbJ",info:"colors-module__info___1wrjL","image-wrapper":"colors-module__image-wrapper___26yzN","text-wrapper":"colors-module__text-wrapper___ntx7q"}},950:function(e,t,a){e.exports={status:"Status-module__status___MOh2z"}}}]);
//# sourceMappingURL=85-16b22e976be2e7dade20.js.map