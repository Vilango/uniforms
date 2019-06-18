import React from 'react';
import {mount} from 'enzyme';

import SettingToggleField from 'uniforms-polaris/SettingToggleField';
import {SettingToggle, Button, TextStyle} from '@shopify/polaris';

import createContext from './_createContext';

test('<SettingToggleField> - renders a SettingToggle', () => {
  const element = (
    <SettingToggleField
      name="x"
      actionContent={{true: 'Disable', false: 'Enable'}}
      statusContent={{true: 'enabled', false: 'disabled'}}
      text="This setting is"
    />
  );
  const wrapper = mount(element, createContext({x: {type: Boolean}}));

  expect(wrapper.find(SettingToggle)).toHaveLength(1);
});

test('<SettingToggleField> - renders a SettingToggle with correct id (inherited)', () => {
  const element = (
    <SettingToggleField
      name="x"
      actionContent={{true: 'Disable', false: 'Enable'}}
      statusContent={{true: 'enabled', false: 'disabled'}}
      text="This setting is"
    />
  );
  const wrapper = mount(element, createContext({x: {type: Boolean}}));

  expect(wrapper.find(SettingToggle)).toHaveLength(1);
  expect(wrapper.find(SettingToggle).prop('id')).toBeTruthy();
});

test('<SettingToggleField> - renders a SettingToggle with correct id (specified)', () => {
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

  expect(wrapper.find(SettingToggle)).toHaveLength(1);
  expect(wrapper.find(SettingToggle).prop('id')).toBe('y');
});

test('<SettingToggleField> - renders a SettingToggle with correct name', () => {
  const element = (
    <SettingToggleField
      name="x"
      actionContent={{true: 'Disable', false: 'Enable'}}
      statusContent={{true: 'enabled', false: 'disabled'}}
      text="This setting is"
    />
  );
  const wrapper = mount(element, createContext({x: {type: Boolean}}));

  expect(wrapper.find(SettingToggle)).toHaveLength(1);
  expect(wrapper.find(SettingToggle).prop('name')).toBe('x');
});

test('<SettingToggleField> - renders a Button with correct disabled state', () => {
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

  expect(wrapper.find(Button)).toHaveLength(1);
  expect(wrapper.find(Button).prop('disabled')).toBe(true);
});

test('<SettingToggleField> - renders a TextStyle with the correct text', () => {
  const onChange = jest.fn();

  const element = (
    <SettingToggleField
      name="x"
      actionContent={{true: 'Disable', false: 'Enable'}}
      statusContent={{true: 'enabled', false: 'disabled'}}
      text="This setting is"
    />
  );
  const wrapper = mount(element, createContext({x: {type: Boolean}}, {onChange}));

  expect(wrapper.find(TextStyle)).toHaveLength(1);
  expect(wrapper.find(TextStyle).prop('children')).toBe('disabled');
});

test('<SettingToggleField> - renders a SettingToggle which correctly reacts on change', () => {
  const onChange = jest.fn();

  const element = (
    <SettingToggleField
      name="x"
      actionContent={{true: 'Disable', false: 'Enable'}}
      statusContent={{true: 'enabled', false: 'disabled'}}
      text="This setting is"
    />
  );
  const wrapper = mount(element, createContext({x: {type: Boolean}}, {onChange}));

  expect(wrapper.find(SettingToggle)).toHaveLength(1);
  wrapper
    .find(SettingToggle)
    .prop('action')
    .onAction();
  expect(onChange).toHaveBeenCalled();
});
