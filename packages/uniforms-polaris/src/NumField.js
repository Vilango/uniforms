import React, {Component} from 'react';
import {TextField} from '@shopify/polaris';

import connectField from 'uniforms/connectField';
import filterDOMProps from 'uniforms/filterDOMProps';

const noneIfNaN = x => (isNaN(x) ? undefined : x);

const Num_ = ({
  decimal,
  disabled,
  error,
  errorMessage,
  inputRef,
  label,
  max,
  min,
  name,
  onChange,
  placeholder,
  showInlineError,
  value,
  ...props
}) => (
  <TextField
    disabled={!!disabled}
    error={error && showInlineError && errorMessage}
    label={label}
    name={name}
    onChange={event => disabled || onChange(event)}
    placeholder={placeholder}
    ref={inputRef}
    type="number"
    value={value}
    {...{min, max, step: decimal ? 0.01 : 1}}
    {...filterDOMProps(props)}
  />
);

// NOTE: React < 16 workaround. Make it optional?
class Num extends Component {
  constructor() {
    super(...arguments);

    this.state = {value: '' + this.props.value};

    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps({decimal, value}) {
    const parse = decimal ? parseFloat : parseInt;

    if (noneIfNaN(parse(value)) !== noneIfNaN(parse(this.state.value.replace(/[.,]+$/, '')))) {
      this.setState({value: value === undefined || value === '' ? '' : '' + value});
    }
  }

  onChange(value) {
    const change = value.replace(/[^\d.,-]/g, '');

    this.setState({value: change});
    this.props.onChange(noneIfNaN((this.props.decimal ? parseFloat : parseInt)(change)));
  }

  render() {
    return Num_({...this.props, onChange: this.onChange, value: this.state.value});
  }
}

export default connectField(Num);
