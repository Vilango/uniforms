// @ts-nocheck
import React from 'react';
import { ReactNode } from 'react';
import { connectField, filterDOMProps } from 'uniforms';

type ErrorProps = {
  children: ReactNode;
  error: Error | string | undefined;
  errorMessage: string;
};

const Error = ({ children, error, errorMessage, ...props }: ErrorProps) =>
  !error ? null : (
    <div {...filterDOMProps(props)}>{children || errorMessage}</div>
  );
export default connectField(Error, { initialValue: false });
