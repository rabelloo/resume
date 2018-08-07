import { coerce } from '../coerce/coerce';
import { WebComponent } from '../web-component';

/**
 * Gets whether specified attribute exists or not
 * @param name Attribute to check
 */
export function attrBoolean(ref: WebComponent, name: string): boolean;
/**
 * Creates or removes specified attribute depending on value
 * @param name Attribute to set
 * @param value Value to check
 */
export function attrBoolean(ref: WebComponent, name: string, value: boolean): void;
export function attrBoolean(ref: WebComponent, name: string, value?: boolean): boolean | void {
  if (value == null) {
    return ref.hasAttribute(name);
  }

  if (coerce.boolean(value)) {
    return ref.setAttribute(name, '');
  }

  ref.removeAttribute(name);
}
