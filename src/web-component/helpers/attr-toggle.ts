import { WebComponent } from '../web-component';
import { attrBoolean } from './attr-boolean';

/**
 * Toggles the existence of an attribute
 * @param name Attribute to toggle
 */
export function attrToggle(ref: WebComponent, name: string): void {
  attrBoolean(ref, name, !attrBoolean(ref, name));
}
