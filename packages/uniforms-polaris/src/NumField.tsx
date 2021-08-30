// @ts-nocheck
import { TextField, TextFieldProps } from '@shopify/polaris';
import React, { Ref } from 'react';
import { FieldProps, connectField, filterDOMProps } from 'uniforms';

export type NumFieldProps = FieldProps<
  number,
  // FIXME: Why `onReset` fails with `wrapField`?
  Omit<TextFieldProps, 'onReset'>,
  { decimal?: boolean; inputRef?: Ref<any> }
>;

function Num(props: NumFieldProps) {
  return (
    <TextField
      label={props.label}
      disabled={props.disabled}
      max={props.max}
      min={props.min}
      name={props.name}
      onChange={event => {
        const parse = props.decimal ? parseFloat : parseInt;
        const value = parse('' + event);
        props.onChange(isNaN(value) ? undefined : value);
      }}
      placeholder={props.placeholder}
      readOnly={props.readOnly}
      ref={props.inputRef}
      step={props.step || (props.decimal ? 0.01 : 1)}
      value={props.value?.toString()}
      {...filterDOMProps(props)}
    />
  );
}

export default connectField<NumFieldProps>(Num, { kind: 'leaf' });
