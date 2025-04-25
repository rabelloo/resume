import { Title } from './title';

jest.mock('../../foundation');

describe('Title', () => {
  const component = new Title();

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
