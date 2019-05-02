import { WebComponent } from '../web-component';
import { listen } from './listen';

describe('listen', () => {
  const ref: WebComponent = {
    addEventListener: null,
  } as any;

  it('should addEventListener to reference passed', () => {
    const event = 'click';
    const fn = () => null;
    const spy = spyOn(ref, 'addEventListener');

    expect(listen(ref, event, fn)).toBe(undefined);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(event, fn);
  });
});
