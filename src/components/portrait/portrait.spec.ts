import { Portrait } from './portrait';

jest.mock('../../foundation');

describe('Portrait', () => {
  const component = new Portrait();

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
