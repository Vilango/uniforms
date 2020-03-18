import React, { Component } from 'react';
import classnames from 'classnames';
import { connectField, filterDOMProps } from 'uniforms';

const Num = ({
  className,
  decimal,
  disabled,
  error,
  errorMessage,
  icon,
  iconLeft,
  iconProps,
  id,
  inputRef,
  label,
  max,
  min,
  name,
  onChange,
  placeholder,
  required,
  showInlineError,
  step,
  value,
  wrapClassName,
  ...props
}) => (
  <div
    className={classnames(className, { disabled, error, required }, 'field')}
    {...filterDOMProps(props)}
  >
    {label && <label htmlFor={id}>{label}</label>}

    <div
      className={classnames(
        'ui',
        wrapClassName,
        { left: iconLeft, icon: icon || iconLeft },
        'input',
      )}
    >
      <input
        disabled={disabled}
        id={id}
        max={max}
        min={min}
        name={name}
        onChange={event => {
          const parse = decimal ? parseFloat : parseInt;
          const value = parse(event.target.value);
          onChange(isNaN(value) ? undefined : value);
        }}
        placeholder={placeholder}
        ref={inputRef}
        step={step || (decimal ? 0.01 : 1)}
        type="number"
        value={value}
      />

      {(icon || iconLeft) && (
        <i className={`${icon || iconLeft} icon`} {...iconProps} />
      )}
    </div>

    {!!(error && showInlineError) && (
      <div className="ui red basic pointing label">{errorMessage}</div>
    )}
  </div>
);

export default connectField(Num);