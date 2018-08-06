import { coerce } from '../coerce';
import { WebComponent } from './web-component';

export { attr, attrBoolean, attrToggle, listen };

/**
 * Gets the specified attribute value
 * @param name Attribute to get
 */
function attr(ref: WebComponent, name: string): string | null;
/**
 * Sets the specified attribute with specified value
 * @param name Attribute to set
 * @param value Value to set
 */
function attr<T extends string | boolean | number>(
  ref: WebComponent,
  name: string,
  value: T
): void;
function attr(
  ref: WebComponent,
  name: string,
  value: any = null
): string | null | void {
  if (value == null) {
    return ref.getAttribute(name);
  }

  ref.setAttribute(name, `${value}`);
}

/**
 * Gets whether specified attribute exists or not
 * @param name Attribute to check
 */
function attrBoolean(ref: WebComponent, name: string): boolean;
/**
 * Creates or removes specified attribute depending on value
 * @param name Attribute to set
 * @param value Value to check
 */
function attrBoolean(ref: WebComponent, name: string, value: boolean): void;
function attrBoolean(
  ref: WebComponent,
  name: string,
  value?: boolean
): boolean | void {
  if (value == null) {
    return ref.hasAttribute(name);
  }

  if (coerce.boolean(value)) {
    return attr(ref, name, '');
  }

  ref.removeAttribute(name);
}

/**
 * Toggles the existence of an attribute
 * @param name Attribute to toggle
 */
function attrToggle(ref: WebComponent, name: string): void {
  attrBoolean(ref, name, !attrBoolean(ref, name));
}

/**
 * Listens to an event
 * @param event Event name to listen to
 * @param fn to execute when event is emitted
 */
function listen<K extends keyof HTMLElementEventMap>(
  ref: WebComponent,
  event: K,
  fn: () => void
) {
  ref.addEventListener(event, fn);
}
