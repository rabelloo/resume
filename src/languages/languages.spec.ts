import { Languages } from './languages';

jest.mock('../web-component');

describe('Languages', () => {
  const component = new Languages();

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
