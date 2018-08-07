import { WebComponent } from '../web-component';
import { attr } from './attr';

describe('attr', () => {
  const ref = {
    getAttribute: null,
    setAttribute: null,
  } as WebComponent;

  it('should get attribute if value is not passed', () => {
    const expected = 1;
    const name = '1';
    const spy = spyOn(ref, 'getAttribute').and.returnValue(expected);

    expect(attr(ref, name)).toBe(expected);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(name);
  });

  it('should set attribute to string version of value if passed', () => {
    const name = '2';
    const value = true;
    const spy = spyOn(ref, 'setAttribute');

    expect(attr(ref, name, value)).toBe(undefined);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(name, `${value}`);
  });
});
