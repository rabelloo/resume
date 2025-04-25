import { Skills } from './skills';

jest.mock('../../foundation');

describe('Skills', () => {
  const component = new Skills();

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
