import { monkeyPatch } from './monkeyPatch';

describe('monkeyPatch', () => {
  it('should return a new function that calls both functions specified', () => {
    const init = jest.fn();
    const spy = jest.fn();
    const result = monkeyPatch(init, spy);
    result();

    expect(result).toEqual(expect.any(Function));
    expect(init).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should return a new function that calls only the second function when the first is undefined', () => {
    const spy = jest.fn();
    const result = monkeyPatch(undefined as any, spy);
    result();

    expect(result).toEqual(expect.any(Function));
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
