import React from 'react';
import { connectField, filterDOMProps, FieldProps } from 'uniforms';
import {
  SettingToggle as SettingTogglePolaris,
  SettingToggleProps,
  TextStyle
} from '@shopify/polaris';

export type SettingTogglePropsLocal = FieldProps<
  string,
  SettingToggleProps,
  { text: string; value: boolean; statusContent: any; id: string }
>;
const SettingToggle = ({
  action,
  text,
  value,
  id,
  statusContent
}: SettingTogglePropsLocal) => (
  <div>
    <SettingTogglePolaris action={action}>
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
