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
   * Can be defined inline
   * or with the folder name preceded by tilde
   * @example
   * Inline { selector: '<slot></slot>' }
   * Folder { selector: '~my-component' }
   */
  styles?: string;
  /**
   * Can be defined inline
   * or with the folder name preceded by tilde
   * @example
   * Inline { selector: '<slot></slot>' }
   * Folder { selector: '~my-component' }
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
