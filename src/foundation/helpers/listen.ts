import type { WebComponent } from '../WebComponent';

/**
 * Listens to an event
 * @param event Event name to listen to
 * @param fn to execute when event is emitted
 */
export function listen<K extends keyof HTMLElementEventMap>(
  ref: WebComponent,
  event: K,
  fn: () => void,
) {
  ref.addEventListener(event, fn);
}
