import type { WebComponent } from '../WebComponent';

export type WebComponentConstructor = new (...args: unknown[]) => WebComponent;
