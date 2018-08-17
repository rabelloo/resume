import { Contact } from './contact';

jest.mock('../web-component');

describe('Contact', () => {
  const component = new Contact();

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
