import { WebComponent } from './web-component';

export interface IWebComponentConstructor extends Function {
  new (...args: any[]): WebComponent;
}

export interface IComponentConfig {
  /**
   * The element tag or selector the will be used in HTML
   *
   * Must follow the convention of prefixed alphabetic lower-dash-case
   * @example 'wow-my-component'
   */
  selector: string;
  /**
   * Can be defined with either:
   * 1. An inline HTML style tag
   * 2. The path to a .css, .scss or .sass file from root
   * 3. The component name prefixed with ~
   * @example
   * 1. '<style>:host { color: black; }</style>'
   * 2. 'src/my-component/my-component.scss'
   * 3. '~my-component'  // will assume same path as above
   */
  styles?: string;
  /**
   * Can be defined with either:
   * 1. Inline HTML
   * 2. The path to a .html file from root
   * 3. The component name prefixed with ~
   * @example
   * 1. '<slot></slot>'
   * 2. 'src/my-component/my-component.html'
   * 3. '~my-component'  // will assume same path as above
   */
  template: string;
}

export interface IBindConfig {
  /**
   * Whether or not to add and remove attribute
   * with boolean behavior instead of setting value
   */
  toggle?: boolean;
}
