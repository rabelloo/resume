import { Education } from './education';

jest.mock('../../foundation');

describe('Education', () => {
  const component = new Education();

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
