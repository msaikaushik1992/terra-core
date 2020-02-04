(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{1162:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(l(0)),n=s(l(2)),o=s(l(278)),r=s(l(287)),d=s(l(72)),i=s(l(58));function s(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)l=o[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)l=o[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var m={allowClear:n.default.bool,children:n.default.node,label:n.default.node.isRequired,defaultValue:n.default.oneOfType([n.default.string,n.default.number,n.default.array]),disabled:n.default.bool,error:n.default.node,help:n.default.node,hideRequired:n.default.bool,isIncomplete:n.default.bool,isInline:n.default.bool,isInvalid:n.default.bool,isLabelHidden:n.default.bool,isTouchAccessible:n.default.bool,labelAttrs:n.default.object,maxWidth:n.default.string,onChange:n.default.func,placeholder:n.default.string,required:n.default.bool,selectAttrs:n.default.object,selectId:n.default.string.isRequired,showOptional:n.default.bool,value:n.default.oneOfType([n.default.string,n.default.number,n.default.array])},u={allowClear:!1,children:void 0,defaultValue:void 0,disabled:!1,error:void 0,help:void 0,hideRequired:!1,isIncomplete:!1,isInline:!1,isInvalid:!1,isLabelHidden:!1,isTouchAccessible:!1,labelAttrs:{},maxWidth:void 0,onChange:void 0,placeholder:void 0,required:!1,selectAttrs:{},showOptional:!1,value:void 0},f=function(e){var t,l=e.allowClear,n=e.children,d=e.defaultValue,i=e.disabled,s=e.error,m=e.help,u=e.hideRequired,f=e.isIncomplete,b=e.isInline,h=e.isInvalid,g=e.isLabelHidden,y=e.isTouchAccessible,v=e.label,S=e.labelAttrs,w=e.maxWidth,_=e.onChange,x=e.placeholder,E=e.required,O=e.selectAttrs,T=e.selectId,P=e.showOptional,I=e.value,k=p(e,["allowClear","children","defaultValue","disabled","error","help","hideRequired","isIncomplete","isInline","isInvalid","isLabelHidden","isTouchAccessible","label","labelAttrs","maxWidth","onChange","placeholder","required","selectAttrs","selectId","showOptional","value"]);return m&&s&&h?t="".concat(T,"-error ").concat(T,"-help"):(m&&(t="".concat(T,"-help")),s&&h&&(t="".concat(T,"-error"))),a.default.createElement(o.default,c({},k,{label:v,labelAttrs:S,error:s,help:m,hideRequired:u,required:E,showOptional:P,isInvalid:h,isInline:b,isLabelHidden:g,htmlFor:T,maxWidth:w}),a.default.createElement(r.default,c({},O,{ariaLabel:v,allowClear:l,"aria-describedby":t,disabled:O.disabled||i,inputId:T,isIncomplete:f,isInvalid:h,isTouchAccessible:y,defaultValue:d,onChange:_,placeholder:x,required:E,value:I}),n))};f.propTypes=m,f.defaultProps=u,f.Option=i.default,f.OptGroup=d.default;var b=f;t.default=b},2231:function(e,t,l){"use strict";l.r(t),t.default="# Terra Form Search Select Field\n\nA convenience wrapper assembling a [terra-form-select SearchSelect](https://github.com/cerner/terra-core/tree/master/packages/terra-form-select/src/SearchSelect.jsx) within a [terra-form-field](https://github.com/cerner/terra-core/tree/master/packages/terra-form-field).\n\n## Getting Started\n\n- Install with [npmjs](https://www.npmjs.com):\n  - `npm install terra-form-select`\n\n## Component Features\n\n- [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)\n- [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)\n- [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)\n- [Internationalization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)\n- [Localization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)\n- [LTR/RTL Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#ltr--rtl-support)\n"},2232:function(e,t){e.exports='<table style="display: table; margin-bottom: 1.25rem"><thead><tr style="line-height: 1.5"><th style="width: 10%">Prop Name</th><th style="width: 25%">Type</th><th style="width: 10%">Is Required</th><th style="width: 10%">Default Value</th><th style="width: 45%">Description</th></tr></thead><tbody><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">allowClear</td><td style="padding-bottom: 1.8rem">bool</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">false</td><td style="padding-bottom: 1.8rem">Whether a clear option is available to clear the selection.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">children</td><td style="padding-bottom: 1.8rem">node</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">undefined</td><td style="padding-bottom: 1.8rem">The select options.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">label</td><td style="padding-bottom: 1.8rem">node</td><td style="color: #d53700; padding-bottom: 1.8rem">required</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">The field label.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">defaultValue</td><td style="padding-bottom: 1.8rem">union</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">undefined</td><td style="padding-bottom: 1.8rem">The default value of the select. Can be a string, number, or array of strings/numbers.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">disabled</td><td style="padding-bottom: 1.8rem">bool</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">false</td><td style="padding-bottom: 1.8rem">Whether the input is disabled.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">error</td><td style="padding-bottom: 1.8rem">node</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">undefined</td><td style="padding-bottom: 1.8rem">Error message displayed when the select is invalid.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">help</td><td style="padding-bottom: 1.8rem">node</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">undefined</td><td style="padding-bottom: 1.8rem">Help message to display with the select.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">hideRequired</td><td style="padding-bottom: 1.8rem">bool</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">false</td><td style="padding-bottom: 1.8rem">Whether to hide the required indicator on the label.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">isIncomplete</td><td style="padding-bottom: 1.8rem">bool</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">false</td><td style="padding-bottom: 1.8rem">Whether the field displays as Incomplete. Use when no value has been provided. <em>(usage note: <code style="white-space: pre-wrap">required</code> must also be set)</em>.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">isInline</td><td style="padding-bottom: 1.8rem">bool</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">false</td><td style="padding-bottom: 1.8rem">Whether the field is displayed inline. Displays block by default.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">isInvalid</td><td style="padding-bottom: 1.8rem">bool</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">false</td><td style="padding-bottom: 1.8rem">Whether the field displays as Invalid. Use when value does not meet validation pattern.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">isLabelHidden</td><td style="padding-bottom: 1.8rem">bool</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">false</td><td style="padding-bottom: 1.8rem">Whether the label is hidden. Allows hiding the label while meeting accessibility guidelines.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">isTouchAccessible</td><td style="padding-bottom: 1.8rem">bool</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">false</td><td style="padding-bottom: 1.8rem">Ensure accessibility on touch devices. Will render the dropdown menu in\nnormal DOM flow with position absolute. By default, the menu renders in a\nportal, which is inaccessible on touch devices.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">labelAttrs</td><td style="padding-bottom: 1.8rem">object</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">{}</td><td style="padding-bottom: 1.8rem">Additional attributes to spread onto the label.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">maxWidth</td><td style="padding-bottom: 1.8rem">string</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">undefined</td><td style="padding-bottom: 1.8rem">Set the max-width of a field using <code style="white-space: pre-wrap">length</code> or <code>%</code>.  Best practice recommendation to never exceed\na rendered value of 1020px. <em>(Note: Providing custom inline styles will take precedence.)</em></td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">onChange</td><td style="padding-bottom: 1.8rem">func</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">undefined</td><td style="padding-bottom: 1.8rem">Callback function triggered when the select value changes. function(value)</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">placeholder</td><td style="padding-bottom: 1.8rem">string</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">undefined</td><td style="padding-bottom: 1.8rem">Placeholder text.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">required</td><td style="padding-bottom: 1.8rem">bool</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">false</td><td style="padding-bottom: 1.8rem">Whether the field is required.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">selectAttrs</td><td style="padding-bottom: 1.8rem">object</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">{}</td><td style="padding-bottom: 1.8rem">Additional attributes to spread onto the select.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">selectId</td><td style="padding-bottom: 1.8rem">string</td><td style="color: #d53700; padding-bottom: 1.8rem">required</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">The Select identifier. Links the htmlFor of the field to the select identifier.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">showOptional</td><td style="padding-bottom: 1.8rem">bool</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">false</td><td style="padding-bottom: 1.8rem">Whether to append the &#39;optional&#39; label to a non-required field label.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">value</td><td style="padding-bottom: 1.8rem">union</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">undefined</td><td style="padding-bottom: 1.8rem">The value of the select. Can be a string, number, or array of strings/numbers.</td></tr></tbody></table>'},2233:function(e,t,l){"use strict";l.r(t),t.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport Field from 'terra-form-field';\nimport SearchSelect from './SearchSelect';\nimport OptGroup from './shared/_OptGroup';\nimport Option from './shared/_Option';\n\nconst propTypes = {\n  /**\n   * Whether a clear option is available to clear the selection.\n   */\n  allowClear: PropTypes.bool,\n  /**\n   * The select options.\n   */\n  children: PropTypes.node,\n  /**\n   * The field label.\n   */\n  label: PropTypes.node.isRequired,\n  /**\n   * The default value of the select. Can be a string, number, or array of strings/numbers.\n   */\n  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),\n  /**\n   * Whether the input is disabled.\n   */\n  disabled: PropTypes.bool,\n  /**\n   * Error message displayed when the select is invalid.\n   */\n  error: PropTypes.node,\n  /**\n   * Help message to display with the select.\n   */\n  help: PropTypes.node,\n  /**\n   * Whether to hide the required indicator on the label.\n   */\n  hideRequired: PropTypes.bool,\n  /**\n   * Whether the field displays as Incomplete. Use when no value has been provided. _(usage note: `required` must also be set)_.\n   */\n  isIncomplete: PropTypes.bool,\n  /**\n   * Whether the field is displayed inline. Displays block by default.\n   */\n  isInline: PropTypes.bool,\n  /**\n   * Whether the field displays as Invalid. Use when value does not meet validation pattern.\n   */\n  isInvalid: PropTypes.bool,\n  /**\n   * Whether the label is hidden. Allows hiding the label while meeting accessibility guidelines.\n   */\n  isLabelHidden: PropTypes.bool,\n  /**\n   * Ensure accessibility on touch devices. Will render the dropdown menu in\n   * normal DOM flow with position absolute. By default, the menu renders in a\n   * portal, which is inaccessible on touch devices.\n   */\n  isTouchAccessible: PropTypes.bool,\n  /**\n   * Additional attributes to spread onto the label.\n   */\n  // eslint-disable-next-line react/forbid-prop-types\n  labelAttrs: PropTypes.object,\n  /**\n   * Set the max-width of a field using `length` or `%`.  Best practice recommendation to never exceed\n   * a rendered value of 1020px. _(Note: Providing custom inline styles will take precedence.)_\n   */\n  maxWidth: PropTypes.string,\n  /**\n   * Callback function triggered when the select value changes. function(value)\n   */\n  onChange: PropTypes.func,\n  /**\n   * Placeholder text.\n   */\n  placeholder: PropTypes.string,\n  /**\n   * Whether the field is required.\n   */\n  required: PropTypes.bool,\n  /**\n   * Additional attributes to spread onto the select.\n   */\n  // eslint-disable-next-line react/forbid-prop-types\n  selectAttrs: PropTypes.object,\n  /**\n   * The Select identifier. Links the htmlFor of the field to the select identifier.\n   */\n  selectId: PropTypes.string.isRequired,\n  /**\n   * Whether to append the 'optional' label to a non-required field label.\n   */\n  showOptional: PropTypes.bool,\n  /**\n   * The value of the select. Can be a string, number, or array of strings/numbers.\n   */\n  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),\n};\n\nconst defaultProps = {\n  allowClear: false,\n  children: undefined,\n  defaultValue: undefined,\n  disabled: false,\n  error: undefined,\n  help: undefined,\n  hideRequired: false,\n  isIncomplete: false,\n  isInline: false,\n  isInvalid: false,\n  isLabelHidden: false,\n  isTouchAccessible: false,\n  labelAttrs: {},\n  maxWidth: undefined,\n  onChange: undefined,\n  placeholder: undefined,\n  required: false,\n  selectAttrs: {},\n  showOptional: false,\n  value: undefined,\n};\n\nconst SearchSelectField = ({\n  allowClear,\n  children,\n  defaultValue,\n  disabled,\n  error,\n  help,\n  hideRequired,\n  isIncomplete,\n  isInline,\n  isInvalid,\n  isLabelHidden,\n  isTouchAccessible,\n  label,\n  labelAttrs,\n  maxWidth,\n  onChange,\n  placeholder,\n  required,\n  selectAttrs,\n  selectId,\n  showOptional,\n  value,\n  ...customProps\n}) => {\n  let ariaDescriptionIds;\n\n  if (help && error && isInvalid) {\n    ariaDescriptionIds = `${selectId}-error ${selectId}-help`;\n  } else {\n    if (help) {\n      ariaDescriptionIds = `${selectId}-help`;\n    }\n\n    if (error && isInvalid) {\n      ariaDescriptionIds = `${selectId}-error`;\n    }\n  }\n\n  return (\n    <Field\n      {...customProps}\n      label={label}\n      labelAttrs={labelAttrs}\n      error={error}\n      help={help}\n      hideRequired={hideRequired}\n      required={required}\n      showOptional={showOptional}\n      isInvalid={isInvalid}\n      isInline={isInline}\n      isLabelHidden={isLabelHidden}\n      htmlFor={selectId}\n      maxWidth={maxWidth}\n    >\n      <SearchSelect\n        {...selectAttrs}\n        ariaLabel={label}\n        allowClear={allowClear}\n        aria-describedby={ariaDescriptionIds}\n        disabled={selectAttrs.disabled || disabled}\n        inputId={selectId}\n        isIncomplete={isIncomplete}\n        isInvalid={isInvalid}\n        isTouchAccessible={isTouchAccessible}\n        defaultValue={defaultValue}\n        onChange={onChange}\n        placeholder={placeholder}\n        required={required}\n        value={value}\n      >\n        {children}\n      </SearchSelect>\n    </Field>\n  );\n};\n\nSearchSelectField.propTypes = propTypes;\nSearchSelectField.defaultProps = defaultProps;\n\nSearchSelectField.Option = Option;\nSearchSelectField.OptGroup = OptGroup;\n\nexport default SearchSelectField;\n"},2234:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(l(0)),n=d(l(1162)),o=d(l(4)),r=d(l(854));function d(e){return e&&e.__esModule?e:{default:e}}var i=o.default.bind(r.default),s=function(){return a.default.createElement(n.default,{label:"T-shirt size",placeholder:"Select a size",selectId:"tshirt-size-field-3",className:i("form-select")},a.default.createElement(n.default.Option,{value:"xSmall",display:"Extra Small"}),a.default.createElement(n.default.Option,{value:"small",display:"Small"}),a.default.createElement(n.default.Option,{value:"medium",display:"Medium"}),a.default.createElement(n.default.Option,{value:"large",display:"Large"}),a.default.createElement(n.default.Option,{value:"xLarge",display:"Extra Large"}))};t.default=s},2235:function(e,t,l){"use strict";l.r(t),t.default='import React from \'react\';\nimport SearchSelectField from \'terra-form-select/lib/SearchSelectField\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst SearchSelectFieldExample = () => (\n  <SearchSelectField label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field-3" className={cx(\'form-select\')}>\n    <SearchSelectField.Option value="xSmall" display="Extra Small" />\n    <SearchSelectField.Option value="small" display="Small" />\n    <SearchSelectField.Option value="medium" display="Medium" />\n    <SearchSelectField.Option value="large" display="Large" />\n    <SearchSelectField.Option value="xLarge" display="Extra Large" />\n  </SearchSelectField>\n);\n\nexport default SearchSelectFieldExample;\n'},2236:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(l(0)),n=d(l(1162)),o=d(l(4)),r=d(l(854));function d(e){return e&&e.__esModule?e:{default:e}}var i=o.default.bind(r.default),s=function(){return a.default.createElement(n.default,{label:"T-shirt size",placeholder:"Select a size",selectId:"tshirt-size-field-2",required:!0,className:i("form-select")},a.default.createElement(n.default.Option,{value:"xSmall",display:"Extra Small"}),a.default.createElement(n.default.Option,{value:"small",display:"Small"}),a.default.createElement(n.default.Option,{value:"medium",display:"Medium"}),a.default.createElement(n.default.Option,{value:"large",display:"Large"}),a.default.createElement(n.default.Option,{value:"xLarge",display:"Extra Large"}))};t.default=s},2237:function(e,t,l){"use strict";l.r(t),t.default='import React from \'react\';\nimport SearchSelectField from \'terra-form-select/lib/SearchSelectField\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst SearchSelectFieldExample = () => (\n  <SearchSelectField label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field-2" required className={cx(\'form-select\')}>\n    <SearchSelectField.Option value="xSmall" display="Extra Small" />\n    <SearchSelectField.Option value="small" display="Small" />\n    <SearchSelectField.Option value="medium" display="Medium" />\n    <SearchSelectField.Option value="large" display="Large" />\n    <SearchSelectField.Option value="xLarge" display="Extra Large" />\n  </SearchSelectField>\n);\n\nexport default SearchSelectFieldExample;\n'},2238:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(l(0)),n=d(l(1162)),o=d(l(4)),r=d(l(854));function d(e){return e&&e.__esModule?e:{default:e}}var i=o.default.bind(r.default),s=function(){return a.default.createElement(n.default,{required:!0,isIncomplete:!0,label:"T-shirt size",placeholder:"Select a size",selectId:"tshirt-size-field-1",className:i("form-select")},a.default.createElement(n.default.Option,{value:"xSmall",display:"Extra Small"}),a.default.createElement(n.default.Option,{value:"small",display:"Small"}),a.default.createElement(n.default.Option,{value:"medium",display:"Medium"}),a.default.createElement(n.default.Option,{value:"large",display:"Large"}),a.default.createElement(n.default.Option,{value:"xLarge",display:"Extra Large"}))};t.default=s},2239:function(e,t,l){"use strict";l.r(t),t.default='import React from \'react\';\nimport SearchSelectField from \'terra-form-select/lib/SearchSelectField\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst SearchSelectFieldExample = () => (\n  <SearchSelectField required isIncomplete label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field-1" className={cx(\'form-select\')}>\n    <SearchSelectField.Option value="xSmall" display="Extra Small" />\n    <SearchSelectField.Option value="small" display="Small" />\n    <SearchSelectField.Option value="medium" display="Medium" />\n    <SearchSelectField.Option value="large" display="Large" />\n    <SearchSelectField.Option value="xLarge" display="Extra Large" />\n  </SearchSelectField>\n);\n\nexport default SearchSelectFieldExample;\n'},2846:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=b(l(0)),n=b(l(841)),o=b(l(2231)),r=l(875),d=b(l(2232)),i=b(l(2233)),s=b(l(2234)),c=b(l(2235)),p=b(l(2236)),m=b(l(2237)),u=b(l(2238)),f=b(l(2239));function b(e){return e&&e.__esModule?e:{default:e}}var h=function(){return a.default.createElement(n.default,{packageName:r.name,packageVersion:r.version,readme:o.default,srcPath:"https://github.com/cerner/terra-core/tree/master/packages/".concat(r.name),propsTables:[{componentName:"Search Select Field",componentSrc:i.default,componentProps:d.default}],examples:[{title:"Search Select Field Example",example:a.default.createElement(s.default,null),source:c.default},{title:"Required Search Select Field Example",example:a.default.createElement(p.default,null),source:m.default},{title:"Incomplete Search Select Field Example",description:"Applies theme-specific styling for incomplete. ***Note: Only use incomplete if given specific guidance, reserved for specific applications when no value has been provided. Not for general use.***",example:a.default.createElement(u.default,null),source:f.default}]})};t.default=h},839:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(l(0)),n=r(l(4)),o=r(l(840));function r(e){return e&&e.__esModule?e:{default:e}}var d=n.default.bind(o.default),i=function(e){var t=e.packageName,l=e.packageUrl,n=e.packageVersion;return n?a.default.createElement("div",{className:d("badge-container")},a.default.createElement("a",{className:d("badge"),href:l||"https://www.npmjs.org/package/".concat(t,"/v/").concat(n)},a.default.createElement("span",{className:d("badge-name")},l?"package":"npm"),a.default.createElement("span",{className:d("badge-version")},"v".concat(n)))):a.default.createElement("a",{href:"https://www.npmjs.org/package/".concat(t)},a.default.createElement("img",{src:"https://badgen.net/npm/v/".concat(t),alt:"NPM version"}))};t.default=i},840:function(e,t,l){e.exports={badge:"NpmBadge-module__badge___1Cu7Z","badge-container":"NpmBadge-module__badge-container___2zgQi","badge-name":"NpmBadge-module__badge-name___17OzL","badge-version":"NpmBadge-module__badge-version___2Vkei"}},841:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=p(l(0)),n=p(l(2)),o=p(l(848)),r=p(l(847)),d=p(l(4)),i=p(l(839)),s=p(l(842)),c=p(l(845));function p(e){return e&&e.__esModule?e:{default:e}}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)l=o[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)l=o[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var f=d.default.bind(c.default),b={children:n.default.node,packageName:n.default.string,packageUrl:n.default.string,packageVersion:n.default.string,readme:n.default.string,srcPath:n.default.string,examples:n.default.arrayOf(n.default.shape({title:n.default.string,description:n.default.node,example:n.default.element,source:n.default.string})),propsTables:n.default.arrayOf(n.default.shape({componentSrc:n.default.string,componentName:n.default.string,componentProps:n.default.string,propsResolution:n.default.string}))},h=function(e){var t,l=e.packageName,n=e.packageVersion,d=e.packageUrl,c=e.readme,p=e.srcPath,b=e.examples,h=e.propsTables,g=e.children,y=u(e,["packageName","packageVersion","packageUrl","readme","srcPath","examples","propsTables","children"]),v=b;h&&(t=h);for(var S=0,w=0;w<v.length;w+=1)v[w].id=S,S+=1;if(t)for(var _=0;_<t.length;_+=1)t[_].id=S,S+=1;var x,E=f(["doc-template",y.className]);if(v.length>0){var O=v.length>1?"Examples":"Example";x=a.default.createElement("h1",{className:f("examples-header")},O)}var T=a.default.createElement(i.default,{packageName:l,packageUrl:d,packageVersion:n});return a.default.createElement("div",m({},y,{className:E}),a.default.createElement("div",{className:f("doc-card")},l&&T,c&&a.default.createElement(r.default,{src:c}),p&&a.default.createElement("a",{href:p},"View component source code")),x,v.map((function(e){return a.default.createElement(s.default,{title:e.title,example:e.example,exampleSrc:e.source,description:e.description,key:e.id})})),a.default.createElement("div",{className:f("doc-card")},h[0]&&h[0].componentProps?t.map((function(e){return a.default.createElement("div",{className:f("props-table-markdown"),key:e.id},a.default.createElement("h2",null,e.componentName," Props"),a.default.createElement(r.default,{src:e.componentProps}))})):t.map((function(e){return a.default.createElement(o.default,{src:e.componentSrc,componentName:e.componentName,key:e.id,propsResolution:e.propsResolution})}))),g&&a.default.createElement("div",{className:f("doc-card")},g))};h.propTypes=b,h.defaultProps={packageName:"",packageUrl:"",packageVersion:"",readme:"",srcPath:"",examples:[],propsTables:[]};var g=h;t.default=g},842:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(l(0)),n=c(l(2)),o=c(l(849)),r=c(l(850)),d=c(l(4)),i=c(l(843)),s=c(l(844));function c(e){return e&&e.__esModule?e:{default:e}}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)l=o[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)l=o[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}function f(e,t){for(var l=0;l<t.length;l++){var a=t[l];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}o.default.registerLanguage("jsx",r.default);var y=d.default.bind(i.default),v={example:n.default.element,exampleSrc:n.default.string,title:n.default.string,description:n.default.node,children:n.default.element},S={example:void 0,exampleSrc:void 0,title:void 0,description:void 0,children:void 0},w=function(e){function t(e){var l,a,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,(l=!(n=b(t).call(this,e))||"object"!==p(n)&&"function"!=typeof n?h(a):n).state={isExpanded:!1,isBackgroundTransparent:!1},l.handleBgToggle=l.handleBgToggle.bind(h(l)),l.handleCodeToggle=l.handleCodeToggle.bind(h(l)),l}var l,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,e),l=t,(n=[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,t=e.title,l=e.example,n=e.exampleSrc,r=e.children,d=e.description,i=u(e,["title","example","exampleSrc","children","description"]),c=this.state,p=c.isExpanded,f={};return c.isBackgroundTransparent&&(f={backgroundColor:"rgba(0, 0, 0, 0)"}),a.default.createElement("div",m({},i,{className:y("template",i.className)}),t&&a.default.createElement("div",{className:y("header")},a.default.createElement("h2",{className:y("title")},t)),a.default.createElement("div",{className:y("content"),style:f},d&&a.default.createElement("div",{className:y("description")},d),l,r),n&&a.default.createElement("div",{className:y("footer")},a.default.createElement("div",{className:y("button-container")},a.default.createElement("button",{type:"button",className:y("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),a.default.createElement("button",{type:"button",className:y("code-toggle"),onClick:this.handleCodeToggle},a.default.createElement("span",{className:y("chevron-left")}),a.default.createElement("span",null,"Code"),a.default.createElement("span",{className:y("chevron-right")}))),a.default.createElement("div",{className:y("code",{"is-expanded":p}),"aria-hidden":!p},p?a.default.createElement(o.default,{language:"jsx",style:s.default,customStyle:{margin:"0",borderRadius:"0"}},n):void 0)))}}])&&f(l.prototype,n),r&&f(l,r),t}(a.default.Component);w.propTypes=v,w.defaultProps=S;var _=w;t.default=_},843:function(e,t,l){e.exports={template:"ExampleTemplate-module__template___MEAKz",header:"ExampleTemplate-module__header___13zqD",content:"ExampleTemplate-module__content___1Zdto",description:"ExampleTemplate-module__description___pnaPA",footer:"ExampleTemplate-module__footer___2jmFy","button-container":"ExampleTemplate-module__button-container___2JIjW",code:"ExampleTemplate-module__code___1u1x4","is-expanded":"ExampleTemplate-module__is-expanded___2fXEU","bg-toggle":"ExampleTemplate-module__bg-toggle___1rE0y","code-toggle":"ExampleTemplate-module__code-toggle___1B459","chevron-left":"ExampleTemplate-module__chevron-left___2hjZu","chevron-right":"ExampleTemplate-module__chevron-right___fnHrn",title:"ExampleTemplate-module__title___1qQfE"}},844:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a="#D8DEE9",n="#B2B2B2",o="#c5a5c5",r="#5a9bcf",d="#8dc891",i="#d7deea",s="#FAC863",c={'code[class*="language-"]':{color:"#f8f8f2",background:"none",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#fff",background:"rgb(40, 44, 52)",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"rgb(40, 44, 52)",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},"plain-text":{color:"#ffffff"},"attr-name":{color:o},comment:{color:n},"block-comment":{color:n},prolog:{color:n},doctype:{color:n},cdata:{color:n},property:{color:r},number:{color:r},"function-name":{color:r},constant:{color:r},symbol:{color:r},deleted:{color:r},boolean:{color:"#ff8b50"},tag:{color:"#fc929e"},string:{color:d},punctuation:{color:"#88C6BE"},selector:{color:a},char:{color:a},builtin:{color:a},inserted:{color:a},function:{color:"#79b6f2"},operator:{color:i},entity:{color:i,cursor:"help"},url:{color:i},".language-css .token.string":{color:i},".style .token.string":{color:i},variable:{color:i},"attr-value":{color:d},keyword:{color:o},"at-rule":{color:s},"class-name":{color:s},important:{fontWeight:400},bold:{fontWeight:700},italic:{fontStyle:"italic"},".namespace":{opacity:.7}};t.default=c},845:function(e,t,l){e.exports={"examples-header":"DocTemplate-module__examples-header___P3qFL","doc-template":"DocTemplate-module__doc-template___JSxEJ","doc-card":"DocTemplate-module__doc-card___2jEVe","props-table-markdown":"DocTemplate-module__props-table-markdown___1926W"}},854:function(e,t,l){e.exports={"form-select":"FormSelectDocCommon-module__form-select___3HVkD"}},875:function(e){e.exports=JSON.parse('{"name":"terra-form-select","main":"lib/Select.js","version":"5.40.0","description":"Provides a drop down of selectable options.","repository":{"type":"git","url":"git+https://github.com/cerner/terra-core.git"},"keywords":["Cerner","Terra","terra-form-select","Form","Select","UI"],"author":"Cerner Corporation","license":"Apache-2.0","bugs":{"url":"https://github.com/cerner/terra-core/issues"},"homepage":"https://github.com/cerner/terra-core#readme","peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5","react-intl":"^2.8.0"},"dependencies":{"classnames":"^2.2.5","keycode-js":"^2.0.1","lodash.uniqueid":"^4.0.1","prop-types":"^15.5.8","react-lifecycles-compat":"^3.0.2","terra-doc-template":"^2.23.0","terra-form-field":"^3.32.0","terra-hookshot":"^5.0.0","terra-mixins":"^1.34.0"},"scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","precompile":"rm -rf lib","test":"npm run jest && npm run wdio","jest":"jest --config ../../jestconfig.js","wdio-default":"cd ../.. && npx wdio ./packages/$npm_package_name/wdio.conf.js","wdio-fusion":"cd ../.. && THEME=orion-fusion-theme npx wdio ./packages/$npm_package_name/wdio.conf.js","wdio":"npm run wdio-default && npm run wdio-fusion"}}')}}]);
//# sourceMappingURL=106-057cc22df24cb5a5f600.js.map