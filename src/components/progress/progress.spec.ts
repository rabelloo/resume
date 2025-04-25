import { Progress } from './progress';

jest.mock('../../foundation');

describe('Progress', () => {
  const component = new Progress();

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
