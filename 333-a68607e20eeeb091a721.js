(window.webpackJsonp=window.webpackJsonp||[]).push([[333],{3069:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(l(0)),a=o(l(866));function o(e){return e&&e.__esModule?e:{default:e}}var i=function(){return n.default.createElement("div",null,n.default.createElement(a.default,{id:"first",labelText:"First Checkbox",defaultChecked:!0}),n.default.createElement(a.default,{id:"second",labelText:"Second Checkbox"}),n.default.createElement(a.default,{id:"third",labelText:"Third Checkbox"}))};t.default=i},866:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(l(0)),a=r(l(2)),o=r(l(4)),i=r(l(900)),d=r(l(901));function r(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e}).apply(this,arguments)}function c(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function s(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function b(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)l=o[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)l=o[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var f=o.default.bind(i.default),h={checked:a.default.bool,defaultChecked:a.default.bool,id:a.default.string,inputAttrs:a.default.object,disabled:a.default.bool,isInline:a.default.bool,isLabelHidden:a.default.bool,labelText:a.default.node.isRequired,labelTextAttrs:a.default.object,name:a.default.string,onBlur:a.default.func,onChange:a.default.func,onFocus:a.default.func,value:a.default.string},p={checked:void 0,defaultChecked:void 0,id:void 0,inputAttrs:{},disabled:!1,isInline:!1,isLabelHidden:!1,labelTextAttrs:{},name:null,onBlur:void 0,onChange:void 0,onFocus:void 0,value:void 0},m=function(e){var t=e.checked,l=e.defaultChecked,a=e.inputAttrs,o=e.id,i=e.disabled,r=e.isInline,h=e.isLabelHidden,p=e.labelText,m=e.labelTextAttrs,_=e.name,v=e.onBlur,x=e.onChange,k=e.onFocus,O=e.value,C=b(e,["checked","defaultChecked","inputAttrs","id","disabled","isInline","isLabelHidden","labelText","labelTextAttrs","name","onBlur","onChange","onFocus","value"]),y=function(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?c(Object(l),!0).forEach((function(t){s(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):c(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}({},a);void 0!==t?y.checked=t:y.defaultChecked=l;var g=f(["checkbox",{"is-inline":r},C.className]),w=f(["label",{"is-disabled":i},{"is-mobile":d.default.isConsideredMobileDevice()},m.className]),j=f(["native-input",a.className]),P=f(["label-text",{"is-hidden":h},{"is-mobile":d.default.isConsideredMobileDevice()}]),T=null;return h?(y["aria-label"]=p,T=n.default.createElement("span",u({},m,{className:P}))):T=n.default.createElement("span",u({},m,{className:P}),p),n.default.createElement("div",u({},C,{className:g}),n.default.createElement("label",{htmlFor:o,className:w},n.default.createElement("input",u({},y,{type:"checkbox",id:o,disabled:i,name:_,value:O,onChange:x,onFocus:k,onBlur:v,className:j})),T))};m.propTypes=h,m.defaultProps=p,m.isCheckbox=!0;var _=m;t.default=_},900:function(e,t,l){e.exports={checkbox:"Checkbox-module__checkbox___1DzDw",label:"Checkbox-module__label___GWPVb","is-mobile":"Checkbox-module__is-mobile___13DUd","native-input":"Checkbox-module__native-input___1CCoe","label-text":"Checkbox-module__label-text___3q5Qm","is-hidden":"Checkbox-module__is-hidden___1VqYx","is-disabled":"Checkbox-module__is-disabled___3ERR9","is-inline":"Checkbox-module__is-inline___2HYdD"}},901:function(e,t,l){"use strict";var n={isConsideredMobileDevice:function(){return window.matchMedia("(max-width: 1024px)").matches&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)}};e.exports=n}}]);
//# sourceMappingURL=333-a68607e20eeeb091a721.js.map