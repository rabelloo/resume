import { WebComponent } from '../web-component';

export interface IWebComponentConstructor extends Function {
  new (...args: any[]): WebComponent;
}
