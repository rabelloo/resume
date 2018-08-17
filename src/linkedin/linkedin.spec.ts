import { LinkedIn } from './linkedin';

jest.mock('../web-component');

describe('LinkedIn', () => {
  const component = new LinkedIn();

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
