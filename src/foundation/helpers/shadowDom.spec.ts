import { shadowDom } from './shadowDom';

describe('shadowDom', () => {
  it('should attach a shadow DOM to the ref and append a child element', () => {
    const shadow = { appendChild: () => null };
    const element = { content: { cloneNode: () => null } } as any;
    const ref = { attachShadow: () => shadow } as any;
    const spyRef = jest.spyOn(ref, 'attachShadow');
    const spyShadow = jest.spyOn(shadow, 'appendChild');
    const spyElement = jest
      .spyOn(element.content, 'cloneNode')
      .mockReturnValueOnce(element);

    expect(shadowDom(ref, element)).toBe(undefined);
    expect(spyRef).toHaveBeenCalledTimes(1);
    expect(spyRef).toHaveBeenCalledWith(
      expect.objectContaining({ mode: 'open' }),
    );
    expect(spyElement).toHaveBeenCalledTimes(1);
    expect(spyElement).toHaveBeenCalledWith(true);
    expect(spyShadow).toHaveBeenCalledTimes(1);
    expect(spyShadow).toHaveBeenCalledWith(element);
  });
});
