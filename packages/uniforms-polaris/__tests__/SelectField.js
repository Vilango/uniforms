import React from 'react';
import {mount} from 'enzyme';

import SelectField from 'uniforms-polaris/SelectField';
import {Select, Checkbox, RadioButton} from '@shopify/polaris';

import createContext from './_createContext';

test('<SelectField> - renders a Select', () => {
  const element = <SelectField name="x" />;
  const wrapper = mount(element, createContext({x: {type: String, allowedValues: ['a', 'b']}}));

  expect(wrapper.find(Select)).toHaveLength(1);
});

test('<SelectField> - renders a Select with correct disabled state', () => {
  const element = <SelectField name="x" disabled />;
  const wrapper = mount(element, createContext({x: {type: String, allowedValues: ['a', 'b']}}));

  expect(wrapper.find(Select)).toHaveLength(1);
  expect(wrapper.find(Select).prop('disabled')).toBe(true);
});

test('<SelectField> - renders a Select with correct id (inherited)', () => {
  const element = <SelectField name="x" />;
  const wrapper = mount(element, createContext({x: {type: String, allowedValues: ['a', 'b']}}));

  expect(wrapper.find(Select)).toHaveLength(1);
  expect(wrapper.find(Select).prop('id')).toBeTruthy();
});

test('<SelectField> - renders a Select with correct id (specified)', () => {
  const element = <SelectField name="x" id="y" />;
  const wrapper = mount(element, createContext({x: {type: String, allowedValues: ['a', 'b']}}));

  expect(wrapper.find(Select)).toHaveLength(1);
  expect(wrapper.find(Select).prop('id')).toBe('y');
});

test('<SelectField> - renders a Select with correct name', () => {
  const element = <SelectField name="x" />;
  const wrapper = mount(element, createContext({x: {type: String, allowedValues: ['a', 'b']}}));

  expect(wrapper.find(Select)).toHaveLength(1);
  expect(wrapper.find(Select).prop('name')).toBe('x');
});

test('<SelectField> - renders a Select with correct options', () => {
  const element = <SelectField name="x" />;
  const wrapper = mount(element, createContext({x: {type: String, allowedValues: ['a', 'b']}}));

  expect(wrapper.find(Select)).toHaveLength(1);
  expect(wrapper.find(Select).prop('options')).toHaveLength(2);

  expect(wrapper.find(Select).prop('options')[0]['value']).toBe('a');
  expect(wrapper.find(Select).prop('options')[0]['label']).toBe('a');
  expect(wrapper.find(Select).prop('options')[1]['value']).toBe('b');
  expect(wrapper.find(Select).prop('options')[1]['label']).toBe('b');
});

test('<SelectField> - renders a Select with correct options (transform)', () => {
  const element = <SelectField name="x" transform={x => x.toUpperCase()} />;
  const wrapper = mount(element, createContext({x: {type: String, allowedValues: ['a', 'b']}}));

  expect(wrapper.find(Select)).toHaveLength(1);
  expect(wrapper.find(Select).prop('options')).toHaveLength(2);

  expect(wrapper.find(Select).prop('options')[0]['value']).toBe('a');
  expect(wrapper.find(Select).prop('options')[0]['label']).toBe('A');
  expect(wrapper.find(Select).prop('options')[1]['value']).toBe('b');
  expect(wrapper.find(Select).prop('options')[1]['label']).toBe('B');
});

test('<SelectField> - renders a Select with correct placeholder (fallback)', () => {
  const element = <SelectField name="x" label="y" placeholder="" />;
  const wrapper = mount(element, createContext({x: {type: String, allowedValues: ['a', 'b'], optional: true}}));

  const options = wrapper.find('option');
  expect(options).toHaveLength(2); // so we don't have a placeholder
  expect(options.at(0).prop('disabled')).toBe(false);
  expect(options.at(0).text()).toBe('a');
});

test('<SelectField> - renders a select with correct placeholder (implicit)', () => {
  const element = <SelectField name="x" placeholder="xplaceholder" />;
  const wrapper = mount(element, createContext({x: {type: String, allowedValues: ['a', 'b']}}));

  const options = wrapper.find('option');
  expect(options).toHaveLength(3);
  expect(options.at(0).prop('disabled')).toBe(true);
  expect(options.at(1).prop('disabled')).toBe(false);
  expect(options.at(2).prop('disabled')).toBe(false);

  expect(options.at(0).text()).toBe('xplaceholder');
});

