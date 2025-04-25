import { Resume } from './resume';

jest.mock('../../foundation');

describe('Resume', () => {
  const component = new Resume();

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
