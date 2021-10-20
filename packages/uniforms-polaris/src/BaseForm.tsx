import { BaseForm } from 'uniforms';

function Polaris(parent: any): any {
  class _ extends parent {
    static Polaris = Polaris;

    static displayName = `Polaris${parent.displayName}`;
  }

  return _;
}

export default Polaris(BaseForm);
