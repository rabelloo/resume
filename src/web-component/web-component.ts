import { shadowDom } from './helpers';

export class WebComponent extends HTMLElement {
  constructor(element: HTMLTemplateElement) {
    super();
    shadowDom(this, element);
  }
}
