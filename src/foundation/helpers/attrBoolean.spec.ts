import * as coerce from '../coerce/coerce';
import type { WebComponent } from '../WebComponent';
import { attrBoolean } from './attrBoolean';

describe('attrBoolean', () => {
  const noop = () => undefined;
  const ref: WebComponent = {
    hasAttribute: noop,
    removeAttribute: noop,
    setAttribute: noop,
  } as any;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return attribute existence if value is not passed', () => {
    const expected = 1;
    const name = '1';
    const spy = jest
      .spyOn(ref, 'hasAttribute')
      .mockReturnValueOnce(expected as any);

    expect(attrBoolean(ref, name)).toBe(expected);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(name);
  });

  it('should set attribute to empty if value is true', () => {
    const name = '2';
    const value = true;
    const spyCoerce = jest.spyOn(coerce, 'boolean').mockReturnValueOnce(value);
    const spy = jest.spyOn(ref, 'setAttribute');

    expect(attrBoolean(ref, name, value)).toBe(undefined);
    expect(spyCoerce).toHaveBeenCalledTimes(1);
    expect(spyCoerce).toHaveBeenCalledWith(value);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(name, '');
  });

  it('should remove attribute if value is false', () => {
    const name = '3';
    const value = false;
    const spyCoerce = jest.spyOn(coerce, 'boolean').mockReturnValueOnce(value);
    const spy = jest.spyOn(ref, 'removeAttribute');

    expect(attrBoolean(ref, name, value)).toBe(undefined);
    expect(spyCoerce).toHaveBeenCalledTimes(1);
    expect(spyCoerce).toHaveBeenCalledWith(value);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(name);
  });
});
