export function template(html: string, style = '') {
  const element = document.createElement('template');
  element.innerHTML = style + html;
  return element;
}
