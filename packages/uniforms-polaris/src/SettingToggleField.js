import React from 'react';
import connectField from 'uniforms/connectField';
import filterDOMProps from 'uniforms/filterDOMProps';
import {SettingToggle as SettingTogglePolaris, TextStyle} from '@shopify/polaris';

const SettingToggle = ({
  disabled,
  id,
  inputRef,
  name,
  onChange,
  value,
  actionContent,
  statusContent,
  text,
  ...props
}) => (
  <div {...filterDOMProps(props)}>
    <SettingTogglePolaris
      name={name}
      action={{
        id,
        content: value ? actionContent['true'] : actionContent['false'],
        onAction: () => onChange(!value),
        disabled
      }}
      enabled={value}
      ref={inputRef}
    >
      {text} <TextStyle variation="strong">{value ? statusContent['true'] : statusContent['false']}</TextStyle>.
    </SettingTogglePolaris>
  </div>
);
export default connectField(SettingToggle);
