const asterisky = require('./asterisky');

describe('asterisky', () => {
  describe('for numbers', () => {
    it('should be correct for 1234', () => {
      expect(asterisky(1234)).toBe('1234');
    });

    it('should be correct for 1224', () => {
      expect(asterisky(1224)).toBe('12*2*4');
    });
  });

  describe('for strings', () => {
    it('should be correct for "1234"', () => {
      expect(asterisky('1234')).toBe('1234');
    });

    it('should be correct for "1224"', () => {
      expect(asterisky('1224')).toBe('12*2*4');
    });
  });

  describe('for arrays', () => {
    it('should be correct for [1,2,3,4]', () => {
      expect(asterisky([1, 2, 3, 4])).toBe('1234');
    });

    it('should be correct for [1,2,2,4]', () => {
      expect(asterisky([1, 2, 2, 4])).toBe('12*2*4');
    });
  });
});
