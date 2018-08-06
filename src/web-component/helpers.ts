import { IWebComponentConstructor } from './interfaces';

export function template(html: string, style = '') {
  const element = document.createElement('template');
  element.innerHTML = style + html;

  return element;
}

export function shadowDom(ref: HTMLElement, element: HTMLTemplateElement) {
  const shadow = ref.attachShadow({ mode: 'open' });
  shadow.appendChild(element.content.cloneNode(true));
}

export function webComponent(name: string, element: IWebComponentConstructor) {
  customElements.define(name, element);
}
