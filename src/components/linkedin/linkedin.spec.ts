import { LinkedIn } from './linkedin';

jest.mock('../../foundation');

describe('LinkedIn', () => {
  const component = new LinkedIn();

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
