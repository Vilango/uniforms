import BaseField from 'uniforms/BaseField';
import {Button} from '@shopify/polaris';

import React from 'react';
import filterDOMProps from 'uniforms/filterDOMProps';

const SubmitField = ({children, disabled, inputRef, label, value, ...props}, {uniforms: {error, state}}) => {
  return (
    <Button
      disabled={disabled === undefined ? !!(error || state.disabled) : disabled}
      ref={inputRef}
      submit
      value={value}
      {...filterDOMProps(props)}
    >
      {children || label}
    </Button>
  );
};

SubmitField.contextTypes = BaseField.contextTypes;
SubmitField.defaultProps = {label: 'Submit'};

export default SubmitField;
