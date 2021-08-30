// @ts-nocheck
import React from 'react';
import { connectField, filterDOMProps } from 'uniforms';
import {
  SettingToggle as SettingTogglePolaris,
  TextStyle
} from '@shopify/polaris';

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
      id={id}
      name={name}
      action={{
        id,
        content: value ? actionContent['true'] : actionContent['false'],
        onAction: () => onChange(!value),
        disabled
      }}
      ref={inputRef}
    >
      <p data-testid={`paragraph-${id || ''}`}>
        {text}{' '}
        <TextStyle variation="strong">
          {value ? statusContent['true'] : statusContent['false']}
        </TextStyle>
        .
      </p>
    </SettingTogglePolaris>
  </div>
);
export default connectField(SettingToggle);
