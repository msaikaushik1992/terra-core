(window.webpackJsonp=window.webpackJsonp||[]).push([[697],{3380:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(n(0)),r=u(n(894));function u(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(n=!(r=a(t).call(this,e))||"object"!==i(r)&&"function"!=typeof r?c(o):r).state={timesOpened:0},n.handleOnOpen=n.handleOnOpen.bind(c(n)),n}var n,u,p;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),n=t,(u=[{key:"handleOnOpen",value:function(){this.setState((function(e){return{timesOpened:e.timesOpened+1}}))}},{key:"render",value:function(){return o.default.createElement("div",null,o.default.createElement("div",{id:"on-open-event"},o.default.createElement("h3",null,"Times Opened: ".concat(this.state.timesOpened))),o.default.createElement(r.default,{id:"onOpenToggleButton",closedButtonText:"ToggleButton",onOpen:this.handleOnOpen},o.default.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")))}}])&&l(n.prototype,u),p&&l(n,p),t}(o.default.Component);t.default=p}}]);
//# sourceMappingURL=697-5868f54bff5a6dc08ec5.js.map