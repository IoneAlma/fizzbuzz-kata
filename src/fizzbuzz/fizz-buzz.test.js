const fizzBuzz = require('./fizz-buzz');

describe('Fizz-buzz.js', () => {
  it('should return same number if it is not divisible by 3 or 5', () => {
    expect(fizzBuzz(1)).toBe(1);
    expect(fizzBuzz(98)).toBe(98);
  });
  it('should not return 101, cause we just need numers 1 to 100', () => {
    expect(fizzBuzz(101)).toBe(null);
    expect(fizzBuzz(0)).toBe(null);
  });
  it('should return fizz if number is divisible by three', () => {
    expect(fizzBuzz(3)).toBe('FizzFizz');
    expect(fizzBuzz(21)).toBe('Fizz');
  });
  it('should return buzz if number is divisible by five', () => {
    expect(fizzBuzz(5)).toBe('BuzzBuzz');
    expect(fizzBuzz(65)).toBe('BuzzBuzz');
  });
  it('should return fizzbuzz if number is divisible by three and five at same time', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzzBuzz');
    expect(fizzBuzz(45)).toBe('FizzBuzzBuzz');
  });
  it('should return fizz if it is divisible by 3 or if it has a 3 in it', () => {
    expect(fizzBuzz(32)).toBe('Fizz');
    expect(fizzBuzz(30)).toBe('FizzFizzBuzz');
  });
  it('should return buzz if it is divisible by 5 or if it has a 5 in it', () => {
    expect(fizzBuzz(57)).toBe('FizzBuzz');
    expect(fizzBuzz(35)).toBe('FizzBuzzBuzz');
  });
});
