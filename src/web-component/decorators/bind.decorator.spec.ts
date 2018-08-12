import { attr, attrBoolean } from '../helpers';
import { Bind } from './bind.decorator';

jest.mock('../helpers');

describe('Bind', () => {
  it('should return the PropertyDecorator function', () => {
    expect(Bind()).toEqual(expect.any(Function));
  });

  it('should define the specified property on the specified target', () => {
    const decorator = Bind();
    const target = {} as any;
    const key = 'test';

    decorator(target, key);

    expect(target.hasOwnProperty(key)).toBe(true);
  });

  it('should call the right function on get and set property', () => {
    const decorator = Bind();
    const target = { } as any;
    const key = 'test';
    const value = 1;
    const spy = (attr as jest.Mock);
    spy.mockReturnValueOnce(undefined)
       .mockReturnValueOnce(value);

    decorator(target, key);
    target[key] = value;

    expect(target[key]).toBe(value);
    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenCalledWith(target, key);
    expect(spy).toHaveBeenCalledWith(target, key, value);
  });

  it('should use boolean functions when { toggle: true }', () => {
    const decorator = Bind({ toggle: true });
    const target = { } as any;
    const key = 'test';
    const value = 1;
    const spy = (attrBoolean as jest.Mock);
    spy.mockReturnValueOnce(undefined)
       .mockReturnValueOnce(value);

    decorator(target, key);
    target[key] = value;

    expect(target[key]).toBe(value);
    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenCalledWith(target, key);
    expect(spy).toHaveBeenCalledWith(target, key, value);
  });
});
