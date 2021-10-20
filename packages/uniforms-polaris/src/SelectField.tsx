// @ts-nocheck
import { Select as SelectPolaris, ChoiceList } from '@shopify/polaris';
import isString from 'lodash/isString';
import pick from 'lodash/pick';
import React from 'react';
import { connectField, filterDOMProps } from 'uniforms';

const pickStritOptions = (
  props,
  { withHelpText = false, disabled = false },
) => {
  const values = pick(props, ['value', 'label', 'disabled']);
  if (withHelpText) {
    values.helpText = props.helpText;
  }
  if (disabled) {
    values.disabled = disabled;
  }
  return values;
};

export const pickOptions = ({
  options,
  allowedValues,
  transform,
  disabled = false,
  withHelpText = false,
}) => {
  const opts = options || allowedValues;
  const curOptions = opts.map(item => {
    // console.log('item', item);
    if (item instanceof Object && item.title && item.options instanceof Array) {
      // we have a group
      return {
        title: item.title,
        options: item.options.map(o =>
          pickStritOptions(o, { withHelpText, disabled }),
        ),
      };
    }

    if (item instanceof Object) {
      // we have regular options
      // console.log('We have a regular options', item);
      return pickStritOptions(item, { withHelpText, disabled });
    }

    if (isString(item)) {
      // console.log('We have a String options', item);
      return {
        value: item,
        label: transform ? transform(item) : item,
        disabled,
      };
    }
    return item;
  });
  return curOptions;
};

const renderCheckboxes = ({
  allowedValues,
  options,
  // name,
  disabled,
  onChange,
  transform,
  value,
  label,
  fieldType,
  ...props
}) => {
  const opts = pickOptions({
    options,
    allowedValues,
    transform,
    disabled,
    withHelpText: true,
  });
  const isAllowMultiple = fieldType === Array;
  // console.log('renderCheckboxes render', name, isAllowMultiple, disabled, opts);

  return (
    <ChoiceList
      {...filterDOMProps(props)}
      allowMultiple={isAllowMultiple}
      title={label}
      choices={opts}
      selected={value}
      disabled={disabled}
      onChange={val => {
        // console.log('renderCheckboxes !!! onChange', value, isAllowMultiple, val);
        if (isAllowMultiple) {
          onChange(val);
        } else {
          const val0 = val ? val[0] : val;
          // console.log('  =>', val0);
          onChange(val0);
        }
      }}
    />
  );
};

const renderSelect = ({
  allowedValues,
  options,
  disabled,
  placeholder,
  label,
  id,
  inputRef,
  name,
  onChange,
  transform,
  value,
  error,
  showInlineError,
  errorMessage,
  ...props
}) => {
  // console.log('renderSelect', name, props);
  // console.log('curOptions', opts, curOptions);
  const opts = pickOptions({ options, allowedValues, transform });
  return (
    <SelectPolaris
      error={error && showInlineError && errorMessage}
      disabled={disabled}
      id={id}
      name={name}
      placeholder={placeholder}
      onChange={value => onChange(value)}
      value={value}
      options={opts}
      ref={inputRef}
      label={label}
      {...filterDOMProps(props)}
    />
  );
};

const Select = ({
  allowedValues,
  options,
  checkboxes,
  // disabled,
  fieldType,
  id,
  inputRef,
  name,
  onChange,
  required,
  value,
  ...props
}) => {
  if (checkboxes || fieldType === Array) {
    return renderCheckboxes({
      allowedValues,
      options,
      // disabled,
      id,
      name,
      onChange,
      value,
      fieldType,
      ...props,
    });
  }

  return renderSelect({
    allowedValues,
    options,
    // disabled,
    id,
    name,
    onChange,
    value,
    inputRef,
    required,
    ...props,
  });
};
export default connectField(Select);
