import { WebComponent } from '../web-component';

export type IWebComponentConstructor = new (...args: any[]) => WebComponent;
