import { attr, attrBoolean } from '../helpers';
import type { BindConfig } from '../types';
import type { WebComponent } from '../WebComponent';

const defaultConfig: BindConfig = {
  toggle: false,
};

/**
 * Binds a property to an attribute of same name
 * @param config Binding configurations
 */
export function Bind(config = defaultConfig): PropertyDecorator {
  return (target: WebComponent, key: string): void => {
    const descriptor = Object.getOwnPropertyDescriptor(target, key) || {};
    const getAttribute = config.toggle ? attrBoolean : attr;
    const setAttribute = config.toggle
      ? attrBoolean
      : (ref: WebComponent, name: string, value: any) => attr(ref, name, value);
    const setter = descriptor.set || ((a: any) => a);

    Object.defineProperty(target, key, {
      configurable: true,
      enumerable: true,
      get:
        descriptor.get ||
        function () {
          return getAttribute(this, key);
        },
      set(value) {
        setAttribute(this, key, value);
        setter(value);
      },
    });
  };
}
