import { webComponent } from './webComponent';

describe('webComponent', () => {
  it('should define a new custom element', () => {
    window.customElements = { define: () => undefined } as any;
    const name = 'test-test';
    const element = {} as any;
    const spy = jest
      .spyOn(customElements, 'define')
      .mockReturnValueOnce(element);

    expect(webComponent(name, element)).toBe(undefined);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(name, element);
  });
});
