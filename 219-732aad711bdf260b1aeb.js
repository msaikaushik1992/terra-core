(window.webpackJsonp=window.webpackJsonp||[]).push([[219],{3027:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=(r=l(0))&&r.__esModule?r:{default:r},n=l(951);var c=function(){return a.default.createElement("div",null,a.default.createElement(n.Cell,{key:"cell-0"},"Default Cell"),a.default.createElement(n.Cell,{key:"cell-1",width:{scalar:2}},"Scalar 2"),a.default.createElement(n.Cell,{key:"cell-2",width:{scalar:3}},"Scalar 3"),a.default.createElement(n.Cell,{key:"cell-3",width:{static:{value:50,unit:"px"}}},"Static Cell"),a.default.createElement(n.Cell,{key:"cell-4",width:{percentage:20}},"20% Cell"))};t.default=c},951:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return a.default}}),t.default=void 0;var r=n(l(988)),a=n(l(990));function n(e){return e&&e.__esModule?e:{default:e}}var c=r.default;t.default=c},988:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(l(0)),a=i(l(2)),n=i(l(4)),c=i(l(989));function i(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var l,r,a=function(e,t){if(null==e)return{};var l,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)l=n[r],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)l=n[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var o=n.default.bind(c.default),f={children:a.default.node.isRequired,dividerStyle:a.default.oneOf(["vertical","horizontal","both"]),refCallback:a.default.func},s=function(e){var t=e.children,l=e.dividerStyle,a=e.refCallback,n=d(e,["children","dividerStyle","refCallback"]),c=l?"divider-".concat(l):void 0,i=o(["cell-grid",c]);return r.default.createElement("div",u({},n,{className:n.className?"".concat(i," ").concat(n.className):i,ref:a}),t)};s.propTypes=f;var v=s;t.default=v},989:function(e,t,l){e.exports={"cell-grid":"CellGrid-module__cell-grid___2e67L","divider-horizontal":"CellGrid-module__divider-horizontal___rrj8H","divider-both":"CellGrid-module__divider-both___1Lv6x","divider-vertical":"CellGrid-module__divider-vertical___2zr77"}},990:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(l(0)),a=u(l(2)),n=u(l(4)),c=u(l(991)),i=l(992);function u(e){return e&&e.__esModule?e:{default:e}}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var l,r,a=function(e,t){if(null==e)return{};var l,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)l=n[r],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)l=n[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var f=n.default.bind(c.default),s={children:a.default.node,refCallback:a.default.func,width:a.default.shape({static:a.default.shape({value:a.default.number.isRequired,unit:a.default.string.isRequired}),percentage:a.default.number,scalar:a.default.number})},v=function(e){var t=e.children,l=e.refCallback,a=e.width,n=o(e,["children","refCallback","width"]),c=f(["cell"]);return r.default.createElement("div",d({},n,{style:(0,i.styleFromWidth)(a),className:n.className?"".concat(c," ").concat(n.className):c,ref:l}),t)};v.propTypes=s,v.defaultProps={children:[]};var p=v;t.default=p},991:function(e,t,l){e.exports={cell:"Cell-module__cell___2eioH"}},992:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.styleFromWidth=t.default=void 0;var r=function(e){return{msFlex:"0 0 0px",flex:"0 0 0px",maxWidth:e,minWidth:e}},a=function(e){if(e)return e.static?r("".concat(e.static.value).concat(e.static.unit)):e.percentage?r("".concat(e.percentage,"%")):e.scalar?function(e){return{msFlex:"".concat(e," ").concat(e," 0px"),flex:"".concat(e," ").concat(e," 0px")}}(e.scalar):void 0};t.styleFromWidth=a;var n={styleFromWidth:a};t.default=n}}]);
//# sourceMappingURL=219-732aad711bdf260b1aeb.js.map