import type { WebComponent } from '../WebComponent';
import { attrBoolean } from './attrBoolean';
import { attrToggle } from './attrToggle';

jest.mock('./attrBoolean');

describe('attrToggle', () => {
  const ref = {} as WebComponent;

  it('should toggle attribute', () => {
    const name = '1';

    expect(attrToggle(ref, name)).toBe(undefined);
    expect(attrBoolean).toHaveBeenCalledTimes(2);
    expect(attrBoolean).toHaveBeenCalledWith(ref, name);
    expect(attrBoolean).toHaveBeenCalledWith(ref, name, true);
  });
});
