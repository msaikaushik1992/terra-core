'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

require('terra-base/lib/baseStyles');

var _TableModule = require('./Table.module.scss');

var _TableModule2 = _interopRequireDefault(_TableModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var cx = _bind2.default.bind(_TableModule2.default);

var propTypes = {
  /**
   * The children passed to the component
   */
  children: _propTypes2.default.node,
  /**
   * Whether or not row is selected
   */
  isSelected: _propTypes2.default.bool,
  /**
   * Whether or not row is selectable
   */
  isSelectable: _propTypes2.default.bool
};

var defaultProps = {
  isSelected: false,
  isSelectable: undefined
};

var TableRow = function TableRow(_ref) {
  var children = _ref.children,
      isSelected = _ref.isSelected,
      isSelectable = _ref.isSelectable,
      customProps = _objectWithoutProperties(_ref, ['children', 'isSelected', 'isSelectable']);

  var rowClassNames = cx([{ 'is-selected': isSelected }, { 'is-selectable': isSelectable }, 'row', customProps.className]);

  var childrenArray = _react2.default.Children.toArray(children);
  if (childrenArray.length > 16) {
    // eslint-disable-next-line no-console
    console.log('Number of Columns are ' + _react2.default.Children.count(children) + '. This is more than columns limit');
  }

  return _react2.default.createElement(
    'tr',
    _extends({}, customProps, { 'aria-selected': isSelected, className: rowClassNames }),
    children
  );
};

TableRow.propTypes = propTypes;
TableRow.defaultProps = defaultProps;

exports.default = TableRow;