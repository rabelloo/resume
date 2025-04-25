import { MatIcon } from './mat-icon';

jest.mock('../../foundation');

describe('MatIcon', () => {
  const component = new MatIcon();

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
