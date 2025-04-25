import * as coerce from './coerce';

describe('coerce', () => {
  describe('boolean', () => {
    it('should return false for null or undefined', () => {
      expect(coerce.boolean(null)).toBe(false);
      expect(coerce.boolean(undefined)).toBe(false);
    });

    it('should return false for (bool)false or "false"', () => {
      expect(coerce.boolean(false)).toBe(false);
      expect(coerce.boolean('false')).toBe(false);
    });

    it('should return true if not null, undefined, false or "false"', () => {
      expect(coerce.boolean(true)).toBe(true);
      expect(coerce.boolean([])).toBe(true);
      expect(coerce.boolean({})).toBe(true);
      expect(coerce.boolean('')).toBe(true);
      expect(coerce.boolean('true')).toBe(true);
      expect(coerce.boolean(1)).toBe(true);
      expect(coerce.boolean(0)).toBe(true);
      expect(coerce.boolean(-1)).toBe(true);
    });
  });
});
