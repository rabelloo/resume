import { Experience } from './experience';

jest.mock('../web-component');

describe('Experience', () => {
  const component = new Experience();

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
