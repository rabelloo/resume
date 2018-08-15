import { Title } from './title';

jest.mock('../web-component');

describe('Title', () => {
  const component = new Title();

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
