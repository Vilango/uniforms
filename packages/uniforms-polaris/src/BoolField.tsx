import React, { Ref } from 'react';
import { connectField } from 'uniforms';
import { filterDOMProps } from 'uniforms';
import { Checkbox } from '@shopify/polaris';

export type BoolFieldProps = {
  disabled: boolean;
  id: string;
  inputRef: Ref<typeof Checkbox | any>;
  label: string;
  name: string;
  onChange: (value: any) => void;
  value: boolean | undefined;
  error: boolean | Error | undefined;
  showErrorMessage: boolean | Error | undefined;
  errorMessage: string | undefined;
  showInlineError: boolean;
};

const Bool = ({
  disabled,
  id,
  inputRef,
  label,
  name,
  onChange,
  value,
  error,
  errorMessage,
  showInlineError,
  ...props
}: BoolFieldProps) => {
  // console.log('Bool', filterDOMProps(props));
  return (
    <Checkbox
      error={error && showInlineError && errorMessage}
      checked={value}
      disabled={disabled}
      id={id}
      name={name}
      label={label}
      onChange={() => disabled || onChange(!value)}
      ref={inputRef}
      {...filterDOMProps(props)}
    />
  );
};
export default connectField<BoolFieldProps>(Bool, { kind: 'leaf' });