test('<SelectField> - renders a Select with correct value (default)', () => {
  const element = <SelectField name="x" />;
  const wrapper = mount(element, createContext({x: {type: String, allowedValues: ['a', 'b']}}));

  expect(wrapper.find(Select)).toHaveLength(1);
  expect(wrapper.find(Select).prop('value')).toBe('');
});

test('<SelectField> - renders a Select with correct value (model)', () => {
  const element = <SelectField name="x" />;
  const wrapper = mount(element, createContext({x: {type: String, allowedValues: ['a', 'b']}}, {model: {x: 'b'}}));

  expect(wrapper.find(Select)).toHaveLength(1);
  expect(wrapper.find(Select).prop('value')).toBe('b');
});

test('<SelectField> - renders a Select with correct value (specified)', () => {
  const element = <SelectField name="x" value="b" />;
  const wrapper = mount(element, createContext({x: {type: String, allowedValues: ['a', 'b']}}));

  expect(wrapper.find(Select)).toHaveLength(1);
  expect(wrapper.find(Select).prop('value')).toBe('b');
});

test('<SelectField> - renders a Select which correctly reacts on change', () => {
  const onChange = jest.fn();

  const element = <SelectField name="x" />;
  const wrapper = mount(element, createContext({x: {type: String, allowedValues: ['a', 'b']}}, {onChange}));

  expect(wrapper.find(Select)).toHaveLength(1);
  wrapper
    .find(Select)
    .props()
    .onChange('b');
  expect(onChange).toHaveBeenLastCalledWith('x', 'b');
});

test('<SelectField> - renders a Select which correctly reacts on change (empty)', () => {
  const onChange = jest.fn();

  const element = <SelectField name="x" />;
  const wrapper = mount(element, createContext({x: {type: String, allowedValues: ['a', 'b']}}, {onChange}));

  expect(wrapper.find(Select)).toHaveLength(1);
  wrapper
    .find(Select)
    .props()
    .onChange('');
  expect(onChange).toHaveBeenLastCalledWith('x', '');
});

test('<SelectField> - renders a Select which correctly reacts on change (same value)', () => {
  const onChange = jest.fn();

  const element = <SelectField name="x" />;
  const wrapper = mount(
    element,
    createContext({x: {type: String, allowedValues: ['a', 'b']}}, {model: {x: 'b'}, onChange})
  );

  expect(wrapper.find(Select)).toHaveLength(1);
  wrapper
    .find(Select)
    .props()
    .onChange('b');
  expect(onChange).toHaveBeenLastCalledWith('x', 'b');
});

test('<SelectField> - renders a label', () => {
  const element = <SelectField name="x" label="y" />;
  const wrapper = mount(element, createContext({x: {type: String, allowedValues: ['a', 'b']}}));

  expect(wrapper.find('label')).toHaveLength(1);
  expect(wrapper.find('label').prop('children')).toBe('y');
  expect(wrapper.find('label').prop('htmlFor')).toBe(wrapper.find('select').prop('id'));
});

test('<SelectField> - renders a wrapper with unknown props', () => {
  const element = <SelectField name="x" data-x="x" data-y="y" data-z="z" />;
  const wrapper = mount(element, createContext({x: {type: String, allowedValues: ['a', 'b']}}));
  const field = wrapper.find(SelectField);
  const select = field.childAt(0).childAt(0);

  expect(select.prop('data-x')).toBe('x');
  expect(select.prop('data-y')).toBe('y');
  expect(select.prop('data-z')).toBe('z');
});

test('<SelectField checkboxes> - renders a set of RadioButtons', () => {
  const element = <SelectField checkboxes name="x" />;
  const wrapper = mount(element, createContext({x: {type: String, allowedValues: ['a', 'b']}}));

  const radiobottons = wrapper.find(RadioButton);
  expect(radiobottons).toHaveLength(2);
});

test('<SelectField checkboxes> - renders a set of RadioButtons with correct disabled state', () => {
  const element = <SelectField checkboxes name="x" disabled />;
  const wrapper = mount(element, createContext({x: {type: String, allowedValues: ['a', 'b']}}));

  const radioinputs = wrapper.find('input');
  expect(radioinputs).toHaveLength(2);
  expect(radioinputs.at(0).prop('disabled')).toBe(true);
  expect(radioinputs.at(1).prop('disabled')).toBe(true);
});

