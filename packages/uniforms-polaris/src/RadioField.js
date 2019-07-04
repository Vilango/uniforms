import React from 'react';
import connectField from 'uniforms/connectField';
import filterDOMProps from 'uniforms/filterDOMProps';
import {ChoiceList} from '@shopify/polaris';

import {pickOptions} from './SelectField';

export const xor = (item, array) => {
  const index = array.indexOf(item);
  if (index === -1) {
    return array.concat([item]);
  }

  return array.slice(0, index).concat(array.slice(index + 1));
};

const Radio = ({
  options,
  allowedValues,
  checkboxes, // eslint-disable-line no-unused-vars
  disabled,
  label,
  onChange,
  transform,
  value,
  ...props
}) => {
  const opts = pickOptions({options, allowedValues, transform, withHelpText: true, disabled});

  return (
    <ChoiceList
      {...filterDOMProps(props)}
      title={label}
      choices={opts}
      selected={value}
      disabled={disabled}
      onChange={val => {
        const val0 = val ? val[0] : val;
        // console.log('onChange', val, val0);
        onChange(val0);
      }}
    />
  );
};
export default connectField(Radio);
