(window.webpackJsonp=window.webpackJsonp||[]).push([[609],{2996:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(n(0)),r=n(8),a=l(n(295));function l(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p={en:{"App.locale":"en"},"en-US":{"App.locale":"en-US"}},d=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(n=!(r=u(t).call(this,e))||"object"!==c(r)&&"function"!=typeof r?f(o):r).state={locale:"en"},n.handleSwitchLocale=n.handleSwitchLocale.bind(f(n)),n}var n,l,d;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,e),n=t,(l=[{key:"handleSwitchLocale",value:function(){"en"!==this.state.locale?this.setState({locale:"en"}):this.setState({locale:"en-US"})}},{key:"render",value:function(){return o.default.createElement(a.default,{locale:this.state.locale,customMessages:p[this.state.locale]},o.default.createElement("div",{id:"message"},o.default.createElement(r.FormattedMessage,{id:"App.locale"})),o.default.createElement("button",{type:"button",id:"switch",onClick:this.handleSwitchLocale},"Switch"))}}])&&i(n.prototype,l),d&&i(n,d),t}(o.default.Component);t.default=d}}]);
//# sourceMappingURL=609-a720cf154e4466df4155.js.map