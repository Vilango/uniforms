import { Button, ButtonProps } from '@shopify/polaris';
import React, { Ref } from 'react';
import { Override, useForm } from 'uniforms';

export type SubmitFieldProps = Override<
  ButtonProps,
  { inputRef?: Ref<HTMLInputElement> }
>;

function SubmitField({ disabled, children = '', ...props }: SubmitFieldProps) {
  const { error, state } = useForm();

  return (
    <Button
      disabled={disabled === undefined ? !!(error || state.disabled) : disabled}
      primary
      submit
      {...props}
    >
      {children}
    </Button>
  );
}

export default SubmitField;
