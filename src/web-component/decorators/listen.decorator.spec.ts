import { listen, monkeyPatch } from '../helpers';
import { Listen } from './listen.decorator';

jest.mock('../helpers');

describe('Listen', () => {
  const event = 'click';

  it('should return the MethodDecorator function', () => {
    expect(Listen(event)).toEqual(expect.any(Function));
  });

  it('should monkeyPatch the prototype.init with a listen call', () => {
    const init = {};
    const prototype = { init };
    const key = 'test';
    const ref = { [key]: 2 };
    const spyMonkeyPatch = monkeyPatch as jest.Mock;
    const spyListen = listen as jest.Mock;
    spyMonkeyPatch.mockImplementation((_, fn) => fn);

    const decorator = Listen(event);
    decorator(prototype, key, null);
    (prototype.init as any)(ref, event, ref[key]);

    expect(spyMonkeyPatch).toHaveBeenCalledTimes(1);
    expect(spyMonkeyPatch).toHaveBeenCalledWith(init, expect.any(Function));
    expect(spyListen).toHaveBeenCalledTimes(1);
    expect(spyListen).toHaveBeenCalledWith(ref, event, ref[key]);
  });
});
