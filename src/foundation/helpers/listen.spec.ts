import type { WebComponent } from '../WebComponent';
import { listen } from './listen';

describe('listen', () => {
  const noop = () => undefined;
  const ref: WebComponent = {
    addEventListener: noop,
  } as any;

  it('should addEventListener to reference passed', () => {
    const event = 'click';
    const fn = () => null;
    const spy = jest.spyOn(ref, 'addEventListener');

    expect(listen(ref, event, fn)).toBe(undefined);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(event, fn);
  });
});
