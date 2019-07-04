import React from 'react';
import connectField from 'uniforms/connectField';
import filterDOMProps from 'uniforms/filterDOMProps';
import {Checkbox} from '@shopify/polaris';

const Bool = ({
  disabled,
  id,
  inputRef,
  label,
  name,
  onChange,
  value,
  error,
  errorMessage,
  showInlineError,
  ...props
}) => {
  // console.log('Bool', filterDOMProps(props));
  return (
    <Checkbox
      error={error && showInlineError && errorMessage}
      checked={value}
      disabled={disabled}
      id={id}
      name={name}
      label={label}
      onChange={() => disabled || onChange(!value)}
      ref={inputRef}
      {...filterDOMProps(props)}
    />
  );
};
export default connectField(Bool);
