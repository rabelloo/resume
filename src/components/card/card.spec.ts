import { Card } from './card';

jest.mock('../../foundation');

describe('Card', () => {
  const component = new Card();

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
