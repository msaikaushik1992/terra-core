(window.webpackJsonp=window.webpackJsonp||[]).push([[612],{3012:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(n(0)),r=u(n(282));function u(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(n=!(r=i(t).call(this,e))||"object"!==l(r)&&"function"!=typeof r?a(o):r).state={selectedKeys:[]},n.handleSelection=n.handleSelection.bind(a(n)),n}var n,u,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),n=t,(u=[{key:"handleSelection",value:function(e,t){e.preventDefault(),this.setState((function(e){return{selectedKeys:r.default.Utils.handleMultiSelectedKeys(e.selectedKeys,t)}}))}},{key:"render",value:function(){return o.default.createElement(r.default,{id:"button-block-group",isBlock:!0,onChange:this.handleSelection,selectedKeys:this.state.selectedKeys},o.default.createElement(r.default.Button,{text:"Button 1",key:"single-select1"}),o.default.createElement(r.default.Button,{text:"Button 2",key:"single-select2"}),o.default.createElement(r.default.Button,{text:"Button 3",key:"single-select3"}))}}])&&c(n.prototype,u),s&&c(n,s),t}(o.default.Component);t.default=s}}]);
//# sourceMappingURL=612-0d20753d65028f9e7654.js.map