import { WebComponent } from '../web-component';

/**
 * Gets the specified attribute value
 * @param name Attribute to get
 */
export function attr(ref: WebComponent, name: string): string | null;
/**
 * Sets the specified attribute with specified value
 * @param name Attribute to set
 * @param value Value to set
 */
export function attr<T extends string | boolean | number>(ref: WebComponent, name: string, value: T): void;
export function attr(ref: WebComponent, name: string, value: any = null): string | null | void {
  if (value == null) {
    return ref.getAttribute(name);
  }

  ref.setAttribute(name, `${value}`);
}
