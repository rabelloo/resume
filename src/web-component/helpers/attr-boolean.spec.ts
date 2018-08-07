import { coerce } from '../coerce/coerce';
import { WebComponent } from '../web-component';
import { attrBoolean } from './attr-boolean';

describe('attrBoolean', () => {
  const ref = {
    hasAttribute: null,
    removeAttribute: null,
    setAttribute: null,
  } as WebComponent;

  it('should return attribute existence if value is not passed', () => {
    const expected = 1;
    const name = '1';
    const spy = spyOn(ref, 'hasAttribute').and.returnValue(expected);

    expect(attrBoolean(ref, name)).toBe(expected);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(name);
  });

  it('should set attribute to empty if value is true', () => {
    const expected = 2;
    const name = '2';
    const value = true;
    const spyCoerce = spyOn(coerce, 'boolean').and.returnValue(value);
    const spy = spyOn(ref, 'setAttribute');

    expect(attrBoolean(ref, name, value)).toBe(undefined);
    expect(spyCoerce).toHaveBeenCalledTimes(1);
    expect(spyCoerce).toHaveBeenCalledWith(value);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(name, '');
  });

  it('should remove attribute if value is false', () => {
    const name = '3';
    const value = false;
    const spyCoerce = spyOn(coerce, 'boolean').and.returnValue(value);
    const spy = spyOn(ref, 'removeAttribute');

    expect(attrBoolean(ref, name, value)).toBe(undefined);
    expect(spyCoerce).toHaveBeenCalledTimes(1);
    expect(spyCoerce).toHaveBeenCalledWith(value);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(name);
  });
});
