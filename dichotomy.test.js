const Fibonacci = require('./dichotomy');

describe('Fibonacci sequence', () => {
  let fib
  beforeEach(() => {
    fib = new Fibonacci(10)
  });
  test('getSequence method return an array', () => {
    expect(Array.isArray(fib.getSequence())).toBeTruthy();
  });
  test('Each subsequent number in the sequence[array] is equal to the sum of the previous two numbers', () => {
    const expected = [0, 1, 1, 2, 3, 5, 8]
    expect(fib.getSequence()).toEqual(expect.arrayContaining(expected));
  });
});

describe('getElementIndexNative()', () => {
  test('Returns the index of the specified element in a sequence | null', () => {
    const fibTest = new Fibonacci(9)
    expect(fibTest.getElement(2)).toEqual(3);
    expect(fibTest.getElement(13)).toEqual(7);
    expect(fibTest.getElement(6)).toBeNull();
  })
});
