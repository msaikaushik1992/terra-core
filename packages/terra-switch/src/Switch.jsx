import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import * as KeyCode from 'keycode-js';
import styles from './Switch.module.scss';

const cx = classNames.bind(styles);

const SWITCH_STATE = Object.freeze({
  ON: 'On',
  OFF: 'Off',
});

const propTypes = {
  /**
    * Whether or not the Switch is enabled ("ON").
    */
  isOn: PropTypes.bool,

  /**
    * If true, the user won't be able to toggle the switch.
    */
  disabled: PropTypes.bool,

  /**
    * Text of the label.
    */
  labelText: PropTypes.node.isRequired,

  /**
    * Additional attributes applied to the label.
    */
  // eslint-disable-next-line react/forbid-prop-types
  labelTextAttrs: PropTypes.object,

  /**
    * Callback fired when the switch state is changed.
    */
  onChange: PropTypes.func,
};

const defaultProps = {
  isOn: false,
  disabled: false,
  labelTextAttrs: {},
  onChange: undefined,
};

const Switch = ({
  isOn,
  disabled,
  labelText,
  labelTextAttrs,
  onChange,
  ...customProps
}) => {
  const [focused, setFocus] = useState(false);

  const switchClassNames = cx([
    'switch',
    customProps.className,
  ]);

  const trayClassNames = cx([
    'tray',
    { 'is-disabled': disabled },
  ]);

  const buttonClassNames = cx([
    'switch-button',
    { 'switch-button-clicked': isOn },
  ]);

  const sliderClassNames = cx([
    'slider',
    { 'is-disabled': disabled },
    { 'is-focused': focused },
  ]);

  const handleKeyUp = (event) => {
    if (event.keyCode === KeyCode.KEY_TAB) {
      setFocus(true);
    }
  };

  const handleOnKeyDown = (event) => {
    if (event.keyCode === KeyCode.KEY_SPACE || event.keyCode === KeyCode.KEY_RETURN) {
      event.preventDefault();
      setFocus(true);
      onChange();
    }
  };

  const handleClick = (event) => {
    console.log(event);
  };

  const statusLabelText = isOn ? SWITCH_STATE.ON : SWITCH_STATE.OFF;

  return (
    <div className={cx('switch-wrapper')}>
      <div className={cx('switch-container')}>
        <div className={cx('label-container')}>
          <div {...labelTextAttrs} className={cx('label-text')}>{labelText}</div>
          <div className={cx('status-text')}>{statusLabelText}</div>
        </div>
        <div className={switchClassNames}>
          <button
            type="button"
            className={buttonClassNames}
            aria-pressed={isOn}
            tabIndex="0"
            disabled={disabled}
            onClick={handleClick}
            {...customProps}
          />
          <span
            className={trayClassNames}
          >
            <span
              className={sliderClassNames}
              tabIndex="0"
              aria-checked={isOn}
              role="switch"
              onKeyDown={handleOnKeyDown}
              onKeyUp={handleKeyUp}
              onBlur={setFocus(false)}
            >
              <VisuallyHiddenText text={labelText} />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

Switch.propTypes = propTypes;
Switch.defaultProps = defaultProps;

export default Switch;

