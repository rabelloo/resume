import { listen, monkeyPatch } from '../helpers';

/**
 * Listen to an event and call function when dispatched
 * @param event Event name
 */
export function Listen<K extends keyof HTMLElementEventMap>(event: K): MethodDecorator {
  return (prototype: any, key: string): void => {
    // Monkey patch init, see WebComponent class for more info
    prototype.init = monkeyPatch(prototype.init, ref =>
      listen(ref, event, (ref as any)[key])
    );
  };
}
