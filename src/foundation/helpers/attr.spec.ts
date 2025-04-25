import type { WebComponent } from '../WebComponent';
import { attr } from './attr';

describe('attr', () => {
  const noop = () => undefined;
  const ref: WebComponent = {
    getAttribute: noop,
    setAttribute: noop,
  } as any;

  it('should get attribute if value is not passed', () => {
    const expected = 1;
    const name = '1';
    const spy = jest
      .spyOn(ref, 'getAttribute')
      .mockReturnValueOnce(expected as any);

    expect(attr(ref, name)).toBe(expected);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(name);
  });

  it('should set attribute to string version of value if passed', () => {
    const name = '2';
    const value = true;
    const spy = jest.spyOn(ref, 'setAttribute');

    expect(attr(ref, name, value)).toBe(undefined);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(name, `${value}`);
  });
});
