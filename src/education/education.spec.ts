import { Education } from './education';

jest.mock('../web-component');

describe('Education', () => {
  const component = new Education();

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
