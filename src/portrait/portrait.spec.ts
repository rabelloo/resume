import { Portrait } from './portrait';

jest.mock('../web-component');

describe('Portrait', () => {
  const component = new Portrait();

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