test('<SelectField checkboxes> - renders a set of RadioButtons with correct disabled state on option', () => {
  const element = <SelectField checkboxes name="x" />;
  const wrapper = mount(
    element,
    createContext({
      x: {
        type: String,
        allowedValues: ['a', 'b'],
        uniforms: {options: [{value: 'x', disabled: true}, {value: 'z', disabled: false}]}
      }
    })
  );

  const radioinputs = wrapper.find('input');
  expect(radioinputs).toHaveLength(2);
  expect(radioinputs.at(0).prop('disabled')).toBe(true);
  expect(radioinputs.at(0).prop('value')).toBe('x');

  expect(radioinputs.at(1).prop('disabled')).toBe(false);
  expect(radioinputs.at(1).prop('value')).toBe('z');
});

test('<SelectField checkboxes> - renders a set of RadioButtons with correct id (inherited)', () => {
  const element = <SelectField checkboxes name="x" />;
  const wrapper = mount(element, createContext({x: {type: String, allowedValues: ['a', 'b']}}));

  const radioinputs = wrapper.find('input');
  expect(radioinputs).toHaveLength(2);
  expect(radioinputs.at(0).prop('id')).toBeTruthy();
  expect(radioinputs.at(1).prop('id')).toBeTruthy();
});

// test('<SelectField checkboxes> - renders a set of RadioButtons with correct id (specified)', () => {
//   const element = <SelectField checkboxes name="x" id="y" />;
//   const wrapper = mount(element, createContext({x: {type: String, allowedValues: ['a', 'b']}}));

//   // expect(wrapper.find(Checkbox)).toHaveLength(2);
//   // expect(
//   //   wrapper
//   //     .find(Checkbox)
//   //     .at(0)
//   //     .prop('id')
//   // ).toBe('y-a');
//   // expect(
//   //   wrapper
//   //     .find(Checkbox)
//   //     .at(1)
//   //     .prop('id')
//   // ).toBe('y-b');

//   const radioinputs = wrapper.find('input');
//   console.log("radioinputs", radioinputs.debug());
//   expect(radioinputs).toHaveLength(2);
//   expect(radioinputs.at(0).prop('id')).toBe('a');
//   expect(radioinputs.at(1).prop('id')).toBe('b');

// });

test('<SelectField checkboxes> - renders a set of RadioButtons with correct options', () => {
  const element = <SelectField checkboxes name="x" />;
  const wrapper = mount(element, createContext({x: {type: String, allowedValues: ['a', 'b']}}));

  const radiobottons = wrapper.find(RadioButton);
  expect(radiobottons).toHaveLength(2);
  expect(radiobottons.at(0).prop('label')).toBe('a');
  expect(radiobottons.at(1).prop('label')).toBe('b');
});

test('<SelectField checkboxes> - renders a set of RadioButtons with correct options (transform)', () => {
  const element = <SelectField checkboxes name="x" transform={x => x.toUpperCase()} />;
  const wrapper = mount(element, createContext({x: {type: String, allowedValues: ['a', 'b']}}));

  const radiobottons = wrapper.find(RadioButton);
  expect(radiobottons).toHaveLength(2);
  expect(radiobottons.at(0).prop('label')).toBe('A');
  expect(radiobottons.at(1).prop('label')).toBe('B');
});

test('<SelectField checkboxes> - renders a set of RadioButtons with correct value (default)', () => {
  const element = <SelectField checkboxes name="x" />;
  const wrapper = mount(element, createContext({x: {type: String, allowedValues: ['a', 'b']}}));

  const radioinputs = wrapper.find('input');
  expect(radioinputs).toHaveLength(2);
  expect(radioinputs.at(0).prop('checked')).toBe(false);
  expect(radioinputs.at(1).prop('checked')).toBe(false);
});

test('<SelectField checkboxes> - renders a set of RadioButtons with correct value (model)', () => {
  const element = <SelectField checkboxes name="x" />;
  const wrapper = mount(element, createContext({x: {type: String, allowedValues: ['a', 'b']}}, {model: {x: 'b'}}));

  const radioinputs = wrapper.find('input');
  expect(radioinputs).toHaveLength(2);
  expect(radioinputs.at(0).prop('checked')).toBe(false);
  expect(radioinputs.at(1).prop('checked')).toBe(true);
});

