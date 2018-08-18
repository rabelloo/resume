import { Progress } from './progress';

jest.mock('../web-component');

describe('Progress', () => {
  const component = new Progress();

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
