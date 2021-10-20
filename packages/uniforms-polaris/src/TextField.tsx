import { TextField, TextFieldProps } from '@shopify/polaris';
import React, { Ref } from 'react';
import { FieldProps, connectField, filterDOMProps } from 'uniforms';

export type TextFieldPropsLocal = FieldProps<
  string,
  Omit<TextFieldProps, 'onReset'>,
  { inputRef?: Ref<typeof TextField> }
>;

function Text(props: TextFieldProps) {
  return (
    <TextField
      label={props.label}
      disabled={props.disabled}
      name={props.name}
      onChange={value =>
        props.onChange ? props.onChange(value, props.id ?? 'id') : undefined
      }
      placeholder={props.placeholder}
      readOnly={props.readOnly}
      type={props.type ?? 'text'}
      value={props.value ?? ''}
      {...filterDOMProps(props)}
    />
  );
}

export default connectField<TextFieldPropsLocal>(Text, { kind: 'leaf' });
