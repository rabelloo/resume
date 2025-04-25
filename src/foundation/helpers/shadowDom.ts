export function shadowDom(ref: HTMLElement, element: HTMLTemplateElement) {
  const shadow = ref.attachShadow({ mode: 'open' });
  shadow.appendChild(element.content.cloneNode(true));
}
