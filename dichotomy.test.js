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

describe('getElementIndexNative(number)', () => {
  const fibTest = new Fibonacci(9)
  jest.spyOn(console, 'log');

  test('should return message: !number', () => {
    expect(console.log.mock.calls.length).toBe(0);
    fibTest.getElementIndexNative();
    expect(console.log.mock.calls.length).toBe(1);
    expect(console.log.mock.calls[0][0]).toBe('Введите порядковый номер элемента последовательности...');
  });
  test('Returns the element in a sequence at the specified index', () => {
    expect(fibTest.getElementIndexNative(1)).toEqual(1);
    expect(fibTest.getElementIndexNative(2)).toEqual(1);
    expect(fibTest.getElementIndexNative(4)).toEqual(3);
    expect(fibTest.getElementIndexNative(6)).toEqual(8);
  })
});
