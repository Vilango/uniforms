import React from 'react';
import {mount} from 'enzyme';

import SettingToggleField from 'uniforms-polaris/SettingToggleField';

import createContext from './_createContext';

test('<SettingToggleField> - renders a SettingToggleField', () => {
  const element = (
    <SettingToggleField
      name="x"
      actionContent={{
        true: 'Disable',
        false: 'Enable'
      }}
      statusContent={{
        true: 'enabled',
        false: 'disabled'
      }}
      text="This setting is"
    />
  );
  const wrapper = mount(element, createContext({x: {type: Boolean}}));

  expect(wrapper.find('SettingToggleField')).toHaveLength(1);
});

test('<SettingToggleField> - renders a button with correct id (inherited)', () => {
  const element = (
    <SettingToggleField
      name="x"
      actionContent={{true: 'Disable', false: 'Enable'}}
      statusContent={{true: 'enabled', false: 'disabled'}}
      text="This setting is"
    />
  );
  const wrapper = mount(element, createContext({x: {type: Boolean}}));

  expect(wrapper.find('button')).toHaveLength(1);
  expect(wrapper.find('button').prop('id')).toBeTruthy();
});

test('<SettingToggleField> - renders a button with correct id (specified)', () => {
  const element = (
    <SettingToggleField
      name="x"
      actionContent={{true: 'Disable', false: 'Enable'}}
      statusContent={{true: 'enabled', false: 'disabled'}}
      text="This setting is"
      id="y"
    />
  );
  const wrapper = mount(element, createContext({x: {type: Boolean}}));

  expect(wrapper.find('button')).toHaveLength(1);
  expect(wrapper.find('button').prop('id')).toBe('y');
});

test('<SettingToggleField> - renders a SettingToggleField with correct name', () => {
  const element = (
    <SettingToggleField
      name="x"
      actionContent={{true: 'Disable', false: 'Enable'}}
      statusContent={{true: 'enabled', false: 'disabled'}}
      text="This setting is"
    />
  );
  const wrapper = mount(element, createContext({x: {type: Boolean}}));

  expect(wrapper.find('SettingToggleField')).toHaveLength(1);
  expect(wrapper.find('SettingToggleField').prop('name')).toBe('x');
});

test('<SettingToggleField> - renders a SettingToggleField with correct disabled state', () => {
  const element = (
    <SettingToggleField
      name="x"
      disabled
      actionContent={{true: 'Disable', false: 'Enable'}}
      statusContent={{true: 'enabled', false: 'disabled'}}
      text="This setting is"
    />
  );
  const wrapper = mount(element, createContext({x: {type: Boolean}}));

  expect(wrapper.find('SettingToggleField')).toHaveLength(1);
  expect(wrapper.find('SettingToggleField').prop('disabled')).toBe(true);
});
