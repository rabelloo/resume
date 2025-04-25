import { WebComponent } from './WebComponent';

describe('WebComponent', () => {
  it('should extend HTMLElement', () => {
    expect((WebComponent as any).__proto__).toBe(HTMLElement);
  });

  it('should call init on constructor', () => {
    const init = jest.fn();
    (WebComponent as any).__proto__ = class Mock {
      constructor() {
        (this as any).init = init;
      }
    };

    expect(new WebComponent()).toBeTruthy();
    expect(init).toHaveBeenCalledTimes(1);
  });
});
