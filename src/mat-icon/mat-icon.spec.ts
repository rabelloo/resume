import { MatIcon } from './mat-icon';

jest.mock('../web-component');

describe('MatIcon', () => {
  const component = new MatIcon();

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
