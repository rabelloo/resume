import { Card } from './card';

jest.mock('../web-component');

describe('Card', () => {
  const component = new Card();

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
