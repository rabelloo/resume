import { Chip } from './chip';

jest.mock('../../foundation');

describe('Chip', () => {
  const component = new Chip();

  it('should toggle active on click', () => {
    component.active = false;
    component.onClick();

    expect(component.active).toBe(true);
  });
});
