import type { WebComponent } from '../WebComponent';

export function monkeyPatch(init: () => void, fn: (ref: WebComponent) => void) {
  return function () {
    init?.apply(this);
    fn(this);
  };
}
