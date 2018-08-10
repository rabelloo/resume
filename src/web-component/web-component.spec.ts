import { WebComponent } from './web-component';

describe('WebComponent', () => {
  const webComponent = WebComponent as any;

  it('should extend HTMLElement', () => {
    expect(webComponent.__proto__).toBe(HTMLElement);
  });

  it('should call init on constructor', () => {
    webComponent.__proto__ = jest.fn();
    const prototype = WebComponent.prototype as any;
    const spy = (prototype.init = jest.fn());

    expect(new WebComponent()).toBeTruthy();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
