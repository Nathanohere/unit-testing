import {
  authenticateUser,
  product,
  usernameLowerCase,
  UserNameToLowercase,
} from '../app/BuildUtils';

describe('BasicUtils test suite', () => {
  it('returns the product of 3 and 2', () => {
    // arrange
    const sut = product;
    // acting
    const actual = sut(3, 2);
    // asserting
    expect(actual).toBe(6);
  });
  it.each([
    [2, 3, 6],
    [20, 3, 60],
    [22, 3, 66],
    [4, 3, 12],
  ])('should return the product of %i and %i as %i', (a, b, expected) => {
    const actual = product(a, b);
    expect(actual).toEqual(expected);
  });
  it.each([
    { input: 'justINE', expected: 'justine' },
    { input: 'maRY', expected: 'mary' },
    { input: 'graySON', expected: 'grayson' },
  ])('$input to lowercase should be $expeted', ({ input, expected }) => {
    const actual = usernameLowerCase(input);
    expect(actual).toBe(expected);
  });

  describe('Authentication test suite', () => {
    it('return the lower case of a valid user', () => {
      const sut = authenticateUser;
      const actual = sut('deveLOPER', 'dev');
      expect(actual.usernameToLower).toBe('developer');
    });
    it('return the username character of a valid user', () => {
      const sut = authenticateUser;
      const actual = sut('deveLOPER', 'dev');
      expect(actual.usernameCharacters).toEqual([
        'd',
        'e',
        'v',
        'e',
        'L',
        'O',
        'P',
        'E',
        'R',
      ]);
    });
    it('return the username character of a valid user', () => {
      const sut = authenticateUser;
      const actual = sut('deveLOPER', 'dev');
      expect(actual.usernameCharacters).toEqual(
        expect.arrayContaining(['L', 'O', 'P', 'E', 'R', 'd', 'e', 'v', 'e'])
      );
    });
    it('return the username character of a valid user', () => {
      const sut = authenticateUser;
      const actual = sut('deveLOPER', 'dev');
      expect(actual.userDetails).toEqual({});
    });
    it('return the username character of a valid user', () => {
      const sut = authenticateUser;
      const actual = sut('deveLOPER', 'dev');
      expect(actual.userDetails).toBeDefined();
    });
    it('return the right boolean', () => {
      const sut = authenticateUser;
      const actual = sut('developer', 'dev');
      expect(actual.isAuthenticated).toBeTruthy();
    });
  });
  describe('usernameToLowercase test suite', () => {
    // setup
    let sut: UserNameToLowercase;
    beforeEach(() => {
      console.log('setup from here');
      sut = new UserNameToLowercase();
    });
    afterEach(() => {
      console.log('teardown from here');
    });
    it('returns the lower case of a valid username', () => {
      const actual = sut.toLower('todd');
      console.log('i am the main test');
      expect(actual).toBe('todd');
    });
    it('throws an error for an invalid username', () => {
      expect(() => sut.toLower('')).toThrow();
      expect(() => sut.toLower('')).toThrow('Invalid username sorry!');
    });
    it('throws an error for an invalid username', () => {
      function handlerError() {
        const actual = sut.toLower('');
      }
      expect(handlerError).toThrow();
    });
  });
});
