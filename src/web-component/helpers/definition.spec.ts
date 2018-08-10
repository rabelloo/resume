import { monkeyPatch, shadowDom, template, webComponent } from './definition';

describe('definition', () => {
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
      const result = monkeyPatch(undefined, spy);
      result();

      expect(result).toEqual(expect.any(Function));
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('template', () => {
    it('should create a new <template> with specified html and style', () => {
      const html = '<test>';
      const styles = 'test';
      const element = { innerHTML: null };
      const spy = spyOn(document, 'createElement').and.returnValue(element);

      expect(template(html, styles)).toBe(element);
      expect(element.innerHTML).toBe(styles + html);
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith('template');
    });

    it('should have a default style of empty string', () => {
      const html = '<test>';
      const element = { innerHTML: null };
      spyOn(document, 'createElement').and.returnValue(element);

      template(html);
      expect(element.innerHTML).toBe(html);
    });
  });

  describe('shadowDom', () => {
    it('should attach a shadow DOM to the ref and append a child element', () => {
      const shadow = { appendChild: () => null };
      const element = { content: { cloneNode: () => null } } as any;
      const ref = { attachShadow: () => shadow } as any;
      const spyRef = spyOn(ref, 'attachShadow').and.callThrough();
      const spyShadow = spyOn(shadow, 'appendChild');
      const spyElement = spyOn(element.content, 'cloneNode').and.returnValue(element);

      expect(shadowDom(ref, element)).toBe(undefined);
      expect(spyRef).toHaveBeenCalledTimes(1);
      expect(spyRef).toHaveBeenCalledWith(
        expect.objectContaining({ mode: 'open' })
      );
      expect(spyElement).toHaveBeenCalledTimes(1);
      expect(spyElement).toHaveBeenCalledWith(true);
      expect(spyShadow).toHaveBeenCalledTimes(1);
      expect(spyShadow).toHaveBeenCalledWith(element);
    });
  });

  describe('webComponent', () => {
    it('should define a new custom element', () => {
      window.customElements = { define: () => null } as any;
      const name = 'test-test';
      const element = { } as any;
      const spy = spyOn(customElements, 'define').and.returnValue(element);

      expect(webComponent(name, element)).toBe(undefined);
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith(name, element);
    });
  });
});
