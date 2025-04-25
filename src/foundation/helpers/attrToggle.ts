import type { WebComponent } from '../WebComponent';
import { attrBoolean } from './attrBoolean';

/**
 * Toggles the existence of an attribute
 * @param name Attribute to toggle
 */
export function attrToggle(ref: WebComponent, name: string): void {
  attrBoolean(ref, name, !attrBoolean(ref, name));
}
