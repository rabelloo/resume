import { listen } from './helpers';

export class WebComponent extends HTMLElement {
  // This will allow init() to be monkey patched by
  // @Component() decorator with the appropriate shadowDom() call
  private init: () => void;
  constructor() {
    super();
    this.init();
  }

  /**
   * Gets operations for an event
   * @param name Event to get
   */
  protected event<K extends keyof HTMLElementEventMap>(name: K) {
    return {
      /**
       * Listens to an event
       * @param fn Function to execute when event is emitted
       */
      listen: (fn: () => any) => listen(this, name, fn),
    };
  }
}
