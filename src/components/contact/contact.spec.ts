import { Contact } from './contact';

jest.mock('../../foundation');

describe('Contact', () => {
  const component = new Contact();

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
