(window.webpackJsonp=window.webpackJsonp||[]).push([[558],{3229:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(n(0)),r=l(n(181)),a=l(n(966));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function f(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=f(this,c(t).call(this,e))).state={errorImageId:void 0,loadedImageId:void 0},n}var n,l,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),n=t,(l=[{key:"render",value:function(){var e=this;return o.default.createElement("div",null,o.default.createElement("h2",null,"Loading Image Examples"),o.default.createElement("p",null,"Image is successfully loaded."),o.default.createElement("div",null,o.default.createElement(r.default,{id:this.state.loadedImageId,alt:"loading image",src:a.default,onLoad:function(){e.setState({loadedImageId:"loadedImage"})},onError:function(){e.setState({errorImageId:"errorImage"})}})),o.default.createElement("p",null,"Image fails to load."),o.default.createElement("div",null,o.default.createElement(r.default,{id:this.state.errorImageId,src:"invalid.jpg",onLoad:function(){e.setState({loadedImageId:"loadedImage"})},onError:function(){e.setState({errorImageId:"errorImage"})},alt:"Alt text for image with invalid source"})))}}])&&i(n.prototype,l),u&&i(n,u),t}(o.default.Component);t.default=s},966:function(e,t,n){e.exports=n.p+"87ec563ff16c288f58b0747d553762d6.jpg"}}]);
//# sourceMappingURL=558-24c376cd8e702d42d5c5.js.map