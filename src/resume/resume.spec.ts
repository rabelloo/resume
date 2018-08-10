import { Resume } from './resume';

jest.mock('../web-component');

describe('Resume', () => {
  const component = new Resume();

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
