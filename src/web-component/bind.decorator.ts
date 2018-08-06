import { attr, attrBoolean } from './dom-helpers';
import { IBindConfig } from './interfaces';
import { WebComponent } from './web-component';

const defaultConfig: IBindConfig = {
  toggle: false,
};

/**
 * Binds a property to an attribute of same name
 * @param config Binding configurations
 */
export function Bind(config = defaultConfig): PropertyDecorator {
  return (target: WebComponent, key: string): void => {
    const descriptor = Object.getOwnPropertyDescriptor(target, key) || { };
    const getAttribute = config.toggle
                       ? (ref: WebComponent, name: string) => attrBoolean(ref, name)
                       : (ref: WebComponent, name: string) => attr(ref, name);
    const setAttribute = config.toggle
                       ? (ref: WebComponent, name: string, value: boolean) => attrBoolean(ref, name, value)
                       : (ref: WebComponent, name: string, value: any) => attr(ref, name, value);
    const setter = descriptor.set || ((a: any) => a);

    Object.defineProperty(target, key, {
      configurable: true,
      enumerable: true,
      get: descriptor.get || function() { return getAttribute(this, key); },
      set(value) {
        setAttribute(this, key, value);
        setter(value);
      },
    });
  };
}
