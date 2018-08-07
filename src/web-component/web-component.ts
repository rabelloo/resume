export class WebComponent extends HTMLElement {
  // This will allow init() to be monkey patched by
  // @Component() decorator with the appropriate shadowDom() call
  private init: () => void;
  constructor() {
    super();
    this.init();
  }
}
