import { GitHub } from './github';

jest.mock('../../foundation');

describe('GitHub', () => {
  const component = new GitHub();

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
