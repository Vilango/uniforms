import { BaseForm } from 'uniforms';
import React from 'react';
import { Form, FormLayout } from '@shopify/polaris';
import omit from 'lodash/omit';
import pick from 'lodash/pick';

const Polaris = (parent: any): any =>
  class extends parent {
    static Polaris = Polaris;

    static displayName = `Polaris${parent.displayName}`;

    render() {
      const formLayoutProps = omit(this.getNativeFormProps(), ['onSubmit']);
      const formProps = pick(this.getNativeFormProps(), ['onSubmit']);
      return (
        <Form {...formProps}>
          <FormLayout {...formLayoutProps} />
        </Form>
      );
    }
  };

export default Polaris(BaseForm);
