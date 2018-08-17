import { GitHub } from './github';

jest.mock('../web-component');

describe('GitHub', () => {
  const component = new GitHub();

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
