import { WebComponent } from '../web-component';
import { attrBoolean } from './attr-boolean';
import { attrToggle } from './attr-toggle';

jest.mock('./attr-boolean');

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
