import { Languages } from './languages';

jest.mock('../../foundation');

describe('Languages', () => {
  const component = new Languages();

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
