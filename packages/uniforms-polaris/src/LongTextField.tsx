// import TextArea, { TextAreaProps, TextAreaRef } from 'antd/lib/input/TextArea';
import { TextField, TextFieldProps } from '@shopify/polaris';
import React, { Ref } from 'react';
import { FieldProps, connectField, filterDOMProps } from 'uniforms';

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
      onChange={props.onChange}
      placeholder={props.placeholder}
      readOnly={props.readOnly}
      value={props.value ?? ''}
      {...filterDOMProps(props)}
    />
  );
}

export default connectField<LongTextFieldProps>(LongText, { kind: 'leaf' });
