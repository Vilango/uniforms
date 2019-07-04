import React from 'react';
import {TextField} from '@shopify/polaris';

import connectField from 'uniforms/connectField';
import filterDOMProps from 'uniforms/filterDOMProps';
const Text = ({
  disabled,
  error,
  errorMessage,
  inputRef,
  label,
  name,
  onChange,
  placeholder,
  showInlineError,
  type,
  value,
  ...props
}) => {
  // console.log("Text", error, errorMessage);
  // console.log("Text", type);
  // console.log("Text.placeholder", !!placeholder, placeholder);
  // console.log("Text.onChange", disabled, onChange);
  return (
    <TextField
      disabled={!!disabled}
      error={error && showInlineError && errorMessage}
      label={label}
      name={name}
      onChange={event => disabled || onChange(event)}
      placeholder={placeholder}
      ref={inputRef}
      type={type}
      value={value}
      {...filterDOMProps(props)}
    />
  );
};
Text.defaultProps = {
  // fullWidth: true,
  // margin: 'dense',
  type: 'text'
};

export default connectField(Text);
