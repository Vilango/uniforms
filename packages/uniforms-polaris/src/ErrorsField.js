import BaseField from 'uniforms/BaseField';
import React from 'react';
import filterDOMProps from 'uniforms/filterDOMProps';
import nothing from 'uniforms/nothing';
import {InlineError} from '@shopify/polaris';

const ErrorsField = ({children, ...props}, {uniforms: {error, schema}}) => {
  // console.log('ErrorsField', children, props, schema);
  // console.log('ErrorsField', JSON.stringify(error), schema.getErrorMessages(error));

  // console.log('ErrorsField children', JSON.stringify(children));
  // console.log('ErrorsField props', JSON.stringify(props));
  // console.log('ErrorsField otherProps', JSON.stringify(otherProps));
  // console.log('ErrorsField moreProps', JSON.stringify(moreProps));

  return !error && !children ? (
    nothing
  ) : (
    <div {...filterDOMProps(props)}>
      {children}

      <div>
        {schema.getErrorMessages(error).map((message, index) => {
          // console.log('ErrorsField', message, name);
          return <InlineError key={index} message={message} />;
        })}
      </div>
    </div>
  );
};

ErrorsField.contextTypes = BaseField.contextTypes;

export default ErrorsField;
