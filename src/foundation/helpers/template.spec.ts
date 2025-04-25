import { template } from './template';

describe('template', () => {
  it('should create a new <template> with specified html and style', () => {
    const html = '<test>';
    const styles = 'test';
    const element = { innerHTML: null };
    const spy = jest
      .spyOn(document, 'createElement')
      .mockReturnValueOnce(element as any);

    expect(template(html, styles)).toBe(element);
    expect(element.innerHTML).toBe(styles + html);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith('template');
  });

  it('should have a default style of empty string', () => {
    const html = '<test>';
    const element = { innerHTML: null };
    jest.spyOn(document, 'createElement').mockReturnValueOnce(element as any);

    template(html);
    expect(element.innerHTML).toBe(html);
  });
});
