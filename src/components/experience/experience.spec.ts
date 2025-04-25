import { Experience } from './experience';

jest.mock('../../foundation');

describe('Experience', () => {
  const component = new Experience();

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
