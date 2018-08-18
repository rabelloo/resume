import { Logo } from './logo';

jest.mock('../web-component');

describe('Logo', () => {
  const component = new Logo();

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
