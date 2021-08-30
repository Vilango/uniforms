import React from 'react';
import { connectField, filterDOMProps, FieldProps } from 'uniforms';
import { ChoiceList, ChoiceListProps } from '@shopify/polaris';

import { pickOptions } from './SelectField';

export const xor = (item: any, array: any[]) => {
  const index = array.indexOf(item);
  if (index === -1) {
    return array.concat([item]);
  }

  return array.slice(0, index).concat(array.slice(index + 1));
};

export type ChoiceListPropsLocal = FieldProps<
  string,
  ChoiceListProps,
  { allowedValues?: string[]; transform?: (value: string) => string }
>;

const Radio = ({
  choices,
  allowedValues,
  disabled,
  label,
  onChange,
  transform,
  selected,
  ...props
}: ChoiceListPropsLocal) => {
  // const opts = pickOptions({
  //   options,
  //   allowedValues,
  //   transform,
  //   withHelpText: true,
  //   disabled
  // });

  return (
    <ChoiceList
      {...filterDOMProps(props)}
      title={label || ''}
      choices={choices}
      selected={selected}
      disabled={disabled}
      onChange={val => {
        const val0 = val ? val[0] : val;
        onChange(val0);
      }}
    />
  );
};
export default connectField(Radio);
