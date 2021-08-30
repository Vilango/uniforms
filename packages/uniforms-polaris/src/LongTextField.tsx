// @ts-nocheck
// import TextArea, { TextAreaProps, TextAreaRef } from 'antd/lib/input/TextArea';
import { TextField, TextFieldProps } from '@shopify/polaris';
import React, { Ref } from 'react';
import { FieldProps, connectField, filterDOMProps } from 'uniforms';

import wrapField from './wrapField';

export type LongTextFieldProps = FieldProps<
  string,
  // FIXME: Why `onReset` fails with `wrapField`?
  Omit<TextFieldProps, 'onReset'>,
  { inputRef?: Ref<any> }
>;

function LongText({ ...props }: LongTextFieldProps) {
  return (
    <TextField
      label={props.label}
      disabled={props.disabled}
      name={props.name}
      onChange={event => props.onChange(event.target.value)}
      placeholder={props.placeholder}
      readOnly={props.readOnly}
      ref={props.inputRef}
      value={props.value ?? ''}
      {...filterDOMProps(props)}
    />
  );
}

export default connectField<LongTextFieldProps>(LongText, { kind: 'leaf' });
