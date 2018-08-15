import { Skills } from './skills';

jest.mock('../web-component');

describe('Skills', () => {
  const component = new Skills();

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
