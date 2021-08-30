// @ts-nocheck
import { Button, ButtonProps } from '@shopify/polaris';
import React, { Ref } from 'react';
import { Override, useForm } from 'uniforms';

export type SubmitFieldProps = Override<
  ButtonProps,
  { inputRef?: Ref<HTMLInputElement> }
>;

function SubmitField({
  disabled,
  inputRef,
  children = '',
  ...props
}: SubmitFieldProps) {
  const { error, state } = useForm();

  return (
    <Button
      disabled={disabled === undefined ? !!(error || state.disabled) : disabled}
      htmlType="submit"
      ref={inputRef}
      type="primary"
      {...props}
    >
      {children}
    </Button>
  );
}

export default SubmitField;
