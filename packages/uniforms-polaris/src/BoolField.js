import React from 'react';
import connectField from 'uniforms/connectField';
import filterDOMProps from 'uniforms/filterDOMProps';
import {Checkbox} from '@shopify/polaris';

const Bool = ({disabled, id, inputRef, label, name, onChange, value, ...props}) => (
  <div {...filterDOMProps(props)}>
    <Checkbox
      checked={value}
      disabled={disabled}
      id={id}
      name={name}
      label={label}
      onChange={() => disabled || onChange(!value)}
      ref={inputRef}
    />
  </div>
);
export default connectField(Bool);
