import React from 'react';
import connectField from 'uniforms/connectField';
import filterDOMProps from 'uniforms/filterDOMProps';
import {Select as SelectPolaris, Checkbox} from '@shopify/polaris';

const xor = (item, array) => {
  const index = array.indexOf(item);
  if (index === -1) {
    return array.concat([item]);
  }

  return array.slice(0, index).concat(array.slice(index + 1));
};

const renderCheckboxes = ({allowedValues, disabled, fieldType, id, name, onChange, transform, value}) =>
  allowedValues.map(item => (
    <div key={item}>
      <Checkbox
        checked={fieldType === Array ? value.includes(item) : value === item}
        disabled={disabled}
        id={`${id}-${item}`}
        name={name}
        label={transform ? transform(item) : item}
        onChange={() => onChange(fieldType === Array ? xor(item, value) : item)}
      />
    </div>
  ));

const renderSelect = ({
  allowedValues,
  disabled,
  id,
  inputRef,
  label,
  name,
  onChange,
  placeholder,
  required,
  transform,
  value
}) => {
  const options = allowedValues.map(value => ({value, label: transform ? transform(value) : value}));

  if (!!placeholder || !required) {
    options.unshift({value: '', disabled: required, label: placeholder ? placeholder : label});
  }

  return (
    <SelectPolaris
      disabled={disabled}
      id={id}
      name={name}
      onChange={value => onChange(value)}
      value={value}
      options={options}
      ref={inputRef}
    />
  );
};

const Select = ({
  allowedValues,
  checkboxes,
  disabled,
  fieldType,
  id,
  inputRef,
  label,
  name,
  onChange,
  placeholder,
  required,
  transform,
  value,
  ...props
}) => (
  <div {...filterDOMProps(props)}>
    {label && <label htmlFor={id}>{label}</label>}

    {checkboxes || fieldType === Array
      ? renderCheckboxes({allowedValues, disabled, id, name, onChange, transform, value, fieldType})
      : renderSelect({
          allowedValues,
          disabled,
          id,
          name,
          onChange,
          transform,
          value,
          inputRef,
          label,
          placeholder,
          required
        })}
  </div>
);
export default connectField(Select);
