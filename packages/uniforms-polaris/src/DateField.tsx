import React from 'react';
import { connectField, filterDOMProps } from 'uniforms';

const DateConstructor = (typeof global === 'object' ? global : window).Date;
const dateFormat = (value: Date) => value && value.toISOString().slice(0, -8);

const dateParse = (
  timestamp: number,
  onChange: (value: Date | undefined) => void
) => {
  const date = new DateConstructor(timestamp);
  if (date.getFullYear() < 10000) {
    onChange(date);
  } else if (isNaN(timestamp)) {
    onChange(undefined);
  }
};

export type DateFieldProps = {
  disabled: boolean;
  id: string;
  inputRef: any;
  label: string;
  max: Date;
  min: Date;
  name: string;
  onChange: (value: Date | undefined) => void;
  placeholder: string;
  value: Date;
};
const Date = ({
  disabled,
  id,
  inputRef,
  label,
  max,
  min,
  name,
  onChange,
  placeholder,
  value,
  ...props
}: DateFieldProps) => (
  <div {...filterDOMProps(props)}>
    {label && <label htmlFor={id}>{label}</label>}

    <input
      disabled={disabled}
      id={id}
      max={dateFormat(max)}
      min={dateFormat(min)}
      name={name}
      onChange={event => dateParse(event.target.valueAsNumber, onChange)}
      placeholder={placeholder}
      ref={inputRef}
      type="datetime-local"
      value={dateFormat(value)}
    />
  </div>
);
export default connectField(Date);
