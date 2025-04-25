import type { WebComponentConstructor } from '../types';

export function webComponent(name: string, element: WebComponentConstructor) {
  customElements.define(name, element);
}
