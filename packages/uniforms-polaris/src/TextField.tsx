// @ts-nocheck
import { TextField, TextFieldProps } from '@shopify/polaris';
import React, { Ref } from 'react';
import { FieldProps, connectField, filterDOMProps } from 'uniforms';

export type TextFieldProps = FieldProps<
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
      onChange={event => props.onChange(event.target.value, props.id)}
      placeholder={props.placeholder}
      readOnly={props.readOnly}
      ref={props.inputRef}
      type={props.type ?? 'text'}
      value={props.value ?? ''}
      {...filterDOMProps(props)}
    />
  );
}

export default connectField<TextFieldProps>(Text, { kind: 'leaf' });
