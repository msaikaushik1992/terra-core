(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{1589:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=[{title:"Section 0",key:"unique-key-0",childItems:[{title:"Subsection 0-0",key:"unique-key-0-0",childItems:[{title:"Item 0-0-0",key:"unique-key-0-0-0"},{title:"Item 0-0-1",key:"unique-key-0-0-1"},{title:"Item 0-0-2",key:"unique-key-0-0-2"}]},{title:"Subsection 0-1",key:"unique-key-0-1",childItems:[{title:"Item 0-1-0",key:"unique-key-0-1-0"},{title:"Item 0-1-1",key:"unique-key-0-1-1"},{title:"Item 0-1-2",key:"unique-key-0-1-2"}]}]},{title:"Section 1",key:"unique-key-1",childItems:[{title:"Subsection 1-0",key:"unique-key-1-0",childItems:[{title:"Item 1-0-0",key:"unique-key-1-0-0"},{title:"Item 1-0-1",key:"unique-key-1-0-1"},{title:"Item 1-0-2",key:"unique-key-1-0-2"}]},{title:"Subsection 1-1",key:"unique-key-1-1",childItems:[{title:"Item 1-1-0",key:"unique-key-1-1-0"},{title:"Item 1-1-1",key:"unique-key-1-1-1"},{title:"Item 1-1-2",key:"unique-key-1-1-2"}]}]}];t.default=a},2435:function(e,t,n){"use strict";n.r(t),t.default="# Terra List - Sections with Subsections\n\nWith the inclusion of sections in the list, there are two recommended patterns for creating nested collapsible sections. First is collapsible sections and static subsections, and the second is static sections and collapsible subsections. The guidance from UX is to only use collapsible sections or collapsible subsections in a list, but not both.\n\n## State Management\nAs section and subsection have the same API, we'll be walking through the expectation of a collapsible section in only one pattern.\n\nFirst defaulting our state to an empty array in the constructor. \n```diff\nclass MyList extends React.Component {\n  constructor(props) {\n    super(props);\n\n+    this.state = { collapsedKeys: [] };\n  }\n  \n  render() {\n    return (\n    );\n  }\n}\n```\nNext creating an event handler callback method to pass to the section's `onSelect` prop. The `onSelect` will return the metaData prop passed it each section.\n```diff\nclass MyList extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = { collapsedKeys: [] };\n+   this.handleSectionSelection = this.handleSectionSelection.bind(this)\n  }\n  \n+  handleSectionSelection(event, metaData) {\n+\n+  }\n```\nAs a precaution we can prevent default on the event, in case the list has an ancestor with a listener. This also prevents the browser from auto page scrolling when we are intending to make a selection with the space bar.\n```diff\n  handleSectionSelection(event, metaData) {\n+    event.preventDefault();\n  }\n```\nTerra list comes with additional helpers to manage state, in this case we want to determine if the selection has collapsed or opened the section using the section key in our state. So we use the utility method `updatedMulitSelectedKeys`, which returns an array of the keys following the addition or removing of the key passed. We then set this as our state.\n```diff\n  handleSectionSelection(event, metaData) {\n    event.preventDefault();\n+   this.setState(state => ({ collapsedKeys: Utils.updatedMultiSelectedKeys(state.selectedKeys, metaData.key) }));\n  }\n```\nSettting state will trigger another render. So in the render method we need to generate our sections with the updated `isCollapsed` and `isCollapsible` props. Each section needs a unique key, not necessarily associated to our own key, but it works as well. The list renders flat, so keys need to be unique even if items are placed within sections structurally.\n[React List & Key Documentation](https://reactjs.org/docs/lists-and-keys.html)\n```diff\nclass MyList extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = { collapsedKeys: [] };\n    this.handleSectionSelection = this.handleSectionSelection.bind(this)\n+   this.createSection = this.createSection.bind(this)\n  }\n  ...\n+ createSection(sectionData) {\n+   return (\n+     <Section\n+       key={sectionData.key}\n+       title={sectionData.title}\n+     >\n+       {sectionData.childItems.map(childItem => createSubsection(childItem))}\n+     </Section>\n+   );\n+ }\n```\nNext we need to set up our `metaData` object with our key value, and attach the `onSelect` to our handler.\n```diff\n  createSection(sectionData) {\n    return (\n      <Section\n        key={sectionData.key}\n        title={sectionData.title}\n+       metaData={{ key: sectionData.key }}\n+       onSelect={this.handleSectionSelection}\n      >\n        {sectionData.childItems.map(childItem => createSubsection(childItem))}\n      </Section>\n    );\n  }\n```\nFor the common collapsible sections we set `isCollapsible` for all sections.\n```diff\n  createSection(sectionData) {\n    return (\n      <Section\n        key={sectionData.key}\n        title={sectionData.title}\n+       isCollapsible\n        metaData={{ key: sectionData.key }}\n        onSelect={this.handleSectionSelection}\n      >\n        {sectionData.childItems.map(childItem => createSubsection(childItem))}\n      </Section>\n    );\n  }\n```\nFinally we need to check if the section is collapsed. As we support IE10 & 11, we cannot use `contains`, so we use `indexOf` to determine if the key is present in our state array. Here we can also avoid rendering collapsed child items and subsections by avoiding the subsequent function calls. Short circuiting the render is not required, as the section can correctly managed the display of the child content, but this will avoid additional javascript cycles looping through and creating child objects. The performance impact of generating child items is minimal, but with large lists it can add up.\n```diff\n  createSection(sectionData) {\n+   const isCollapsed = this.state.collapsedKeys.indexOf(sectionData.key) >= 0;\n    return (\n      <Section\n        key={sectionData.key}\n        title={sectionData.title}\n+       isCollapsed={isCollapsed}\n        isCollapsible\n        metaData={{ key: sectionData.key }}\n        onSelect={this.handleSectionSelection}\n      >\n-       {sectionData.childItems.map(childItem => createSubsection(childItem))}\n+       {!isCollapsed && sectionData.childItems.map(childItem => createSubsection(childItem))}\n      </Section>\n    );\n```\nWe can then implement the unpack of our data into our list items.\n```diff\n  createSection(sectionData) {\n   const isCollapsed = this.state.collapsedKeys.indexOf(sectionData.key) >= 0;\n+  const createListItem = itemData => (\n+    <Item key={itemData.key}>\n+       <Placeholder />\n+    </Item>\n+  );\n\n+  const createSubsection = subsectionData => (\n+     <Subsection\n+       key={subsectionData.key}\n+       title={subsectionData.title}\n+     >\n+       {subsectionData.childItems.map(childItem => createListItem(childItem))}\n+     </Subsection>\n+   );\n    return (\n      <Section\n        key={sectionData.key}\n        title={sectionData.title}\n        isCollapsed={isCollapsed}\n        isCollapsible\n        metaData={{ key: sectionData.key }}\n        onSelect={this.handleSectionSelection}\n      >\n        {!isCollapsed && sectionData.childItems.map(childItem => createSubsection(childItem))}\n      </Section>\n    );\n```\nThen we can implement a method to loop through our data and create the section with our methods and call it from our render method.\n```diff\nclass MyList extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = { collapsedKeys: [] };\n    this.handleSectionSelection = this.handleSectionSelection.bind(this)\n    this.createSection = this.createSection.bind(this)\n+   this.createSections = this.createSections.bind(this)\n  }\n  ...\n+ createSections(data) {\n+   return data.map(section => this.createSection(section));\n+ }\n\n  render() {\n    return (\n+     <List dividerStyle=\"standard\">\n+       {this.createSections(mockData)}\n+     </List>\n    );\n  }\n  ```\n  Using these steps we get the following example.\n"},2436:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(0)),o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==d(e)&&"function"!=typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(78)),i=u(n(862)),r=u(n(4)),l=u(n(1589)),c=u(n(898));function s(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function u(e){return e&&e.__esModule?e:{default:e}}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=r.default.bind(c.default),b=function(e){return a.default.createElement(o.Subsection,{key:e.key,title:e.title},e.childItems.map((function(e){return t=e,a.default.createElement(o.Item,{key:t.key},a.default.createElement(i.default,{title:t.title,className:y("placeholder")}));var t})))},S=function(e){function t(e){var n,a,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,(n=!(o=m(t).call(this,e))||"object"!==d(o)&&"function"!=typeof o?f(a):o).createSection=n.createSection.bind(f(n)),n.createSections=n.createSections.bind(f(n)),n.handleSectionSelection=n.handleSectionSelection.bind(f(n)),n.state={collapsedKeys:[]},n}var n,i,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),n=t,(i=[{key:"handleSectionSelection",value:function(e,t){e.preventDefault(),this.setState((function(e){return{collapsedKeys:o.Utils.updatedMultiSelectedKeys(e.collapsedKeys,t.key)}}))}},{key:"createSection",value:function(e){var t=this.state.collapsedKeys.indexOf(e.key)>=0;return a.default.createElement(o.Section,{key:e.key,title:e.title,isCollapsed:t,isCollapsible:!0,metaData:{key:e.key},onSelect:this.handleSectionSelection},!t&&e.childItems.map((function(e){return b(e)})))}},{key:"createSections",value:function(e){var t=this;return e.map((function(e){return t.createSection(e)}))}},{key:"render",value:function(){return a.default.createElement(o.default,{dividerStyle:"standard"},this.createSections(l.default))}}])&&p(n.prototype,i),r&&p(n,r),t}(a.default.Component);t.default=S},2437:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport List, {\n  Item,\n  Section,\n  Subsection,\n  Utils,\n} from 'terra-list';\n\nimport Placeholder from 'terra-doc-template/lib/Placeholder';\nimport classNames from 'classnames/bind';\nimport mockData from './mock-data/mock-section-sub';\nimport styles from '../example/ListDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst createListItem = itemData => (\n  <Item key={itemData.key}>\n    <Placeholder title={itemData.title} className={cx('placeholder')} />\n  </Item>\n);\n\nconst createSubsection = subsectionData => (\n  <Subsection\n    key={subsectionData.key}\n    title={subsectionData.title}\n  >\n    {subsectionData.childItems.map(childItem => createListItem(childItem))}\n  </Subsection>\n);\n\nclass SectionWithSubsection1 extends React.Component {\n  constructor(props) {\n    super(props);\n    this.createSection = this.createSection.bind(this);\n    this.createSections = this.createSections.bind(this);\n    this.handleSectionSelection = this.handleSectionSelection.bind(this);\n    this.state = { collapsedKeys: [] };\n  }\n\n  handleSectionSelection(event, metaData) {\n    event.preventDefault();\n\n    this.setState(state => ({ collapsedKeys: Utils.updatedMultiSelectedKeys(state.collapsedKeys, metaData.key) }));\n  }\n\n  createSection(sectionData) {\n    const isCollapsed = this.state.collapsedKeys.indexOf(sectionData.key) >= 0;\n    return (\n      <Section\n        key={sectionData.key}\n        title={sectionData.title}\n        isCollapsed={isCollapsed}\n        isCollapsible\n        metaData={{ key: sectionData.key }}\n        onSelect={this.handleSectionSelection}\n      >\n        {!isCollapsed && sectionData.childItems.map(childItem => createSubsection(childItem))}\n      </Section>\n    );\n  }\n\n  createSections(data) {\n    return data.map(section => this.createSection(section));\n  }\n\n  render() {\n    return (\n      <List dividerStyle=\"standard\">\n        {this.createSections(mockData)}\n      </List>\n    );\n  }\n}\n\nexport default SectionWithSubsection1;\n"},2438:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(0)),o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==d(e)&&"function"!=typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(78)),i=u(n(862)),r=u(n(4)),l=u(n(1589)),c=u(n(898));function s(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function u(e){return e&&e.__esModule?e:{default:e}}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=r.default.bind(c.default),b=function(e){function t(e){var n,a,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,(n=!(o=m(t).call(this,e))||"object"!==d(o)&&"function"!=typeof o?f(a):o).createSection=n.createSection.bind(f(n)),n.createSections=n.createSections.bind(f(n)),n.createSubsection=n.createSubsection.bind(f(n)),n.handleSectionSelection=n.handleSectionSelection.bind(f(n)),n.state={collapsedKeys:[]},n}var n,r,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),n=t,(r=[{key:"handleSectionSelection",value:function(e,t){e.preventDefault(),this.setState((function(e){return{collapsedKeys:o.Utils.updatedMultiSelectedKeys(e.collapsedKeys,t.key)}}))}},{key:"createSubsection",value:function(e){var t=this.state.collapsedKeys.indexOf(e.key)>=0;return a.default.createElement(o.Subsection,{key:e.key,title:e.title,isCollapsed:t,isCollapsible:!0,metaData:{key:e.key},onSelect:this.handleSectionSelection},!t&&e.childItems.map((function(e){return t=e,a.default.createElement(o.Item,{key:t.key},a.default.createElement(i.default,{title:t.title,className:y("placeholder")}));var t})))}},{key:"createSection",value:function(e){var t=this;return a.default.createElement(o.Section,{key:e.key,title:e.title},e.childItems.map((function(e){return t.createSubsection(e)})))}},{key:"createSections",value:function(e){var t=this;return e.map((function(e){return t.createSection(e)}))}},{key:"render",value:function(){return a.default.createElement(o.default,{dividerStyle:"standard"},this.createSections(l.default))}}])&&p(n.prototype,r),c&&p(n,c),t}(a.default.Component);t.default=b},2439:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport List, {\n  Item,\n  Section,\n  Subsection,\n  Utils,\n} from 'terra-list';\nimport Placeholder from 'terra-doc-template/lib/Placeholder';\nimport classNames from 'classnames/bind';\nimport mockData from './mock-data/mock-section-sub';\nimport styles from '../example/ListDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst createListItem = itemData => (\n  <Item key={itemData.key}>\n    <Placeholder title={itemData.title} className={cx('placeholder')} />\n  </Item>\n);\n\nclass SectionWithSubsection2 extends React.Component {\n  constructor(props) {\n    super(props);\n    this.createSection = this.createSection.bind(this);\n    this.createSections = this.createSections.bind(this);\n    this.createSubsection = this.createSubsection.bind(this);\n    this.handleSectionSelection = this.handleSectionSelection.bind(this);\n    this.state = { collapsedKeys: [] };\n  }\n\n  handleSectionSelection(event, metaData) {\n    event.preventDefault();\n\n    this.setState(state => ({ collapsedKeys: Utils.updatedMultiSelectedKeys(state.collapsedKeys, metaData.key) }));\n  }\n\n  createSubsection(subsectionData) {\n    const isCollapsed = this.state.collapsedKeys.indexOf(subsectionData.key) >= 0;\n    return (\n      <Subsection\n        key={subsectionData.key}\n        title={subsectionData.title}\n        isCollapsed={isCollapsed}\n        isCollapsible\n        metaData={{ key: subsectionData.key }}\n        onSelect={this.handleSectionSelection}\n      >\n        {!isCollapsed && subsectionData.childItems.map(childItem => createListItem(childItem))}\n      </Subsection>\n    );\n  }\n\n  createSection(sectionData) {\n    return (\n      <Section\n        key={sectionData.key}\n        title={sectionData.title}\n      >\n        {sectionData.childItems.map(childItem => this.createSubsection(childItem))}\n      </Section>\n    );\n  }\n\n  createSections(data) {\n    return data.map(section => this.createSection(section));\n  }\n\n  render() {\n    return (\n      <List dividerStyle=\"standard\">\n        {this.createSections(mockData)}\n      </List>\n    );\n  }\n}\n\nexport default SectionWithSubsection2;\n"},2881:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(n(0)),o=d(n(841)),i=d(n(2435)),r=n(893),l=d(n(2436)),c=d(n(2437)),s=d(n(2438)),u=d(n(2439));function d(e){return e&&e.__esModule?e:{default:e}}var p=function(){return a.default.createElement(o.default,{packageName:r.name,packageVersion:r.version,readme:i.default,srcPath:"https://github.com/cerner/terra-core/tree/master/packages/".concat(r.name),examples:[{title:"Collapsible sections with static subsections",example:a.default.createElement(l.default,null),source:c.default},{title:"Static sections with collapsible subsections",example:a.default.createElement(s.default,null),source:u.default}]})};t.default=p},839:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(0)),o=r(n(4)),i=r(n(840));function r(e){return e&&e.__esModule?e:{default:e}}var l=o.default.bind(i.default),c=function(e){var t=e.packageName,n=e.packageUrl,o=e.packageVersion;return o?a.default.createElement("div",{className:l("badge-container")},a.default.createElement("a",{className:l("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(o)},a.default.createElement("span",{className:l("badge-name")},n?"package":"npm"),a.default.createElement("span",{className:l("badge-version")},"v".concat(o)))):a.default.createElement("a",{href:"https://www.npmjs.org/package/".concat(t)},a.default.createElement("img",{src:"https://badgen.net/npm/v/".concat(t),alt:"NPM version"}))};t.default=c},840:function(e,t,n){e.exports={badge:"NpmBadge-module__badge___1Cu7Z","badge-container":"NpmBadge-module__badge-container___2zgQi","badge-name":"NpmBadge-module__badge-name___17OzL","badge-version":"NpmBadge-module__badge-version___2Vkei"}},841:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(n(0)),o=d(n(2)),i=d(n(848)),r=d(n(847)),l=d(n(4)),c=d(n(839)),s=d(n(842)),u=d(n(845));function d(e){return e&&e.__esModule?e:{default:e}}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f=l.default.bind(u.default),h={children:o.default.node,packageName:o.default.string,packageUrl:o.default.string,packageVersion:o.default.string,readme:o.default.string,srcPath:o.default.string,examples:o.default.arrayOf(o.default.shape({title:o.default.string,description:o.default.node,example:o.default.element,source:o.default.string})),propsTables:o.default.arrayOf(o.default.shape({componentSrc:o.default.string,componentName:o.default.string,componentProps:o.default.string,propsResolution:o.default.string}))},y=function(e){var t,n=e.packageName,o=e.packageVersion,l=e.packageUrl,u=e.readme,d=e.srcPath,h=e.examples,y=e.propsTables,b=e.children,S=m(e,["packageName","packageVersion","packageUrl","readme","srcPath","examples","propsTables","children"]),g=h;y&&(t=y);for(var k=0,_=0;_<g.length;_+=1)g[_].id=k,k+=1;if(t)for(var v=0;v<t.length;v+=1)t[v].id=k,k+=1;var w,D=f(["doc-template",S.className]);if(g.length>0){var O=g.length>1?"Examples":"Example";w=a.default.createElement("h1",{className:f("examples-header")},O)}var x=a.default.createElement(c.default,{packageName:n,packageUrl:l,packageVersion:o});return a.default.createElement("div",p({},S,{className:D}),a.default.createElement("div",{className:f("doc-card")},n&&x,u&&a.default.createElement(r.default,{src:u}),d&&a.default.createElement("a",{href:d},"View component source code")),w,g.map((function(e){return a.default.createElement(s.default,{title:e.title,example:e.example,exampleSrc:e.source,description:e.description,key:e.id})})),a.default.createElement("div",{className:f("doc-card")},y[0]&&y[0].componentProps?t.map((function(e){return a.default.createElement("div",{className:f("props-table-markdown"),key:e.id},a.default.createElement("h2",null,e.componentName," Props"),a.default.createElement(r.default,{src:e.componentProps}))})):t.map((function(e){return a.default.createElement(i.default,{src:e.componentSrc,componentName:e.componentName,key:e.id,propsResolution:e.propsResolution})}))),b&&a.default.createElement("div",{className:f("doc-card")},b))};y.propTypes=h,y.defaultProps={packageName:"",packageUrl:"",packageVersion:"",readme:"",srcPath:"",examples:[],propsTables:[]};var b=y;t.default=b},842:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(0)),o=u(n(2)),i=u(n(849)),r=u(n(850)),l=u(n(4)),c=u(n(843)),s=u(n(844));function u(e){return e&&e.__esModule?e:{default:e}}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function f(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}i.default.registerLanguage("jsx",r.default);var S=l.default.bind(c.default),g={example:o.default.element,exampleSrc:o.default.string,title:o.default.string,description:o.default.node,children:o.default.element},k={example:void 0,exampleSrc:void 0,title:void 0,description:void 0,children:void 0},_=function(e){function t(e){var n,a,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,(n=!(o=h(t).call(this,e))||"object"!==d(o)&&"function"!=typeof o?y(a):o).state={isExpanded:!1,isBackgroundTransparent:!1},n.handleBgToggle=n.handleBgToggle.bind(y(n)),n.handleCodeToggle=n.handleCodeToggle.bind(y(n)),n}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),n=t,(o=[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.example,o=e.exampleSrc,r=e.children,l=e.description,c=m(e,["title","example","exampleSrc","children","description"]),u=this.state,d=u.isExpanded,f={};return u.isBackgroundTransparent&&(f={backgroundColor:"rgba(0, 0, 0, 0)"}),a.default.createElement("div",p({},c,{className:S("template",c.className)}),t&&a.default.createElement("div",{className:S("header")},a.default.createElement("h2",{className:S("title")},t)),a.default.createElement("div",{className:S("content"),style:f},l&&a.default.createElement("div",{className:S("description")},l),n,r),o&&a.default.createElement("div",{className:S("footer")},a.default.createElement("div",{className:S("button-container")},a.default.createElement("button",{type:"button",className:S("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),a.default.createElement("button",{type:"button",className:S("code-toggle"),onClick:this.handleCodeToggle},a.default.createElement("span",{className:S("chevron-left")}),a.default.createElement("span",null,"Code"),a.default.createElement("span",{className:S("chevron-right")}))),a.default.createElement("div",{className:S("code",{"is-expanded":d}),"aria-hidden":!d},d?a.default.createElement(i.default,{language:"jsx",style:s.default,customStyle:{margin:"0",borderRadius:"0"}},o):void 0)))}}])&&f(n.prototype,o),r&&f(n,r),t}(a.default.Component);_.propTypes=g,_.defaultProps=k;var v=_;t.default=v},843:function(e,t,n){e.exports={template:"ExampleTemplate-module__template___MEAKz",header:"ExampleTemplate-module__header___13zqD",content:"ExampleTemplate-module__content___1Zdto",description:"ExampleTemplate-module__description___pnaPA",footer:"ExampleTemplate-module__footer___2jmFy","button-container":"ExampleTemplate-module__button-container___2JIjW",code:"ExampleTemplate-module__code___1u1x4","is-expanded":"ExampleTemplate-module__is-expanded___2fXEU","bg-toggle":"ExampleTemplate-module__bg-toggle___1rE0y","code-toggle":"ExampleTemplate-module__code-toggle___1B459","chevron-left":"ExampleTemplate-module__chevron-left___2hjZu","chevron-right":"ExampleTemplate-module__chevron-right___fnHrn",title:"ExampleTemplate-module__title___1qQfE"}},844:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a="#D8DEE9",o="#B2B2B2",i="#c5a5c5",r="#5a9bcf",l="#8dc891",c="#d7deea",s="#FAC863",u={'code[class*="language-"]':{color:"#f8f8f2",background:"none",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#fff",background:"rgb(40, 44, 52)",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"rgb(40, 44, 52)",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},"plain-text":{color:"#ffffff"},"attr-name":{color:i},comment:{color:o},"block-comment":{color:o},prolog:{color:o},doctype:{color:o},cdata:{color:o},property:{color:r},number:{color:r},"function-name":{color:r},constant:{color:r},symbol:{color:r},deleted:{color:r},boolean:{color:"#ff8b50"},tag:{color:"#fc929e"},string:{color:l},punctuation:{color:"#88C6BE"},selector:{color:a},char:{color:a},builtin:{color:a},inserted:{color:a},function:{color:"#79b6f2"},operator:{color:c},entity:{color:c,cursor:"help"},url:{color:c},".language-css .token.string":{color:c},".style .token.string":{color:c},variable:{color:c},"attr-value":{color:l},keyword:{color:i},"at-rule":{color:s},"class-name":{color:s},important:{fontWeight:400},bold:{fontWeight:700},italic:{fontStyle:"italic"},".namespace":{opacity:.7}};t.default=u},845:function(e,t,n){e.exports={"examples-header":"DocTemplate-module__examples-header___P3qFL","doc-template":"DocTemplate-module__doc-template___JSxEJ","doc-card":"DocTemplate-module__doc-card___2jEVe","props-table-markdown":"DocTemplate-module__props-table-markdown___1926W"}},862:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(0)),o=l(n(2)),i=l(n(4)),r=l(n(870));function l(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=i.default.bind(r.default),d={variant:o.default.oneOf(["light","dark"]),title:o.default.string},p=function(e){var t=e.variant,n=e.title,o=s(e,["variant","title"]),i=u(["placeholder",o.className]),r=u(["inner","is-".concat(t)]);return a.default.createElement("div",c({},o,{className:i}),a.default.createElement("div",{className:r},a.default.createElement("h2",null,n)))};p.propTypes=d,p.defaultProps={variant:"dark",title:""};var m=p;t.default=m},870:function(e,t,n){e.exports={placeholder:"Placeholder-module__placeholder___tuGWe",inner:"Placeholder-module__inner___1irlA","is-light":"Placeholder-module__is-light___3LkLU","is-dark":"Placeholder-module__is-dark___5pLAg"}},893:function(e){e.exports=JSON.parse('{"name":"terra-list","main":"lib/index.js","version":"4.25.0","description":"The Terra List is a structural component to arrange content within list/listitems.","repository":{"type":"git","url":"git+https://github.com/cerner/terra-core.git"},"keywords":["Cerner","Terra","terra-list","List","UI"],"author":"Cerner Corporation","license":"Apache-2.0","bugs":{"url":"https://github.com/cerner/terra-core/issues"},"homepage":"https://github.com/cerner/terra-core#readme","peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5"},"dependencies":{"classnames":"^2.2.5","keycode-js":"^2.0.1","prop-types":"^15.5.8","terra-doc-template":"^2.23.0","terra-icon":"^3.26.0","terra-mixins":"^1.34.0"},"scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","precompile":"rm -rf lib","test":"npm run jest && npm run wdio","jest":"jest --config ../../jestconfig.js","wdio-default":"cd ../.. && npx wdio ./packages/$npm_package_name/wdio.conf.js","wdio-fusion":"cd ../.. && THEME=orion-fusion-theme npx wdio ./packages/$npm_package_name/wdio.conf.js","wdio":"npm run wdio-default && npm run wdio-fusion"}}')},898:function(e,t,n){e.exports={placeholder:"ListDocCommon-module__placeholder___cpXI4"}}}]);
//# sourceMappingURL=111-6dae95d4dd837d5d33dc.js.map