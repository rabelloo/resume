import { monkeyPatch, shadowDom, template, webComponent } from '../helpers';
import type { ComponentConfig, WebComponentConstructor } from '../types';

/**
 * Creates a Web Component with specified configurations
 * @param config Configurations
 */
export function Component(config: ComponentConfig) {
  verify(config);

  const element = template(config.template, config.styles);

  return <T extends WebComponentConstructor>(constructor: T) => {
    // Monkey patch init, see WebComponent class for more info
    constructor.prototype.init = monkeyPatch(
      constructor.prototype.init,
      (ref) => shadowDom(ref, element),
    );

    webComponent(config.selector, constructor);

    return constructor;
  };
}

function verify(config: ComponentConfig) {
  if (config == null) {
    throw new Error('WebComponent config is required');
  }
  if (!config.template) {
    throw new Error('WebComponent template is required');
  }
  if (
    config.styles != null &&
    !/^<style>[\w\W]*<\/style>$/.test(config.styles)
  ) {
    throw new Error(`
      WebComponent styles must be a string containing either:
      1. An inline HTML style tag
      2. The path to a .css, .scss or .sass file from root
      3. The component name prefixed with ~
      e.g. 1. '<style>:host { color: black; }</style>'
      e.g. 2. 'src/my-component/my-component.scss'
      e.g. 3. '~my-component'  // will assume same path as above
      `);
  }
  if (!/^[a-z]{1,3}-[a-z]+(?:-[a-z]+)*$/.test(config.selector)) {
    throw new Error(`
      WebComponents must follow the convention of
      prefixed alphabetic lower-dash-case.
      The prefix maximum length is 3.
      e.g. wow-very-impressive`);
  }
}