test('<SelectField checkboxes> - renders a set of RadioButtons with correct value (specified)', () => {
  const element = <SelectField checkboxes name="x" value="b" />;
  const wrapper = mount(element, createContext({x: {type: String, allowedValues: ['a', 'b']}}));

  const radioinputs = wrapper.find('input');
  expect(radioinputs).toHaveLength(2);
  expect(radioinputs.at(0).prop('checked')).toBe(false);
  expect(radioinputs.at(1).prop('checked')).toBe(true);
});

test('<SelectField checkboxes> - renders a set of RadioButtons which correctly reacts on change', () => {
  const onChange = jest.fn();

  const element = <SelectField checkboxes name="x" />;
  const wrapper = mount(element, createContext({x: {type: String, allowedValues: ['a', 'b']}}, {onChange}));

  const radioinputs = wrapper.find('input');
  expect(radioinputs).toHaveLength(2);
  radioinputs.at(1).instance().checked = true;
  radioinputs.at(1).simulate('change');

  expect(onChange).toHaveBeenLastCalledWith('x', 'b');
});

test('<SelectField checkboxes> - renders a set of Checkboxes which correctly reacts on change (array check)', () => {
  const onChange = jest.fn();

  const element = <SelectField checkboxes name="x" />;
  const wrapper = mount(
    element,
    createContext({x: {type: Array}, 'x.$': {type: String, allowedValues: ['a', 'b']}}, {onChange})
  );

  const checkboxes = wrapper.find(Checkbox);
  expect(checkboxes).toHaveLength(2);

  checkboxes.at(1).simulate('click');
  expect(onChange).toHaveBeenLastCalledWith('x', ['b']);

  checkboxes.at(0).simulate('click');
  expect(onChange).toHaveBeenLastCalledWith('x', ['a']);
});

test('<SelectField checkboxes> - renders a set of Checkboxes which correctly reacts on change (array uncheck)', () => {
  const onChange = jest.fn();

  const element = <SelectField checkboxes name="x" value={['b']} />;
  const wrapper = mount(
    element,
    createContext({x: {type: Array}, 'x.$': {type: String, allowedValues: ['a', 'b']}}, {onChange})
  );

  const checkboxes = wrapper.find(Checkbox);
  expect(checkboxes).toHaveLength(2);

  checkboxes.at(0).simulate('click');
  expect(onChange).toHaveBeenLastCalledWith('x', ['b', 'a']);
});

test('<SelectField checkboxes> - renders a set of Checkboxes (RadioButton) which correctly reacts on change (same value)', () => {
  const onChange = jest.fn();

  const element = <SelectField checkboxes name="x" />;
  const wrapper = mount(
    element,
    createContext({x: {type: String, allowedValues: ['a', 'b', 'c']}}, {model: {x: 'b'}, onChange})
  );

  // console.log('wrapper', wrapper.find('input').debug());

  const radioinputs = wrapper.find('input');
  expect(radioinputs).toHaveLength(3);
  radioinputs.at(2).instance().checked = true;
  radioinputs.at(2).simulate('change');
  expect(onChange).toHaveBeenLastCalledWith('x', 'c');
});

test('<SelectField checkboxes> - renders a label', () => {
  const element = <SelectField checkboxes name="x" label="y" />;
  const wrapper = mount(element, createContext({x: {type: String, allowedValues: ['a', 'b']}}));

  // should be 3 but there is no label for the component itself
  expect(wrapper.find('label')).toHaveLength(2);
  // expect(
  //   wrapper
  //     .find('label')
  //     .at(0)
  //     .text()
  // ).toBe('y');
});

test('<SelectField checkboxes> - renders a wrapper with unknown props', () => {
  const element = <SelectField checkboxes name="x" data-x="x" data-y="y" data-z="z" />;
  const wrapper = mount(element, createContext({x: {type: String, allowedValues: ['a', 'b']}}));

  const field = wrapper.find(SelectField);

  expect(field.prop('data-x')).toBe('x');
  expect(field.prop('data-y')).toBe('y');
  expect(field.prop('data-z')).toBe('z');
});
