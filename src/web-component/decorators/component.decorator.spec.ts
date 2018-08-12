import { monkeyPatch, shadowDom, template, webComponent } from '../helpers';
import { IComponentConfig } from '../interfaces';
import { Component } from './component.decorator';

jest.mock('../helpers');

describe('Component', () => {
  let config: IComponentConfig;

  beforeEach(() => {
    config = {
      selector: 'a-test',
      styles: '<style></style>',
      template: '<test>',
    };
    jest.resetAllMocks();
  });

  it('should return the ComponentDecorator function', () => {
    expect(Component(config)).toEqual(expect.any(Function));
  });

  it('should throw if config is null', () => {
    expect(() => Component(null)).toThrow('WebComponent config is required');
  });

  it('should throw if config.template is falsey', () => {
    config.template = '';

    expect(() => Component(config)).toThrow('WebComponent template is required');
  });

  it('should throw if config.styles is invalid', () => {
    config.styles = 'test';

    expect(() => Component(config)).toThrow(`
      WebComponent styles must be a string containing either:
      1. An inline HTML style tag
      2. The path to a .css, .scss or .sass file from root
      3. The component name prefixed with ~
      e.g. 1. '<style>:host { color: black; }</style>'
      e.g. 2. 'src/my-component/my-component.scss'
      e.g. 3. '~my-component'  // will assume same path as above
    `);
  });

  it('should throw if config.selector is invalid', () => {
    config.selector = 'test';

    expect(() => Component(config)).toThrow(`
      WebComponents must follow the convention of
      prefixed alphabetic lower-dash-case.
      The prefix maximum length is 3.
      e.g. wow-very-impressive`);
  });

  it('should create a <template> element with specified template and styles', () => {
    const spy = template as jest.Mock;

    Component(config);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(config.template, config.styles);
  });

  it('should monkeyPatch the constructor.init function with a shadowDom call', () => {
    const element = {} as any;
    const ref = {} as any;
    const init = 1;
    const constructor = { prototype: { init } } as any;
    const spyTemplate = template as jest.Mock;
    const spyMonkeyPatch = monkeyPatch as jest.Mock;
    const spyShadowDom = shadowDom as jest.Mock;
    spyTemplate.mockReturnValue(element);
    spyMonkeyPatch.mockImplementation((_, fn) => fn);

    const decorator = Component(config);
    decorator(constructor);
    constructor.prototype.init(ref, element);

    expect(spyMonkeyPatch).toHaveBeenCalledTimes(1);
    expect(spyMonkeyPatch).toHaveBeenCalledWith(init, expect.any(Function));
    expect(spyShadowDom).toHaveBeenCalledTimes(1);
    expect(spyShadowDom).toHaveBeenCalledWith(ref, element);
  });

  it('should define a webComponent with specified selector', () => {
    const spy = webComponent as jest.Mock;
    const constructor = jest.fn() as any;

    const decorator = Component(config);
    decorator(constructor);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(config.selector, constructor);
  });

});
