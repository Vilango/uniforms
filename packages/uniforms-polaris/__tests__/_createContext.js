import PropTypes from 'prop-types';

import randomIds from 'uniforms/randomIds';
import {AppProvider} from '@shopify/polaris';

import createSchema from './_createSchema';

const randomId = randomIds();

const createContext = (schema, context) => ({
  wrappingComponent: AppProvider,
  context: {
    uniforms: {
      error: null,
      model: {},
      name: [],
      onChange() {},
      onSubmit() {},

      ...context,

      randomId,
      schema: createSchema(schema),
      state: {
        changedMap: {},

        changed: false,
        disabled: false,
        submitting: false,
        label: false,
        placeholder: false,
        showInlineError: false,

        ...(context && context.state)
      }
    }
  },
  childContextTypes: {
    uniforms: PropTypes.object
  }
});

export default createContext;
